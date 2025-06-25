"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowIcon } from "@/icons/arrowIcon";
import { BurgerIcon } from "@/icons/burgerIcon";
import { Lora } from "next/font/google";
import { ROUTES } from "@/lib/constants";

const lora = Lora({ subsets: ["latin"] });

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const enableBackButton = pathname !== "/";

  const handleBackClick = () => {
    switch (pathname) {
      case ROUTES.PRICING:
        return router.push(ROUTES.QUIZ_CONTACT);
      case ROUTES.QUIZ_CONTACT:
        return router.push(ROUTES.HOME);
      default:
        return router.back();
    }
  };

  return (
    <header
      className={`my-4 mb-6 flex items-center justify-between bg-white px-4 ${lora.className}`}
    >
      <Button
        onClick={handleBackClick}
        variant="ghost"
        aria-label="Go back"
        disabled={!enableBackButton}
      >
        <ArrowIcon />
      </Button>

      <h1 className="text-dark-blue text-lg font-bold">App</h1>

      <Button variant="ghost" aria-label="Open menu">
        <BurgerIcon />
      </Button>
    </header>
  );
}
