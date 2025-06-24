import { FEATURES, STATISTICS } from "@/lib/constants";
import { Lora } from "next/font/google";
import React from "react";

const lora = Lora({ subsets: ["latin"] });

export function StatisticsSection() {
  return (
    <section className="mb-12">
      <h2 className={`text-dark-blue mb-3 text-center text-2xl font-semibold ${lora.className}`}>
        People just like you achieved great results with App!
      </h2>

      <ul className="rounded-lg border border-[#DFE5EF] shadow-md">
        {STATISTICS.map((stat, index) => (
          <li
            key={index}
            className={`flex items-start gap-3 p-3 pl-5 font-semibold ${index !== FEATURES.length - 1 ? "border-b border-[#DFE5EF]" : ""}`}
          >
            <span className={`${lora.className} text-[32px] `}>{stat.percentage}%</span>
            <span className="text-sm">{stat.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
