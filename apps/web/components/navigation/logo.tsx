import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-display text-3xl tracking-tight"
    >
      Caulfield
      <span className="ml-2 text-oak">
        Joinery
      </span>
    </Link>
  );
}