interface EyebrowProps {
  children: React.ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-oak">
      {children}
    </p>
  );
}