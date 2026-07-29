import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Visual height of the logo image */
  size?: "sm" | "md" | "lg" | "hero";
  showWordmark?: boolean;
  priority?: boolean;
};

const SIZE: Record<NonNullable<BrandLogoProps["size"]>, string> = {
  sm: "h-9 w-auto",
  md: "h-12 w-auto",
  lg: "h-16 w-auto sm:h-20",
  hero: "h-28 w-auto sm:h-36 md:h-44",
};

export function BrandLogo({
  className,
  size = "sm",
  showWordmark = false,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3 min-w-0", className)}>
      <img
        src="/bcdt-logo.jpg"
        alt="BCDT — BioChem Defense Technology"
        width={864}
        height={454}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        className={cn(
          SIZE[size],
          "max-w-full object-contain object-left select-none",
          "rounded-[var(--radius-sm)]",
        )}
      />
      {showWordmark ? (
        <span className="min-w-0 hidden sm:block">
          <span className="block truncate text-sm font-semibold tracking-tight text-fg">
            BioChem Defense Technology
          </span>
          <span className="block text-[11px] text-fg-subtle">
            BCDT · R&D · Non-confidential threat data
          </span>
        </span>
      ) : null}
    </span>
  );
}
