import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/navigation/header";

interface Props {
  children: React.ReactNode;
}

export function SiteShell({
  children,
}: Props) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}