import { Lora } from "next/font/google";
import { ContactForm } from "@/components/forms/contact-form";

const lora = Lora({ subsets: ["latin"] });

export default function ContactInfoPage() {
  return (
    <section className="flex flex-1 flex-col">
      <h2 className={`text-dark-blue mb-6 text-center text-2xl font-semibold ${lora.className}`}>
        Enter your email to get <br />
        your personalised <br /> Spiritual Growth Plan
      </h2>

      <ContactForm />
    </section>
  );
}
