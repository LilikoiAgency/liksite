import Hero from "@/components/Hero";
import ReachSection from "@/components/ReachSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ReachSection />
      <section className="min-h-[60vh] bg-white px-6 py-24 text-purple-dark">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-light">Next Section Placeholder</h2>
          <p className="mt-4 text-base text-purple-dark/80">
            Scroll spacer to preview the Reach section animation in context.
          </p>
        </div>
      </section>
    </main>
  );
}
