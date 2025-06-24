interface CheckIconProps {
  className?: string;
  filled?: boolean;
}

export const CheckIcon = ({ className = "", filled = true }: CheckIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? 0 : 2}
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7072 2.20712L5.50008 11.4142L0.292969 6.20712L1.70718 4.79291L5.50008 8.5858L13.293 0.792908L14.7072 2.20712Z"
        fill="#19B272"
      />
    </svg>
  );
};
