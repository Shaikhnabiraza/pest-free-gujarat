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
  ChevronRight,
  ArrowRight,
  MousePointer2,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const siteUrl = "https://id-preview--54f13ee3-bf4d-4242-a0fc-09e3186cf1d3.lovable.app";
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Asian Pest Control",
      image: `${siteUrl}/images/hero-pest-control.jpg`,
      telephone: "+91-99981-79902",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Fatehgunj Main Road",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.3072",
        longitude: "73.1812",
      },
      url: siteUrl,
      priceRange: "₹₹",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      areaServed: "Fatehgunj, Vadodara, Gujarat, India",
      serviceType: "Pest Control Services",
      foundingDate: "1995",
    };
    return {
      meta: [
        {
          title: "Asian Pest Control | Pest Control Services in Fatehgunj, Vadodara",
        },
        {
          name: "description",
          content:
            "Asian Pest Control has been protecting homes and businesses in Fatehgunj, Vadodara, Gujarat since 1995. Safe, effective and eco-friendly pest control solutions.",
        },
        { property: "og:title", content: "Asian Pest Control | Pest Control Services in Fatehgunj, Vadodara" },
        {
          property: "og:description",
          content:
            "Trusted pest control services in Vadodara since 1995. Residential, commercial and industrial pest management solutions.",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: `${siteUrl}/images/hero-pest-control.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${siteUrl}/images/hero-pest-control.jpg` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd),
        },
      ],
    };
  },
});

const phoneNumber = "+91 99981 79902";
const whatsappNumber = "+91 99981 79902";
const nickname = "Munna Bhai";
const phoneHref = "tel:+919998179902";
const businessAddress = "Asian Pest Control, Near Fatehgunj Main Road, Vadodara, Gujarat, India";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Cockroach Control",
    description: "Targeted gel and spray treatments to eliminate cockroaches and prevent reinfestation.",
    icon: Bug,
  },
  {
    title: "Termite Treatment",
    description: "Pre-construction and post-construction anti-termite solutions for lasting protection.",
    icon: MousePointer2,
  },
  {
    title: "Rodent Control",
    description: "Safe trapping and baiting programs to keep rats and mice out of your property.",
    icon: Rat,
  },
  {
    title: "Mosquito Control",
    description: "Fogging and larvicide treatments to reduce mosquito breeding and bites.",
    icon: Droplets,
  },
  {
    title: "Ant & General Pest",
    description: "Comprehensive indoor and outdoor treatment for ants, spiders, flies and more.",
    icon: ShieldCheck,
  },
  {
    title: "Eco-Friendly Options",
    description: "Family and pet-safe solutions using low-toxicity, environmentally responsible products.",
    icon: Sprout,
  },
];

const whyUs = [
  {
    title: "Since 1995",
    description: "Over 30 years of trusted pest control experience in Vadodara and surrounding areas.",
    icon: Clock,
  },
  {
    title: "Certified Technicians",
    description: "Our team is trained, experienced and follows safe application practices.",
    icon: Award,
  },
  {
    title: "Family & Pet Safe",
    description: "We use approved, low-odour products that are safe for your loved ones.",
    icon: Leaf,
  },
  {
    title: "Local & Responsive",
    description: "Based in Fatehgunj, we respond quickly across Vadodara and nearby towns.",
    icon: Users,
  },
];

const steps = [
  {
    step: "01",
    title: "Inspection",
    description: "We visit your site, identify the pest issue and assess the affected areas.",
  },
  {
    step: "02",
    title: "Custom Plan",
    description: "You receive a clear, honest quote and a treatment plan tailored to your needs.",
  },
  {
    step: "03",
    title: "Treatment",
    description: "Our technicians carry out the treatment safely and thoroughly with minimal disruption.",
  },
  {
    step: "04",
    title: "Follow-Up",
    description: "We schedule follow-ups and prevention tips to keep pests from returning.",
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 shadow-sm backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2">
            <img src="/favicon.png" alt="Asian Pest Control logo" width={36} height={36} className="rounded" />
            <div className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-navy">Asian Pest Control</span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-brand">
                {nickname}
              </span>
              <span className="block text-xs text-muted-foreground">Vadodara • Since 1995</span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </nav>

          <button
            className="rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-brand"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${phoneHref}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-base font-semibold text-brand-foreground"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-sand pt-28 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Serving Fatehgunj, Vadodara since 1995
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Protecting Your Home &amp; Business from Pests
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Asian Pest Control delivers safe, effective and affordable pest management solutions for
              homes, offices, shops and factories across Vadodara, Gujarat.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`${phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-brand-foreground shadow-md transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call for Free Quote
              </a>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent"
              >
                WhatsApp Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <div className="text-2xl font-bold text-brand">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand">5K+</div>
                <div className="text-sm text-muted-foreground">Homes Treated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-brand/10" />
            <img
              src="/images/hero-pest-control.jpg"
              alt="Pest control technician treating a home in Vadodara"
              width={1440}
              height={960}
              className="rounded-3xl shadow-lg"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-brand" />
            <span className="text-sm font-semibold text-navy">Government Approved</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Leaf className="h-8 w-8 text-brand" />
            <span className="text-sm font-semibold text-navy">Eco-Friendly Products</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="h-8 w-8 text-brand" />
            <span className="text-sm font-semibold text-navy">Same-Day Service</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Award className="h-8 w-8 text-brand" />
            <span className="text-sm font-semibold text-navy">30+ Years Trusted</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Pest Control Services We Offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From inspection to prevention, we cover every common pest problem in Gujarat homes and
              businesses.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <img
              src="/images/service-protection.jpg"
              alt="Family protected inside a shield from ants, cockroaches, mosquitoes and rodents"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-3xl shadow-lg"
              decoding="async"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              About Asian Pest Control
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded in 1995, Asian Pest Control has been a trusted name for pest management in
              Fatehgunj, Vadodara and across Gujarat. We started with a simple mission: keep homes and
              workplaces healthy, hygienic and pest-free.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Today our experienced technicians serve residential apartments, villas, restaurants,
              shops, warehouses, schools and factories. We combine time-tested methods with modern,
              eco-friendly products to deliver results you can see and feel.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Licensed and insured pest control operator",
                "Trained, uniformed and punctual technicians",
                "Honest pricing with no hidden charges",
                "Follow-up visits until the problem is solved",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are not just another pest control service. We are your neighbours, committed to
              lasting protection.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-20 text-navy-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-navy-foreground/80">
              A simple four-step process to get your property pest-free again.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="relative rounded-2xl bg-navy-foreground/10 p-6 backdrop-blur-sm">
                <span className="text-4xl font-bold text-brand">{step.step}</span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-navy-foreground/80">{step.description}</p>
                <ChevronRight className="absolute right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-navy-foreground/40 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Areas We Serve</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Based in Fatehgunj, we cover all major neighbourhoods of Vadodara and nearby locations.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              "Fatehgunj",
              "Alkapuri",
              "Sayajigunj",
              "Gotri",
              "Manjalpur",
              "Nizampura",
              "Karelibaug",
              "Waghodia Road",
              "Sama",
              "Tandalja",
              "Ajwa Road",
              "Vasna",
              "Harni",
              "Makarpura",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Get a Free Quote Today
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Call, WhatsApp or visit us. We respond quickly and offer free inspections for most
                residential and commercial properties in Vadodara.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Phone / WhatsApp</div>
                    <a
                      href={`${phoneHref}`}
                      className="text-lg font-semibold text-navy hover:text-brand"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Address</div>
                    <p className="text-lg font-semibold text-navy">{businessAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Working Hours</div>
                    <p className="text-lg font-semibold text-navy">Mon – Sat: 8:00 AM – 8:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Emergency service available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-semibold text-navy">Request a Callback</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details and we will call you back within the hour.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = data.get("name");
                  const phone = data.get("phone");
                  const message = data.get("message");
                  const body = `Hi Asian Pest Control,%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
                  window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${body}`, "_blank");
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Pest problem / service needed
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. Cockroach treatment for 2BHK"
                    className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand px-4 py-3 text-base font-semibold text-brand-foreground shadow-md transition-transform hover:scale-[1.02]"
                >
                  Send via WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Or call us directly at{" "}
                  <a href={`${phoneHref}`} className="font-medium text-brand hover:underline">
                    {phoneNumber}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <img src="/favicon.png" alt="Asian Pest Control" width={32} height={32} className="rounded" />
                <div className="leading-tight">
                  <span className="block text-lg font-bold text-navy">Asian Pest Control</span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-brand">
                    {nickname}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Trusted pest control services in Fatehgunj, Vadodara, Gujarat since 1995.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-navy">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-brand">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy">Services</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="transition-colors hover:text-brand">
                    Cockroach Control
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-brand">
                    Termite Treatment
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-brand">
                    Rodent Control
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-brand">
                    Mosquito Control
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>{phoneNumber}</li>
                <li>{businessAddress}</li>
                <li>Mon – Sat: 8 AM – 8 PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Asian Pest Control. All rights reserved. Serving Vadodara,
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
  const waLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi Asian Pest Control (Munna Bhai), I need pest control service in Vadodara.",
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-64 rounded-2xl border border-border bg-card p-4 shadow-xl">
          <p className="text-sm font-semibold text-navy">Chat with {nickname}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Asian Pest Control • {phoneNumber}
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Open WhatsApp
          </a>
          <a
            href={`${phoneHref}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4" />
            Call {phoneNumber}
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
