import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border",
        "border-border-subtle",
        "bg-surface",
        "p-8",
        "transition",
        "hover:border-border",
        className
      )}
    >
      {children}
    </div>
  );
}