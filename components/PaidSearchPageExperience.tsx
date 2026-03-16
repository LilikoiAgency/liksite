"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const searchPlatforms = ["Google Ads", "Microsoft / Bing Ads", "Google Search Network"];

const processSteps = [
  {
    title: "Market & Customer Analysis",
    body: "We map your market, service areas, and the types of projects you want more of before campaign structure is built.",
  },
  {
    title: "Keyword Strategy",
    body: "Campaigns are built around the searches homeowners make when they are actively looking for services like yours.",
  },
  {
    title: "Geographic Targeting",
    body: "Ads are focused on your ZIP codes and service areas while excluding markets outside your operating radius.",
  },
  {
    title: "Campaign Launch",
    body: "Your ads begin appearing across the major search platforms where homeowners are actively looking for contractors.",
  },
  {
    title: "Optimization & Scaling",
    body: "Budgets and bids are continuously refined toward the searches producing the highest quality leads.",
  },
];

const leadQualities = [
  "Closer to the buying decision",
  "Ready to speak with a contractor",
  "Highly motivated to solve a problem",
];

const targetingPoints = [
  "Tight geographic targeting focused on your service areas",
  "ZIP code-level targeting to prioritize high-value locations",
  "Exclusions for areas outside your service radius",
  "Budget optimization toward the highest-converting searches",
];

const optimizationPoints = [
  "Adjusting keyword strategies",
  "Refining targeting parameters",
  "Allocating budgets toward the best-performing searches",
  "Improving ad messaging to increase response rates",
];

const heroQueries = [
  "roof repair near me",
  "window replacement contractor",
  "hvac repair today",
  "solar installer near me",
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

export default function PaidSearchPageExperience() {
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
    <main className="bg-[#f5f0e8] text-[#1d1825]">
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(118,144,97,0.32),transparent_22%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_82%_28%,rgba(244,199,161,0.16),transparent_18%),linear-gradient(180deg,#090a10_0%,#10131f_55%,#171c2d_100%)]" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/50">
              Paid Search
            </p>
            <h1 className="mt-6 text-5xl font-light leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-[6.4rem]">
              Capture homeowners
              <br />
              at the exact moment
              <br />
              they need you.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg font-light leading-8 text-white/72 md:text-xl">
              When homeowners search for services like yours, paid search puts your
              company directly in front of them and turns high-intent searches into
              qualified opportunities for the sales team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-16 max-w-6xl"
          >
            <div className="rounded-[2.6rem] border border-white/12 bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-[linear-gradient(160deg,#10131c_0%,#182116_56%,#425338_100%)] px-6 py-8 md:px-10 md:py-12">
                <div
                  className="absolute inset-0 opacity-30"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "100px 100px",
                  }}
                />

                <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-lime-100/58">
                      High intent
                    </p>
                    <p className="mt-5 text-2xl font-light leading-10 tracking-[-0.03em] text-white md:text-3xl">
                      Search works because the homeowner initiated the conversation.
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-7 text-white/72">
                      They are not casually browsing. They have a problem, they are
                      actively looking for a solution, and in many cases they are ready
                      to speak with a contractor right now.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {leadQualities.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/74"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-white/12 bg-black/18 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <div className="h-3 w-3 rounded-full bg-red-400/80" />
                      <div className="h-3 w-3 rounded-full bg-amber-300/80" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                      <div className="ml-3 rounded-full bg-white/6 px-4 py-1 text-xs uppercase tracking-[0.24em] text-white/45">
                        Search results
                      </div>
                    </div>
                    <div className="mt-5 space-y-3">
                      {heroQueries.map((query, index) => (
                        <motion.div
                          key={query}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.2 + index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4"
                        >
                          <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/55">
                            Sponsored
                          </div>
                          <p className="mt-2 text-lg font-light tracking-[-0.02em] text-white">
                            {query}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/64">
                            Appear when the homeowner is already asking for help.
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {searchPlatforms.map((item, index) => (
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
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              Where your ads appear
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Show up exactly when someone is asking for help.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-[2.2rem] bg-[#f5f0e8] p-7">
                <p className="text-2xl font-light leading-10 tracking-[-0.03em] text-[#1d1825] md:text-3xl">
                  Paid search does not interrupt someone&apos;s day. It places the brand
                  directly in front of homeowners while they are actively searching for
                  a contractor in your market.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {searchPlatforms.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <div className="rounded-[1.8rem] border border-[#1d1825]/8 bg-white px-6 py-6 shadow-[0_20px_50px_rgba(29,24,37,0.06)]">
                    <div className="text-sm uppercase tracking-[0.24em] text-[#1d1825]/34">
                      Platform 0{index + 1}
                    </div>
                    <p className="mt-3 text-2xl font-light tracking-[-0.03em]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 py-24 md:px-10 md:py-30">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              The lilikoi paid search process
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Strategy, structure, and continuous improvement.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#1d1825]/72">
              The goal is simple: turn homeowner searches into qualified opportunities
              for the sales team and make lead generation more predictable.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="grid gap-4 rounded-[2rem] bg-white p-7 shadow-[0_22px_60px_rgba(29,24,37,0.07)] md:grid-cols-[auto_1fr]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f2a1b] text-sm font-medium text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-light tracking-[-0.03em] text-[#1d1825]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-[#1d1825]/72">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#0d0f11_0%,#171d18_100%)] px-6 py-24 text-white md:px-10 md:py-30"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(118,144,97,0.36), transparent 18%), radial-gradient(circle at 82% 18%, rgba(244,199,161,0.12), transparent 18%), radial-gradient(circle at 50% 82%, rgba(255,255,255,0.06), transparent 22%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.34em] text-white/42">
              Why search leads are so valuable
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              The homeowner initiated the conversation.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              That is the difference between search advertising and most other channels.
              Search captures demand that already exists instead of trying to create it.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md">
              <div className="grid gap-4">
                {leadQualities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[1.5rem] border border-white/10 bg-black/12 px-5 py-5 text-lg font-light tracking-[-0.02em] text-white/78"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-base leading-7 text-white/68">
                Instead of convincing someone they need the service, paid search shows
                up when they already know they do.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="light" className="bg-white px-6 py-24 md:px-10 md:py-30">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              Precision campaign targeting
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Profitable search campaigns are built on constraint, not sprawl.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#1d1825]/72">
              Paid search only works when budget is pushed toward the searches and
              service areas most likely to produce qualified homeowners.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {targetingPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[2rem] border border-[#1d1825]/8 bg-[#f5f0e8] p-6">
                  <div className="text-sm uppercase tracking-[0.24em] text-[#1d1825]/34">
                    Focus 0{index + 1}
                  </div>
                  <p className="mt-4 text-2xl font-light leading-9 tracking-[-0.03em] text-[#1d1825]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 py-24 md:px-10 md:py-30">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[2.4rem] bg-[#1b1721] px-8 py-9 text-white shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <p className="text-xs uppercase tracking-[0.34em] text-white/42">
                Constant testing and optimization
              </p>
              <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-5xl">
                Search is not a set-it-and-forget-it channel.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                Markets are competitive. Winning requires ongoing refinement, budget
                discipline, and constant attention to what is actually producing strong
                results.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {optimizationPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[1.8rem] bg-white px-6 py-6 shadow-[0_20px_55px_rgba(29,24,37,0.06)]">
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

      <section
        data-nav-theme="light"
        className="bg-[linear-gradient(180deg,#f5f0e8_0%,#efe5d7_100%)] px-6 py-24 md:px-10 md:py-30"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.34em] text-[#1d1825]/42">
              The cost of not showing up in search
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Those searches are happening whether your company appears or not.
            </h2>
          </Reveal>

          <div className="space-y-5">
            {[
              "If the company is not visible when homeowners search, the opportunities go to the contractor whose ad appears first.",
              "They go to the business that invested in visibility and showed up when the homeowner was ready to take action.",
              "Paid search is not about creating demand. It is about capturing demand that already exists in the market.",
              "The question is not whether homeowners are searching. It is whether your company is the one they find.",
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

      <section data-nav-theme="light" className="px-6 pb-24 pt-4 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-[2.8rem] bg-[linear-gradient(135deg,#121418_0%,#1d2319_45%,#53684a_78%,#f4c7a1_100%)] px-8 py-12 text-white shadow-[0_36px_120px_rgba(29,24,37,0.2)] md:px-12 md:py-16">
              <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-white/44">
                    Ready to capture more homeowner leads?
                  </p>
                  <h2 className="mt-4 max-w-4xl text-4xl font-light leading-[0.96] tracking-[-0.05em] md:text-6xl">
                    Paid search works when serious contractors show up at the exact
                    moment homeowners are looking for help.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                    Lilikoi keeps the client roster focused so campaigns can be managed
                    with discipline and real attention. If paid search could accelerate
                    your lead generation, the next step is seeing whether there is a fit.
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
                    href="/services/paid-social"
                    className="inline-flex rounded-full border border-white/18 bg-white/[0.08] px-7 py-3 text-sm font-light uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/[0.14]"
                  >
                    Explore Paid Social
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
