import { ProgressCircle } from "@/components/ui/progress-circle";
import { PROGRESS_ITEMS, ROUTES } from "@/lib/constants";
import { AutoRedirectClient } from "@/components/clientRedirect/auto-redirect-client";

import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className={`text-dark-blue mb-6 text-center text-2xl font-semibold ${lora.className}`}>
          We are crafting <br /> your spiritual growth plan
        </h2>

        <div className="mb-6" role="img" aria-label="87% progress completed">
          <ProgressCircle percentage={87} />
        </div>

        <ul className="rounded-lg border border-[#DFE5EF]">
          {PROGRESS_ITEMS.map((item, index) => (
            <li
              key={item.id}
              className={`p-3 pl-[48px] font-medium ${index !== PROGRESS_ITEMS.length - 1 ? "border-b border-[#DFE5EF]" : ""}`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      <AutoRedirectClient route={ROUTES.QUIZ_CONTACT} />
    </>
  );
}
