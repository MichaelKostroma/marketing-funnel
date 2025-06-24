"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import type React from "react";

export function SubmitQuiz() {
  const router = useRouter();

  const handleContinue = async () => {
    const email = localStorage.getItem("userEmail");

    // Check if email is undefined or null
    if (!email) {
      console.error("Email is required but not provided");
      router.push(ROUTES.QUIZ_CONTACT);
      return;
    }

    try {
      const response = await fetch("/api/quiz-results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        localStorage.removeItem("userEmail");
        router.push(ROUTES.PRICING);
      }
    } catch (error) {
      console.error("Error submitting quiz results:", error);
      router.push(ROUTES.QUIZ_CONTACT);
    }
  };

  return (
    <Button
      onClick={handleContinue}
      className="h-[56px] w-full rounded-[12px] bg-[#0062F5] text-lg font-semibold hover:bg-[#0062F5] disabled:bg-white disabled:text-[#A7A7A7] disabled:ring-2 disabled:ring-[#E4E7EB]"
    >
      Continue
    </Button>
  );
}
