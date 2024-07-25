import { variants, sizes } from "@/lib/variants";

interface ButtonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = "default",
  size = "base",
  className = "",
  children,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
