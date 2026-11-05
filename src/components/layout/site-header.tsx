"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useBag } from "@/components/bag/bag-provider";
import { Logo } from "@/components/brand/logo";
import { BagIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { SearchDialog } from "@/components/layout/search-dialog";
import { categories } from "@/lib/categories";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop All" },
  ...categories.map((category) => ({ href: category.href, label: category.navLabel })),
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useBag();
  const isClient = useIsClient();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-paper">
        <div className="container-wide flex items-center justify-center py-2 text-center text-[0.68rem] tracking-[0.16em] uppercase">
          Your next favourite outfit might be here.
        </div>
      </div>
      <div
        className={`border-b border-ink/10 bg-paper/95 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-[0_10px_30px_rgba(18,18,20,0.06)]" : ""
        }`}
      >
        <div className="container-wide flex h-[4.35rem] items-center justify-between gap-4">
          <Logo compact />
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.72rem] tracking-[0.14em] uppercase transition-colors hover:text-rose ${
                  isActive(pathname, item.href) ? "text-rose" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="grid h-11 w-11 place-items-center"
              aria-label="Search products"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link href="/bag" className="relative grid h-11 w-11 place-items-center" aria-label="Shopping bag">
              <BagIcon className="h-5 w-5" />
              {isClient && count > 0 ? (
                <span className="absolute top-1.5 right-1.5 grid h-4 min-w-4 place-items-center bg-rose px-1 text-[0.6rem] font-semibold text-white">
                  {count}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-x-0 top-[calc(2.05rem+4.35rem)] bottom-0 z-40 overflow-y-auto bg-paper xl:hidden">
          <nav className="container-wide flex flex-col gap-1 py-8" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-ink/10 py-4 text-lg tracking-[0.04em] ${
                  isActive(pathname, item.href) ? "text-rose" : "text-ink"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shopping-information"
              className="border-b border-ink/10 py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Shopping Information
            </Link>
          </nav>
        </div>
      ) : null}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
