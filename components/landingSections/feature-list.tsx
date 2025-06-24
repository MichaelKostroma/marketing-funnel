import { FEATURES } from "@/lib/constants";
import { Lora } from "next/font/google";
import React from "react";
import { CheckIcon } from "@/icons/checkIcon";

const lora = Lora({ subsets: ["latin"] });

export function FeatureList() {
  return (
    <section className="mb-12 ">
      <h2 className={`mb-3 text-center text-2xl font-semibold ${lora.className}`}>What you get</h2>

      <ul className="rounded-lg border border-[#DFE5EF] shadow-md">
        {FEATURES.map((feature, index) => (
          <li
            key={index}
            className={`flex items-start gap-4 px-6 py-3 pl-[28px] font-medium ${index !== FEATURES.length - 1 ? "border-b border-[#DFE5EF]" : ""}`}
          >
            <CheckIcon className="relative top-[4px] flex-shrink-0" />

            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
