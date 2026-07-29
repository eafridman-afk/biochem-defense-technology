import {
  ArrowRight,
  Atom,
  BookOpen,
  ExternalLink,
  FileCheck2,
  FlaskConical,
  Layers,
  Lock,
  Microscope,
  Scale,
  Shield,
  ShieldAlert,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const PREPRINTS = [
  {
    title:
      "pH-Inverted Histidine-Rich Nanochelants for Trapping Furin-Processed Polycationic Nanotoxins",
    doi: "10.26434/chemrxiv.15000714",
    url: "https://chemrxiv.org/doi/10.26434/chemrxiv.15000714",
    note: "Platform paper — mechanism, heavy-metal detoxification, biodefense-relevant modeling (preprint, CC-BY).",
  },
] as const;


const MECHANISM = [
  {
    step: "01",
    title: "Inactive at physiologic pH",
    body: "At pH ~7.4 the platform remains in a lower-charge state—designed for safe circulation and controlled engagement outside acidic microenvironments.",
  },
  {
    step: "02",
    title: "Activates at endosomal pH",
    body: "At pH 5.5–6.5, histidine protonation drives a net +4 to +5 charge, enabling electrostatic clamping and metal coordination of polycationic species and free heavy-metal cations.",
  },
  {
    step: "03",
    title: "Reversible release",
    body: "Return to neutral pH weakens binding for release and reagent recycling—supporting a protective, non-permanent capture paradigm rather than irreversible sequestration.",
  },
] as const;

const APPLICATIONS = [
  {
    icon: Shield,
    title: "Biodefense-relevant modeling",
    body: "Computational evaluation of electrostatic engagement with furin-processed polycationic motifs and related endosomal pore architectures—protective countermeasure research framed at non-confidential abstract level.",
  },
  {
    icon: FlaskConical,
    title: "Heavy-metal detoxification",
    body: "pH-gated coordination of free cations (e.g., Pb²⁺ and related metals) with favorable binding free energies at acidic pH and reduced affinity at physiologic pH, as reported in open preprints.",
  },
  {
    icon: Atom,
    title: "Neuroinflammation & copper transport context",
    body: "Research framing that connects metal homeostasis, endosomal chemistry, and inflammatory stress pathways—without clinical claims or treatment protocols on this public site.",
  },
  {
    icon: Microscope,
    title: "Systems & quantum-classical validation",
    body: "DFT and all-atom MD (MM-PBSA) used to quantify pH-dependent binding, reversibility, and multi-target electrostatic behavior across the published platform studies.",
  },
] as const;

const RED_LINES = [
  {
    icon: ShieldAlert,
    t: "Protective mission only",
    d: "Public programs are oriented to health, environment, infrastructure resilience, and legitimate biodefense research—not offensive use.",
  },
  {
    icon: Layers,
    t: "Layered disclosure",
    d: "Capability abstracts and preprint-level science publicly; sensitive implementation detail only under need-to-know agreements.",
  },
  {
    icon: Scale,
    t: "Partner diligence",
    d: "Collaboration requests are screened for legitimate protective use and appropriate controls before deeper exchange.",
  },
] as const;

export function HomePage() {
  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[4.25rem]">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-metal-mid/8 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-fg-muted chrome-edge">
                  <span className="h-1.5 w-1.5 rounded-full bg-metal-hi" />
                  5H-EAF platform · public science
                </span>
                <span className="font-mono text-[11px] text-fg-subtle">
                  biochemdefensetech.com
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-balance text-[2.05rem] font-semibold leading-[1.12] tracking-[-0.03em] text-fg sm:text-5xl sm:leading-[1.08]">
                pH-gated histidine nanochelant platform for biodefense, heavy-metal detoxification & neuroinflammation research
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
                BioChem Defense Technology (BCDT) develops{" "}
                <strong className="font-medium text-fg">5H-EAF</strong>—an
                erythritol-capped linear penta-histidine nanochelant that activates
                at endosomal pH (5.5–6.5) and remains inert at physiologic pH
                (7.4). Public materials describe non-confidential science from
                ChemRxiv preprints, under dual-use stewardship.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <a href="#technology">
                    Platform mechanism
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#science">Science & preprints</a>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[calc(var(--radius-xl)+16px)] bg-metal-mid/6 blur-2xl" />
              <figure className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-bg-elevated shadow-[var(--shadow-panel)] chrome-edge">
                <div className="border-b border-border bg-bg-subtle/80 px-4 py-2.5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                    Brand mark · BCDT
                  </p>
                </div>
                <div className="flex items-center justify-center bg-black px-4 py-6 sm:px-6 sm:py-8">
                  <BrandLogo
                    size="hero"
                    priority
                    className="justify-center [&_img]:mx-auto [&_img]:rounded-none"
                  />
                </div>
                <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-fg-muted sm:px-5">
                  5H-EAF: reversible, pH-inverted histidine-rich nanochelant —
                  electrostatic targeting of polycationic species and free heavy
                  metals. Inquiry-first identity.
                </figcaption>
              </figure>
            </div>
          </div>

          <dl className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Platform", v: "5H-EAF pH-gated nanochelant" },
              { k: "Public science", v: "ChemRxiv preprints (CC-BY)" },
              { k: "Governance", v: "Dual-use stewardship" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-[var(--radius-lg)] border border-border bg-bg-elevated/80 px-5 py-4 chrome-edge"
              >
                <dt className="text-[11px] font-medium uppercase tracking-wide text-fg-subtle">
                  {item.k}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-fg">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* One-liner positioning strip */}
      <section className="border-t border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-steel">
                Positioning
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                One platform. Dual protective missions.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-fg-muted sm:text-base">
              <p>
                <strong className="font-medium text-fg">5H-EAF</strong> is a
                reversible, pH-inverted histidine-rich nanochelant designed for
                electrostatic targeting of furin-processed polycationic species
                and free heavy metals (e.g., Cu²⁺ / Pb²⁺ class cations) at
                endosomal pH—while remaining low-activity at physiologic pH.
              </p>
              <p>
                This public site presents only{" "}
                <span className="text-fg">non-confidential</span> science from
                open preprints: mechanism abstracts, computational validation
                summaries, and dual-use governance language. No controlled
                recipes, production protocols, or weaponization pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-steel">
              Technology
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              5H-EAF — pH-inverted histidine nanochelant
            </h2>
            <p className="mt-4 text-fg-muted">
              High-level, non-confidential description of the published platform.
              Structural and computational detail lives in the ChemRxiv preprints.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.15fr]">
            <article className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6 sm:p-8 chrome-edge">
              <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                Composition (public abstract)
              </p>
              <ul className="mt-5 space-y-3 text-sm text-fg-muted">
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel" />
                  <span>
                    <span className="font-medium text-fg">Scaffold: </span>
                    erythritol-capped linear penta-histidine nanochelant
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel" />
                  <span>
                    <span className="font-medium text-fg">MW: </span>
                    ~868 Da (as reported in preprint corrections)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel" />
                  <span>
                    <span className="font-medium text-fg">Design principle: </span>
                    inverse of classic histidine-release systems—active when
                    protonated at endosomal pH
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel" />
                  <span>
                    <span className="font-medium text-fg">Validation: </span>
                    DFT (B3LYP-D3/def2-TZVP) and all-atom MD / MM-PBSA as
                    published
                  </span>
                </li>
              </ul>
            </article>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {MECHANISM.map((m) => (
                <article
                  key={m.step}
                  className="rounded-[var(--radius-xl)] border border-border bg-bg p-5 chrome-edge sm:p-6"
                >
                  <p className="font-mono text-xs text-accent">{m.step}</p>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-fg">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {m.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[var(--radius-xl)] border border-border bg-bg-subtle/60 p-6 sm:p-8 chrome-edge">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-sm font-medium text-fg">
                  <Atom className="h-4 w-4 text-metal-mid" />
                  pH switch (public summary)
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  At acidic pH 5.5–6.5 the molecule protonates to a net charge of
                  approximately +4 to +5, enabling strong electrostatic clamping
                  and coordination. At neutral pH, bound species are released for
                  safe clearance or reagent recycling. This reversible switch is
                  the core of the published platform.
                </p>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-border bg-bg px-5 py-4 sm:min-w-[200px]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-fg-subtle">
                  Active window
                </p>
                <p className="mt-2 font-mono text-sm text-fg">pH 5.5 – 6.5</p>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-fg-subtle">
                  Low-activity
                </p>
                <p className="mt-2 font-mono text-sm text-fg">pH ~7.4</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section
        id="applications"
        className="scroll-mt-24 border-t border-border bg-bg-elevated/30"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-steel">
              Applications
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Research directions framed for protection
            </h2>
            <p className="mt-4 text-fg-muted">
              Dual-use by nature: the same electrostatic / pH logic spans
              biodefense-relevant modeling and heavy-metal detoxification.
              Everything below is research framing, not product claims.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {APPLICATIONS.map((a) => (
              <article
                key={a.title}
                className="flex gap-4 rounded-[var(--radius-xl)] border border-border bg-bg p-5 sm:p-6 chrome-edge"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-bg-elevated text-metal-hi">
                  <a.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-fg">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {a.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Science & preprints */}
      <section id="science" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-wider text-steel">
                Science & data
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Open preprints — the public evidence layer
              </h2>
              <p className="mt-4 text-fg-muted">
                Primary sources are ChemRxiv preprints (CC-BY) by Esteban A.
                Fridman, MD, PhD, BioChem Defense Technology. Preprints are not
                peer-reviewed; data may be preliminary.
              </p>
            </div>
            <Button asChild variant="secondary">
              <a
                href="https://chemrxiv.org/engage/chemrxiv/article-details"
                target="_blank"
                rel="noopener noreferrer"
              >
                ChemRxiv
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-12 space-y-4">
            {PREPRINTS.map((p) => (
              <article
                key={p.doi}
                className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-5 sm:p-6 chrome-edge"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs text-fg-subtle">
                      <BookOpen className="h-3.5 w-3.5" />
                      ChemRxiv preprint · CC-BY 4.0
                    </div>
                    <h3 className="mt-2 text-base font-semibold leading-snug text-fg">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-fg-muted">{p.note}</p>
                    <p className="mt-3 font-mono text-xs text-accent">
                      doi:{p.doi}
                    </p>
                  </div>
                  <Button asChild variant="secondary" size="sm" className="shrink-0">
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      Open preprint
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[var(--radius-xl)] border border-border chrome-edge">
            <div className="border-b border-border bg-bg-subtle px-5 py-3 sm:px-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                What the public record supports
              </p>
            </div>
            <div className="divide-y divide-border bg-bg">
              {[
                ["pH switch", "Active ~5.5–6.5; low activity ~7.4; reversible release"],
                ["Charge state", "Net +4 to +5 when protonated (public abstract)"],
                ["Targets (abstract)", "Polycationic motifs · free heavy-metal cations"],
                ["Methods (open)", "DFT · all-atom MD / MM-PBSA · multi-replica analysis"],
              ].map(([code, desc]) => (
                <div
                  key={code}
                  className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
                >
                  <code className="shrink-0 font-mono text-xs text-accent">
                    {code}
                  </code>
                  <span className="text-sm text-fg-muted">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual-use */}
      <section id="dual-use" className="scroll-mt-24 border-t border-border bg-bg-elevated/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-steel">
                Dual-use stewardship
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Beneficial science under explicit dual-use discipline
              </h2>
              <p className="mt-4 text-fg-muted leading-relaxed">
                A platform that can inform biodefense research and metal
                detoxification is dual-use by definition. We treat that as a
                first-class design constraint—not a footnote.
              </p>
              <ul className="mt-8 space-y-4">
                {RED_LINES.map((item) => (
                  <li key={item.t} className="flex gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-bg-elevated text-metal-hi">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-fg">{item.t}</p>
                      <p className="mt-0.5 text-sm text-fg-muted">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6 sm:p-8 chrome-edge">
              <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                Dual-use statement
              </p>
              <blockquote className="mt-4 border-l-2 border-metal-mid pl-4 text-base leading-relaxed text-fg sm:text-lg">
                We develop and discuss technology for identifying and reducing
                biological and chemical harm. We do not provide public guidance
                that would materially assist the creation, weaponization, or
                covert deployment of biological or chemical agents.
              </blockquote>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[var(--radius-lg)] border border-border bg-bg p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    In scope (public)
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">
                    Platform abstracts, pH-switch summary, preprint links,
                    dual-use governance language, high-level applications.
                  </p>
                </div>
                <div className="rounded-[var(--radius-lg)] border border-border bg-bg p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-warn">
                    Out of scope (public)
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">
                    Agent production, weaponization steps, targeting doctrine, or
                    export-controlled technical datasets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="team" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-steel">
              Team
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Founder
            </h2>
          </div>

          <article className="mt-10 rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6 sm:p-8 chrome-edge">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-border bg-bg text-metal-hi">
                <User className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-fg">
                  Esteban A. Fridman, MD, PhD
                </h3>
                <p className="mt-1 text-sm text-fg-muted">
                  Founder · BioChem Defense Technology (BCDT) · Austin, TX
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg-muted sm:text-base">
                  Physician-scientist leading computational and biophysical
                  research on pH-gated histidine nanochelants. Corresponding
                  author on the public 5H-EAF ChemRxiv preprints covering
                  polycationic nanotoxin trapping and heavy-metal detoxification
                  research. Prior training and research
                  experience includes neuro / TBI-relevant clinical science;
                  public materials emphasize protective mission and dual-use
                  discipline.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="mailto:eafridman@biochemdefensetech.com"
                    className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-bg px-3.5 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    eafridman@biochemdefensetech.com
                  </a>
                  <a
                    href="https://chemrxiv.org/doi/10.26434/chemrxiv.15000714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-bg px-3.5 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    Primary preprint
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-border bg-bg-elevated/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-steel">
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Request a non-confidential briefing
              </h2>
              <p className="mt-4 text-fg-muted leading-relaxed">
                For research collaboration, preprint discussion, dual-use
                review, or capability briefings limited to non-confidential
                scope.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex gap-3 rounded-[var(--radius-lg)] border border-border bg-bg p-4 chrome-edge">
                  <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                  <p className="text-fg-muted">
                    <span className="font-medium text-fg">Ideal partners: </span>
                    labs, public agencies, biodefense programs, and industry
                    teams with a protective mission.
                  </p>
                </div>
                <div className="flex gap-3 rounded-[var(--radius-lg)] border border-border bg-bg p-4 chrome-edge">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                  <p className="text-fg-muted">
                    <span className="font-medium text-fg">Do not send: </span>
                    controlled technical data, classified content, or detailed
                    agent-production information via this form.
                  </p>
                </div>
                <div className="flex gap-3 rounded-[var(--radius-lg)] border border-border bg-bg p-4 chrome-edge">
                  <User className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                  <p className="text-fg-muted">
                    <span className="font-medium text-fg">Direct: </span>
                    <a
                      href="mailto:eafridman@biochemdefensetech.com"
                      className="text-fg underline-offset-2 hover:underline"
                    >
                      eafridman@biochemdefensetech.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-border bg-bg p-6 shadow-[var(--shadow-panel)] sm:p-8 chrome-edge">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
