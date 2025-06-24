"use client";
import clsx from "clsx";

interface PricingCardProps {
  id: number;
  name: string;
  price: number;
  popular?: boolean;
  selected?: boolean;
  onSelect?: (id: number) => void;
}

export function PricingCard({
  id,
  name,
  price,
  popular = false,
  selected = false,
  onSelect,
}: PricingCardProps) {
  return (
    <div>
      <label
        className={clsx("relative block cursor-pointer rounded-lg p-2.5 transition-colors", {
          "border-2 border-[#0062F5] bg-white": selected,
          "border-[#F1F5FB] bg-[#F1F5FB] ": !selected,
          "pt-7": popular,
        })}
      >
        {popular && (
          <p
            className={clsx(
              "absolute -top-1 left-1/2 z-10 w-full -translate-x-1/2 transform rounded-tl-lg rounded-tr-lg py-1 text-center text-xs font-bold text-white ",
              {
                "bg-[#0062F5]": selected,
                "bg-dark-blue": !selected,
              }
            )}
          >
            MOST POPULAR
          </p>
        )}
        <input
          type="radio"
          name="pricing-plan"
          value={id}
          checked={selected}
          onChange={() => onSelect?.(id)}
          className="sr-only"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={clsx("flex h-5 w-5 items-center justify-center rounded-full border-2", {
                "border-[#0062F5] bg-[#0062F5]": selected,
                "border-gray-300": !selected,
              })}
            >
              {selected && <div className="h-2 w-2 rounded-full bg-white"></div>}
            </div>
            <span className="text-dark-blue text-lg font-bold">{name}</span>
          </div>

          <div className="text-dark-blue  rounded-sm bg-[#E1E9F4] px-3 py-2">
            <div className="flex items-start gap-1">
              <span className="relative top-[1px] font-bold">$</span>
              <span className="text-5xl font-extrabold">{price}</span>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}
