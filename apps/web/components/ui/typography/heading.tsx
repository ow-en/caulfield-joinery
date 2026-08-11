import { cn } from "@/lib/cn";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-display text-5xl tracking-tight text-foreground",
        className
      )}
    >
      {children}
    </h2>
  );
}