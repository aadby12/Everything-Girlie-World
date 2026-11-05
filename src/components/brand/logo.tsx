import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ inverted = false, compact = false }: LogoProps) {
  const text = inverted ? "text-paper" : "text-ink";
  const mark = inverted ? "bg-rose text-paper" : "bg-ink text-paper";

  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${text}`} aria-label="Everything Girlie World home">
      <span
        className={`grid h-9 w-9 place-items-center rounded-full text-[0.65rem] font-bold tracking-[0.12em] ${mark}`}
        aria-hidden
      >
        EGW
      </span>
      <span className={compact ? "hidden sm:block" : "block"}>
        <span className="block font-display text-[1.15rem] leading-none tracking-[0.04em] sm:text-[1.35rem]">
          Everything Girlie World
        </span>
        <span className={`mt-1 block text-[0.62rem] tracking-[0.22em] uppercase ${inverted ? "text-paper/55" : "text-muted"}`}>
          A Girl&apos;s Needs
        </span>
      </span>
    </Link>
  );
}
