"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const platformLogos = [
  "Netflix",
  "Hulu",
  "Disney+",
  "Paramount+",
  "YouTube TV",
  "Spotify",
  "iHeart",
  "Podcasts",
];

const targetingModes = [
  "Specific homeowners",
  "Individual addresses or email lists",
  "Neighborhoods and ZIP codes",
  "Entire service areas",
  "Highly refined homeowner segments",
];

const processSteps = [
  "Customer Profile",
  "Precision Targeting",
  "Commercial Production",
  "Campaign Launch",
  "Optimization",
];

const processDescriptions = [
  "We start by understanding your market, best customers, where they live, and what types of homes they own.",
  "Advanced data is used to reach homeowners most likely to become your next customers.",
  "If you do not already have an ad, Lilikoi produces one using modern AI tools and decades of production experience.",
  "Your commercials are distributed across the major streaming platforms homeowners already watch every day.",
  "Performance is refined continuously to improve lead quality, efficiency, and consistency.",
];

const processCardClasses = [
  "lg:col-span-2 lg:min-h-[18rem]",
  "lg:col-span-3 lg:min-h-[18rem]",
  "lg:col-span-3 lg:min-h-[19rem]",
  "lg:col-span-2 lg:min-h-[19rem]",
  "lg:col-span-5 lg:min-h-[15rem]",
];

const ecosystem = [
  {
    label: "Streaming",
    text: "Builds familiarity and trust before a homeowner ever searches.",
  },
  {
    label: "Paid Search",
    text: "Captures demand once they begin researching services.",
  },
  {
    label: "Paid Social",
    text: "Keeps your brand visible while they compare options.",
  },
  {
    label: "Retargeting",
    text: "Reinforces why your company is the right choice.",
  },
];

const fitCategories = [
  "Roofing",
  "Solar",
  "HVAC",
  "Windows",
  "Artificial Turf",
  "Remodeling",
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
      initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function TargetedStreamingPageExperience() {
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
  const heroOpacity = useTransform(progress, [0, 1], [1, 0.4]);
  const glowY = useTransform(progress, [0, 1], ["0%", "22%"]);

  return (
    <main className="bg-[#f4efe8] text-[#1d1825]">
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(81,100,148,0.55),transparent_22%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_82%_28%,rgba(244,199,161,0.16),transparent_18%),linear-gradient(180deg,#090a10_0%,#10131f_55%,#171c2d_100%)]" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/50">
              Targeted Streaming
            </p>
            <h1 className="mt-6 text-5xl font-light leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-[6.6rem]">
              Television attention.
              <br />
              Digital precision.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg font-light leading-8 text-white/72 md:text-xl">
              Instead of paying to show your commercials to everyone, targeted
              streaming puts your brand in front of the homeowners most likely to
              become customers, in the environments where attention is still high.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-16 max-w-6xl"
          >
            <div className="rounded-[2.6rem] border border-white/12 bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-[linear-gradient(160deg,#10131c_0%,#172032_56%,#38496d_100%)] px-6 py-8 md:px-10 md:py-12">
                <div
                  className="absolute inset-0 opacity-45"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "100px 100px",
                  }}
                />

                <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/58">
                      The formula
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3 text-sm uppercase tracking-[0.22em] text-white/78">
                      {["Right video", "Right message", "Right person", "Right moment"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/12 bg-white/8 px-4 py-2"
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                    <p className="mt-8 max-w-2xl text-2xl font-light leading-10 tracking-[-0.03em] text-white md:text-3xl">
                      Streaming gives contractors the power to be seen by the right
                      homeowners at the right moment instead of wasting budget on broad,
                      low-intent audiences.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="rounded-[1.8rem] border border-white/12 bg-black/18 p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                            Why it converts
                          </p>
                          <p className="mt-2 text-xl font-light tracking-[-0.03em] text-white">
                            You are not interrupting everyone.
                          </p>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-sm font-medium">
                          TV+
                        </div>
                      </div>
                      <p className="mt-5 text-base leading-7 text-white/72">
                        You are speaking directly to the homeowner who is already likely
                        to care. Higher attention plus stronger targeting leads to
                        higher-quality inbound opportunities.
                      </p>
                      <div className="mt-5 rounded-[1.4rem] border border-cyan-200/15 bg-cyan-300/8 p-4 text-sm leading-6 text-white/74">
                        TV commercials are a billboard on the highway. Social ads are
                        flyers on the street. Targeted streaming is knocking on the
                        right door and using the homeowner&apos;s name.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {platformLogos.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + index * 0.04,
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

      <section data-nav-theme="light" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              Why streaming is replacing TV
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              People changed how they watch.
              <br />
              The smart brands changed how they advertise.
            </h2>
          </Reveal>

          <div className="space-y-6">
            {[
              "Households are cutting the cable cord and moving to streaming platforms like Netflix, Hulu, Paramount+, and YouTube TV.",
              "That means contractors can now combine the attention of television with the precision targeting of digital marketing.",
              "Your message is delivered to the right households, in the right markets, at the right time, rather than disappearing into a broad media buy.",
              "For companies focused on growth, that creates a rare combination: TV-level authority with modern targeting control.",
            ].map((copy, index) => (
              <Reveal key={copy} delay={index * 0.06}>
                <div className="rounded-[2rem] bg-white px-7 py-8 shadow-[0_22px_60px_rgba(29,24,37,0.08)]">
                  <div className="text-sm uppercase tracking-[0.24em] text-[#1d1825]/34">
                    0{index + 1}
                  </div>
                  <p className="mt-4 text-2xl font-light leading-9 tracking-[-0.03em] text-[#1d1825]/92">
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
        className="relative overflow-hidden bg-[linear-gradient(180deg,#0c0d12_0%,#111420_100%)] px-6 py-24 text-white md:px-10 md:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(81,100,148,0.4), transparent 20%), radial-gradient(circle at 80% 18%, rgba(244,199,161,0.18), transparent 18%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.06), transparent 22%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.34em] text-white/42">
              Hyper-targeted homeowner advertising
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Household-level targeting changes the economics of media spend.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {targetingModes.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="rounded-[1.5rem] border border-white/10 bg-black/12 px-5 py-5 text-base leading-7 text-white/74"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-6">
                <p className="text-2xl font-light leading-10 tracking-[-0.03em] text-white/92 md:text-3xl">
                  Traditional media forces businesses to pay for large audiences where
                  most viewers will never become customers.
                </p>
                <p className="text-lg leading-8 text-white/70">
                  Lilikoi starts by understanding what your best customers look like,
                  then uses advanced data to go find those homeowners and deliver the
                  message directly to them.
                </p>
                <div className="grid gap-3">
                  {[
                    "Less wasted ad spend",
                    "Better audience alignment",
                    "Higher quality inbound leads",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm uppercase tracking-[0.22em] text-white/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              Campaign process
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              A structured rollout built to create predictable growth.
            </h2>
          </Reveal>

          <div className="mt-14 overflow-x-auto pb-4 lg:overflow-visible">
            <div className="flex min-w-max gap-5 lg:grid lg:min-w-0 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <Reveal
                  key={step}
                  delay={index * 0.04}
                  className={`w-[18rem] shrink-0 md:w-[20rem] lg:w-auto lg:shrink lg:self-stretch ${processCardClasses[index]}`}
                >
                  <div className="flex h-full flex-col rounded-[2rem] border border-[#1d1825]/8 bg-[#f4efe8] p-6">
                    <div className="text-sm uppercase tracking-[0.24em] text-[#1d1825]/34">
                      0{index + 1}
                    </div>
                    <h3 className="mt-5 text-3xl font-light leading-9 tracking-[-0.03em] text-[#1d1825]">
                      {step}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-[#1d1825]/72">
                      {processDescriptions[index]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-[#111218] px-6 py-24 text-white md:px-10 md:py-32"
      >
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.34em] text-white/42">
              Inspire first. Convert second.
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Streaming works best when it powers the whole marketing system.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Streaming builds recognition before the search begins. Then the rest of
              the funnel takes over and turns that familiarity into opportunities.
            </p>
          </Reveal>

          <div className="space-y-5">
            {ecosystem.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-7 py-8 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-white/40">
                        Stage 0{index + 1}
                      </p>
                      <h3 className="mt-4 text-3xl font-light tracking-[-0.03em] text-white">
                        {item.label}
                      </h3>
                    </div>
                    <div className="h-px flex-1 self-center bg-white/10" />
                  </div>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              Built for contractors ready to grow
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              The strongest results come from companies prepared to scale.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#1d1825]/72">
              Targeted streaming is especially effective for contractors selling
              high-ticket projects, running strong in-home sales teams, and aiming to
              become the brand homeowners recognize first.
            </p>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <div className="grid gap-3 rounded-[2rem] bg-white p-7 shadow-[0_24px_70px_rgba(29,24,37,0.08)] sm:grid-cols-2">
                {fitCategories.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[1.35rem] border border-[#1d1825]/8 bg-[#f4efe8] px-4 py-4 text-lg font-light tracking-[-0.02em]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[2rem] bg-[#1b1721] px-7 py-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
                <p className="text-sm uppercase tracking-[0.24em] text-white/42">
                  What results typically look like
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Higher lead volume",
                    "Higher lead quality",
                    "Better sales conversations",
                    "Stronger close rates",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-base text-white/76"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-base leading-7 text-white/72">
                  Your team is no longer walking into homes cold. They are walking into
                  homes where the homeowner has already seen the brand and trusts it
                  more.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 pb-24 pt-2 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-[2.8rem] bg-[linear-gradient(135deg,#111218_0%,#1f2434_45%,#516494_78%,#f4c7a1_100%)] px-8 py-12 text-white shadow-[0_36px_120px_rgba(29,24,37,0.2)] md:px-12 md:py-16">
              <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-white/44">
                    Ready to scale?
                  </p>
                  <h2 className="mt-4 max-w-4xl text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
                    The question is not whether streaming works. It is whether your
                    company will lead the market or chase it later.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                    Lilikoi works with contractors who are serious about growth and
                    keeps the roster intentionally focused so execution stays sharp.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-end">
                  <a
                    href="/contact"
                    className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#151826] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    See If We&apos;re A Fit
                  </a>
                  <a
                    href="/services/paid-search"
                    className="inline-flex rounded-full border border-white/18 bg-white/[0.08] px-7 py-3 text-sm font-light uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/[0.14]"
                  >
                    Explore Paid Search
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
