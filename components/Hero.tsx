"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [maskDone, setMaskDone] = useState(false);
  const maskTargetPosition = "33% 50%";

  return (
    <motion.section
      initial={{ minHeight: "100vh" }}
      animate={{ minHeight: "80vh" }}
      transition={{ duration: 7, ease: "easeOut", delay: 2 }}
      className="relative flex items-center justify-center overflow-hidden px-6 py-24"
    >
      <motion.div
        className="absolute inset-0"
        initial={{
          "--mask-size": "240px",
          "--mask-pos": "50% 50%",
          opacity: 0,
        }}
        animate={{
          "--mask-size": "190000px",
          "--mask-pos": maskTargetPosition,
          opacity: 1,
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          delay: 2,
          opacity: { duration: 0.8, ease: "easeOut" },
        }}
        onAnimationComplete={() => setMaskDone(true)}
        style={{
          WebkitMaskImage: maskDone
            ? "none"
            : "url(/images/lilikoi%20agency%20logo.svg)",
          maskImage: maskDone
            ? "none"
            : "url(/images/lilikoi%20agency%20logo.svg)",
          WebkitMaskRepeat: maskDone ? undefined : "no-repeat",
          maskRepeat: maskDone ? undefined : "no-repeat",
          WebkitMaskPosition: maskDone ? undefined : "var(--mask-pos)",
          maskPosition: maskDone ? undefined : "var(--mask-pos)",
          WebkitMaskSize: maskDone ? "auto" : "var(--mask-size)",
          maskSize: maskDone ? "auto" : "var(--mask-size)",
          willChange: "mask-size, mask-position",
        }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ opacity: 0.35 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.1 }}
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-purple-dark/80 md:bg-purple-dark/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(157,144,197,0.35),_transparent_60%)] opacity-40 md:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-30 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className="mb-8 h-[28vw] max-h-[220px] w-[80vw] max-w-[680px]" />

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 3.25 }}
          className="mb-8 text-3xl font-light text-white sm:text-4xl lg:text-5xl"
        >
          Say hello to the future of video marketing
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 3.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/services"
            className="rounded-full border border-white/40 bg-white/15 px-8 py-3 text-sm font-light uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white/25"
          >
            Discover
          </a>
          <a
            href="/book-a-demo"
            className="rounded-full bg-purple-lilikoi px-8 py-3 text-sm font-light uppercase tracking-wide text-white transition-colors hover:bg-purple-dark"
          >
            Book Demo
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
