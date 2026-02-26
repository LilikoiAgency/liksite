const VIDEOS = [
  "What makes a perfect client?",
  "How much money is enough money for these ads?",
  "How fast will I see results?",
];

function VideoCard({
  title,
  placeholderClass,
}: {
  title: string;
  placeholderClass: string;
}) {
  return (
    <article className="flex h-full min-w-0 flex-col">
      <div className={`w-full rounded-[22px] bg-purple-lilikoi ${placeholderClass}`} aria-hidden="true" />
      <h3 className="mt-4 break-words pr-1 text-left text-[clamp(0.95rem,1.2vw,1.25rem)] font-semibold leading-tight text-purple-dark">
        {title}
      </h3>
    </article>
  );
}

export default function VideoGridSection() {
  return (
    <section className="overflow-x-clip rounded-t-[36px] bg-gray-light px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-8 lg:h-[clamp(640px,68vw,900px)] lg:grid-cols-2 lg:grid-rows-2 lg:gap-10">
        <div className="min-w-0 lg:row-span-2">
          <VideoCard title={VIDEOS[0]} placeholderClass="aspect-[4/5] min-h-[320px] lg:h-full lg:aspect-auto lg:min-h-0" />
        </div>
        <div className="min-w-0">
          <VideoCard title={VIDEOS[1]} placeholderClass="aspect-[16/9] min-h-[220px] lg:h-full lg:aspect-auto lg:min-h-0" />
        </div>
        <div className="min-w-0">
          <VideoCard title={VIDEOS[2]} placeholderClass="aspect-[16/9] min-h-[220px] lg:h-full lg:aspect-auto lg:min-h-0" />
        </div>
      </div>
    </section>
  );
}
