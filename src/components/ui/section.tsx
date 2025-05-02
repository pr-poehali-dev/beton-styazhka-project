
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  noPadding?: boolean;
  fullWidth?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, title, subtitle, noPadding = false, fullWidth = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "w-full",
          noPadding ? "" : "py-12 md:py-16",
          className
        )}
        {...props}
      >
        <div className={cn("container mx-auto px-4", fullWidth ? "max-w-none" : "max-w-7xl")}>
          {title && (
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
              {subtitle && <p className="text-lg text-neutral-600">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
