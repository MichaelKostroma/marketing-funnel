interface BurgerIconProps {
  className?: string;
  filled?: boolean;
}

export const BurgerIcon = ({ className = "", filled = true }: BurgerIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? 0 : 2}
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447716 0 1 0H17C17.5523 0 18 0.447715 18 1ZM18 6C18 6.55228 17.5523 7 17 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447716 5 1 5H17C17.5523 5 18 5.44772 18 6ZM18 11C18 11.5523 17.5523 12 17 12H1C0.447715 12 0 11.5523 0 11C0 10.4477 0.447716 10 1 10H17C17.5523 10 18 10.4477 18 11Z"
        fill="#222B38"
      />
    </svg>
  );
};
