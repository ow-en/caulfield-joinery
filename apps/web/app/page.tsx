import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
    Button,
    Heading,
    Section,
    Text,
} from "@/components/ui";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="flex min-h-screen items-center">
        <Container>
          <Section className="max-w-4xl">
            <Eyebrow>Caulfield Joinery · California</Eyebrow>

            <Heading className="mt-6 font-display text-6xl leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-9xl">
              Furniture
              <br />
              built to last
              <br />
              generations.
            </Heading>

            <Text className="mt-8 max-w-xl text-lg leading-8 text-muted">
              Handcrafted furniture made from exceptional hardwoods, combining
              traditional joinery with modern design.
            </Text>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>View our work</Button>

              <Button variant="secondary">
                Start a commission
              </Button>
            </div>
          </Section>
        </Container>
      </section>
    </main>
  );
}