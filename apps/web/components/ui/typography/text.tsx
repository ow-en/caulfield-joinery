import { cn } from "@/lib/cn";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "text-lg leading-8 text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}