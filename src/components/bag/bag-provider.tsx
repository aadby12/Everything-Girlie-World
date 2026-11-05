"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { BagItem } from "@/lib/types";

const STORAGE_KEY = "egw-shopping-bag";
const EMPTY: BagItem[] = [];

let memory: BagItem[] = EMPTY;
const listeners = new Set<() => void>();

function readStorage(): BagItem[] {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as BagItem[];
    return Array.isArray(parsed) ? parsed : EMPTY;
  } catch {
    return EMPTY;
  }
}

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  queueMicrotask(() => {
    if (memory === EMPTY) {
      const stored = readStorage();
      if (stored.length > 0) {
        memory = stored;
        emit();
      }
    }
  });
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return memory;
}

function getServerSnapshot() {
  return EMPTY;
}

function writeItems(next: BagItem[]) {
  memory = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  emit();
}

function sameLine(a: BagItem, b: Pick<BagItem, "slug" | "size" | "colour">) {
  return a.slug === b.slug && (a.size || "") === (b.size || "") && (a.colour || "") === (b.colour || "");
}

type BagContextValue = {
  items: BagItem[];
  count: number;
  hydrated: boolean;
  addItem: (item: BagItem) => void;
  removeItem: (slug: string, size?: string, colour?: string) => void;
  updateQuantity: (slug: string, quantity: number, size?: string, colour?: string) => void;
  clear: () => void;
};

const BagContext = createContext<BagContextValue | null>(null);

export function BagProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addItem = useCallback((item: BagItem) => {
    const current = memory === EMPTY ? readStorage() : memory;
    const existing = current.find((entry) => sameLine(entry, item));
    const next = existing
      ? current.map((entry) =>
          sameLine(entry, item)
            ? { ...entry, quantity: entry.quantity + item.quantity }
            : entry,
        )
      : [...current, item];
    writeItems(next);
  }, []);

  const removeItem = useCallback((slug: string, size?: string, colour?: string) => {
    const current = memory === EMPTY ? readStorage() : memory;
    writeItems(current.filter((entry) => !sameLine(entry, { slug, size, colour })));
  }, []);

  const updateQuantity = useCallback(
    (slug: string, quantity: number, size?: string, colour?: string) => {
      if (quantity < 1) {
        removeItem(slug, size, colour);
        return;
      }
      const current = memory === EMPTY ? readStorage() : memory;
      writeItems(
        current.map((entry) =>
          sameLine(entry, { slug, size, colour }) ? { ...entry, quantity } : entry,
        ),
      );
    },
    [removeItem],
  );

  const clear = useCallback(() => writeItems([]), []);

  const value = useMemo<BagContextValue>(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      hydrated: true,
      addItem,
      removeItem,
      updateQuantity,
      clear,
    }),
    [items, addItem, removeItem, updateQuantity, clear],
  );

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) throw new Error("useBag must be used within BagProvider");
  return context;
}
