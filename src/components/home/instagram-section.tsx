import Image from "next/image";
import { InstagramIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { business } from "@/lib/business";

const frames = [
  "/images/instagram-1.jpg",
  "/images/instagram-2.jpg",
  "/images/instagram-3.jpg",
  "/images/instagram-4.jpg",
];

export function InstagramSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Stay in Your Girlie World."
            description="Follow us on Instagram for more outfit inspiration, new finds, and fashion updates."
          />
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary shrink-0"
          >
            <InstagramIcon className="h-4 w-4" />
            @{business.instagramHandle}
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {frames.map((src) => (
            <a
              key={src}
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="image-zoom relative aspect-square overflow-hidden bg-blush"
            >
              <Image src={src} alt="Fashion inspiration frame" fill className="object-cover" sizes="25vw" />
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Visual frames shown here are curated fashion photography for this website demo. Visit
          Instagram for the boutique&apos;s own posts and updates.
        </p>
      </div>
    </section>
  );
}
