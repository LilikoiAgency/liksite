"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const TABS = [
  {
    id: "streaming",
    label: "Targeted Streaming",
    title: "Reach viewers where they watch",
    body:
      "Place your brand inside premium streaming environments with precision targeting and measurable outcomes.",
    cta: "Explore Targeted Streaming",
  },
  {
    id: "social",
    label: "Paid Social",
    title: "Spark demand across social",
    body:
      "Turn attention into action with social strategies designed for engagement, retargeting, and scale.",
    cta: "Explore Paid Social",
  },
  {
    id: "search",
    label: "Paid Search",
    title: "Capture intent in real time",
    body:
      "Deliver your message to the right audience across premium streaming platforms, where attention is high and storytelling matters most.",
    cta: "Explore Paid Search",
  },
];

export default function AudienceSection() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const activeTab = TABS.find((tab) => tab.id === activeId) ?? TABS[0];
  const activeIndex = TABS.findIndex((tab) => tab.id === activeId);
  const x = useMotionValue(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [slideGap, setSlideGap] = useState(32);

  useEffect(() => {
    const updateSizes = () => {
      const vw = window.innerWidth;
      const ratio = vw < 768 ? 0.9 : 0.5;
      const width = Math.min(1200, Math.round(vw * ratio));
      setViewportWidth(vw);
      setSlideWidth(width);
      setSlideGap(Math.max(28, Math.round(vw * 0.125)));
    };
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const sidePadding = useMemo(
    () => Math.max(0, (viewportWidth - slideWidth) / 2),
    [slideWidth, viewportWidth],
  );
  const minX = useMemo(
    () => sidePadding - (slideWidth + slideGap) * (TABS.length - 1),
    [sidePadding, slideGap, slideWidth],
  );
  const maxX = sidePadding;

  const snapToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(TABS.length - 1, index));
    const target = sidePadding - clamped * (slideWidth + slideGap);
    setActiveId(TABS[clamped].id);
    animate(x, target, { type: "spring", stiffness: 260, damping: 32 });
  };

  useEffect(() => {
    if (!slideWidth) return;
    snapToIndex(activeIndex);
  }, [activeIndex, slideWidth, slideGap, sidePadding]);

  return (
    <section className="relative bg-[linear-gradient(180deg,#2c1f36_0%,#2c1f36_48%,#fffdd0_48%,#fffdd0_100%)] px-6 py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h2 className="text-balance text-3xl font-light text-white sm:text-4xl lg:text-5xl">
          Introducing a smarter way to reach your{" "}
          <span className="font-light italic text-purple-lilikoi underline underline-offset-8">
            audience
          </span>
        </h2>

        <div className="mt-8 md:mt-10">
          <div className="relative inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white px-2 py-2 shadow-lg md:gap-3 md:px-3 md:py-3">
            {TABS.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={(event) => {
                    event.preventDefault();
                    snapToIndex(TABS.findIndex((item) => item.id === tab.id));
                  }}
                  className={`relative z-10 overflow-hidden rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer md:px-5 md:py-2 md:text-xs md:tracking-[0.18em] ${
                    isActive
                      ? "text-white"
                      : "text-purple-dark hover:bg-purple-lilikoi/10"
                  }`}
                  style={{ touchAction: "manipulation" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="audience-tab-liquid"
                      className="absolute inset-0 z-0 rounded-full bg-purple-lilikoi/90 blur-[2px] shadow-[0_8px_24px_rgba(157,144,197,0.35)]"
                      animate={{ scaleX: [0.95, 1.08, 1], scaleY: [0.95, 0.96, 1] }}
                      transition={{
                        type: "tween",
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="mt-12 w-screen max-w-none text-purple-dark overflow-hidden md:overflow-visible"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
            <motion.div
              drag="x"
              dragElastic={0.06}
              dragConstraints={{ left: minX, right: maxX }}
              onDragEnd={() => {
                const current = x.get();
                const index = Math.round((sidePadding - current) / (slideWidth + slideGap));
                snapToIndex(index);
              }}
              style={{
                x,
                gap: `${slideGap}px`,
              }}
              className="flex w-full items-stretch"
            >
          {TABS.map((tab, index) => (
            <div
              key={tab.id}
              className={`flex shrink-0 flex-col items-center gap-8 transition-all duration-300 ${
                index === activeIndex ? "blur-0" : "blur-[3px]"
              }`}
              style={{ width: `${slideWidth}px` }}
            >
              <div className="relative w-full max-w-[1200px] overflow-hidden rounded-3xl bg-white p-1 shadow-2xl">
                <div className="aspect-[16/9] w-full rounded-[22px] bg-white/70" />
              </div>

              <div className="w-full p-2 text-center min-h-[120px]">
                <p className="text-base text-purple-dark/90 min-h-[72px]">
                  {tab.body}
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-dark underline decoration-purple-lilikoi decoration-2 underline-offset-8 transition-colors hover:text-purple-lilikoi"
                >
                  {tab.cta}
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
