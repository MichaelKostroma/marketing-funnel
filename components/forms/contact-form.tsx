"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

interface FormErrors {
  email?: string;
}

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    return undefined;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    setErrors({});

    try {
      localStorage.setItem("userEmail", email.trim());
      router.push(ROUTES.QUIZ_SUBMIT);
    } catch (error) {
      console.error("Error saving email:", error);
      setErrors({ email: "Something went wrong. Please try again." });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-1 flex-col justify-between">
      <div className="relative">
        <label
          htmlFor="email"
          className="absolute left-[12px] top-[10px] text-xs font-semibold text-[#0062F5]"
        >
          Email
        </label>

        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={`focus:ring-dark-blue w-full rounded-md border-0 bg-gray-50 px-[12px] pb-[11px] pt-[25px] text-base outline-none transition-colors focus:bg-white focus:ring-2 ${
            errors.email && "bg-white ring-2 ring-[#FF0000]"
          }`}
          placeholder=""
          aria-describedby={errors.email ? "email-error" : undefined}
        />

        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-[#FF0000]" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={!email.trim()}
        className="h-[56px] w-full rounded-[12px] bg-[#0062F5] text-lg font-semibold hover:bg-[#0062F5] disabled:bg-white disabled:text-[#A7A7A7] disabled:ring-2 disabled:ring-[#E4E7EB]"
      >
        Continue
      </Button>
    </form>
  );
}
