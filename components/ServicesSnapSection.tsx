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
const PILL_THEMES = ["bg-[#034C3C] text-white", "bg-purple-dark text-white", "bg-purple-lilikoi text-white"];

export default function ServicesSnapSection() {
  return (
    <section className="bg-sand px-0 py-0" aria-label="Services cards">
      <div className="mx-auto flex w-[97%] flex-col md:w-[98%]">
        {CARDS.map((card, idx) => (
          <article key={card.service} className="min-h-[100svh] bg-sand p-2.5 md:p-3.5">
            <div className="relative flex h-full min-h-[calc(100svh-1.25rem)] items-end overflow-hidden rounded-[20px] border border-white/35 bg-[#d5c8f3] p-5 md:min-h-[calc(100svh-1.75rem)] md:rounded-[28px] md:p-8 lg:p-10">
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
    </section>
  );
}
