import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState = {
  name: string;
  org: string;
  email: string;
  interest: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  org: "",
  email: "",
  interest: "5h-eaf-platform",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please complete name, email, and message.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setForm(INITIAL);
    toast.success("Briefing request recorded. We will respond if a fit exists.");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="org">Organization</Label>
          <Input
            id="org"
            name="org"
            autoComplete="organization"
            value={form.org}
            onChange={(e) => update("org", e.target.value)}
            placeholder="Agency, lab, or company"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@organization.org"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="interest">Interest</Label>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={(e) => update("interest", e.target.value)}
          className="flex h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg-elevated px-3.5 text-sm text-fg focus-visible:outline-none focus-visible:border-steel/60 focus-visible:ring-2 focus-visible:ring-steel/25"
        >
          <option value="5h-eaf-platform">5H-EAF platform briefing</option>
          <option value="chemrxiv-discussion">ChemRxiv preprint discussion</option>
          <option value="dual-use-collaboration">Dual-use / collaboration inquiry</option>
          <option value="heavy-metal-detox">Heavy-metal detoxification research</option>
          <option value="research-collaboration">Research collaboration</option>
          <option value="other">Other</option>
        </select>

      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Describe the non-confidential question, collaboration interest, or briefing need."
          required
        />
      </div>
      <p className="text-xs leading-relaxed text-fg-subtle">
        Do not submit controlled technical data, classified material, or detailed
        agent-production information through this form.
      </p>
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending…" : "Submit briefing request"}
      </Button>
    </form>
  );
}
