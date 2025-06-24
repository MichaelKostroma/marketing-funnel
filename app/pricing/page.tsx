"use client";

import { PricingSelection } from "@/components/landingSections/pricing-selection";

import { FeatureList } from "@/components/landingSections/feature-list";
import { StatisticsSection } from "@/components/landingSections/statistics-section";
import { TestimonialsSection } from "@/components/landingSections/testimonials-section";

export default function PricingPage() {
  return (
    <section className="flex h-full flex-1 flex-col items-center justify-center">
      <PricingSelection />
      <FeatureList />
      <StatisticsSection />
      <TestimonialsSection />
      <PricingSelection />
    </section>
  );
}
