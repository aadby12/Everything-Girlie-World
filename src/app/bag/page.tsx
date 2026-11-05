import { BagView } from "@/components/bag/bag-view";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Shopping Bag",
  description: "Review your girlie picks and order via WhatsApp with Everything Girlie World.",
};

export default function BagPage() {
  return (
    <div className="section-pad">
      <div className="container-wide">
        <SectionHeading
          as="h1"
          title="Your Girlie Picks."
          description="Review your selected pieces, then send an order message to Everything Girlie World on WhatsApp."
        />
        <div className="mt-10">
          <BagView />
        </div>
      </div>
    </div>
  );
}
