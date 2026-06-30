import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Droplets,
  Car,
  Clock,
  Award,
  ChevronRight,
  Check,
  Instagram,
  Music2,
  Menu,
  X,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import logo from "@/assets/logo.png";
import interior from "@/assets/interior.jpg";
import paint from "@/assets/paint.jpg";
import wheel from "@/assets/wheel.jpg";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Detail Artisan — Luxury Mobile Auto Detailing" },
      {
        name: "description",
        content:
          "Premium mobile auto detailing brought directly to your driveway across Fredericksburg, Fairfax, Stafford and Northern Virginia. By appointment only.",
      },
      { property: "og:title", content: "The Detail Artisan — Luxury Mobile Auto Detailing" },
      {
        property: "og:description",
        content: "Premium mobile auto detailing brought to your driveway. Concierge-level care for discerning drivers.",
      },
      { property: "og:image", content: heroCar },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/15710000000?text=Hi%20Detail%20Artisan%2C%20I%27d%20like%20to%20book%20a%20detail.";
const PHONE = "(571) 000-0000";
const EMAIL = "hello@thedetailartisan.com";

const AREAS = [
  "Fredericksburg",
  "Fauquier",
  "Fairfax",
  "Culpeper",
  "Stafford",
  "Frederick / Clarke",
  "Prince George",
  "Prince William",
  "Spotsylvania",
];

function Landing() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Trust />
      <Services />
      <Showcase />
      <Gallery />
      <WhyUs />
      <Areas />
      <Testimonials />
      <Social />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

/* ───────────── NAV ───────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#why", label: "Why Us" },
    { href: "#areas", label: "Areas" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="The Detail Artisan" className="h-10 w-10 object-contain" width={40} height={40} />
          <div className="leading-none">
            <div className="font-display text-lg tracking-luxe text-silver-gradient">THE DETAIL ARTISAN</div>
            <div className="text-[10px] tracking-luxe text-silver-dim mt-1">LUXURY MOBILE DETAILING</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-luxe uppercase text-muted-foreground hover:text-silver transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-luxe uppercase px-5 py-2.5 rounded-sm metallic-border text-silver hover:bg-white/5 transition-all"
          >
            Book Now
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-silver" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl">
          <div className="container-luxe py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-luxe uppercase text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-luxe uppercase px-5 py-3 rounded-sm metallic-border text-silver text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ───────────── HERO ───────────── */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxury vehicle detailed by The Detail Artisan"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      </div>

      {/* Floating particles */}
      <Particles />

      <div className="relative container-luxe pt-32 pb-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-silver animate-pulse" />
            <span className="text-[10px] tracking-luxe uppercase text-silver-dim">By Appointment · Mobile Service</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-wide">
            <span className="block text-silver-gradient">Luxury Mobile</span>
            <span className="block text-silver-gradient">Auto Detailing</span>
            <span className="block font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-4 text-white/80 tracking-normal">
              that comes to you.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Concierge-level detailing delivered to your driveway. Professional-grade products, obsessive attention to
            detail, and a finish worthy of the vehicle you drive.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white text-black px-7 py-4 rounded-sm font-medium text-sm tracking-luxe uppercase hover:bg-silver transition-all shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]"
            >
              Get Free Quote
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-sm font-medium text-sm tracking-luxe uppercase text-silver border border-white/15 hover:border-silver hover:bg-white/5 transition-all"
            >
              Book Appointment
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-[11px] tracking-luxe uppercase text-silver-dim">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-silver" /> Professional Grade
            </div>
            <div className="flex items-center gap-2">
              <Car size={14} className="text-silver" /> Mobile Service
            </div>
            <div className="flex items-center gap-2">
              <Award size={14} className="text-silver" /> Luxury Finish
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <div className="text-[10px] tracking-luxe uppercase text-silver-dim">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-silver to-transparent" />
      </div>
    </section>
  );
}

function Particles() {
  const particles = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i * 0.4) % 6;
        const size = (i % 3) + 1;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-silver/40 animate-float-particle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ───────────── MARQUEE ───────────── */
function Marquee() {
  const items = [
    "MOBILE SERVICE",
    "PROFESSIONAL GRADE",
    "BY APPOINTMENT",
    "LUXURY FINISH",
    "DETAIL OBSESSED",
    "CONCIERGE CARE",
  ];
  return (
    <div className="border-y border-white/5 bg-onyx/60 py-6 overflow-hidden">
      <div className="flex gap-16 whitespace-nowrap animate-[shimmer_30s_linear_infinite]" style={{ animation: "none" }}>
        <div className="flex gap-16 whitespace-nowrap">
          {[...items, ...items, ...items].map((t, i) => (
            <div key={i} className="flex items-center gap-16 text-silver-dim">
              <span className="font-display tracking-luxe text-sm">{t}</span>
              <span className="text-silver/40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────── TRUST ───────────── */
function Trust() {
  const items = [
    { icon: Car, title: "Mobile Convenience", desc: "We arrive fully equipped — water, power, premium tools. You stay home." },
    { icon: Sparkles, title: "Professional Products", desc: "Industry-leading chemicals, ceramic sealants, and finishing waxes only." },
    { icon: Droplets, title: "Obsessive Detail", desc: "Hand-finished work, soft microfibers, and meticulous craftsmanship at every pass." },
    { icon: Award, title: "Luxury-Level Finish", desc: "A presentation worthy of the vehicle — every paint pore, every stitch." },
    { icon: Clock, title: "Reliable Appointments", desc: "On-time arrivals, transparent timing, and clear post-service notes." },
    { icon: ShieldCheck, title: "Satisfaction Focused", desc: "We don't leave until the work meets our standard — and yours." },
  ];
  return (
    <section className="relative py-28">
      <div className="container-luxe">
        <SectionHeading kicker="The Standard" title="A Different Class of Detail" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="glass-card p-8 group hover:border-silver/30 hover:shadow-[0_20px_60px_-20px_rgba(192,192,192,0.2)] transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-sm metallic-border mb-6 group-hover:scale-110 transition-transform">
                <it.icon size={20} className="text-silver" />
              </div>
              <h3 className="font-display tracking-luxe text-xl mb-3 text-silver-gradient">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── SECTION HEADING ───────────── */
function SectionHeading({ kicker, title, subtitle, center }: { kicker: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <div className="flex items-center gap-3 mb-5">
        {center && <span className="h-px w-12 bg-gradient-to-r from-transparent to-silver/60" />}
        <span className="text-[10px] tracking-luxe uppercase text-silver">{kicker}</span>
        <span className="h-px w-12 bg-gradient-to-r from-silver/60 to-transparent" />
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-wide text-silver-gradient">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ───────────── SERVICES ───────────── */
function Services() {
  const packages = [
    {
      name: "Essential Detail",
      price: "$85",
      desc: "A premium maintenance detail designed to keep your vehicle clean, refreshed, and protected with a luxury touch.",
      includes: [
        "Interior Vacuuming",
        "Safe Hand Wash",
        "Wheel Cleaning",
        "Streak-Free Glass",
        "Air Freshener",
      ],
      cta: "Book Essential Detail",
      featured: false,
    },
    {
      name: "Signature Detail",
      price: "$120",
      desc: "A deeper restoration-focused detail for drivers who want elevated cleanliness and long-lasting shine.",
      includes: [
        "Interior Refresh",
        "Carpet & Seat Shampoo",
        "Ferric Decontamination",
        "Spray Sealant Protection",
        "Premium Exterior Wash",
      ],
      cta: "Book Signature Detail",
      featured: true,
    },
    {
      name: "Artisan Full Reset",
      price: "$220",
      desc: "The ultimate luxury detailing experience designed to completely transform and revive your vehicle.",
      includes: [
        "Full Interior Extraction",
        "Steam Cleaning",
        "Paint Decontamination",
        "Premium Wax Protection",
        "Odor Neutralization",
      ],
      cta: "Book Full Reset",
      featured: false,
    },
  ];

  const badges = ["Mobile Service Available", "Professional Grade Products", "By Appointment Only"];

  return (
    <section id="services" className="relative py-32 bg-onyx/40">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative container-luxe">
        <SectionHeading
          kicker="Curated Packages"
          title="Three Tiers of Mastery"
          subtitle="Each package is engineered for a specific outcome — from refined upkeep to total transformation. No upsells, no surprises."
          center
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <span
              key={b}
              className="text-[10px] tracking-luxe uppercase px-4 py-2 rounded-full border border-silver/20 bg-white/[0.02] text-silver-dim"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col group transition-all duration-500 ${
                p.featured ? "lg:-translate-y-4 lg:scale-[1.03]" : ""
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="text-[10px] tracking-luxe uppercase px-4 py-1.5 rounded-full bg-silver text-black font-medium">
                    Most Chosen
                  </span>
                </div>
              )}
              <div
                className={`flex-1 flex flex-col p-8 lg:p-10 rounded-sm relative overflow-hidden ${
                  p.featured ? "metallic-border" : "glass-card"
                }`}
                style={p.featured ? { boxShadow: "var(--shadow-luxe), var(--shadow-glow)" } : undefined}
              >
                {/* Top shimmer line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver/60 to-transparent" />

                <div className="text-[10px] tracking-luxe uppercase text-silver-dim">Package</div>
                <h3 className="font-display text-3xl lg:text-4xl tracking-luxe mt-2 text-silver-gradient">{p.name}</h3>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-[10px] tracking-luxe uppercase text-silver-dim">Starting at</span>
                  <span className="font-display text-4xl text-white">{p.price}</span>
                </div>

                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent" />

                <ul className="space-y-3 flex-1">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="mt-1 inline-flex items-center justify-center h-4 w-4 rounded-full border border-silver/40">
                        <Check size={10} className="text-silver" />
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-10 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm text-xs tracking-luxe uppercase font-medium transition-all group/cta ${
                    p.featured
                      ? "bg-white text-black hover:bg-silver"
                      : "border border-silver/30 text-silver hover:bg-white/5 hover:border-silver"
                  }`}
                >
                  {p.cta}
                  <ChevronRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs tracking-luxe uppercase text-silver-dim">
          Pricing varies by vehicle size and condition · Custom quotes available
        </p>
      </div>
    </section>
  );
}

/* ───────────── SHOWCASE ───────────── */
function Showcase() {
  const items = [
    { img: interior, label: "Interior", title: "Hand-Finished Cabin" },
    { img: paint, label: "Exterior", title: "Mirror-Grade Paint" },
    { img: wheel, label: "Wheels", title: "Decontaminated Detail" },
  ];
  return (
    <section className="relative py-28">
      <div className="container-luxe">
        <SectionHeading kicker="The Craft" title="Where Obsession Meets Finish" />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-sm aspect-[4/5] border border-white/5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={1280}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="text-[10px] tracking-luxe uppercase text-silver mb-2">{it.label}</div>
                <h3 className="font-display text-2xl tracking-luxe text-silver-gradient">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── GALLERY (Before/After) ───────────── */
function Gallery() {
  return (
    <section id="gallery" className="relative py-28 bg-onyx/40">
      <div className="container-luxe">
        <SectionHeading
          kicker="Transformations"
          title="Before & After"
          subtitle="Drag the divider to reveal the difference our process delivers."
          center
        />
        <div className="mt-16 max-w-4xl mx-auto">
          <BeforeAfter before={before1} after={after1} />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[interior, paint, wheel, heroCar].map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-sm border border-white/5">
              <img
                src={src}
                alt="Detailing work"
                loading="lazy"
                width={600}
                height={600}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setPos(p);
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      onMove(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-sm select-none border border-white/10"
      onMouseDown={(e) => {
        dragging.current = true;
        onMove(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        onMove(e.touches[0].clientX);
      }}
    >
      <img src={after} alt="After detailing" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="Before detailing"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: ref.current ? `${ref.current.clientWidth}px` : "100%", maxWidth: "none" }}
          loading="lazy"
          width={1024}
          height={1024}
        />
      </div>
      <div className="absolute top-4 left-4 text-[10px] tracking-luxe uppercase px-3 py-1.5 rounded-sm bg-black/60 backdrop-blur-md text-silver border border-white/10">
        Before
      </div>
      <div className="absolute top-4 right-4 text-[10px] tracking-luxe uppercase px-3 py-1.5 rounded-sm bg-black/60 backdrop-blur-md text-silver border border-white/10">
        After
      </div>
      <div
        className="absolute top-0 bottom-0 w-px bg-silver shadow-[0_0_20px_rgba(192,192,192,0.6)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black border border-silver flex items-center justify-center cursor-ew-resize">
          <ChevronRight size={14} className="text-silver -mr-1" />
          <ChevronRight size={14} className="text-silver rotate-180 -ml-1" />
        </div>
      </div>
    </div>
  );
}

/* ───────────── WHY US ───────────── */
function WhyUs() {
  const points = [
    "Concierge-level service brought to your driveway",
    "Premium chemicals, foams, and finishing products only",
    "Soft microfiber tools — never cheap brushes",
    "Honest scope, transparent pricing, no upsells",
    "Treated like the only car of the day — every time",
    "Post-service walkthrough on every appointment",
  ];
  return (
    <section id="why" className="relative py-28">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/5 order-2 lg:order-1">
          <img src={interior} alt="Detailing the interior" loading="lazy" width={1280} height={1280} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading kicker="The Difference" title="Quality Without Compromise" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The Detail Artisan was built on a single belief: a fine vehicle deserves a fine standard of care. We treat
            every appointment as a craft — patient, methodical, and uncompromising.
          </p>
          <ul className="mt-10 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-4 text-sm">
                <span className="mt-1.5 h-px w-8 bg-silver/60 shrink-0" />
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────── AREAS ───────────── */
function Areas() {
  return (
    <section id="areas" className="relative py-28 bg-onyx/40 overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(192,192,192,0.15) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative container-luxe">
        <SectionHeading
          kicker="Service Areas"
          title="Where We Arrive"
          subtitle="A fully mobile operation serving discerning drivers across Northern Virginia and beyond."
          center
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {AREAS.map((a, i) => (
            <div
              key={a}
              className="glass-card p-6 flex items-center gap-4 group hover:border-silver/30 transition-all"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative h-2 w-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-silver animate-ping opacity-50" />
                <span className="absolute inset-0 rounded-full bg-silver" />
              </div>
              <div>
                <div className="text-[10px] tracking-luxe uppercase text-silver-dim">County</div>
                <div className="font-display tracking-luxe text-lg text-silver-gradient">{a}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xs tracking-luxe uppercase text-silver-dim">
          Don't see your area? <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-silver underline-offset-4 hover:underline">Message us on WhatsApp</a>
        </p>
      </div>
    </section>
  );
}

/* ───────────── TESTIMONIALS ───────────── */
function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="container-luxe">
        <SectionHeading
          kicker="Client Experiences"
          title="Reviews — Coming Soon"
          subtitle="As a young brand, we let the work speak first. Verified client experiences will be featured here as we welcome new drivers into our care."
          center
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver/40 to-transparent" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-silver/40 text-lg">★</span>
                ))}
              </div>
              <div className="space-y-2 mb-8">
                <div className="h-3 w-full bg-white/5 rounded animate-shimmer" />
                <div className="h-3 w-5/6 bg-white/5 rounded animate-shimmer" />
                <div className="h-3 w-4/6 bg-white/5 rounded animate-shimmer" />
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10" />
                <div>
                  <div className="text-xs tracking-luxe uppercase text-silver-dim">Awaiting</div>
                  <div className="font-display tracking-luxe text-sm text-silver">Client Story</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── SOCIAL ───────────── */
function Social() {
  return (
    <section className="relative py-28 bg-onyx/40">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading kicker="Follow the Craft" title="The Artisan Feed" />
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              See process clips, finished work, and behind-the-scenes of every appointment on Instagram and TikTok.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm border border-silver/20 text-silver hover:bg-white/5 hover:border-silver transition-all text-xs tracking-luxe uppercase"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm border border-silver/20 text-silver hover:bg-white/5 hover:border-silver transition-all text-xs tracking-luxe uppercase"
              >
                <Music2 size={16} /> TikTok
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[heroCar, paint, interior, wheel, after1, before1].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-sm overflow-hidden border border-white/5 group">
                <img src={src} alt="Social post" loading="lazy" width={400} height={400} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Instagram size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── CONTACT ───────────── */
function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative container-luxe">
        <SectionHeading
          kicker="Booking"
          title="Reserve Your Appointment"
          subtitle="Tell us about your vehicle. We'll respond promptly with availability, timing, and a tailored quote."
          center
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <form
            className="lg:col-span-3 glass-card p-8 lg:p-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const msg = `Hi Detail Artisan,%0A%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0AVehicle: ${fd.get("vehicle")}%0APackage: ${fd.get("package")}%0ALocation: ${fd.get("location")}%0A%0ANotes: ${fd.get("notes")}`;
              window.open(`https://wa.me/15710000000?text=${msg}`, "_blank");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Vehicle (Year / Make / Model)" name="vehicle" required />
            <div className="grid sm:grid-cols-2 gap-5">
              <SelectField label="Preferred Package" name="package" options={["Essential Detail", "Signature Detail", "Artisan Full Reset", "Not Sure — Recommend"]} />
              <SelectField label="Service Area" name="location" options={AREAS} />
            </div>
            <Field label="Notes" name="notes" textarea placeholder="Tell us about your vehicle's condition, scheduling preferences, anything we should know…" />
            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-3 bg-white text-black px-7 py-4 rounded-sm font-medium text-sm tracking-luxe uppercase hover:bg-silver transition-all"
            >
              <MessageCircle size={16} /> Send Request via WhatsApp
            </button>
            <p className="text-[11px] text-silver-dim text-center">Submitting opens WhatsApp pre-filled. You can review before sending.</p>
          </form>

          {/* Contact card */}
          <aside className="lg:col-span-2 space-y-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="block group p-8 rounded-sm metallic-border hover:bg-white/[0.02] transition-all"
              style={{ boxShadow: "var(--shadow-luxe)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div className="text-[10px] tracking-luxe uppercase text-silver-dim">Fastest Reply</div>
              </div>
              <div className="font-display text-2xl tracking-luxe text-silver-gradient">WhatsApp Concierge</div>
              <p className="mt-2 text-sm text-muted-foreground">Direct message — typical reply within minutes during operating hours.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-luxe uppercase text-silver group-hover:gap-3 transition-all">
                Message Now <ChevronRight size={14} />
              </div>
            </a>

            <ContactRow icon={Phone} label="Phone" value={PHONE} href={`tel:${PHONE.replace(/\D/g, "")}`} />
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow icon={MapPin} label="Coverage" value="Northern Virginia · Mobile Service" />
            <ContactRow icon={Clock} label="Hours" value="By Appointment Only" />
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, textarea, placeholder }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean; placeholder?: string }) {
  const cls = "w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-foreground placeholder:text-silver-dim/60 focus:outline-none focus:border-silver focus:bg-white/[0.05] transition-all";
  return (
    <label className="block">
      <span className="block text-[10px] tracking-luxe uppercase text-silver-dim mb-2">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} rows={4} required={required} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-luxe uppercase text-silver-dim mb-2">{label}</span>
      <select
        name={name}
        className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-silver transition-all"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass-card p-5 flex items-center gap-4 hover:border-silver/30 transition-all">
      <div className="h-10 w-10 rounded-sm metallic-border flex items-center justify-center shrink-0">
        <Icon size={16} className="text-silver" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] tracking-luxe uppercase text-silver-dim">{label}</div>
        <div className="text-sm text-foreground truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}

/* ───────────── FOOTER ───────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-onyx pt-20 pb-10">
      <div className="container-luxe">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="The Detail Artisan" className="h-12 w-12 object-contain" width={48} height={48} loading="lazy" />
              <div>
                <div className="font-display text-xl tracking-luxe text-silver-gradient">THE DETAIL ARTISAN</div>
                <div className="text-[10px] tracking-luxe text-silver-dim mt-1">LUXURY MOBILE DETAILING</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Concierge-level mobile auto detailing across Northern Virginia. Premium products. Obsessive care. A finish
              worthy of the vehicle you drive.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-sm border border-white/10 flex items-center justify-center text-silver hover:bg-white/5 transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-sm border border-white/10 flex items-center justify-center text-silver hover:bg-white/5 transition-all">
                <Music2 size={16} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-sm border border-white/10 flex items-center justify-center text-silver hover:bg-white/5 transition-all">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-silver mb-5">Navigate</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-silver transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-silver transition-colors">Gallery</a></li>
              <li><a href="#why" className="hover:text-silver transition-colors">Why Us</a></li>
              <li><a href="#areas" className="hover:text-silver transition-colors">Service Areas</a></li>
              <li><a href="#contact" className="hover:text-silver transition-colors">Booking</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-silver mb-5">Service Areas</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {AREAS.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-silver-dim">© {new Date().getFullYear()} The Detail Artisan. All rights reserved.</div>
          <div className="text-[10px] tracking-luxe uppercase text-silver-dim">Crafted with obsession</div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────── FLOATING WHATSAPP ───────────── */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </span>
      <span className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs tracking-luxe uppercase px-3 py-2 rounded-sm bg-black border border-white/10 text-silver opacity-0 group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </span>
    </a>
  );
}
