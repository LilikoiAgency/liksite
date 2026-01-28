"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function ReachSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [ended, setEnded] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const tileScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const tileWidth = useTransform(scrollYProgress, [0, 0.5], ["55%", "90%"]);
  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fx = useTransform([sx, scrollX], ([a, b]: number[]) => a + b);
  const fy = useTransform([sy, scrollY], ([a, b]: number[]) => a + b);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
    }
  };

  const scheduleHide = (delay = 8200) => {
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }
    controlsTimeout.current = setTimeout(() => setShowControls(false), delay);
  };

  const revealControls = () => {
    setShowControls(true);
    if (!isHovering) {
      scheduleHide();
    }
  };

  const seekBy = (amount: number) => {
    if (!videoRef.current) return;
    setEnded(false);
    const nextTime = Math.min(
      Math.max(0, videoRef.current.currentTime + amount),
      videoRef.current.duration || videoRef.current.currentTime + amount,
    );
    videoRef.current.currentTime = nextTime;
    revealControls();
  };

  const replay = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    void videoRef.current.play().catch(() => setEnded(true));
    setEnded(false);
    revealControls();
  };

  useEffect(() => {
    return () => {
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1b1422] px-6 py-24 text-white"
      onPointerMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mx.set(x * 20);
        my.set(y * 20);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(157,144,197,0.25),_transparent_55%),_radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_50%)]"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -left-24 top-6 h-80 w-80 rounded-full bg-white/10 blur-2xl"
        style={{ x: fx, y: fy }}
        animate={{ scale: [0.9, 1.08, 0.95], opacity: [0.18, 0.32, 0.18], x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute left-24 top-16 h-96 w-96 rounded-full bg-purple-lilikoi/20 blur-3xl"
        style={{ x: fx, y: fy }}
        animate={{ scale: [0.8, 1.15, 0.9], opacity: [0.12, 0.3, 0.18], x: [0, -16, 0], y: [0, 14, 0] }}
        transition={{ duration: 13, ease: "easeInOut", repeat: Infinity }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-10 bottom-16 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl"
        style={{ x: fx, y: fy }}
        animate={{ scale: [0.85, 1.05, 0.9], opacity: [0.18, 0.28, 0.18], x: [0, 10, 0], y: [0, 12, 0] }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute left-4 top-10 opacity-1 md:left-8 md:top-6"
        style={{ x: fx, y: fy }}
        animate={{ y: [0, -8, 0], x: [0, 6, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        aria-hidden="true"
      >
        <Image
          src="/images/lilikoi-flower.png"
          alt=""
          width={260}
          height={260}
          className="h-40 w-40 md:h-72 md:w-72"
          priority={false}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-6 top-40 opacity-5 md:right-40 md:top-16"
        style={{ x: fx, y: fy }}
        animate={{ y: [0, 10, 0], x: [0, -5, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        aria-hidden="true"
      >
        <Image
          src="/images/lilikoi-flower.png"
          alt=""
          width={180}
          height={180}
          className="h-28 w-28 blur-[0.6px] md:h-48 md:w-48"
          priority={false}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-10 bottom-10 opacity-5 md:left-12 md:bottom-16"
        style={{ x: fx, y: fy }}
        animate={{ y: [0, -6, 0], x: [0, 7, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        aria-hidden="true"
      >
        <Image
          src="/images/lilikoi-flower.png"
          alt=""
          width={140}
          height={140}
          className="h-24 w-24 blur-[0.8px] md:h-36 md:w-36"
          priority={false}
        />
      </motion.div>
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
          onPointerDown={revealControls}
          onPointerEnter={() => {
            setIsHovering(true);
            setShowControls(true);
            if (controlsTimeout.current) {
              clearTimeout(controlsTimeout.current);
            }
          }}
          onPointerLeave={() => {
            setIsHovering(false);
            scheduleHide(2500);
          }}
          onWheel={revealControls}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted={muted}
            playsInline
            onEnded={() => setEnded(true)}
            onPlay={() => setEnded(false)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div
            className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
              ended ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!ended}
          >
            <button
              type="button"
              onClick={replay}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/35 bg-white/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-md transition-colors transition-transform hover:bg-white/35 hover:scale-105 active:bg-white/45 md:px-7 md:py-4 md:text-sm animate-[playPulse_4s_ease-in-out_infinite]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 4l12 8-12 8z" />
              </svg>
              Play Again
            </button>
          </div>

          <div
            className={`absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 text-white transition-opacity duration-300 ${
              showControls && !ended ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
            onPointerEnter={() => {
              setIsHovering(true);
              setShowControls(true);
              if (controlsTimeout.current) {
                clearTimeout(controlsTimeout.current);
              }
            }}
            onPointerLeave={() => {
              setIsHovering(false);
              scheduleHide(1200);
            }}
          >
            <button
              type="button"
              onClick={() => seekBy(-10)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-lg backdrop-blur-md transition-colors hover:bg-white/25"
              aria-label="Back 10 seconds"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6v12" />
                <path d="M14 6l-8 6 8 6V6z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-lg backdrop-blur-md transition-colors hover:bg-white/25"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 9v6h4l5 4V5L8 9H4z" />
                  <path d="M16 9l5 5" />
                  <path d="M21 9l-5 5" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 9v6h4l5 4V5L8 9H4z" />
                  <path d="M16 8c1.5 1 1.5 7 0 8" />
                  <path d="M19 5c3 2 3 12 0 14" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => seekBy(10)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-lg backdrop-blur-md transition-colors hover:bg-white/25"
              aria-label="Forward 10 seconds"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6v12" />
                <path d="M10 6l8 6-8 6V6z" />
              </svg>
            </button>
          </div>

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
