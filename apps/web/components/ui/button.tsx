import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-oak text-neutral-950 hover:bg-oak-light",
    secondary:
      "border border-border bg-transparent text-foreground hover:bg-surface",
  };

  return (
    <button
      className={[
        "inline-flex items-center justify-center",
        "rounded-full px-6 py-3",
        "font-sans text-sm font-medium",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oak",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}