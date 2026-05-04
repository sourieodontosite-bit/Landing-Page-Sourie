import { Flower2, ArrowUp } from "lucide-react";
import cardCocreation from "@/assets/card-cocreation.jpg";
import cardCoffee from "@/assets/card-coffee.jpg";
import cardCalligraphy from "@/assets/card-calligraphy.jpg";

type Card = {
  image: string;
  title: string;
  description: string;
  badges: string[];
  footer: { label: string; icon?: boolean };
  alt: string;
};

const cards: Card[] = [
  {
    image: cardCocreation,
    title: "Co-creation team\ndesign",
    description: "Learn design methodology for managing teams and projects",
    badges: ["$ 140", "45 min"],
    footer: { label: "Self-serve workshop" },
    alt: "Two teammates collaborating on a design workshop",
  },
  {
    image: cardCoffee,
    title: "Coffee chats",
    description: "Help teammates get to know each other with randomly paired virtual coffee chats",
    badges: ["TOOL"],
    footer: { label: "Tool", icon: true },
    alt: "Single roasted coffee bean on dark background",
  },
  {
    image: cardCalligraphy,
    title: "Calligraphy essentials\nfor beginners",
    description: "Tips and tricks for basic letter formations and get your own calligraphy piece",
    badges: ["$ 120", "45 min"],
    footer: { label: "Self-serve workshop" },
    alt: "Hand painting calligraphy with a brush",
  },
];

const ConnectionSection = () => {
  return (
    <section className="w-full bg-background px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Banner */}
        <div
          className="relative overflow-hidden rounded-[32px] bg-connection px-6 pt-10 pb-72 sm:px-12 sm:pt-14 sm:pb-[22rem] lg:pb-[28rem]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
          }}
        >
          {/* Decorative blobs */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="blob-light" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(180 40% 75%)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="hsl(180 40% 75%)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="blob-deep" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(195 45% 22%)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="hsl(195 45% 22%)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="blob-warm" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(30 50% 75%)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(30 50% 75%)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="blob-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(180 50% 90%)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="hsl(180 50% 90%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="150" cy="380" rx="320" ry="260" fill="url(#blob-deep)" />
            <ellipse cx="1050" cy="120" rx="340" ry="240" fill="url(#blob-light)" />
            <ellipse cx="600" cy="520" rx="420" ry="180" fill="url(#blob-glow)" />
            <ellipse cx="1150" cy="480" rx="240" ry="220" fill="url(#blob-warm)" />
            <ellipse cx="500" cy="60" rx="280" ry="120" fill="url(#blob-light)" />
          </svg>

          {/* Header text */}
          <div className="relative max-w-md">
            <h2 className="text-3xl font-semibold tracking-tight text-connection-foreground sm:text-4xl">
              Best for team Chemistry
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-connection-foreground/85">
              Start your journey with our most popular surveys. We are creating statistics
              of your team measurable as soon as possible. Start your journey with our most
              popular surveys.
            </p>
          </div>

          {/* Team level indicator */}
          <div className="relative mt-12 flex flex-col items-center sm:mt-16">
            <span className="text-[11px] font-medium uppercase tracking-wide text-connection-foreground/80">
              Your team lvl
            </span>
            <span className="text-base font-semibold text-connection-foreground">32%</span>
          </div>

          {/* Giant Connection text with vertical line */}
          <div className="relative mt-2">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-[55%] w-px -translate-x-1/2 bg-connection-foreground/70"
            />
            <h3
              className="select-none text-center font-semibold leading-none text-connection-foreground/45"
              style={{
                fontSize: "clamp(3.5rem, 14vw, 12rem)",
                letterSpacing: "-0.045em",
              }}
            >
              Connection
            </h3>
          </div>
        </div>

        {/* Cards grid — overlapping the banner */}
        <div className="-mt-56 grid grid-cols-1 gap-5 px-2 sm:-mt-64 sm:grid-cols-2 lg:-mt-72 lg:grid-cols-3 lg:gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-[24px] bg-card shadow-[0_20px_50px_-20px_hsl(220_40%_20%/0.35)] transition-transform duration-500 hover:-translate-y-1"
            >
              <img
                src={c.image}
                alt={c.alt}
                width={768}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* bottom gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Top badges */}
              <div className="absolute left-4 top-4 flex gap-2">
                {c.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-black/45 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:p-6">
                <h4 className="whitespace-pre-line text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {c.title}
                </h4>
                <p className="text-[13px] leading-snug text-white/85">{c.description}</p>
                <div className="mt-2 flex items-center gap-2 border-t border-white/15 pt-3 text-[12px] text-white/75">
                  {c.footer.icon && <Flower2 className="h-3.5 w-3.5" />}
                  <span>{c.footer.label}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Recognition uplift line */}
        <div className="mt-14 px-2 text-center">
          <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Your team's <span className="text-connection-accent">Recognition</span> level
            uprising by{" "}
            <span className="inline-flex h-7 w-7 -translate-y-0.5 items-center justify-center rounded-full bg-connection-accent align-middle">
              <ArrowUp className="h-4 w-4 text-white" strokeWidth={3} />
            </span>{" "}
            12%
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
