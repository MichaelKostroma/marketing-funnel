import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function ProgressCircle({
  percentage,
  size = 178,
  strokeWidth = 12,
  className = "",
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${(percentage / 120) * circumference} ${circumference}`;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        className="-rotate-90 transform"
        width={size}
        height={size}
        aria-label={`Progress: ${percentage}%`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#10b981"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-[40px] font-semibold ${lora.className}`} aria-hidden="true">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
