type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading className={`font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.02em] ${eyebrow ? "mt-3" : ""}`}>
        {title}
      </Heading>
      {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-[1.05rem]">{description}</p> : null}
    </div>
  );
}
