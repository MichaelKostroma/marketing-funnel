import { StarIcon } from "@/icons/starIcon";
import { TESTIMONIALS } from "@/lib/constants";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export function TestimonialsSection() {
  return (
    <section className="mb-12 ">
      <h2 className={`mb-3 text-center text-2xl font-semibold ${lora.className}`}>
        Users love App!
      </h2>

      <div className="space-y-3">
        {TESTIMONIALS.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-lg p-3 shadow-md ring-1 ring-[#00000014]"
          >
            <div className="mb-2">
              <div className="flex items-center justify-between space-x-2 ">
                <span className="text-sm font-bold">{testimonial.name}</span>
                <div className="flex" role="img" aria-label={`${testimonial.rating} stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-3 w-3 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>
              </div>
              <span className="relative bottom-[3px] text-xs text-[#0000007A]">
                {testimonial.date}
              </span>
            </div>

            <p className="text-sm">{testimonial.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
