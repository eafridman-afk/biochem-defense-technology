import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg-elevated px-3.5 text-sm text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:border-steel/60 focus-visible:ring-2 focus-visible:ring-steel/25 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[120px] w-full rounded-[var(--radius-md)] border border-border bg-bg-elevated px-3.5 py-3 text-sm text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:border-steel/60 focus-visible:ring-2 focus-visible:ring-steel/25 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";
