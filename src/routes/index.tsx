import { createFileRoute } from "@tanstack/react-router";
import {
  Bug,
  Droplets,
  Rat,
  ShieldCheck,
  Sprout,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Award,
  Users,
  Leaf,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  Star,
  Quote,
  Facebook,
  Instagram,
  Youtube,
  CalendarCheck,
  BedDouble,
  Hammer,
} from "lucide-react";
import { useState, useEffect } from "react";

const siteUrl = "https://pest-free-gujarat.lovable.app";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "PestControlService",
      name: "Asian Pest Control (Munna Bhai)",
      image: `${siteUrl}/images/hero-pest-control.jpg`,
      telephone: "+91-99981-79902",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Fatehgunj Main Road",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390002",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "22.3193", longitude: "73.1899" },
      url: siteUrl,
      priceRange: "₹₹",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "182" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      areaServed: "Fatehgunj, Vadodara, Gujarat, India",
      foundingDate: "1995",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pest Control Services",
        itemListElement: [
          "Cockroach Control",
          "Termite Control",
          "Bed Bug Control",
          "Rodent Control",
          "Mosquito Control",
          "General Pest Control",
        ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
      },
    };
    const title = "Professional Pest Control in Vadodara | Asian Pest Control Since 1995";
    const description =
      "Asian Pest Control (Munna Bhai) offers professional cockroach, termite, bed bug, rodent and mosquito control in Fatehgunj, Vadodara. Safe, eco-friendly, since 1995. Call 99981 79902.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "pest control Vadodara, pest control Fatehgunj, termite treatment Vadodara, cockroach control, bed bug treatment, rodent control Gujarat",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: `${siteUrl}/images/hero-pest-control.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: `${siteUrl}/images/hero-pest-control.jpg` },
      ],
      links: [{ rel: "canonical", href: siteUrl }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
    };
  },
});

const phoneNumber = "+91 99981 79902";
const phoneHref = "tel:+919998179902";
const nickname = "Munna Bhai";
const waDigits = "919998179902";
const businessAddress = "Near Fatehgunj Main Road, Fatehgunj, Vadodara, Gujarat 390002";
const mapsQuery = "Fatehgunj,Vadodara,Gujarat";

const waLink = (msg: string) => `https://wa.me/${waDigits}?text=${encodeURIComponent(msg)}`;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Cockroach Control",
    description: "Odourless gel baiting and targeted sprays that wipe out colonies in kitchens and drains.",
    icon: Bug,
  },
  {
    title: "Termite Control",
    description: "Pre and post-construction anti-termite treatment with drilling, injection and warranty.",
    icon: Hammer,
  },
  {
    title: "Bed Bug Control",
    description: "Deep mattress, sofa and crevice treatment with a guaranteed follow-up round.",
    icon: BedDouble,
  },
  {
    title: "Rodent Control",
    description: "Safe trapping, baiting and proofing so rats and mice never find a way back in.",
    icon: Rat,
  },
  {
    title: "Mosquito Control",
    description: "Fogging, larvicide and residual spraying to break the breeding cycle around you.",
    icon: Droplets,
  },
  {
    title: "General Pest Control",
    description: "Complete cover for ants, lizards, spiders and flies — homes, shops and factories.",
    icon: ShieldCheck,
  },
];

const whyUs = [
  { title: "30 Years of Trust", description: "Serving Vadodara families and businesses continuously since 1995.", icon: Clock },
  { title: "Certified Technicians", description: "Trained, uniformed and background-verified pest management professionals.", icon: Award },
  { title: "Family & Pet Safe", description: "Government-approved, low-odour chemicals that are safe around kids and pets.", icon: Leaf },
  { title: "Free Inspection", description: "Honest on-site assessment and transparent pricing before any work starts.", icon: Sprout },
  { title: "Service Warranty", description: "Written warranty with free follow-up visits until the pests are gone.", icon: ShieldCheck },
  { title: "Same-Day Response", description: "Local Fatehgunj team reaching most Vadodara areas within hours.", icon: Users },
];

const testimonials = [
  {
    name: "Rakesh Patel",
    area: "Alkapuri, Vadodara",
    text: "Munna Bhai's team did our termite treatment before flooring. Two years later, zero issues. Very professional and punctual.",
  },
  {
    name: "Sneha Desai",
    area: "Gotri, Vadodara",
    text: "Cockroach problem in our restaurant kitchen was solved in one visit. Odourless treatment, we reopened the same evening.",
  },
  {
    name: "Imran Shaikh",
    area: "Fatehgunj, Vadodara",
    text: "Bed bug treatment done properly with a free follow-up. Honest pricing and genuinely helpful staff. Highly recommended.",
  },
];

const areas = [
  "Fatehgunj", "Alkapuri", "Sayajigunj", "Gotri", "Manjalpur", "Nizampura",
  "Karelibaug", "Waghodia Road", "Sama", "Tandalja", "Ajwa Road", "Vasna",
  "Harni", "Makarpura",
];

function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-background/90 shadow-soft backdrop-blur-md" : "bg-background/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-2.5">
            <img src="/favicon.png" alt="Asian Pest Control logo" width={40} height={40} className="h-10 w-10 shrink-0 rounded-xl" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-base font-extrabold text-navy sm:text-lg">
                Asian Pest Control
              </span>
              <span className="block truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                {nickname} • Since 1995
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-foreground/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:text-brand hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-bold text-brand-foreground shadow-soft transition-all hover:shadow-lift hover:brightness-105"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </nav>

          <button
            className="rounded-lg p-2 text-navy lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-base font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-brand"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl gradient-brand px-4 py-3 text-sm font-bold text-brand-foreground"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={waLink("Hi Asian Pest Control (Munna Bhai), I need pest control service in Vadodara.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand px-4 py-3 text-sm font-bold text-brand"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-sand pt-24 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24">
          <div className="reveal max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 text-sm font-semibold text-brand shadow-soft">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
              Trusted in Fatehgunj, Vadodara since 1995
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl lg:text-[3.5rem]">
              Professional Pest Control Services{" "}
              <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                You Can Trust
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Asian Pest Control, known locally as <strong className="text-navy">{nickname}</strong>, has protected homes,
              offices, restaurants and factories across Vadodara for over 30 years. Government-approved chemicals,
              trained technicians and a written service warranty on every treatment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-base font-bold text-brand-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a
                href={waLink("Hi Asian Pest Control (Munna Bhai), I would like to know more about your pest control services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-base font-bold text-navy-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-card px-6 py-3 text-base font-bold text-brand transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground"
              >
                <CalendarCheck className="h-5 w-5" /> Book a Service
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                { v: "30+", l: "Years Experience" },
                { v: "5,000+", l: "Properties Treated" },
                { v: "4.9★", l: "Customer Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-extrabold text-brand sm:text-3xl">{s.v}</dt>
                  <dd className="text-sm text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal relative">
            <div aria-hidden="true" className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] gradient-brand opacity-20" />
            <img
              src="/images/hero-pest-control.jpg"
              alt="Asian Pest Control technician treating a home in Vadodara, Gujarat"
              width={1440}
              height={960}
              className="w-full rounded-[2rem] shadow-soft"
              decoding="async"
              fetchPriority="high"
            />
            <div className="animate-float-soft absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-card p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy">Warranty Backed</span>
                  <span className="block text-xs text-muted-foreground">Free follow-up visits</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { icon: ShieldCheck, label: "Government Approved" },
            { icon: Leaf, label: "Eco-Friendly Products" },
            { icon: Clock, label: "Same-Day Service" },
            { icon: Award, label: "30+ Years Trusted" },
          ].map((b) => (
            <div key={b.label} className="reveal group flex flex-col items-center gap-2">
              <b.icon className="h-8 w-8 text-brand transition-transform group-hover:scale-110" />
              <span className="text-sm font-bold text-navy">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Services</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Complete Pest Control Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Residential, commercial and industrial treatments carried out by trained technicians with
              approved, low-odour chemicals.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-lift"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 scale-x-0 gradient-brand transition-transform duration-300 group-hover:scale-x-100"
                />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:gradient-brand group-hover:text-brand-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
                <a
                  href={waLink(`Hi Asian Pest Control (Munna Bhai), I need a quote for ${service.title} in Vadodara.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-all hover:gap-3"
                >
                  Get Free Quote <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why-us" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Vadodara's Dependable Pest Experts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are your neighbours in Fatehgunj — reachable, accountable and committed to lasting results.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="reveal flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal order-2 lg:order-1">
            <img
              src="/images/service-protection.jpg"
              alt="Home protected from cockroaches, termites, rodents and mosquitoes by Asian Pest Control"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[2rem] shadow-soft"
            />
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">About Us</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Three Decades of Pest-Free Homes
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded in 1995 in Fatehgunj, Asian Pest Control — popularly known as {nickname} — began with one
              promise: keep every home and workplace healthy, hygienic and pest-free.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Today our team serves apartments, bungalows, restaurants, hotels, schools, showrooms, warehouses
              and factories across Vadodara, combining proven techniques with modern eco-friendly formulations.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Licensed and insured pest control operator",
                "Trained, uniformed and punctual technicians",
                "Transparent pricing with no hidden charges",
                "Free follow-up visits until the problem is solved",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-medium text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-base font-bold text-brand-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <CalendarCheck className="h-5 w-5" /> Book a Service
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Testimonials</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Rated 4.9 out of 5 by more than 180 households and businesses in Vadodara.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="reveal relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-brand/15" />
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-muted-foreground">“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full gradient-brand font-display text-lg font-bold text-brand-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold text-navy">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">{t.area}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy py-16 text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div className="reveal">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Pest problem today? We can be there today.</h2>
            <p className="mt-2 text-navy-foreground/80">Free inspection across Vadodara. Call {nickname} on {phoneNumber}.</p>
          </div>
          <div className="reveal flex flex-wrap justify-center gap-3">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-base font-bold text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-6 py-3 text-base font-bold text-navy-foreground transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Areas We Serve in Vadodara</h2>
          </div>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-soft transition-colors hover:border-brand hover:text-brand"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Contact</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">Book a Service or Get a Free Quote</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Send your details and we will call you back within the hour — or reach us instantly on WhatsApp.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="reveal space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-muted-foreground">Phone / WhatsApp</div>
                      <a href={phoneHref} className="text-lg font-bold text-navy transition-colors hover:text-brand">
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-muted-foreground">Address</div>
                      <p className="text-lg font-bold text-navy">{businessAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-muted-foreground">Working Hours</div>
                      <p className="text-lg font-bold text-navy">Mon – Sat: 8:00 AM – 8:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Emergency service available</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl gradient-brand px-4 py-3 text-sm font-bold text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <a
                    href={waLink("Hi Asian Pest Control (Munna Bhai), I want to book a pest control service.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand px-4 py-3 text-sm font-bold text-brand transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Google Maps */}
              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="Asian Pest Control location in Fatehgunj, Vadodara on Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`}
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="reveal rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="text-xl font-bold text-navy">Request a Callback</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your enquiry goes straight to our WhatsApp on {phoneNumber}.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = String(data.get("name") ?? "").trim().slice(0, 100);
                  const phone = String(data.get("phone") ?? "").trim().slice(0, 20);
                  const service = String(data.get("service") ?? "").trim();
                  const message = String(data.get("message") ?? "").trim().slice(0, 1000);
                  if (!name || !/^[0-9+\s-]{10,20}$/.test(phone)) {
                    setFormError("Please enter your name and a valid phone number.");
                    return;
                  }
                  setFormError(null);
                  const url = waLink(
                    `Hi Asian Pest Control (${nickname}),\n\nName: ${name}\nPhone: ${phone}\nService: ${
                      service || "Not specified"
                    }\nDetails: ${message || "-"}`,
                  );
                  const link = document.createElement("a");
                  link.href = url;
                  link.target = "_blank";
                  link.rel = "noopener noreferrer";
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                  form.reset();
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground">Service needed</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/30"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">Details (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. 2BHK flat in Gotri, cockroaches in kitchen"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                {formError && (
                  <p role="alert" className="text-sm font-semibold text-destructive">{formError}</p>
                )}
                <button
                  type="submit"
                  className="w-full rounded-xl gradient-brand px-4 py-3.5 text-base font-bold text-brand-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Get Free Quote on WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Or call us directly at{" "}
                  <a href={phoneHref} className="font-bold text-brand hover:underline">{phoneNumber}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-14 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <img src="/favicon.png" alt="Asian Pest Control" width={40} height={40} className="h-10 w-10 rounded-xl" />
                <span className="leading-tight">
                  <span className="block font-display text-lg font-extrabold">Asian Pest Control</span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {nickname} • Since 1995
                  </span>
                </span>
              </div>
              <p className="mt-4 text-sm text-navy-foreground/75">
                Professional, eco-friendly pest control for homes and businesses across Fatehgunj, Vadodara and
                all of Gujarat.
              </p>
              <div className="mt-5 flex gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
                  { icon: Youtube, href: "https://www.youtube.com/", label: "YouTube" },
                  { icon: MessageCircle, href: waLink("Hi Asian Pest Control (Munna Bhai)!"), label: "WhatsApp" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-foreground/25 text-navy-foreground transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-brand-foreground"
                  >
                    <s.icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-brand">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
                {services.map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="transition-colors hover:text-brand">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
                <li>
                  <a href={phoneHref} className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-brand">
                    <Phone className="h-4 w-4 text-brand" /> {phoneNumber}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {businessAddress}
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Mon – Sat: 8 AM – 8 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-navy-foreground/15 pt-8 text-center text-sm text-navy-foreground/70">
            © {new Date().getFullYear()} Asian Pest Control ({nickname}). All rights reserved. Serving Vadodara,
            Gujarat since 1995.
          </div>
        </div>
      </footer>

      <WhatsAppToggle />
    </div>
  );
}

function WhatsAppToggle() {
  const [open, setOpen] = useState(false);
  const link = waLink("Hi Asian Pest Control (Munna Bhai), I need pest control service in Vadodara.");

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-border bg-card p-4 shadow-lift">
          <p className="font-bold text-navy">Chat with {nickname}</p>
          <p className="mt-1 text-xs text-muted-foreground">Asian Pest Control • {phoneNumber}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl gradient-brand px-4 py-2.5 text-sm font-bold text-brand-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Open WhatsApp
          </a>
          <a
            href={phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-bold text-navy transition-colors hover:border-brand hover:text-brand"
          >
            <Phone className="h-4 w-4" /> Call {phoneNumber}
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        className="animate-pulse-ring flex h-14 w-14 items-center justify-center rounded-full gradient-brand text-brand-foreground shadow-lift transition-transform hover:scale-110"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
