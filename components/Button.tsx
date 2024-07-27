import { variants, sizes } from "@/lib/variants";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
}

export default function Button({
  variant,
  size,
  className,
  children,
  onClick,
  disabled,
  type,
}: ButtonProps): JSX.Element {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${variant ? variants[variant] : variants["default"]} ${
        size ? sizes[size] : sizes["base"]
      } ${className}`}
    >
      {children}
    </button>
  );
}
