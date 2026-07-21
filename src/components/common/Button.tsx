import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-all duration-300";

  const primary =
    "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:scale-105 shadow-xl shadow-cyan-500/20";

  const secondary =
    "border border-white/15 bg-white/5 text-white hover:border-cyan-400 hover:bg-white/10";

  return (
    <button
      className={`${base} ${
        variant === "primary" ? primary : secondary
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}