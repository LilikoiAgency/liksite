"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const mobileSubmenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.04,
      },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
  };

  const mobileSubItemVariants: Variants = {
    hidden: { opacity: 0, y: 6, filter: "blur(3px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Targeted Streaming", href: "/services/targeted-streaming" },
        { label: "Paid Search", href: "/services/paid-search" },
        { label: "Paid Social", href: "/services/paid-social" },
      ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About Us", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const navLinkClass = (active: boolean) =>
    `px-3 py-1 rounded-full transition-colors ${
      active
        ? "bg-white/20 backdrop-blur-md border border-white/30 text-white"
        : "hover:text-purple-lilikoi"
    }`;

  return (
    <nav className="fixed w-full z-50 top-4 left-0 flex justify-center">
      {/* Desktop */}
      <div className="hidden w-[90%] max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/20 p-2 shadow-lg backdrop-blur-md transition-colors hover:border-white/60 md:flex">
        {/* Logo */}
        <a className="cursor-pointer pl-4" href="/">
          <Image
            src="/images/lilikoi%20agency%20logo.svg"
            alt="Lilikoi Agency"
            width={90}
            height={30}
            priority
          />
        </a>

        {/* Nav Items */}
        <ul className="hidden items-center gap-8 text-white font-light md:flex">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`${navLinkClass(isActive(item.href))} flex items-center gap-2`}
                  >
                    {item.label}
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="inline-flex"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-40 bg-white/20 backdrop-blur-md rounded-lg shadow-lg text-white font-thin flex flex-col"
                      >
                        {item.dropdown.map((dropItem, i) => (
                          <li key={i}>
                            <a
                              href={dropItem.href}
                              className={`block px-4 py-2 transition-colors ${
                                isActive(dropItem.href)
                                  ? "bg-white/20 backdrop-blur-md border border-white/30 rounded-md text-white"
                                  : "hover:bg-purple-lilikoi/30"
                              }`}
                            >
                              {dropItem.label}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a href={item.href} className={navLinkClass(isActive(item.href))}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-purple-dark text-white px-6 py-2 rounded-full font-light hover:bg-purple-lilikoi transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex w-[90%] items-center justify-between md:hidden">
        <motion.div
          layout
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-3 rounded-full border border-white/30 bg-white/20 px-3 py-2 shadow-lg backdrop-blur-md transition-colors hover:border-white/60"
        >
          <a className="cursor-pointer pl-1" href="/">
            <Image
              src="/images/lilikoi%20agency%20logo.svg"
              alt="Lilikoi Agency"
              width={90}
              height={30}
              priority
            />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white/60"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="relative block h-4 w-4">
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-[1.5px] w-4 bg-current"
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 0 : -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-[1.5px] w-4 bg-current"
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? 0 : 4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </span>
          </button>
        </motion.div>

        <a
          href="/contact"
          aria-label="Call"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md transition-colors hover:border-white/60"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 4.5c.7-1 2.1-1.3 3.2-.6l2 1.2c1 .6 1.4 1.9.9 3l-.7 1.5c-.2.5-.1 1.1.3 1.5l3.1 3.1c.4.4 1 .5 1.5.3l1.5-.7c1.1-.5 2.4-.1 3 .9l1.2 2c.7 1.1.4 2.5-.6 3.2-1.2.8-2.7 1.4-4.3 1.1-3.1-.5-6.6-3.2-9.2-5.8S4.7 9.9 4.2 6.8c-.3-1.6.3-3.1 1.3-4.3z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute top-full left-1/2 mt-3 w-[90%] -translate-x-1/2 rounded-2xl border border-white/30 bg-white/20 p-4 text-white shadow-lg backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4">
              <motion.a
                variants={mobileItemVariants}
                href="/"
                className={`font-light ${navLinkClass(isActive("/"))}`}
              >
                Home
              </motion.a>
              <motion.button
                variants={mobileItemVariants}
                type="button"
                onClick={() => setMobileServicesOpen((open) => !open)}
                className={`flex items-center justify-between font-light ${navLinkClass(isActive("/services"))}`}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    variants={mobileSubmenuVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="flex flex-col gap-3 pl-3 text-sm text-white/90 overflow-hidden"
                  >
                    <motion.a
                      variants={mobileSubItemVariants}
                      href="/services/targeted-streaming"
                      className={navLinkClass(isActive("/services/targeted-streaming"))}
                    >
                      Targeted Streaming
                    </motion.a>
                    <motion.a
                      variants={mobileSubItemVariants}
                      href="/services/paid-search"
                      className={navLinkClass(isActive("/services/paid-search"))}
                    >
                      Paid Search
                    </motion.a>
                    <motion.a
                      variants={mobileSubItemVariants}
                      href="/services/paid-social"
                      className={navLinkClass(isActive("/services/paid-social"))}
                    >
                      Paid Social
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.a
                variants={mobileItemVariants}
                href="/case-studies"
                className={`font-light ${navLinkClass(isActive("/case-studies"))}`}
              >
                Case Studies
              </motion.a>
              <motion.a
                variants={mobileItemVariants}
                href="/about"
                className={`font-light ${navLinkClass(isActive("/about"))}`}
              >
                About Us
              </motion.a>
              <motion.a
                variants={mobileItemVariants}
                href="/contact"
                className={`font-light ${navLinkClass(isActive("/contact"))}`}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
