import {
  Activity,
  ArrowRight,
  Beaker,
  Biohazard,
  Database,
  Eye,
  FileCheck2,
  FlaskConical,
  Layers,
  Lock,
  Microscope,
  Scale,
  Shield,
  ShieldAlert,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const DOMAINS = [
  {
    icon: Biohazard,
    title: "Biological threats",
    body: "Non-confidential characterization of pathogen classes, exposure pathways, and environmental persistence relevant to public health and biosecurity—without operational agent recipes.",
  },
  {
    icon: FlaskConical,
    title: "Chemical threats",
    body: "Open-domain framing of toxic industrial chemicals, nanoparticle contamination vectors, and sensing signatures across air, water, soil, food, and textile matrices.",
  },
  {
    icon: Scale,
    title: "Dual-use risk",
    body: "Structured review of research that can serve protective civilian missions and security applications—so beneficial work advances under clear governance.",
  },
] as const;

const DATA_PILLARS = [
  {
    icon: Database,
    title: "Public threat taxonomies",
    body: "Structured, non-confidential catalogs of threat classes, matrices, and detection modalities suitable for partners and peer review.",
  },
  {
    icon: FileCheck2,
    title: "Method abstracts",
    body: "High-level descriptions of detection, prevention, and remediation approaches—capabilities without controlled implementation detail.",
  },
  {
    icon: Eye,
    title: "Observability signals",
    body: "Indicators, assay families, and environmental sampling concepts that support early warning without enabling misuse.",
  },
  {
    icon: Lock,
    title: "Clear red lines",
    body: "What we publish vs. withhold: no weaponization pathways, no production protocols, no export-controlled datasets on public channels.",
  },
] as const;

const CAPABILITIES = [
  {
    icon: Activity,
    title: "Real-time detection systems",
    body: "R&D toward rapid identification of toxic biological and chemical nanoparticles across air, water, soil, food, and textiles—aimed at early threat recognition and response.",
  },
  {
    icon: Shield,
    title: "Harm prevention solutions",
    body: "Research on containment and neutralization concepts that reduce exposure risk for infrastructure, workplaces, and vulnerable populations.",
  },
  {
    icon: Beaker,
    title: "Precision treatment methods",
    body: "Targeted remediation approaches intended to restore safer conditions in contaminated environments under responsible use constraints.",
  },
] as const;

const MATRICES = ["Air", "Water", "Soil", "Food", "Textiles"] as const;

const RD_POINTS = [
  {
    label: "01",
    title: "Research posture, not product theater",
    body: "We lead with what we study, what we can share, and where dual-use boundaries apply—before marketing claims.",
  },
  {
    label: "02",
    title: "Non-confidential by design",
    body: "Public materials are curated for partner engagement, diligence, and scientific literacy without crossing into controlled technical data.",
  },
  {
    label: "03",
    title: "Protective mission first",
    body: "Detection, prevention, and remediation research is oriented to health, environment, and infrastructure resilience.",
  },
] as const;

export function HomePage() {
  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <SiteHeader />

      <section className="relative overflow-hidden pt-[4.25rem]">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-metal-mid/8 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-fg-muted chrome-edge">
                  <span className="h-1.5 w-1.5 rounded-full bg-metal-hi" />
                  BCDT · R&D revision
                </span>
                <span className="font-mono text-[11px] text-fg-subtle">
                  biochemdefensetech.com
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-balance text-[2.15rem] font-semibold leading-[1.12] tracking-[-0.03em] text-fg sm:text-5xl sm:leading-[1.08]">
                R&D that frames biological and chemical threats—without sharing
                what should stay controlled.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
                BioChem Defense Technology (BCDT) advances protective science for
                toxic biological and chemical contamination. We position{" "}
                <strong className="font-medium text-fg">non-confidential data</strong>,
                dual-use risk language, and open research posture so partners can
                evaluate capability with clarity—and restraint.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <a href="#data">
                    Explore open data posture
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#research">Read R&D stance</a>
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
                  Detection-first identity: molecular structure under examination —
                  the Q mark for inquiry, BCDT for BioChem Defense Technology.
                </figcaption>
              </figure>
            </div>
          </div>

          <dl className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Focus", v: "Bio & chem threat R&D" },
              { k: "Public layer", v: "Non-confidential datasets" },
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

      <section className="border-t border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-steel">
                Why this revision
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                From generic claims to an R&D identity partners can trust.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-fg-muted sm:text-base">
              <p>
                The prior public site described detection, prevention, and treatment
                in broad marketing language. That left the most important questions
                unanswered: what is research vs. product, what can be shared openly,
                and how dual-use risk is handled.
              </p>
              <p>
                This revision centers{" "}
                <span className="text-fg">state-of-R&D positioning</span>,{" "}
                <span className="text-fg">non-confidential threat data</span>, and{" "}
                <span className="text-fg">dual-use stewardship</span>—so government,
                industry, and research partners see a serious technical organization,
                not a slogan stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-steel">
              Research posture
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              State of R&D
            </h2>
            <p className="mt-4 text-fg-muted">
              We operate as an applied research organization. Public materials
              describe problem spaces, matrices, and protective method families—not
              closed-source claims without context.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {RD_POINTS.map((item) => (
              <article
                key={item.label}
                className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6 shadow-[var(--shadow-panel)] chrome-edge"
              >
                <p className="font-mono text-xs text-accent">{item.label}</p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-fg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--radius-xl)] border border-border bg-bg-subtle/60 p-6 sm:p-8 chrome-edge">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-sm font-medium text-fg">
                  <Microscope className="h-4 w-4 text-metal-mid" />
                  Current public R&D emphasis
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-fg-muted">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel" />
                    Environmental matrices for toxic biological and chemical nanoparticles
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel" />
                    Sensing and early-warning concepts suitable for open discussion
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel" />
                    Dual-use review language for collaborative programs
                  </li>
                </ul>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-border bg-bg px-5 py-4 sm:min-w-[220px]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-fg-subtle">
                  Engagement mode
                </p>
                <p className="mt-2 text-sm text-fg">
                  Briefings on non-confidential scope first. Controlled detail only
                  under appropriate agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="threats"
        className="scroll-mt-24 border-t border-border bg-bg-elevated/30"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-warn">
              Threat domains
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Biological and chemical contamination—framed for protection
            </h2>
            <p className="mt-4 text-fg-muted">
              We confront toxic biological and chemical nanoparticles that can
              contaminate critical environments. Our public work explains pathways
              and protective responses at a level that informs without enabling harm.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {DOMAINS.map((d) => (
              <article
                key={d.title}
                className="group rounded-[var(--radius-xl)] border border-border bg-bg p-6 transition-[border-color] duration-150 hover:border-border-strong chrome-edge"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-bg-elevated text-metal-hi">
                  <d.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-fg">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{d.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Matrices of concern
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {MATRICES.map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3.5 py-1.5 text-sm text-fg-muted"
                >
                  <Waves className="h-3.5 w-3.5 text-steel" />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dual-use" className="scroll-mt-24 border-t border-border">
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
                Detection, prevention, and remediation technologies can serve
                civilian health and environmental missions while also carrying
                security relevance. We treat dual-use as a first-class design
                constraint—not a footnote.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  {
                    icon: ShieldAlert,
                    t: "Purpose limitation",
                    d: "Public programs are oriented to protection of health, environment, and infrastructure.",
                  },
                  {
                    icon: Layers,
                    t: "Layered disclosure",
                    d: "Capability abstracts publicly; sensitive implementation detail only under need-to-know channels.",
                  },
                  {
                    icon: Scale,
                    t: "Partner diligence",
                    d: "Collaboration requests are screened for legitimate protective use and appropriate controls.",
                  },
                ].map((item) => (
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
                biological and chemical harm. We do not provide public guidance that
                would materially assist the creation, weaponization, or covert
                deployment of biological or chemical agents.
              </blockquote>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[var(--radius-lg)] border border-border bg-bg p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    In scope (public)
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">
                    Threat taxonomies, matrix mapping, sensing families, dual-use
                    governance language, high-level remediation concepts.
                  </p>
                </div>
                <div className="rounded-[var(--radius-lg)] border border-border bg-bg p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-warn">
                    Out of scope (public)
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">
                    Agent production, weaponization steps, targeting doctrine, or
                    any export-controlled technical data sets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="data"
        className="scroll-mt-24 border-t border-border bg-bg-elevated/30"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-wider text-steel">
                Non-confidential data
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Position open data for bio and chem threat literacy
              </h2>
              <p className="mt-4 text-fg-muted">
                Partners need more than a tagline. We curate a public information
                layer—taxonomies, method abstracts, and observability concepts—so
                diligence and collaboration can start on solid, shareable ground.
              </p>
            </div>
            <Button asChild variant="secondary">
              <a href="#contact">
                Request data briefing
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {DATA_PILLARS.map((p) => (
              <article
                key={p.title}
                className="flex gap-4 rounded-[var(--radius-xl)] border border-border bg-bg p-5 sm:p-6 chrome-edge"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-bg-elevated text-steel">
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-fg">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[var(--radius-xl)] border border-border chrome-edge">
            <div className="border-b border-border bg-bg-subtle px-5 py-3 sm:px-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                Sample public data classes
              </p>
            </div>
            <div className="divide-y divide-border bg-bg">
              {[
                ["THREAT-CLASS", "High-level agent / toxin family labels for education"],
                ["MATRIX-MAP", "Air · water · soil · food · textile exposure pathways"],
                ["SENSE-MOD", "Detection modality families (spectroscopic, bioassay, …)"],
                ["DUAL-USE-TAG", "Governance tags for collaboration screening"],
              ].map(([code, desc]) => (
                <div
                  key={code}
                  className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
                >
                  <code className="shrink-0 font-mono text-xs text-accent">{code}</code>
                  <span className="text-sm text-fg-muted">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-steel">
              Capabilities under study
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Detection · prevention · treatment—as R&D programs
            </h2>
            <p className="mt-4 text-fg-muted">
              Continuity with our original mission areas, restated as research
              directions with protective intent and dual-use awareness.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6 chrome-edge"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-bg text-metal-hi">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-fg">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                For research collaboration, open-data access discussions, dual-use
                review, or capability briefings limited to non-confidential scope.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex gap-3 rounded-[var(--radius-lg)] border border-border bg-bg p-4 chrome-edge">
                  <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                  <p className="text-fg-muted">
                    <span className="font-medium text-fg">Ideal partners: </span>
                    labs, public agencies, infrastructure operators, and industry
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
