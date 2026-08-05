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

const WHATSAPP = "https://wa.me/15406304187";
const PHONE = "(540) 630-4184";
const EMAIL = "thedetailartisan@gmail.com";

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

const PACKAGES = [
  { id: "quick", name: "Quick Detail", price: 84.99, label: "Quick Detail" },
  { id: "wash", name: "Wash and Wax", price: 149.99, label: "Wash & Wax" },
  { id: "full", name: "Artisan Full Reset", price: 219.99, label: "Artisan Full Reset" },
];

const ADDONS = [
  { id: "pethair", name: "Pet Hair Removal", price: 59.99 },
  { id: "shampoo", name: "Interior Shampoo", price: 49.99 },
  { id: "headlight", name: "Headlight Restoration", price: 99.99 },
];

function Landing() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />

      <Services />
      <AddOns />
      <Trust />

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
/* ==================== TODAS LAS FUNCIONES QUE FALTAN ==================== */

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-onyx pt-20 pb-10">
      <div className="container-luxe">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="The Detail Artisan" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-display text-xl tracking-luxe text-silver-gradient">THE DETAIL ARTISAN</div>
                <div className="text-[10px] tracking-luxe text-silver-dim mt-1">LUXURY MOBILE DETAILING</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Concierge-level mobile auto detailing across Northern Virginia. Premium products. Obsessive care. A finish worthy of the vehicle you drive.
            </p>
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
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-silver-dim">
          © {new Date().getFullYear()} The Detail Artisan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </span>
    </a>
    
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
        scrolled ? "backdrop-blur-2xl bg-black/40 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="The Detail Artisan" className="h-20 w-20 object-contain" width={40} height={40} />
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
              className="text-xs tracking-luxe uppercase text-white/55 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
          href="#contact"
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
          className="h-full w-full object-cover shadow-[0_20px_80px_rgba(255,255,255,0.06)] brightness-[0.45] contrast-125"
          width={1920}
          height={1280}
        />

        {/* MAIN DARK OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* SOFT GLOW */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-glow)" }}
        />
      </div>

      {/* Floating particles */}

      <div className="relative container-luxe pt-40 pb-32 z-20">
        <div className="max-w-3xl animate-fade-up">

          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] tracking-luxe uppercase text-white/45">
              By Appointment · Mobile Service
            </span>
          </div>

          {/* MAIN TITLE */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-bold">

            <span className="block text-white">
              Luxury Mobile
            </span>

            <span className="block text-white">
              Auto Detailing
            </span>

            <span className="block font-serif italic text-xl sm:text-2xl lg:text-3xl mt-5 text-white/60 tracking-normal">
              that comes to you.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
            Concierge-level detailing delivered directly to your driveway.
            Professional-grade products, obsessive attention to detail,
            and a finish worthy of the vehicle you drive.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

            {/* PRIMARY BUTTON */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white text-black px-7 py-4 rounded-sm font-medium text-sm tracking-luxe uppercase hover:bg-zinc-200 transition-all shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]"
            >
              Request Consultation

              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-sm font-medium text-sm tracking-luxe uppercase text-white border border-white/25 hover:border-white hover:bg-white/5 transition-all backdrop-blur-xl"
            >
              Book Appointment
            </a>
          </div>

          {/* FEATURES */}
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-[11px] tracking-luxe uppercase text-white/50">

            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-white" />
              Professional Grade
            </div>

            <div className="flex items-center gap-2">
              <Car size={14} className="text-white" />
              Mobile Service
            </div>

            <div className="flex items-center gap-2">
              <Award size={14} className="text-white" />
              Luxury Finish
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20">
        <div className="text-[10px] tracking-luxe uppercase text-white/40">
          Scroll
        </div>

        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
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
        <SectionHeading kicker="The Standard" title="A Different Class of Detail" center />
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
function SectionHeading({
  kicker,
  title,
  subtitle,
  center,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div
      className={`w-full ${
  center
    ? "flex flex-col items-center justify-center text-center mx-auto"
    : "flex flex-col items-start text-left"
}`}
    >

      {/* Kicker */}
      <div
  className={`w-full flex items-center gap-4 mb-6 ${
    center ? "justify-center" : "justify-start"
  }`}
>

        <span className="h-px w-14 bg-gradient-to-r from-transparent to-silver/60" />

        <span className="text-[11px] uppercase tracking-[0.35em] text-white/70 text-center">
          {kicker}
        </span>

        <span className="h-px w-14 bg-gradient-to-r from-silver/60 to-transparent" />
      </div>

      {/* Title */}
      <h2
  className={`font-display uppercase text-white text-[40px] md:text-[72px] leading-[0.95] tracking-tight ${
    center ? "mx-auto text-center" : "text-left"
  }`}
>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
  className={`mt-8 text-white/65 text-[16px] md:text-[22px] leading-relaxed ${
    center
      ? "max-w-4xl mx-auto text-center"
      : "max-w-xl text-left"
  }`}
>
          {subtitle}
        </p>
      )}
    </div>
  );
}
/* ───────────── SERVICES ───────────── */
function Services() {
  const packages = [
    {
      name: "Artisan Full Reset",
      price: "$249.99",
      desc: "Our most complete interior and exterior transformation for a fully refreshed vehicle.",
      includes: [
        "Hand Wash & Wheel Detail",
        "Premium Wax or Sealant",
        "Interior Deep Cleaning",
        "Steam Cleaning",
        "Carpet & Seat Extraction",
      ],
      cta: "Book Full Reset",
      featured: false,
    },
    {
      name: "Mini Detail",
      price: "$149.99",
      desc: "A balanced deep-clean service to refresh, protect, and maintain your vehicle’s appearance.",
      includes: [
        "Hand Wash & Wheel Detail",
        "Interior Vacuum",
        "Dashboard & Panels Cleaned",
        "Leather Conditioning",
        "Windows & Trunk Cleaned",
      ],
      cta: "Book Signature",
      featured: true,
    },
    {
      name: "Quick Detail",
      price: "$119.99",
      desc: "Fast, convenient maintenance for a clean and polished vehicle—perfect for busy lifestyles.",
      includes: [
        "Hand Wash & Dry",
        "Wheel Cleaning",
        "Tire Shine",
        "Interior Vacuum",
        "Windows Cleaned", 
      ],
      cta: "Book Essential",
      featured: false,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative container-luxe">

<div className="text-center flex flex-col items-center">

  {/* Kicker */}
  <div className="flex items-center gap-4 mb-6">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/40" />

    <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
      Luxury Packages
    </span>

    <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/40" />
  </div>

  {/* Title */}
  <h2 className="font-display uppercase text-white text-[42px] md:text-[72px] leading-[0.95] tracking-tight text-center">
    Premium Detailing Services
  </h2>

  {/* Subtitle */}
  <p className="mt-8 max-w-4xl mx-auto text-center text-white/65 text-[16px] md:text-[22px] leading-relaxed">
    Premium mobile detailing crafted for drivers who demand
    presentation, refinement, and care.
  </p>

</div>

{/* Cards */}
<div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">

  {packages.map((p) => (
    <div
      key={p.name}
      className={`group relative rounded-[34px] overflow-hidden transition-all duration-700 ${
        p.featured
          ? "scale-[1.04] z-20"
          : "opacity-100"
      }`}
    >

      {/* GOLD GLOW */}
      <div
        className={`absolute -inset-[2px] rounded-[34px] blur-2xl transition-all duration-700 ${
          p.featured
            ? "bg-[radial-gradient(circle_at_top,rgba(255,240,210,0.45),transparent_65%)] opacity-100"
            : "bg-[radial-gradient(circle_at_top,rgba(255,210,120,0.18),transparent_70%)] opacity-70"
        }`}
      />

      {/* BORDER */}
      <div
        className={`absolute inset-0 rounded-[34px] pointer-events-none ${
          p.featured
            ? "border border-[#ffe8c2]/60 shadow-[0_0_70px_rgba(255,240,220,0.18)]"
            : "border border-white/10 shadow-[0_0_30px_rgba(255,210,120,0.06)]"
        }`}
      />

      {/* TOP LIGHT */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full blur-sm ${
          p.featured
            ? "w-[70%] bg-[#fff4df]"
            : "w-[50%] bg-[#f4d6a3]"
        }`}
      />

      {/* BOTTOM LIGHT */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full blur-sm ${
          p.featured
            ? "w-[55%] bg-[#fff4df]"
            : "w-[35%] bg-[#f4d6a3]"
        }`}
      />

      {/* CARD */}
      <div
        className={`relative h-full rounded-[34px] backdrop-blur-xl px-6 lg:px-10 py-10 lg:py-12 transition-all duration-700 ${
          p.featured
            ? "bg-[linear-gradient(180deg,rgba(15,15,15,0.98),rgba(5,5,5,0.96))]"
            : "bg-[linear-gradient(180deg,rgba(10,10,10,0.96),rgba(5,5,5,0.94))]"
        }`}
      >

        {/* FEATURED */}
        {p.featured && (
          <div className="absolute top-6 right-6">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#fff6e7] to-[#e7d2b2] text-black text-[10px] tracking-[0.18em] uppercase font-semibold shadow-[0_0_20px_rgba(255,255,255,0.25)]">
              ☆ Most Popular
            </div>
          </div>
        )}

        {/* PACKAGE */}
        <div className="text-[10px] uppercase tracking-[0.28em] text-white/45 mb-5">
          Package
        </div>

        {/* TITLE */}
        <h3
          className={`font-display uppercase leading-[0.95] text-white ${
            p.featured
              ? "text-[34px] lg:text-5xl"
              : "text-[30px] lg:text-[42px]"
          }`}
        >
          {p.name}
        </h3>

        {/* PRICE */}
        <div className="mt-8 flex items-end gap-3">

          <span className="text-white/45 uppercase text-[10px] tracking-[0.25em] mb-2">
            Starting at
          </span>

          <span
            className={`font-display leading-none text-white ${
              p.featured
                ? "text-6xl lg:text-7xl drop-shadow-[0_0_25px_rgba(255,255,255,0.18)]"
                : "text-5xl lg:text-6xl"
            }`}
          >
            {p.price}
          </span>
        </div>

        {/* DIVIDER */}
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] w-16 bg-[#f5ddb5] blur-sm" />
        </div>

        {/* DESCRIPTION */}
        <p className="text-white/78 leading-relaxed text-sm lg:text-[15px]">
          {p.desc}
        </p>

        {/* FEATURES */}
        <ul className="mt-8 space-y-4 lg:space-y-5">
          {p.includes.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm lg:text-[15px] text-white/88"
            >
              <div
                className={`h-5 w-5 lg:h-6 lg:w-6 rounded-full flex items-center justify-center ${
                  p.featured
                    ? "border border-[#ffe6be]/60 shadow-[0_0_12px_rgba(255,240,220,0.15)]"
                    : "border border-white/20"
                }`}
              >
                <Check size={12} className="text-white" />
              </div>

              {item}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
<a
  href="#contact"
  className={`group mt-10 h-[58px] lg:h-[62px] w-full rounded-2xl flex items-center justify-center gap-3 uppercase tracking-[0.18em] text-[11px] lg:text-[12px] font-medium transition-all duration-500 ${
    p.featured
      ? "bg-gradient-to-r from-[#fff6e8] to-[#dbc3a0] text-black shadow-[0_0_35px_rgba(255,240,220,0.18)] hover:scale-[1.02]"
      : "border border-white/15 text-white hover:bg-white hover:text-black"
  }`}
>
  Get a Quote

  <ChevronRight
    size={15}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>
      </div>
    </div>
  ))}
</div>
        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
            Pricing may vary depending on vehicle size and condition
          </p>
        </div>
      </div>
    </section>
  );
}
/* ───────────── ADD-ONS ───────────── */
function AddOns() {
  const addons = [
    {
      name: "Pet Hair Removal",
      price: "$59.99",
      description:
        "Complete removal of embedded pet hair from carpets, seats, and cargo areas.",
    },
    {
      name: "Interior Shampoo",
      price: "$49.99",
      description:
        "Deep shampoo treatment for carpets and fabric seats to remove stains, spills, and odors.",
    },
    {
      name: "Headlight Restoration",
      price: "$99.99",
      description:
        "Restore cloudy or oxidized headlights for improved clarity, appearance, and nighttime visibility.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative container-luxe">

        {/* Heading */}
        <div className="text-center flex flex-col items-center">

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/40" />

            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              Premium Add-Ons
            </span>

            <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/40" />
          </div>

          <h2 className="font-display uppercase text-white text-[40px] md:text-[72px] leading-[0.95] tracking-tight text-center">
            Customize Your Detail
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-white/65 text-[16px] md:text-[22px] leading-relaxed">
            Enhance any detailing package with premium additional services.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {addons.map((addon) => (
            <div
              key={addon.name}
              className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,12,0.96),rgba(5,5,5,0.94))] backdrop-blur-xl p-8 transition-all duration-500 hover:border-[#ffe6be]/60 hover:shadow-[0_0_40px_rgba(255,240,220,0.12)] hover:-translate-y-2"
            >

              {/* Top Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-[60%] bg-[#ffe8c2] blur-sm" />

              <div className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                Add-On Service
              </div>

              <h3 className="mt-5 font-display uppercase text-[34px] leading-[0.95] text-white">
                {addon.name}
              </h3>

              <div className="mt-8">
                <span className="text-white/45 uppercase text-[10px] tracking-[0.25em]">
                  Starting at
                </span>

                <div className="mt-2 font-display text-6xl text-white">
                  {addon.price}
                </div>
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <p className="text-white/75 leading-relaxed">
                {addon.description}
              </p>

<a
  href="#contact"
  className="mt-10 h-[58px] w-full rounded-2xl border border-white/15 flex items-center justify-center gap-3 uppercase tracking-[0.18em] text-[11px] text-white transition-all hover:bg-white hover:text-black"
>
  Get a Quote

  <ChevronRight
    size={15}
    className="transition-transform group-hover:translate-x-1"
  />
</a>

            </div>
          ))}

        </div>

        <p className="mt-14 text-center text-[11px] uppercase tracking-[0.25em] text-white/35">
          Add-ons can be combined with any detailing package.
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
    <section className="relative py-36">
      <div className="container-luxe">
        <div className="text-center flex flex-col items-center">

  {/* Kicker */}
  <div className="flex items-center gap-4 mb-6">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/40" />

    <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
      The Craft
    </span>

    <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/40" />
  </div>

  {/* Title */}
  <h2 className="font-display uppercase text-white text-[38px] md:text-[72px] leading-[0.95] tracking-tight text-center">
    Where Obsession Meets Finish
  </h2>

</div>
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
    <section id="gallery" className="relative py-28 bg-white/[0.03]">
      <div className="container-luxe">
<div className="text-center flex flex-col items-center">

  {/* Kicker */}
  <div className="flex items-center gap-4 mb-6">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/40" />

    <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
      Transformations
    </span>

    <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/40" />
  </div>

  {/* Title */}
  <h2 className="font-display uppercase text-white text-[40px] md:text-[72px] leading-[0.95] tracking-tight text-center">
    Before & After
  </h2>

  {/* Subtitle */}
  <p className="mt-8 max-w-4xl mx-auto text-center text-white/65 text-[16px] md:text-[22px] leading-relaxed">
    Drag the divider to reveal the difference our process delivers.
  </p>

</div>
        <div className="mt-16 max-w-4xl mx-auto">
          <BeforeAfter before={before1} after={after1} />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[interior, paint, wheel, heroCar].map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-sm border border-white/10">
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
<div className="text-center flex flex-col items-center">

  {/* Kicker */}
  <div className="flex items-center gap-4 mb-6">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/40" />

    <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
      The Difference
    </span>

    <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/40" />
  </div>

  {/* Title */}
  <h2 className="font-display uppercase text-white text-[40px] md:text-[72px] leading-[0.95] tracking-tight text-center max-w-6xl">
    Quality Without Compromise
  </h2>
</div>
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
<div className="w-full flex flex-col items-center justify-center text-center mx-auto">

  {/* Kicker */}
  <div className="w-full flex items-center justify-center gap-4 mb-6">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/40" />

    <span className="text-[11px] uppercase tracking-[0.35em] text-white/70 text-center">
      Service Areas
    </span>

    <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/40" />
  </div>

  {/* Title */}
  <h2 className="mx-auto font-display uppercase text-white text-[40px] md:text-[72px] leading-[0.95] tracking-tight text-center">
    Where We Arrive
  </h2>

  {/* Subtitle */}
  <p className="mt-8 max-w-4xl mx-auto text-center text-white/65 text-[16px] md:text-[22px] leading-relaxed">
    A fully mobile operation serving discerning drivers across Northern Virginia and beyond.
  </p>

</div>
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
<div className="w-full flex flex-col items-center justify-center text-center mx-auto">

  {/* Kicker */}
  <div className="w-full flex items-center justify-center gap-4 mb-6">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/40" />

    <span className="text-[11px] uppercase tracking-[0.35em] text-white/70 text-center">
      Client Experiences
    </span>

    <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/40" />
  </div>

  {/* Title */}
  <h2 className="mx-auto font-display uppercase text-white text-[40px] md:text-[72px] leading-[0.95] tracking-tight text-center">
    Reviews — Coming Soon
  </h2>

  {/* Subtitle */}
  <p className="mt-8 max-w-4xl mx-auto text-center text-white/65 text-[16px] md:text-[22px] leading-relaxed">
    As a young brand, we let the work speak first. Verified client
    experiences will be featured here as we welcome new drivers into our care.
  </p>

</div>
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
    <section className="relative py-30 bg-onyx/40">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          <div>
            <SectionHeading kicker="Follow the Craft" title="The Artisan Feed" center/>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
  Follow every transformation, every detail, and the craftsmanship behind every vehicle we touch.
</p>
          
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/thedetailartisan/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm border border-silver/20 text-silver hover:bg-white/10 hover:border-silver transition-all text-xs tracking-luxe uppercase"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://www.tiktok.com/@thedetailartisan"
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

/* ───────────── CONTACT (CON PRECIO POR TAMAÑO + OPCIÓN "OTHER") ───────────── */
function Contact() {
  const [formData, setFormData] = useState({
    name: "", 
    phone: "", 
    year: "", 
    make: "", 
    model: "",
    size: "sedan" as "sedan" | "suv" | "truck" | "other",
    packageId: "wash",
    addons: [] as string[],
    notes: "",
  });

  const sizePrices: Record<string, number> = {
    sedan: 0,
    suv: 30,
    truck: 50,
    other: 40,
  };

  const selectedPackage = PACKAGES.find(p => p.id === formData.packageId)!;
  const selectedAddons = ADDONS.filter(a => formData.addons.includes(a.id));
  const sizeExtra = sizePrices[formData.size] || 0;
  const total = (selectedPackage.price + selectedAddons.reduce((sum, a) => sum + a.price, 0) + sizeExtra).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const vehicle = `${formData.year} ${formData.make} ${formData.model} (${formData.size.toUpperCase()})`;
    const addonList = selectedAddons.length ? selectedAddons.map(a => a.name).join(", ") : "Ninguno";

    const addonsPrice = selectedAddons
  .reduce((sum, a) => sum + a.price, 0)
  .toFixed(2);

      const msg = `
      ================================
      NEW DETAIL REQUEST
      ================================

      CUSTOMER
      --------------------------------
      Name: ${formData.name}
      Phone: ${formData.phone}

      VEHICLE
      --------------------------------
      Year: ${formData.year}
      Make: ${formData.make}
      Model: ${formData.model}
      Size: ${formData.size.toUpperCase()}

      PACKAGE
      --------------------------------
      ${selectedPackage.label}
      Price: $${selectedPackage.price}

      SIZE EXTRA
      --------------------------------
      $${sizeExtra}

      ADD-ONS
      --------------------------------
      ${addonList}
      Total Add-ons: $${addonsPrice}

      NOTES
      --------------------------------
      ${formData.notes || "No additional notes"}

      ================================
      ESTIMATED TOTAL: $${total}
      ================================
      `;

    window.open(`https://wa.me/15406304187?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const updateForm = (key: string, value: any) => setFormData(prev => ({ ...prev, [key]: value }));

  const toggleAddon = (id: string) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(id) ? prev.addons.filter(a => a !== id) : [...prev.addons, id]
    }));
  };

  return (
    <section id="contact" className="relative py-28 bg-black/40">
      <div className="relative container-luxe max-w-4xl mx-auto">
        <SectionHeading kicker="BOOKING" title="Reserve Your Appointment" subtitle="Tell us about your vehicle and we'll prepare your personalized quote." center />

        <form onSubmit={handleSubmit} className="glass-card p-12 mt-12 space-y-12">
          
          {/* YOUR INFORMATION */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-xl">👤</div>
              <h3 className="uppercase tracking-[0.125em] text-white/80 text-sm">YOUR INFORMATION</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest text-white/60 mb-2">FULL NAME</label>
                <input type="text" required value={formData.name} onChange={e => updateForm("name", e.target.value)} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-6 py-4 focus:border-white/30 outline-none" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-white/60 mb-2">PHONE NUMBER</label>
                <input type="tel" required value={formData.phone} onChange={e => updateForm("phone", e.target.value)} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-6 py-4 focus:border-white/30 outline-none" placeholder="(540) 555-1234" />
              </div>
            </div>
          </div>

          {/* YOUR VEHICLE */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-xl">🚗</div>
              <h3 className="uppercase tracking-[0.125em] text-white/80 text-sm">YOUR VEHICLE</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div><label className="block text-xs tracking-widest text-white/60 mb-2">YEAR</label><input type="text" required value={formData.year} onChange={e => updateForm("year", e.target.value)} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-6 py-4" placeholder="2024" /></div>
              <div><label className="block text-xs tracking-widest text-white/60 mb-2">MAKE</label><input type="text" required value={formData.make} onChange={e => updateForm("make", e.target.value)} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-6 py-4" placeholder="Toyota" /></div>
              <div><label className="block text-xs tracking-widest text-white/60 mb-2">MODEL</label><input type="text" required value={formData.model} onChange={e => updateForm("model", e.target.value)} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-6 py-4" placeholder="Camry" /></div>
            </div>

            <label className="block text-xs tracking-widest text-white/60 mb-3">VEHICLE SIZE</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "sedan", label: "Sedan", emoji: "🚗", extra: "$0" },
                { value: "suv", label: "SUV", emoji: "🚙", extra: "+$30" },
                { value: "truck", label: "Truck", emoji: "🛻", extra: "+$50" },
                { value: "other", label: "Other", emoji: "❓", extra: "+$40" },
              ].map(({ value, label, emoji, extra }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => updateForm("size", value)}
                  className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-2 ${formData.size === value ? 'border-amber-400 bg-white/5' : 'border-white/10 hover:border-white/30'}`}
                >
                  <span className="text-3xl">{emoji}</span>
                  <span className="font-medium">{label}</span>
                  <span className="text-xs text-white/60">{extra}</span>
                </button>
              ))}
            </div>
          </div>
          {/* PACKAGE */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-xl">📦</div>
              <h3 className="uppercase tracking-[0.125em] text-white/80 text-sm">PACKAGE</h3>
            </div>
            <div className="space-y-4">
              {PACKAGES.map(pkg => (
                <label 
                  key={pkg.id} 
                  className={`flex items-center justify-between p-6 rounded-2xl border cursor-pointer transition-all ${formData.packageId === pkg.id ? 'border-amber-400 bg-white/5' : 'border-white/10 hover:border-white/30'}`}
                >
                  <div>
                    <div className="font-medium">{pkg.label}</div>
                    <div className="text-sm text-white/60">Starting at ${pkg.price}</div>
                  </div>
                  <input type="radio" name="package" checked={formData.packageId === pkg.id} onChange={() => updateForm("packageId", pkg.id)} className="accent-amber-400" />
                </label>
              ))}
            </div>
          </div>

          {/* ADD-ONS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-xl">✨</div>
              <h3 className="uppercase tracking-[0.125em] text-white/80 text-sm">ADD-ONS</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {ADDONS.map(addon => (
                <label 
                  key={addon.id} 
                  className="flex items-center justify-between p-6 rounded-2xl border border-white/10 hover:border-white/30 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-4">
                    <input 
                      type="checkbox" 
                      checked={formData.addons.includes(addon.id)} 
                      onChange={() => toggleAddon(addon.id)} 
                      className="accent-amber-400 w-5 h-5" 
                    />
                    <span>{addon.name}</span>
                  </div>
                  <span className="text-white/70">+${addon.price}</span>
                </label>
              ))}
            </div>
          </div>

          {/* NOTES + TOTAL */}
<div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <label className="block text-xs tracking-widest text-white/60 mb-2">NOTES</label>
              <textarea value={formData.notes} onChange={e => updateForm("notes", e.target.value)} rows={5} className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-5 focus:border-white/30 outline-none" placeholder="Tell us about your vehicle's condition..." />
            </div>
            <div className="md:col-span-2 bg-zinc-950 border border-white/10 rounded-3xl p-8 flex flex-col justify-center text-center">
              <div className="text-sm text-white/60 mb-2">ESTIMATED TOTAL</div>
              <div className="text-5xl font-display text-white">${total}</div>
            </div>
          </div>

          <button type="submit" className="w-full py-5 bg-white text-black font-medium tracking-widest uppercase rounded-2xl hover:bg-amber-300 transition-all text-lg">
            GET MY FREE QUOTE
          </button>
        </form>
      </div>
    </section>
  );
}
