"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const TILES = [
  {
    title: "Audit & Strategy",
    body: "We identify what's working, what's wasting money, and where the real opportunities are.",
    cardClass: "bg-white text-purple-lilikoi",
    circleClass: "bg-purple-lilikoi text-white",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 6h16" />
        <path d="M4 12h10" />
        <path d="M4 18h7" />
      </svg>
    ),
  },
  {
    title: "Launch & Create",
    body: "We develop the creative, launch the campaigns, and get everything live fast. Nothing ships without intent-every piece is built to perform.",
    cardClass: "bg-purple-lilikoi text-white",
    circleClass: "bg-white text-purple-lilikoi",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 19l14-7L5 5v14z" />
      </svg>
    ),
  },
  {
    title: "Optimize & Adjust",
    body: "Once live, we watch everything closely and adjust in real time. We double down on what works, cut what doesn't, and keep improving as the market changes.",
    cardClass: "bg-forest text-white",
    circleClass: "bg-white text-forest",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 12h4l2-6 4 12 2-6h4" />
      </svg>
    ),
  },
];

function BlueprintIntro() {
  return (
    <>
      <span className="inline-flex self-start rounded-full bg-purple-lilikoi px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-purple-dark">
        The Blueprint
      </span>
      <h2 className="mt-5 text-balance text-[clamp(1.75rem,4.1vw,4rem)] font-semibold leading-[1.06]">
        The process that allows us to deliver awesome{" "}
        <span className="text-purple-lilikoi">results</span>
      </h2>
      <p className="mt-6 max-w-xl text-[clamp(0.95rem,1.15vw,1.15rem)] leading-relaxed text-purple-dark/90">
        Our process is built to cut waste, adapt quickly, and focus only on what actually drives
        results. It&apos;s simple by design and powerful in execution.
      </p>
    </>
  );
}

function BlueprintCard({
  title,
  body,
  cardClass,
  circleClass,
  icon,
  stickyTop,
  zIndex,
  cardRef,
}: {
  title: string;
  body: string;
  cardClass: string;
  circleClass: string;
  icon: ReactNode;
  stickyTop: string;
  zIndex: number;
  cardRef?: React.RefObject<HTMLElement | null>;
}) {
  return (
    <article
      ref={cardRef}
      className={`relative sticky flex min-h-[260px] flex-col overflow-hidden rounded-[26px] p-6 pt-14 will-change-transform md:min-h-[300px] md:p-7 md:pt-16 lg:min-h-[clamp(320px,30vw,440px)] ${cardClass}`}
      style={{ top: stickyTop, zIndex }}
    >
      <div
        className={`absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full ${circleClass}`}
      >
        {icon}
      </div>
      <h2 className="max-w-[70%] text-[clamp(1.7rem,2.7vw,3.3rem)] font-semibold leading-none">{title}</h2>
      <p className="mt-auto max-w-[90%] text-[clamp(0.95rem,1.05vw,1.12rem)] font-semibold leading-relaxed">
        {body}
      </p>
    </article>
  );
}

export default function TheBlueprintSection() {
  const mobileIntroRef = useRef<HTMLDivElement | null>(null);
  const mobileFirstCardRef = useRef<HTMLElement | null>(null);
  const [mobileCardTop, setMobileCardTop] = useState(420);
  const [mobileIntroLockHeight, setMobileIntroLockHeight] = useState(640);
  const [mobileStackLift, setMobileStackLift] = useState(280);

  useEffect(() => {
    const update = () => {
      if (!mobileIntroRef.current) return;
      const introStickyTop = 70;
      const gapBelowIntro = 10;
      const settleBuffer = 30;
      const finalHoldPx = 10;
      const stackLiftTrim = 10;
      const introHeight = mobileIntroRef.current.offsetHeight;
      const firstCardHeight = mobileFirstCardRef.current?.offsetHeight ?? 300;
      const cardGap = 24;
      const overlapDistance = (firstCardHeight + cardGap) * (TILES.length - 1);
      const nextTop = Math.round(introStickyTop + introHeight + gapBelowIntro);
      const stackLift = Math.max(
        0,
        Math.round(
          overlapDistance + settleBuffer - (introStickyTop + gapBelowIntro) - stackLiftTrim,
        ),
      );
      setMobileCardTop(nextTop);
      setMobileIntroLockHeight(
        Math.round(introHeight + overlapDistance + settleBuffer + finalHoldPx),
      );
      setMobileStackLift(stackLift + finalHoldPx);
    };

    update();
    const observer = new ResizeObserver(update);
    if (mobileIntroRef.current) observer.observe(mobileIntroRef.current);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const sectionVars = {
    "--bp-card-top": `${mobileCardTop}px`,
    "--bp-intro-lock": `${mobileIntroLockHeight}px`,
    "--bp-stack-lift": `${mobileStackLift}px`,
  } as CSSProperties;

  return (
    <section className="bg-sand px-6 py-24 text-purple-dark" style={sectionVars}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="lg:hidden">
          <div className="relative" style={{ height: "var(--bp-intro-lock)" }}>
            <div ref={mobileIntroRef} className="sticky top-20 z-40 bg-sand pb-6">
              <BlueprintIntro />
            </div>
          </div>
          <div
            className="flex flex-col gap-6 pb-20 md:gap-7"
            style={{ marginTop: "calc(-1 * var(--bp-stack-lift))" }}
          >
            {TILES.map((tile, idx) => (
              <BlueprintCard
                key={tile.title}
                title={tile.title}
                body={tile.body}
                cardClass={tile.cardClass}
                circleClass={tile.circleClass}
                icon={tile.icon}
                stickyTop="var(--bp-card-top)"
                zIndex={10 + idx}
                cardRef={idx === 0 ? mobileFirstCardRef : undefined}
              />
            ))}
          </div>
        </div>

        <div className="hidden gap-12 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div className="sticky top-24 z-40 max-w-2xl bg-sand">
            <BlueprintIntro />
          </div>
          <div className="flex flex-col gap-10 pb-10">
            {TILES.map((tile, idx) => (
              <BlueprintCard
                key={tile.title}
                title={tile.title}
                body={tile.body}
                cardClass={tile.cardClass}
                circleClass={tile.circleClass}
                icon={tile.icon}
                stickyTop="6rem"
                zIndex={10 + idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
