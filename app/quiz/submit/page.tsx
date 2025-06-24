import { Lora } from "next/font/google";
import { SubmitQuiz } from "@/components/submitQuiz/submitQuiz";
import { Separator } from "@/components/ui/separator";
import { ProgressIcon } from "@/icons/progressIcon";

const lora = Lora({ subsets: ["latin"] });

export default function VisualizationPage() {
  return (
    <section className="flex h-full flex-1 flex-col items-center justify-between gap-8">
      <div>
        <h2 className={`text-dark-blue mb-6 text-center text-2xl font-semibold ${lora.className}`}>
          See your Spiritual Growth progress by Sep 17, 2024
        </h2>
        <div>
          <div className="flex justify-end">
            <div className="w-fit rounded-md bg-[linear-gradient(235.69deg,_#FF4D78_0%,_#FF9600_100%)] px-3 py-2 text-center text-[14px] font-medium text-white">
              Sep 17 <br />
              2024
            </div>
          </div>
          <div className="relative my-3">
            <ProgressIcon className="absolute left-[20px] top-[-8px]" />
            <div className="flex flex-col gap-[46px]">
              <Separator className="bg-[#EBEBEB]" />
              <Separator className="bg-[#EBEBEB]" />
              <Separator className="bg-[#EBEBEB]" />
              <Separator className="bg-[#EBEBEB]" />
              <Separator className="bg-[#EBEBEB]" />
              <Separator className="bg-[#EBEBEB]" />
            </div>
          </div>
          <div className="w-fit rounded-md px-3 py-2 text-[14px] font-medium ring-1 ring-[#EBEBEB]">
            Now
          </div>
        </div>
      </div>

      <SubmitQuiz />
    </section>
  );
}
