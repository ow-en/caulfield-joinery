import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Grid({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "grid gap-8",
        "md:grid-cols-2",
        "xl:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}