import "@testing-library/jest-dom/vitest";

// Mock Lenis & GSAP ScrollTrigger (browser-only APIs)
if (typeof window !== "undefined") {
  window.matchMedia =
    window.matchMedia ||
    ((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }));
  window.IntersectionObserver =
    window.IntersectionObserver ||
    class {
      disconnect() {}
      observe() {}
      unobserve() {}
      takeRecords() {
        return [];
      }
    };
}
