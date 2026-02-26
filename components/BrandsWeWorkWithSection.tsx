const BRANDS = [
  "Atlas Co.",
  "Summit Labs",
  "Northline",
  "Harbor Group",
  "Orchid Media",
  "Pinnacle",
  "Lumen House",
  "Driftworks",
];

export default function BrandsWeWorkWithSection() {
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-sand px-0 py-24 text-purple-dark md:px-6">
      <div className="mx-auto w-full max-w-none md:max-w-7xl">
        <div className="mb-10 px-6 text-center md:px-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-lilikoi">
            Trusted Partners
          </p>
          <h2 className="mt-3 text-balance text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-tight">
            Brands we work with
          </h2>
        </div>

        <div className="relative overflow-hidden py-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-sand to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-sand to-transparent" />

          <div className="brands-marquee-track flex w-max items-center gap-4 md:gap-5">
            {marqueeItems.map((brand, idx) => (
              <div
                key={`${brand}-${idx}`}
                className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-purple-dark/10 bg-white px-5 py-4 text-purple-dark shadow-sm md:min-w-[220px]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-lilikoi/20 text-purple-lilikoi">
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
                    <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold md:text-base">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
