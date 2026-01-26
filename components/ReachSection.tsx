"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ReachSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const tileScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const tileWidth = useTransform(scrollYProgress, [0, 0.5], ["75%", "100%"]);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1b1422] px-6 py-24 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(157,144,197,0.25),_transparent_55%),_radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_50%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-8 top-8 opacity-2">
        <Image
          src="/images/lilikoi-flower.png"
          alt=""
          width={220}
          height={220}
          className="h-64 w-64 blur-[0.5px]"
          priority={false}
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-none">
        <h2 className="mb-10 text-center text-[3.8vw] font-semibold uppercase tracking-[0.22em] text-white whitespace-nowrap">
          Over +1 Billion Leads Reached
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ width: tileWidth, scale: tileScale }}
          className="relative mx-auto overflow-hidden rounded-[18px] bg-white/10 shadow-2xl backdrop-blur-md"
          onClick={toggleMute}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted={muted}
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <button
            type="button"
            className="absolute inset-0 z-10"
            aria-label={muted ? "Click to unmute" : "Click to mute"}
          />
          <button
            type="button"
            onClick={toggleMute}
            className="group absolute top-4 right-4 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-white/40"
            aria-pressed={!muted}
            title={muted ? "Click to unmute" : "Click to mute"}
          >
            {muted ? "Unmute" : "Mute"}
            <span className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white opacity-0 transition-opacity group-hover:opacity-100">
              Click to {muted ? "unmute" : "mute"}
            </span>
          </button>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/10 p-6 text-white shadow-lg backdrop-blur-md hidden md:block rounded-b-[18px]">
          <p className="text-base font-light text-white">
            Reach the right audience across streaming, search, and social with a
            unified strategy designed to drive attention, engagement, and real
            results.
          </p>
            <div className="mt-4">
              <a
                href="/book-a-demo"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-dark transition-colors hover:bg-purple-lilikoi hover:text-white"
              >
                Book Demo
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-6 w-full max-w-2xl text-center text-white md:hidden">
          <p className="text-base font-light">
            Reach the right audience across streaming, search, and social with a
            unified strategy designed to drive attention, engagement, and real
            results.
          </p>
          <div className="mt-4">
            <a
              href="/book-a-demo"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-dark transition-colors hover:bg-purple-lilikoi hover:text-white"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
