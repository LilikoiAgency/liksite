"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+ years", label: "Driving growth for revenue-first home improvement brands" },
  { value: "$100M+", label: "Advertising spend managed across performance channels" },
  { value: "Billions", label: "In client revenue influenced through scalable lead generation" },
  { value: "10x+", label: "Growth trajectories built for ambitious operators" },
];

const focusIndustries = [
  "Roofing",
  "Solar",
  "Windows & Doors",
  "HVAC",
  "Artificial Turf",
  "Kitchen & Bath Remodeling",
];

const channels = [
  {
    name: "Targeted Streaming",
    description:
      "Story-driven reach that puts the brand in front of homeowners while attention is high.",
  },
  {
    name: "Paid Search",
    description:
      "High-intent demand capture for prospects already researching solutions and comparing providers.",
  },
  {
    name: "Paid Social",
    description:
      "Precision audience building and offer testing that expands demand without sacrificing quality.",
  },
];

const storyMoments = [
  {
    title: "Storytelling meets sales reality",
    copy:
      "Lance Wilson spent more than a decade in Hollywood learning what makes commercials land, then built frontline revenue experience in automotive, real estate, mortgage, and radio sales.",
  },
  {
    title: "The infrastructure gap became obvious",
    copy:
      "Advertisers were spending heavily, but their websites, local SEO, and digital presence were not built to convert that demand into qualified leads and real revenue.",
  },
  {
    title: "A digital-first agency took shape",
    copy:
      "That insight led to Lilikoi: a performance partner built to strengthen the entire system behind growth, not just the ads sitting on top of it.",
  },
  {
    title: "Operational discipline completed the model",
    copy:
      "Sophia Wilson brought process rigor, workflow discipline, and scalable operating systems that let the agency manage larger budgets and deliver repeatable execution.",
  },
];

const principles = [
  "Revenue over vanity metrics",
  "Lead quality over lead quantity theater",
  "Operator mindset over marketing fluff",
  "Adaptation over outdated channel loyalty",
];

const leaders = [
  {
    name: "Lance Wilson",
    role: "Founder & CEO",
    initials: "LW",
    copy:
      "Lance founded Lilikoi after seeing how often businesses invested in marketing without the systems required to convert that investment into growth. His background across traditional media, digital strategy, sales, and real estate shaped the agency's practical, revenue-driven approach.",
  },
  {
    name: "Sophia Wilson",
    role: "Chief Operating Officer",
    initials: "SW",
    copy:
      "Sophia holds a Master's Degree in Organizational Leadership and leads operations at Lilikoi. She focuses on systems, process improvement, and scalable execution so the agency and its clients can grow without operational drag.",
  },
];

function FadeIn({
  children,
  delay = 0,
  amount = 0.25,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPageExperience() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.6,
  });

  const haloY = useTransform(progress, [0, 1], ["0%", "24%"]);
  const heroScale = useTransform(progress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(progress, [0, 1], [1, 0.45]);

  return (
    <main className="bg-sand text-purple-dark">
      <section
        ref={heroRef}
        data-nav-theme="dark"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#120d17_0%,#2c1f36_45%,#4d355f_70%,#f4c7a1_100%)] px-6 pb-20 pt-32 text-white md:px-10 md:pb-28 md:pt-40"
      >
        <motion.div
          style={{ y: haloY, scale: heroScale, opacity: heroOpacity }}
          className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(255,233,246,0.22),transparent_24%),radial-gradient(circle_at_50%_68%,rgba(255,143,95,0.22),transparent_34%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/75 backdrop-blur-md"
            >
              About Lilikoi Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[6rem]"
            >
              Helping High Ticket In-Home Sales Home Improvement Companies Grow
              Like Crazy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/78 md:text-xl"
            >
              Most marketing agencies talk about clicks, impressions, and engagement.
              Lilikoi talks about revenue, lead quality, and what it actually takes to
              scale high-ticket services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-purple-dark transition-transform duration-300 hover:-translate-y-0.5"
              >
                Build With Us
              </a>
              <a
                href="/case-studies"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-light uppercase tracking-[0.2em] text-white backdrop-blur-md transition-colors hover:bg-white/16"
              >
                See Growth Stories
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/14 bg-white/8 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-6 border-b border-white/12 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                    Built for now
                  </p>
                  <p className="mt-3 text-2xl font-light tracking-[-0.03em]">
                    Revenue-first marketing systems for modern home improvement growth
                  </p>
                </div>
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                  <Image
                    src="/images/lilikoi-flower.png"
                    alt=""
                    fill
                    className="object-contain p-2 opacity-90"
                    priority={false}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.34 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[1.5rem] border border-white/12 bg-black/10 p-5"
                  >
                    <p className="text-3xl font-light tracking-[-0.05em]">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-white/70">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section data-nav-theme="light" className="relative px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-dark/45">
                What makes Lilikoi different
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                Not built by marketers trying to understand contractors.
              </h2>
            </div>
            <div className="grid gap-5 text-lg leading-8 text-purple-dark/78">
              <p>
                For well over a decade, Lilikoi has helped high-ticket in-home sales
                home improvement companies grow using marketing strategies built for
                roofing, solar, HVAC, windows, artificial turf, and remodeling.
              </p>
              <p>
                The agency has managed hundreds of millions in advertising spend and
                generated billions in client revenue by focusing on the channels
                producing the highest-quality leads today: targeted streaming, paid
                search, and paid social.
              </p>
              <p>
                Lilikoi was built by operators who already understood how
                revenue-driven businesses grow, how sales teams think, and why
                marketing has to connect to the full system behind revenue.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle, index) => (
              <FadeIn key={principle} delay={index * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-purple-dark/10 bg-white p-6 shadow-[0_20px_60px_rgba(44,31,54,0.08)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-dark via-purple-lilikoi to-[#f4c7a1]" />
                  <p className="text-sm uppercase tracking-[0.24em] text-purple-dark/40">
                    Principle {index + 1}
                  </p>
                  <p className="mt-10 text-2xl font-light leading-8 tracking-[-0.03em] text-purple-dark">
                    {principle}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        data-nav-theme="light"
        className="relative overflow-hidden bg-white px-6 py-20 md:px-10 md:py-28"
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-60"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 10% 15%, rgba(157,144,197,0.16), transparent 25%), radial-gradient(circle at 85% 15%, rgba(244,199,161,0.35), transparent 20%), radial-gradient(circle at 70% 80%, rgba(44,31,54,0.07), transparent 28%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-dark/45">
              Lilikoi&apos;s roots
            </p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              A growth agency shaped by story, sales, and operational rigor.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <FadeIn amount={0.2}>
              <div className="rounded-[2rem] border border-purple-dark/10 bg-sand p-7">
                <p className="text-sm uppercase tracking-[0.24em] text-purple-dark/45">
                  The thesis
                </p>
                <p className="mt-6 text-xl font-light leading-8 text-purple-dark/82">
                  Businesses were buying ads before they had the infrastructure to turn
                  attention into leads and leads into revenue. Lilikoi was built to fix
                  that gap.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-5">
              {storyMoments.map((moment, index) => (
                <FadeIn key={moment.title} delay={index * 0.08} amount={0.18}>
                  <div className="grid gap-4 rounded-[2rem] border border-purple-dark/10 bg-white p-6 shadow-[0_18px_50px_rgba(44,31,54,0.06)] md:grid-cols-[auto_1fr] md:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-dark text-sm font-medium text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-light tracking-[-0.03em] text-purple-dark">
                        {moment.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-base leading-7 text-purple-dark/75">
                        {moment.copy}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-dark/45">
              Why this niche
            </p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              Contractors value clarity, accountability, and outcomes.
            </h2>
            <div className="mt-8 grid gap-5 text-lg leading-8 text-purple-dark/78">
              <p>
                Over time, Lilikoi discovered it worked best with contractors and
                high-ticket in-home sales home improvement companies because they care
                about results above all else.
              </p>
              <p>
                These businesses measure success by closed deals, not impressive
                dashboards. They understand that growth requires calculated risk,
                disciplined testing, and marketing that produces real opportunities for
                sales teams.
              </p>
              <p>
                That mindset aligns perfectly with how Lilikoi operates, which is why
                the agency leaned fully into this category.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-[2rem] border border-purple-dark/10 bg-purple-dark p-7 text-white shadow-[0_28px_80px_rgba(44,31,54,0.25)]">
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                Core categories
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {focusIndustries.map((industry, index) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[1.25rem] border border-white/12 bg-white/8 px-4 py-4 text-lg font-light tracking-[-0.02em]"
                  >
                    {industry}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        data-nav-theme="light"
        className="relative overflow-hidden bg-purple-dark px-6 py-20 text-white md:px-10 md:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(157,144,197,0.32), transparent 20%), radial-gradient(circle at 80% 15%, rgba(255,143,95,0.25), transparent 18%), radial-gradient(circle at 50% 85%, rgba(255,255,255,0.08), transparent 25%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Marketing that works right now
            </p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              Great marketing isn&apos;t about chasing trends. It&apos;s about deploying
              what works.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Channels change. Lilikoi adapts to whatever is producing the strongest
              return and highest lead quality in the current market.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {channels.map((channel, index) => (
              <FadeIn key={channel.name} delay={index * 0.08}>
                <div className="h-full rounded-[2rem] border border-white/12 bg-white/8 p-7 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                    Channel 0{index + 1}
                  </p>
                  <h3 className="mt-6 text-3xl font-light tracking-[-0.03em]">
                    {channel.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {channel.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="bg-sand px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-dark/45">
              Leadership
            </p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              Strategic vision paired with operational discipline.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {leaders.map((leader, index) => (
              <FadeIn key={leader.name} delay={index * 0.08}>
                <div className="overflow-hidden rounded-[2rem] border border-purple-dark/10 bg-white shadow-[0_20px_70px_rgba(44,31,54,0.08)]">
                  <div className="relative h-72 overflow-hidden bg-[linear-gradient(135deg,#2c1f36_0%,#57416b_55%,#eec8a7_100%)]">
                    <div
                      className="absolute inset-0 opacity-40"
                      aria-hidden="true"
                      style={{
                        background:
                          "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.18), transparent 16%), radial-gradient(circle at 75% 35%, rgba(255,255,255,0.12), transparent 18%)",
                      }}
                    />
                    <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                      <div className="rounded-[1.75rem] border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                          Portrait placeholder
                        </p>
                        <p className="mt-2 text-sm text-white/75">
                          Replace with {leader.name.split(" ")[0]}&apos;s image when ready.
                        </p>
                      </div>
                      <div className="text-6xl font-light tracking-[-0.06em] text-white/92">
                        {leader.initials}
                      </div>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-3xl font-light tracking-[-0.03em] text-purple-dark">
                      {leader.name}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-purple-dark/45">
                      {leader.role}
                    </p>
                    <p className="mt-6 text-base leading-7 text-purple-dark/75">
                      {leader.copy}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-6 pb-24 pt-6 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#1d1425_0%,#2c1f36_45%,#6e557f_72%,#efc8a5_100%)] px-8 py-12 text-white shadow-[0_30px_100px_rgba(44,31,54,0.25)] md:px-12 md:py-16">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                    Helping companies reach the next level
                  </p>
                  <h2 className="mt-4 max-w-4xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                    The right marketing partner doesn&apos;t just run ads. They help
                    build the next stage of your business.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                    Whether the goal is stabilizing lead flow, improving lead quality,
                    or scaling from a regional contractor into a dominant market brand,
                    Lilikoi builds the marketing systems that make growth possible.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-end">
                  <a
                    href="/contact"
                    className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-purple-dark transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Talk To Lilikoi
                  </a>
                  <a
                    href="/services"
                    className="inline-flex rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-light uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:bg-white/14"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
