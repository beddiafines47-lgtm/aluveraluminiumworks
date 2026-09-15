import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Instagram, Mail, MapPin, Menu, MessageCircle, Music2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/aluvera-logo-circle.png";
import doorsImage from "@/assets/aluminium-doors.jpg";
import windowsImage from "@/assets/aluminium-windows.jpg";
import facadeImage from "@/assets/glass-facade.jpg";
import interiorImage from "@/assets/interior-glass.jpg";
import railingImage from "@/assets/glass-railing.jpg";
import outdoorImage from "@/assets/outdoor-aluminium.jpg";
import metalImage from "@/assets/custom-metal-glass.jpg";
import roofImage from "@/assets/glass-roof-decor.jpg";

type Service = { title: string; description: string; details: string[]; label?: string; image: string };

const services: Service[] = [
  { title: "Aluminium Doors", description: "Custom-designed aluminium doors for villas, apartments, offices, shops, and commercial properties.", details: ["Sliding Doors", "Hinged Doors", "Folding / Bi-Fold Doors", "Pivot Doors", "Lift & Slide Doors", "Automatic Doors", "Aluminium & Glass Doors"], image: doorsImage },
  { title: "Aluminium Windows", description: "High-quality aluminium window systems designed for durability, functionality, and thermal performance.", details: ["Sliding Windows", "Casement Windows", "Fixed Windows", "Tilt & Turn Windows", "Awning Windows", "Double-Glazed Windows", "Thermal Break Windows"], image: windowsImage },
  { title: "Glass Doors", description: "Elegant and functional glass door solutions for residential and commercial spaces.", details: ["Frameless Glass Doors", "Sliding Glass Doors", "Hinged Glass Doors", "Pivot Glass Doors", "Automatic Glass Doors"], image: interiorImage },
  { title: "Aluminium & Glass Facades", description: "Modern façade solutions that enhance the appearance, performance, and value of buildings.", details: ["Curtain Wall Systems", "Stick Curtain Wall", "Unitized Curtain Wall", "Structural Glazing", "Spider Glazing", "Aluminium & Glass Facades"], image: facadeImage },
  { title: "Shopfronts", description: "Custom aluminium and glass shopfronts designed for retail stores, restaurants, cafés, salons, showrooms, and commercial spaces.", details: ["Aluminium Shopfronts", "Glass Shopfronts", "Shop Entrance Doors", "Sliding Shopfronts", "Automatic Shopfront Doors"], image: facadeImage },
  { title: "Glass Partitions", description: "Modern glass partition systems for offices, clinics, commercial spaces, and residential interiors.", details: ["Frameless Partitions", "Framed Partitions", "Single-Glazed Partitions", "Double-Glazed Partitions", "Office Glass Partitions", "Glass Partition Doors"], image: interiorImage },
  { title: "Glass Railings & Balustrades", description: "Safe and stylish glass railing systems for stairs, balconies, terraces, and pool areas.", details: ["Frameless Glass Railings", "Aluminium & Glass Railings", "Glass Balustrades", "Staircase Glass Railings", "Balcony Glass Railings", "Pool Glass Fencing"], image: railingImage },
  { title: "Shower Glass & Enclosures", description: "Custom shower glass solutions designed to create modern, clean, and functional bathrooms.", details: ["Frameless Shower Enclosures", "Framed Shower Enclosures", "Sliding Shower Doors", "Hinged Shower Doors", "Custom Shower Glass"], image: roofImage },
  { title: "Aluminium Pergolas", description: "Custom aluminium pergolas designed for villas, gardens, terraces, rooftops, and outdoor living spaces.", details: ["Fixed Pergolas", "Louvered Pergolas", "Motorized Pergolas", "Aluminium Pergolas with Glass", "Custom Outdoor Structures"], image: outdoorImage },
  { title: "Canopies & Shading Systems", description: "Durable aluminium structures designed to provide shade and protection for outdoor areas.", details: ["Car Parking Canopies", "Entrance Canopies", "Walkway Canopies", "Outdoor Shading", "Aluminium Sunshades"], image: outdoorImage },
  { title: "Aluminium Louvers", description: "Architectural aluminium louver systems designed for shading, privacy, ventilation, and modern façade design.", label: "Applications include", details: ["Building Facades", "Villa Facades", "Privacy Screens", "Air-Conditioning Concealment", "Decorative Architectural Louvers"], image: outdoorImage },
  { title: "Aluminium Cladding", description: "Aluminium composite panel solutions for modern building and commercial façades.", label: "Applications include", details: ["Building Facades", "Shopfronts", "Commercial Buildings", "Columns", "Soffits", "Decorative Exterior Cladding"], image: metalImage },
  { title: "Skylights & Glass Roofs", description: "Custom aluminium and glass skylight systems that bring natural light into residential and commercial spaces.", details: ["Flat Skylights", "Pyramid Skylights", "Glass Roofs", "Atrium Glazing", "Custom Skylight Systems"], image: roofImage },
  { title: "Decorative Glass & Mirrors", description: "Custom glass and mirror solutions for interior and architectural applications.", details: ["Decorative Glass", "Frosted Glass", "Tinted Glass", "Fluted Glass", "Custom Mirrors", "Backlit Mirrors", "Decorative Mirror Panels"], image: roofImage },
  { title: "Cast Aluminium", description: "Custom cast aluminium solutions for architectural, decorative, and outdoor applications.", label: "Applications include", details: ["Aluminium Gates", "Fences", "Balustrades", "Decorative Columns", "Architectural Details", "Outdoor Furniture", "Custom Cast Aluminium Designs"], image: metalImage },
  { title: "Custom Aluminium Fabrication", description: "Bespoke aluminium fabrication for unique residential, commercial, and architectural requirements.", details: ["Custom Aluminium Structures", "Decorative Screens", "CNC Aluminium Designs", "Custom Frames", "Architectural Features", "Bespoke Aluminium Products"], image: metalImage },
  { title: "Aluminium & Glass Maintenance", description: "Professional maintenance and repair services to keep aluminium and glass installations functioning safely and efficiently.", details: ["Door & Window Repairs", "Glass Replacement", "Roller & Wheel Replacement", "Lock & Handle Replacement", "Hinge Replacement", "Silicone Replacement", "Sliding System Repairs", "Leakage & Alignment Repairs"], image: windowsImage },
];

const solutions = [
  ["Residential", "Aluminium and glass solutions for villas, apartments, homes, terraces, balconies, gardens, and outdoor spaces."],
  ["Commercial", "Complete solutions for offices, shops, restaurants, cafés, salons, clinics, and showrooms."],
  ["Architectural", "Advanced façade and glazing solutions for large-scale construction and architectural projects."],
  ["Custom", "Bespoke aluminium and glass designs developed according to the client's requirements, dimensions, and architectural vision."],
  ["Maintenance", "Reliable repair and maintenance services for existing aluminium and glass installations."],
];

const team = [
  ["MA", "Mohmmed Al Arjaa", "CEO"], ["FA", "Fawzy Alqedra", "Project Manager"],
  ["SA", "Stephen Asante", "Supervisor"], ["BI", "Beddiaf Imen", "Social Media Manager"],
  ["YO", "Yasmine Oukacha", "Public Relations Manager"],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aluvera Aluminium Works | UAE" },
      { name: "description", content: "Premium aluminium, glass and decorative works for residential, commercial and architectural projects in the UAE." },
      { property: "og:title", content: "Aluvera Aluminium Works | UAE" },
      { property: "og:description", content: "Premium aluminium, glass and decorative works in the UAE." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<Service | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-border text-foreground">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-12">
          <button className="flex min-w-0 items-center gap-3 text-left" onClick={() => scrollTo("home")} aria-label="Go to home">
            <span className="text-sm font-semibold uppercase tracking-brand sm:text-base">Aluvera</span>
          </button>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest md:flex" aria-label="Main navigation">
            <button onClick={() => scrollTo("services")}>Services</button><button onClick={() => scrollTo("solutions")}>Solutions</button><button onClick={() => scrollTo("team")}>Team</button><button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>
          <Button variant="ghost" size="icon" className="border-border text-foreground md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu className="size-5" /></Button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">{["services", "solutions", "team", "contact"].map(item => <button key={item} onClick={() => scrollTo(item)} className="py-3 text-left text-xs font-medium uppercase tracking-widest">{item}</button>)}</nav>}
      </header>

      <section id="home" className="flex min-h-[92svh] items-center bg-background pt-20 text-foreground">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <img src={logoImage} alt="Aluvera Aluminium & Decor Works circular logo" className="size-56 object-contain sm:size-72 lg:size-80" />
          <div className="max-w-3xl lg:justify-self-end">
            <p className="mb-5 text-xs font-semibold uppercase tracking-brand text-accent-strong">United Arab Emirates · Established 2021</p>
            <h1 className="font-display text-4xl font-medium uppercase leading-tight sm:text-6xl lg:text-7xl">Aluvera Aluminium Works</h1>
            <p className="mt-5 max-w-xl font-display text-2xl leading-snug text-muted-foreground sm:text-3xl">Aluminium works shaped for spaces that deserve a lasting impression</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button onClick={() => scrollTo("services")}>Our Services <ArrowRight className="size-4" /></Button><Button variant="outline" onClick={() => scrollTo("contact")}>Contact Us</Button></div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="01" title="Our Services" />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => <button key={service.title} onClick={() => setSelected(service)} className="group flex min-h-[430px] flex-col bg-background text-left focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <div className="h-56 overflow-hidden"><img src={service.image} alt={service.title} loading="lazy" width={1920} height={1280} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
              <div className="flex flex-1 flex-col p-6"><span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-4 font-display text-2xl">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p><span className="mt-auto flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-widest">View details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div>
            </button>)}
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-16 bg-primary px-5 py-20 text-primary-foreground sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl"><SectionHeading number="02" title="Our Solutions" dark />
          <div className="mt-12 divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">{solutions.map(([title, description], i) => <article key={title} className="grid gap-4 py-7 sm:grid-cols-[5rem_1fr_2fr] sm:items-baseline"><span className="text-xs text-primary-foreground/50">0{i + 1}</span><h3 className="font-display text-2xl">{title}</h3><p className="max-w-2xl text-sm leading-6 text-primary-foreground/65">{description}</p></article>)}</div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl"><SectionHeading number="03" title="Why Aluvera" />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{["Quality", "Durability", "Custom Solutions", "Modern Design", "Professional Installation", "Maintenance"].map((item, i) => <div key={item} className="flex items-center gap-5 bg-background p-7"><span className="grid size-10 shrink-0 place-items-center border border-accent bg-secondary text-xs font-semibold">0{i + 1}</span><h3 className="font-display text-xl">{item}</h3></div>)}</div>
        </div>
      </section>

      <section id="team" className="scroll-mt-16 bg-secondary px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl"><SectionHeading number="04" title="Our Team" />
          <div className="mt-12 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">{team.map(([initials, name, role]) => <article key={name} className="bg-secondary"><div className="grid aspect-[4/5] place-items-center bg-team text-team-foreground"><span className="font-display text-5xl">{initials}</span></div><div className="border-t border-border py-5 pr-3"><h3 className="font-display text-lg leading-tight">{name}</h3><p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{role}</p></div></article>)}</div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl"><SectionHeading number="05" title="Contact Us" />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            <ContactLink icon={<Instagram />} label="Instagram" href="https://www.instagram.com/aluvera.group?stkn=amlnbWtyd29paGlk" />
            <ContactLink icon={<Music2 />} label="TikTok" href="https://www.tiktok.com/@aluvera.ae?_r=1&_t=ZS-99lPQqIsImz" />
            <ContactLink icon={<MapPin />} label="Google Maps" href="https://maps.app.goo.gl/8V9cYkoyz4U2ftmS7?g_st=iw" />
            <ContactLink icon={<MessageCircle />} label="WhatsApp" href="https://wa.me/971569009690?text=Hello%20ALUVERA%2C%20I%20would%20like%20to%20inquire%20about%20your%20projects%20and%20services." />
            <ContactLink icon={<Mail />} label="Email" href="mailto:info@aluvera.ae" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>Aluvera Aluminium Works</span><span>United Arab Emirates · Established 2021</span></div></footer>

      {selected && <div className="fixed inset-0 z-50 grid place-items-center bg-overlay p-3 sm:p-8" role="dialog" aria-modal="true" aria-labelledby="service-title" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
        <div className="relative grid max-h-[94svh] w-full max-w-5xl overflow-y-auto bg-background shadow-modal lg:grid-cols-2">
          <Button variant="default" size="icon" className="absolute right-3 top-3 z-10" onClick={() => setSelected(null)} aria-label="Close service details"><X className="size-5" /></Button>
          <img src={selected.image} alt={selected.title} width={1920} height={1280} className="h-64 w-full object-cover lg:sticky lg:top-0 lg:h-full lg:min-h-[650px]" />
          <div className="p-7 sm:p-10 lg:p-14"><p className="text-xs font-semibold uppercase tracking-brand text-muted-foreground">Service Details</p><h2 id="service-title" className="mt-5 font-display text-3xl sm:text-4xl">{selected.title}</h2><p className="mt-5 leading-7 text-muted-foreground">{selected.description}</p><h3 className="mt-9 text-xs font-semibold uppercase tracking-widest">{selected.label ?? "Services include"}</h3><ul className="mt-5 grid gap-3">{selected.details.map(item => <li key={item} className="flex items-center gap-3 border-b border-border pb-3 text-sm"><Check className="size-4 shrink-0 text-accent-strong" />{item}</li>)}</ul></div>
        </div>
      </div>}
    </main>
  );
}

function SectionHeading({ number, title, dark = false }: { number: string; title: string; dark?: boolean }) {
  return <div className="grid grid-cols-[auto_minmax(0,1fr)] items-end gap-5 border-b border-current/20 pb-5"><span className={dark ? "text-xs text-primary-foreground/50" : "text-xs text-muted-foreground"}>{number}</span><h2 className="font-display text-4xl sm:text-5xl">{title}</h2></div>;
}

function ContactLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex min-h-36 flex-col justify-between bg-background p-6 transition-colors hover:bg-secondary"><span className="[&>svg]:size-5">{icon}</span><span className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest">{label}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></a>;
}
