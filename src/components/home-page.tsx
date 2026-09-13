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
