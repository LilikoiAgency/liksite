"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const socialPlatforms = [
  "Facebook",
  "Instagram",
  "YouTube",
  "TikTok",
  "Meta Audience Network",
  "Platform-agnostic scaling",
];

const audienceLayers = [
  "Retargeting homeowners who visited your website",
  "Retargeting viewers who previously saw your streaming ads",
  "Lookalike audiences based on your existing customers",
  "Data-driven targeting of homeowners currently in market for your services",
];

const creativeFormats = [
  "Short-form video ads",
  "Testimonials",
  "Project photos",
  "Educational content",
  "Offer-driven ads",
];

const optimizationPoints = [
  "Continuous creative testing",
  "Shifting budget toward top-performing campaigns",
  "Eliminating underperforming ads",
  "Refining audience targeting as new data becomes available",
];

const decisionMoments = [
  "They research.",
  "They compare companies.",
  "They ask neighbors and friends.",
  "They keep seeing brands along the way.",
];

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function PaidSocialPageExperience() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.65,
  });

  const heroScale = useTransform(progress, [0, 1], [1, 0.93]);
  const heroOpacity = useTransform(progress, [0, 1], [1, 0.42]);
  const glowY = useTransform(progress, [0, 1], ["0%", "22%"]);

  return (
    <main className="bg-[#f6efe8] text-[#1d1825]">
      <section
        ref={heroRef}
        data-nav-theme="dark"
        className="relative overflow-hidden bg-[#090a10] px-6 pb-18 pt-30 text-white md:px-10 md:pb-24 md:pt-38"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, y: glowY }}
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(179,95,123,0.34),transparent_22%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_82%_28%,rgba(244,199,161,0.16),transparent_18%),linear-gradient(180deg,#090a10_0%,#17111a_55%,#24192b_100%)]" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/50">
              Paid Social
            </p>
            <h1 className="mt-6 text-5xl font-light leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-[6.4rem]">
              Stay visible
              <br />
              while homeowners
              <br />
              decide.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg font-light leading-8 text-white/72 md:text-xl">
              While targeted streaming introduces the brand and paid search captures
              demand, paid social reinforces trust by keeping your company visible while
              homeowners research their options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-16 max-w-6xl"
          >
            <div className="rounded-[2.6rem] border border-white/12 bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-[linear-gradient(160deg,#17111a_0%,#311c2d_56%,#6b3850_100%)] px-6 py-8 md:px-10 md:py-12">
                <div
                  className="absolute inset-0 opacity-25"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "100px 100px",
                  }}
                />

                <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-pink-100/58">
                      Reinforcement
                    </p>
                    <p className="mt-5 text-2xl font-light leading-10 tracking-[-0.03em] text-white md:text-3xl">
                      Major home improvement decisions rarely happen overnight.
                    </p>
                    <div className="mt-6 grid gap-3">
                      {decisionMoments.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.18 + index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-base text-white/76"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-white/12 bg-black/18 p-5 backdrop-blur-sm">
                    <div className="grid gap-3">
                      {[
                        { label: "Seen on social", tone: "bg-pink-300/18 border-pink-200/20" },
                        { label: "Seen again during research", tone: "bg-violet-300/14 border-violet-200/18" },
                        { label: "Brand starts to feel familiar", tone: "bg-amber-300/14 border-amber-200/18" },
                        { label: "Brand feels like the obvious choice", tone: "bg-emerald-300/14 border-emerald-200/18" },
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.26 + index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`rounded-[1.35rem] border px-4 py-4 ${item.tone}`}
                        >
                          <p className="text-sm uppercase tracking-[0.24em] text-white/52">
                            Familiarity loop
                          </p>
                          <p className="mt-2 text-lg font-light tracking-[-0.02em] text-white">
                            {item.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {socialPlatforms.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/62"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section data-nav-theme="light" className="bg-white px-6 py-24 md:px-10 md:py-30">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              Platform-agnostic, performance-driven
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              The goal is not to favor one platform. The goal is to find what works and scale it.
            </h2>
          </Reveal>

          <div className="space-y-5">
            {[
              "Campaigns can launch across all major social platforms instead of committing to a single network too early.",
              "Performance data shows which audiences, messages, and placements are actually producing results.",
              "From there, budget shifts toward the campaigns and platforms generating the most impact.",
              "That gives Lilikoi the flexibility to refine quickly and keep investment focused where it matters.",
            ].map((copy, index) => (
              <Reveal key={copy} delay={index * 0.05}>
                <div className="rounded-[2rem] bg-[#f6efe8] px-7 py-8">
                  <div className="text-sm uppercase tracking-[0.24em] text-[#1d1825]/34">
                    0{index + 1}
                  </div>
                  <p className="mt-4 text-2xl font-light leading-9 tracking-[-0.03em] text-[#1d1825]">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#100d14_0%,#1f1422_100%)] px-6 py-24 text-white md:px-10 md:py-30"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(179,95,123,0.34), transparent 20%), radial-gradient(circle at 80% 18%, rgba(244,199,161,0.14), transparent 18%), radial-gradient(circle at 52% 82%, rgba(255,255,255,0.06), transparent 22%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-white/42">
              Target the right homeowners
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Keep the message in front of the people most likely to convert.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {audienceLayers.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                  <div className="text-sm uppercase tracking-[0.24em] text-white/42">
                    Audience layer 0{index + 1}
                  </div>
                  <p className="mt-4 text-2xl font-light leading-9 tracking-[-0.03em] text-white/80">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 py-24 md:px-10 md:py-30">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              Creative that evolves over time
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Paid social wins because it can test, learn, and adapt fast.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#1d1825]/72">
              Campaigns may begin with multiple formats and messages. Then performance
              data tells the team what deserves more investment and what should be
              replaced.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2.4rem] bg-white p-7 shadow-[0_24px_70px_rgba(29,24,37,0.08)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {creativeFormats.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`rounded-[1.4rem] px-5 py-5 text-lg font-light tracking-[-0.02em] ${
                      index % 2 === 0
                        ? "bg-[#f6efe8] text-[#1d1825]"
                        : "bg-[#2b1d2b] text-white"
                    }`}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-base leading-7 text-[#1d1825]/72">
                The best-performing creative today may not be the best-performing
                creative six months from now, which is why new ideas continue to be
                tested while winning ads are scaled.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="light" className="bg-white px-6 py-24 md:px-10 md:py-30">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              No creatives? No problem.
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              The goal is not simply to create ads. The goal is to create ads that work.
            </h2>
          </Reveal>

          <div className="grid gap-5">
            {[
              "Many contractors do not have a polished creative library ready to launch. Lilikoi can produce what the campaign needs.",
              "The team brings decades of creative and production experience across television, streaming, digital advertising, and social media.",
              "Designers, editors, and strategists can create short-form video ads and visual campaigns built specifically for social platforms.",
              "Just like the media itself, the creative is constantly tested and refined over time.",
            ].map((copy, index) => (
              <Reveal key={copy} delay={index * 0.05}>
                <div className="rounded-[2rem] border border-[#1d1825]/8 bg-[#f6efe8] px-7 py-8">
                  <div className="text-sm uppercase tracking-[0.24em] text-[#1d1825]/34">
                    Creative support 0{index + 1}
                  </div>
                  <p className="mt-4 text-2xl font-light leading-9 tracking-[-0.03em] text-[#1d1825]">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#0d0d12_0%,#17131d_100%)] px-6 py-24 text-white md:px-10 md:py-30"
      >
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.34em] text-white/42">
              Building familiarity before the sales appointment
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              By the time the sales rep arrives, the brand should not feel new.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Paid social helps during the research window, when homeowners are
              comparing options and deciding which company feels right.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md">
              <div className="grid gap-4">
                {[
                  "Seen the brand multiple times online",
                  "Recognizes the company before the appointment",
                  "Feels more comfortable at the start of the conversation",
                  "More trust before the pitch even begins",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[1.35rem] border border-white/10 bg-black/12 px-5 py-5 text-lg font-light tracking-[-0.02em] text-white/78"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 py-24 md:px-10 md:py-30">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              The cost of not reinforcing your brand
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              If the brand appears once and disappears, someone else fills the space.
            </h2>
          </Reveal>

          <div className="space-y-5">
            {[
              "Every homeowner researching a project is exposed to multiple contractors, reviews, websites, and competing ads.",
              "If your brand disappears after the first touch, other companies stay visible while the decision is being made.",
              "Contractors who consistently reinforce their brand across social platforms remain part of the conversation.",
              "Over time, repeated exposure builds trust and the most familiar brand often becomes the one the homeowner contacts.",
            ].map((copy, index) => (
              <Reveal key={copy} delay={index * 0.05}>
                <div className="rounded-[2rem] bg-white px-7 py-8 shadow-[0_20px_55px_rgba(29,24,37,0.07)]">
                  <div className="text-sm uppercase tracking-[0.24em] text-[#1d1825]/34">
                    0{index + 1}
                  </div>
                  <p className="mt-4 text-2xl font-light leading-9 tracking-[-0.03em] text-[#1d1825]">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="bg-white px-6 py-24 md:px-10 md:py-30">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[2.4rem] bg-[#2a1c29] px-8 py-9 text-white shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <p className="text-xs uppercase tracking-[0.34em] text-white/42">
                Continuous testing and optimization
              </p>
              <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-5xl">
                Invest more heavily in the ads producing the strongest results.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                Successful paid social campaigns require constant refinement across both
                creative and targeting as the market responds.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {optimizationPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[1.8rem] bg-[#f6efe8] px-6 py-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#1d1825]/34">
                    Optimization 0{index + 1}
                  </p>
                  <p className="mt-3 text-2xl font-light tracking-[-0.03em] text-[#1d1825]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 pb-24 pt-4 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-[2.8rem] bg-[linear-gradient(135deg,#141018_0%,#251925_45%,#6b3850_78%,#f4c7a1_100%)] px-8 py-12 text-white shadow-[0_36px_120px_rgba(29,24,37,0.2)] md:px-12 md:py-16">
              <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-white/44">
                    Ready to strengthen your brand in your market?
                  </p>
                  <h2 className="mt-4 max-w-4xl text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
                    Stay visible while homeowners decide, and become the brand they trust before they buy.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                    Lilikoi intentionally limits the client roster so campaigns can be
                    managed with real focus. If paid social could strengthen your
                    marketing system, the next step is seeing whether there is a fit.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-end">
                  <a
                    href="/contact"
                    className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#151826] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Schedule Strategy Call
                  </a>
                  <a
                    href="/services/targeted-streaming"
                    className="inline-flex rounded-full border border-white/18 bg-white/[0.08] px-7 py-3 text-sm font-light uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/[0.14]"
                  >
                    Explore Streaming
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
