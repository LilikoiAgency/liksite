"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    service: "Targeted Streaming",
    title: "Where your story plays in the moments that count.",
    resultA: "2x more attention",
    resultB: "Seen On TV",
  },
  {
    service: "Paid Social",
    title: "Where your audience discovers what to do next.",
    resultA: "4.3x more engagement",
    resultB: "Always On Feed",
  },
  {
    service: "Paid Search",
    title: "Where intent turns into action in real time.",
    resultA: "3.1x higher intent",
    resultB: "Top Of Results",
  },
];
const SLIDE_FRAME_HEIGHT = "100svh";
const PILL_THEMES = ["bg-[#034C3C] text-white", "bg-purple-dark text-white", "bg-purple-lilikoi text-white"];

export default function ServicesSnapSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const slideCount = CARDS.length;
    const maxIndex = slideCount - 1;

    const ctx = gsap.context(() => {
      gsap.set(trackRef.current, { yPercent: 0 });

      gsap.to(trackRef.current, {
        yPercent: -100 * maxIndex,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * Math.max(1, maxIndex) * 1.05}`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: maxIndex > 0 ? 1 / maxIndex : 1,
            delay: 0.04,
            duration: { min: 0.18, max: 0.42 },
            ease: "power2.out",
          },
          onUpdate: (self) => {
            const next = Math.round(self.progress * maxIndex);
            setActiveIndex((current) => (current === next ? current : next));
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-sand"
      aria-label="Services snap tiles"
    >
      <div className="bg-sand px-0 py-0">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: SLIDE_FRAME_HEIGHT }}
        >
          <div ref={trackRef} className="h-full will-change-transform">
            {CARDS.map((card, idx) => (
              <article
                key={card.service}
                className="h-full bg-sand p-2.5 md:p-3.5"
              >
                <div className="relative flex h-full items-end overflow-hidden rounded-[20px] border border-white/35 bg-[#d5c8f3] p-5 md:rounded-[28px] md:p-8 lg:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(255,255,255,0.55),transparent_38%),radial-gradient(circle_at_86%_88%,rgba(157,144,197,0.32),transparent_44%)]" />
                  <div className="relative z-10 flex w-full flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-8">
                    <div className="max-w-[46rem]">
                      <span className={`inline-flex border border-white/25 px-4 py-1 text-xs font-light uppercase tracking-[0.14em] md:px-5 md:py-1.5 md:text-sm ${PILL_THEMES[idx]}`}>
                        {card.service}
                      </span>
                      <h3 className="mt-3 text-[1.75rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#B9B9B9] md:mt-4 md:text-[3.1rem] lg:text-[3.8rem]">
                        {card.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
                        <span className={`inline-flex rounded-full border border-white/25 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] md:px-5 md:py-2.5 md:text-xs ${PILL_THEMES[idx]}`}>
                          {card.resultA}
                        </span>
                        <span className={`inline-flex rounded-full border border-white/25 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] md:px-5 md:py-2.5 md:text-xs ${PILL_THEMES[idx]}`}>
                          {card.resultB}
                        </span>
                      </div>
                    </div>
                  <a
                    href="/book-a-demo"
                    className="mb-1 inline-flex shrink-0 items-center justify-center rounded-full border border-purple-dark/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-purple-dark transition-colors hover:bg-white/90 md:px-8 md:py-3.5 md:text-sm"
                  >
                    Book Demo
                  </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-2.5 md:right-7">
            {CARDS.map((card, idx) => (
              <span
                key={card.service}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  idx === activeIndex ? "scale-110 bg-purple-dark" : "bg-purple-dark/30"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
