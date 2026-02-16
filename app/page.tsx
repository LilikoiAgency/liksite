import Hero from "@/components/Hero";
import ReachSection from "@/components/ReachSection";
import AudienceSection from "@/components/AudienceSection";
import DiscoverScrollSection from "@/components/DiscoverScrollSection";
import ServicesSnapSection from "@/components/ServicesSnapSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ReachSection />
      <AudienceSection />
      <DiscoverScrollSection />
      <ServicesSnapSection />
      <section className="snap-start min-h-[80vh] bg-sand px-6 py-24 text-purple-dark">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light">Next Section Placeholder</h2>
          <p className="mt-4 text-base text-purple-dark/80">
            Spacer section for testing snap and scroll behavior.
          </p>
        </div>
      </section>
    </main>
  );
}
