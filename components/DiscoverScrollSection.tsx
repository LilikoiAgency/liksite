"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HEADLINE = "Discover what all the top brands are doing";
const HOLD_AT_START = 0.28;
const DESKTOP_SCROLL_SPEED = 0.55;

export default function DiscoverScrollSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [travel, setTravel] = useState(0);
  const [fitScale, setFitScale] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "end 0%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 32,
    damping: 32,
    mass: 0.9,
  });
  const easedProgress = useTransform(
    progress,
    (value) => 1 - Math.pow(1 - value, 1.8),
  );

  const x = useTransform(easedProgress, [0, HOLD_AT_START, 1], [0, 0, -travel]);
  const iconRotate = useTransform(easedProgress, [0, 1], ["0deg", "-540deg"]);

  useEffect(() => {
    const updateLayout = () => {
      if (!sectionRef.current || !rowRef.current) return;

      const viewportWidth = sectionRef.current.clientWidth;
      const rowWidth = rowRef.current.scrollWidth;
      const availableWidth = Math.max(0, Math.round(viewportWidth * 1.0));
      const nextScale = Math.max(0.12, Math.min(1, availableWidth / rowWidth));

      setTravel(
        Math.round(
          Math.min(rowWidth * 0.58, viewportWidth * 1.15) * DESKTOP_SCROLL_SPEED,
        ),
      );
      setFitScale(nextScale);
    };

    updateLayout();
    const raf = requestAnimationFrame(updateLayout);
    void document.fonts?.ready?.then(updateLayout);
    window.addEventListener("resize", updateLayout);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="snap-start relative overflow-x-hidden bg-sand py-4 md:min-h-[15vh] md:py-8"
      aria-label="Discover brands marquee"
    >
      <motion.div
        ref={rowRef}
        style={{ x, scale: fitScale, transformOrigin: "left center" }}
        className="absolute left-1/2 top-1/2 hidden w-max -translate-y-1/2 items-center gap-[2.4vw] whitespace-nowrap px-3 text-[12vw] font-semibold leading-[0.9] tracking-[-0.03em] text-purple-dark md:flex"
      >
        <motion.span
          style={{ rotate: iconRotate }}
          className="flex h-[1.02em] w-[1.02em] shrink-0 items-center justify-center rounded-full bg-purple-dark"
        >
          <Image
            src="/LIK-Logo-Icon-Favicon-%20no%20bg.png"
            alt=""
            width={220}
            height={220}
            className="h-full w-full object-contain"
            priority={false}
          />
        </motion.span>
        <span>{HEADLINE}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-md items-center justify-center gap-3 px-6 text-center text-purple-dark md:hidden"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-dark">
          <Image
            src="/LIK-Logo-Icon-Favicon-%20no%20bg.png"
            alt=""
            width={72}
            height={72}
            className="h-10 w-10 object-contain"
            priority={false}
          />
        </span>
        <p className="text-[2.1rem] font-semibold leading-tight tracking-[-0.02em]">
          {HEADLINE}
        </p>
      </motion.div>
    </section>
  );
}
