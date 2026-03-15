import Hero from "@/components/Hero";
import ReachSection from "@/components/ReachSection";
import AudienceSection from "@/components/AudienceSection";
import DiscoverScrollSection from "@/components/DiscoverScrollSection";
import ServicesSnapSection from "@/components/ServicesSnapSection";
import TheBlueprintSection from "@/components/TheBlueprintSection";
import VideoGridSection from "@/components/VideoGridSection";
import BrandsWeWorkWithSection from "@/components/BrandsWeWorkWithSection";

export default function Home() {
  return (
    <main className="bg-sand">
      <div data-nav-theme="dark">
        <Hero />
      </div>
      <div data-nav-theme="dark">
        <ReachSection />
      </div>
      <div data-nav-theme="dark">
        <AudienceSection />
      </div>
      <div data-nav-theme="light">
        <DiscoverScrollSection />
      </div>
      <div data-nav-theme="light">
        <ServicesSnapSection />
      </div>
      <div data-nav-theme="light">
        <TheBlueprintSection />
      </div>
      <div data-nav-theme="light">
        <VideoGridSection />
      </div>
      <div data-nav-theme="light">
        <BrandsWeWorkWithSection />
      </div>
      <section data-nav-theme="light" className="bg-sand px-6 py-24 text-purple-dark">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-purple-dark/15 bg-white/45 p-10 text-center backdrop-blur-sm">
          <h2 className="text-3xl font-semibold md:text-4xl">Next Section Placeholder</h2>
          <p className="mt-4 text-base text-purple-dark/80 md:text-lg">
            Extra section for continued scroll testing.
          </p>
        </div>
      </section>
    </main>
  );
}
