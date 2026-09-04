import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(delay);
  return (
    // @ts-expect-error -- polymorphic tag with a shared ref type
    <Tag ref={ref} data-visible={visible} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
