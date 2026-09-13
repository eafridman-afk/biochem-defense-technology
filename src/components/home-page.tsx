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
  Orbit,
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
      "pH-Gated Two-Channel Histidine Nanochelant for Electrostatic Interception of Furin-Processed Polycationic Species and Soft Heavy Metals",
    doi: "10.26434/chemrxiv.15000714/v7",
    url: "https://chemrxiv.org/doi/full/10.26434/chemrxiv.15000714/v7",
    citation:
      "Fridman EA. pH-Gated Two-Channel Histidine Nanochelant for Electrostatic Interception of Furin-Processed Polycationic Species and Soft Heavy Metals. ChemRxiv. 2026. doi:10.26434/chemrxiv.15000714/v7 (preprint, CC-BY 4.0; not peer-reviewed).",
    note: "Canonical public platform paper (v7) — two-channel pH-gated mechanism, soft-metal coordination, biodefense-relevant electrostatic modeling.",
  },
] as const;

const MECHANISM = [
  {
    step: "01",
    title: "Channel C · physiologic pH ~7.4",
    body: "Charge collapses as the five imidazoles deprotonate. Channel C is the soft-metal coordination window—preferential imidazole-N ligation of Hg(II) and Pb(II), with Zn(II) and Cu(I) remaining weakly bound.",
  },
  {
    step: "02",
    title: "Channel E · endosomal pH 5.5–6.5",
    body: "Histidine protonation drives a net +4 to +5 charge. Channel E supports competitive occupancy of acidic sites and local neutralization of negative endosomal-pore potential—electrostatic screening, not mechanical occlusion.",
  },
  {
    step: "03",
    title: "Reversible electrostatic switch",
    body: "Return to neutrality reverses binding for release and reagent recycling. The functional cycle is a single, reversible electrostatic switch rather than a permanent steric block.",
  },
] as const;
