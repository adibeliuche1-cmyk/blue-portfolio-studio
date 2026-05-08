import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Github, Linkedin, Code2, Palette, Rocket, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Product Designer & Engineer" },
      { name: "description", content: "Portfolio of Alex Carter, a product designer and engineer crafting refined digital experiences." },
      { property: "og:title", content: "Alex Carter — Portfolio" },
      { property: "og:description", content: "Refined digital experiences in design and engineering." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-lg">
            <span className="text-gradient">Alex</span>Carter<span className="text-primary">.</span>
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
              I'm Alex — a product designer and engineer building thoughtful interfaces
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
              <div><div className="text-2xl font-bold text-foreground">8+</div>Years experience</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="text-2xl font-bold text-foreground">60+</div>Projects shipped</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="text-2xl font-bold text-foreground">14</div>Awards</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <div className="absolute inset-0 bg-gradient-hero opacity-40 mix-blend-overlay z-10" />
              <img src={heroPortrait} alt="Portrait of Alex Carter" width={1024} height={1280} className="size-full object-cover" />
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
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: "Product Design", desc: "End-to-end interface design from research to polished pixels, design systems, and prototypes." },
              { icon: Code2, title: "Engineering", desc: "Production-grade React, TypeScript, and motion. Code that designers love and engineers respect." },
              { icon: Rocket, title: "Brand & Strategy", desc: "Identity systems, voice, and positioning for early-stage startups ready to make a mark." },
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
              ["Code", "React · TS · Swift"],
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
          <div className="relative rounded-[2.5rem] p-12 md:p-20 bg-gradient-hero text-primary-foreground shadow-elegant overflow-hidden text-center">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, white, transparent 50%)" }} />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's build something remarkable.</h2>
              <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
                Available for new collaborations starting July 2026. Tell me about your project.
              </p>
              <a href="mailto:hello@alexcarter.dev" className="inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-4 font-medium hover:scale-[1.02] transition-smooth shadow-elegant">
                <Mail className="size-5" /> hello@alexcarter.dev
              </a>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a href="#" className="size-11 grid place-items-center rounded-full bg-background/10 hover:bg-background/20 transition-smooth"><Github className="size-5" /></a>
                <a href="#" className="size-11 grid place-items-center rounded-full bg-background/10 hover:bg-background/20 transition-smooth"><Linkedin className="size-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Alex Carter. Designed and built with care.</p>
          <p>Stockholm · Remote worldwide</p>
        </div>
      </footer>
    </div>
  );
}
