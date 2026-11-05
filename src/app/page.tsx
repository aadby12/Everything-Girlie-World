import { BrandPersonality } from "@/components/home/brand-personality";
import { CategoryDiscovery } from "@/components/home/category-discovery";
import { EditorialFeature } from "@/components/home/editorial-feature";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FinalCta } from "@/components/home/final-cta";
import { FreshFinds } from "@/components/home/fresh-finds";
import { HomeHero } from "@/components/home/hero";
import { InstagramSection } from "@/components/home/instagram-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CategoryDiscovery />
      <FeaturedProducts />
      <EditorialFeature />
      <FreshFinds />
      <BrandPersonality />
      <InstagramSection />
      <FinalCta />
    </>
  );
}
