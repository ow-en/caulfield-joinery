import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:justify-between">

        <div>

          <h2 className="font-display text-4xl">
            Caulfield Joinery
          </h2>

          <p className="mt-4 max-w-sm text-muted">
            Handmade furniture built to last generations.
          </p>

        </div>

        <div className="space-y-2">

          <Link href="/portfolio">
            Portfolio
          </Link>

          <br />

          <Link href="/shop">
            Shop
          </Link>

          <br />

          <Link href="/commission">
            Commission
          </Link>

        </div>

      </div>
    </footer>
  );
}