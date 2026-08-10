import Link from "next/link";

import { navigation } from "./nav-links";
import { Logo } from "./logo";

import { Button } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-muted transition-colors duration-200 hover:text-oak"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">

          <button
            className="lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

          <Button>
            Start a Project
          </Button>

        </div>

      </div>
    </header>
  );
}