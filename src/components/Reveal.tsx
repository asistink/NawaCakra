"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wrapper reveal-on-scroll berbasis GSAP ScrollTrigger.
 * Elemen muncul dengan fade + translateY saat masuk viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    let ctx: gsap.Context | undefined;
    let cancelled = false;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }
          );
        });
      });
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [delay]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`reveal ${className}`} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
