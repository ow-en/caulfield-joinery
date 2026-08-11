import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full",
        "bg-oak/10",
        "px-3",
        "py-1",
        "text-xs",
        "uppercase",
        "tracking-[0.18em]",
        "text-oak"
      )}
    >
      {children}
    </span>
  );
}