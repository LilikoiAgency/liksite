import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Targeted Streaming", href: "/services/targeted-streaming" },
  { label: "Paid Search", href: "/services/paid-search" },
  { label: "Paid Social", href: "/services/paid-social" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[32px] bg-purple-dark px-6 pb-8 pt-16 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(157,144,197,0.38),transparent_42%),radial-gradient(circle_at_88%_92%,rgba(255,255,255,0.14),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="rounded-[26px] border border-white/20 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="inline-flex rounded-full bg-purple-lilikoi/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-purple-lilikoi">
                Lilikoi Agency
              </p>
              <h2 className="mt-4 max-w-md text-[clamp(1.7rem,3vw,2.7rem)] font-semibold leading-tight">
                Ready to turn attention into measurable growth?
              </h2>
              <Link
                href="/book-a-demo"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-dark transition-colors hover:bg-purple-lilikoi hover:text-white"
              >
                Book A Demo
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/90 transition-colors hover:text-purple-lilikoi">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Services</h3>
              <ul className="mt-4 space-y-2.5">
                {SERVICE_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/90 transition-colors hover:text-purple-lilikoi">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/90 transition-colors hover:border-purple-lilikoi hover:text-purple-lilikoi"
                >
                  <span className="text-sm font-semibold">IG</span>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/90 transition-colors hover:border-purple-lilikoi hover:text-purple-lilikoi"
                >
                  <span className="text-xs font-semibold">IN</span>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/90 transition-colors hover:border-purple-lilikoi hover:text-purple-lilikoi"
                >
                  <span className="text-xs font-semibold">YT</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-5 text-xs text-white/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lilikoi Agency. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-purple-lilikoi">Privacy</a>
            <a href="#" className="transition-colors hover:text-purple-lilikoi">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
