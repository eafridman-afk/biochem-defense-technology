import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-block" aria-label="BCDT home">
              <BrandLogo size="md" />
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-fg-muted">
              BioChem Defense Technology Inc. (BCDT) — independent R&D on the
              5H-EAF pH-gated histidine nanochelant platform for biodefense-
              relevant modeling, heavy-metal detoxification research, and
              dual-use stewardship.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm text-fg-muted">
              <li>
                <a href="#technology" className="hover:text-fg">
                  Technology · 5H-EAF
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-fg">
                  Science & preprints
                </a>
              </li>
              <li>
                <a href="#dual-use" className="hover:text-fg">
                  Dual-use stewardship
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-fg">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-fg">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Notice
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              Public materials on this site are limited to non-confidential,
              non-controlled information from open preprints and abstracts. We
              do not publish weaponization methods, agent recipes, or
              export-controlled technical data.
            </p>
            <p className="mt-4 text-sm">
              <a
                href="mailto:eafridman@biochemdefensetech.com"
                className="font-mono text-fg-muted hover:text-fg"
              >
                eafridman@biochemdefensetech.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BioChem Defense Technology Inc. · BCDT</p>
          <p className="font-mono">biochemdefensetech.com · Brand Metal</p>
        </div>
      </div>
    </footer>
  );
}
