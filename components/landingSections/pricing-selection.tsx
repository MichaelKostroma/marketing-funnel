"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS } from "@/lib/constants";
import { Lora } from "next/font/google";
import { PricingCard } from "@/components/landingSections/pricing-card";

const lora = Lora({ subsets: ["latin"] });

export function PricingSelection() {
  const [selectedPlan, setSelectedPlan] = useState<number>(2);

  const handleGetPlan = () => {
    const plan = PRICING_PLANS.find((p) => p.id === selectedPlan);
    console.log("Selected plan:", plan);
    // Handle plan selection logic here
  };

  return (
    <>
      <h2 className={`text-dark-blue mb-4 text-center text-2xl font-semibold ${lora.className}`}>
        Choose your plan
      </h2>
      <section className="mb-4 w-full space-y-2" aria-label="Pricing plans">
        {PRICING_PLANS.map((plan) => (
          <PricingCard
            key={plan.id}
            id={plan.id}
            name={plan.name}
            price={plan.price}
            popular={plan.popular}
            selected={selectedPlan === plan.id}
            onSelect={setSelectedPlan}
          />
        ))}
      </section>

      <Button
        onClick={handleGetPlan}
        className="mb-4 h-[56px] w-full rounded-[12px] bg-[#0062F5] text-lg font-semibold hover:bg-[#0062F5] disabled:bg-white disabled:text-[#A7A7A7] disabled:ring-2 disabled:ring-[#E4E7EB]"
      >
        Get my plan
      </Button>

      <p className="mb-12 text-center text-xs leading-relaxed text-gray-500">
        You are enrolling in a 3-monthly subscription to{" "}
        <a href="https://awesomeapp.com/subscription" target="_blank" className="text-black">
          https://awesomeapp.com/subscription
        </a>{" "}
        with the discount price $29.99.You agree that the plan you selected will automatically be
        extended at the full price for successive renewal periods and you will be charged $99.99
        every 3 months until you cancel the subscription. Payments will be charged from the card you
        specified here. You can cancel your subscription by contacting our customer support team via
        email at support@awesomeapp.com Subscription Policy. The charge will appear on your bill as
        &quot;awesomeapp&quot;
      </p>
    </>
  );
}
