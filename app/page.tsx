import Hero from "@/components/Hero";
import ReachSection from "@/components/ReachSection";
import AudienceSection from "@/components/AudienceSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ReachSection />
      <AudienceSection />
      <section className="min-h-[70vh] bg-[#fffdd0] px-6 py-24 text-purple-dark">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light">Next Section Placeholder</h2>
          <p className="mt-4 text-base text-purple-dark/80">
            Scroll spacer to preview the audience tabs animation in context.
          </p>
        </div>
      </section>
    </main>
  );
}
