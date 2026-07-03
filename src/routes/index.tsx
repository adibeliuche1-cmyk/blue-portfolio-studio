import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, Phone, Github, Linkedin, Code2, Palette, Rocket, Sparkles, Loader2, Globe } from "lucide-react";
import heroPortraitAsset from "@/assets/richie-nice.png.asset.json";
const heroPortrait = heroPortraitAsset.url;
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Richie Nice — Product Designer & Engineer" },
      { name: "description", content: "Portfolio of Richie Nice, a product designer and engineer crafting refined digital experiences." },
      { property: "og:title", content: "Richie Nice — Portfolio" },
      { property: "og:description", content: "Refined digital experiences in design and engineering." },
    ],
  }),
  component: Index,
});

function Index() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter your name (max 100 chars).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return toast.error("Please enter a valid email.");
    if (!message || message.length > 2000) return toast.error("Please enter a message (max 2000 chars).");

    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/richienice5@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New portfolio inquiry from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Couldn't send message. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center" aria-label="Richienice home">
            <img src={logo.url} alt="Richienice logo" className="h-14 w-auto object-contain" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-smooth">Work</a>
            <a href="#about" className="hover:text-foreground transition-smooth">About</a>
            <a href="#services" className="hover:text-foreground transition-smooth">Services</a>
            <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-smooth">
            Hire me <ArrowRight className="size-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-subtle" />
        <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-primary/20 blur-3xl animate-float -z-10" />
        <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent/40 blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Available for new projects · Q3 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Crafting digital
              <br />
              experiences with
              <br />
              <span className="text-gradient">precision & soul.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm Richie Nice — a product designer and engineer building thoughtful interfaces
              for ambitious teams. Currently shaping the next generation of fintech tools.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-gradient-hero text-primary-foreground px-6 py-3 text-sm font-medium shadow-elegant hover:scale-[1.02] transition-smooth">
                View selected work <ArrowRight className="size-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary transition-smooth">
                Get in touch
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div><div className="text-2xl font-bold text-foreground">3+</div>Years experience</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="text-2xl font-bold text-foreground">10+</div>Projects shipped</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="text-2xl font-bold text-foreground">2</div>Awards</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <div className="absolute inset-0 bg-gradient-hero opacity-40 mix-blend-overlay z-10" />
              <img src={heroPortrait} alt="Portrait of Richie Nice" width={1024} height={1280} className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-soft animate-float">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-hero grid place-items-center text-primary-foreground">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Awwwards</div>
                  <div className="text-xs text-muted-foreground">Site of the Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground">Trusted by teams at</p>
          {["Linear", "Stripe", "Vercel", "Figma", "Notion", "Arc"].map((b) => (
            <div key={b} className="text-xl font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition-smooth">{b}</div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">What I do</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A blend of craft, code, and clarity.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Palette, title: "Product Design", desc: "End-to-end interface design from research to polished pixels, design systems, and prototypes." },
              { icon: Code2, title: "Engineering", desc: "Production-grade React, JavaScript, and motion. Code that designers love and engineers respect." },
              { icon: Rocket, title: "Brand & Strategy", desc: "Identity systems, voice, and positioning for early-stage startups ready to make a mark." },
              { icon: Globe, title: "Front-End Developer & WordPress Developer", desc: "I build fast, responsive, and modern websites that help businesses grow online." },
            ].map((s, i) => (
              <div key={i} className="group relative p-8 rounded-3xl border border-border bg-card hover:shadow-elegant transition-smooth overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-smooth" />
                <div className="size-12 rounded-2xl bg-gradient-hero grid place-items-center text-primary-foreground shadow-soft mb-6">
                  <s.icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-28 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Selected work</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Recent projects.</h2>
            </div>
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth inline-flex items-center gap-1">
              View archive <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Lumen Banking", tag: "Fintech · 2026", desc: "Reimagining personal banking for the next decade." },
              { title: "Northwind CRM", tag: "SaaS · 2025", desc: "A calmer, smarter way to manage customer relationships." },
              { title: "Atlas Maps", tag: "Mobile · 2025", desc: "Spatial wayfinding rebuilt around human intuition." },
              { title: "Echo Studio", tag: "Brand · 2024", desc: "An identity system for an audio-first creator platform." },
            ].map((p, i) => (
              <a key={i} href="#" className="group relative aspect-[5/4] rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-elegant transition-smooth">
                <div className="absolute inset-0 bg-gradient-hero" />
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-primary-foreground">
                  <span className="text-xs uppercase tracking-widest opacity-80">{p.tag}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{p.title}</h3>
                    <p className="opacity-90 max-w-sm">{p.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-smooth">
                      View case study <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">A designer who codes. An engineer who cares.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              For nearly a decade I've helped teams ship products that feel inevitable —
              the kind that make people pause and say "of course, that's how it should work."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Previously at Linear and Stripe. Now independent, working with a small number
              of partners on problems worth solving.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Design", "Figma · Framer · Rive"],
              ["Code", "React · JS · Swift"],
              ["Motion", "GSAP · Lottie"],
              ["Research", "Maze · Dovetail"],
            ].map(([k, v]) => (
              <div key={k} className="p-6 rounded-2xl border border-border bg-card">
                <div className="text-xs uppercase tracking-wider text-primary mb-1">{k}</div>
                <div className="font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-[2.5rem] p-8 md:p-14 bg-gradient-hero text-primary-foreground shadow-elegant overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, white, transparent 50%)" }} />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's build something remarkable.</h2>
                <p className="text-base opacity-90 mb-8">
                  Available for new collaborations starting July 2026. Send me a note and I'll reply within 24 hours.
                </p>
                <div className="space-y-3 text-sm">
                  <a href="mailto:richienice5@gmail.com" className="flex items-center gap-3 justify-center md:justify-start hover:opacity-90 transition-smooth">
                    <Mail className="size-4" /> richienice5@gmail.com
                  </a>
                  <a href="tel:+2349029148866" className="flex items-center gap-3 justify-center md:justify-start hover:opacity-90 transition-smooth">
                    <Phone className="size-4" /> +234 902 914 8866
                  </a>
                </div>
                <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                  <a href="#" aria-label="GitHub" className="size-11 grid place-items-center rounded-full bg-background/10 hover:bg-background/20 transition-smooth"><Github className="size-5" /></a>
                  <a href="#" aria-label="LinkedIn" className="size-11 grid place-items-center rounded-full bg-background/10 hover:bg-background/20 transition-smooth"><Linkedin className="size-5" /></a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-background text-foreground rounded-2xl p-6 md:p-8 shadow-soft space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                  <input id="name" name="name" type="text" required maxLength={100} placeholder="Your name"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                  <input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea id="message" name="message" required maxLength={2000} rows={4} placeholder="Tell me about your project..."
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
                </div>
                <button type="submit" disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-foreground text-background px-4 py-3 text-sm font-medium hover:opacity-90 transition-smooth disabled:opacity-60">
                  {submitting ? (<><Loader2 className="size-4 animate-spin" /> Sending...</>) : (<>Send message <ArrowRight className="size-4" /></>)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Richie Nice. Designed and built with care.</p>
          <p>Stockholm · Remote worldwide</p>
        </div>
      </footer>
    </div>
  );
}
