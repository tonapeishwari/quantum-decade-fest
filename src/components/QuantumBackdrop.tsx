const PARTICLES = [
  { left: "8%", top: "18%", size: 6, delay: "0s" },
  { left: "22%", top: "62%", size: 4, delay: "1.4s" },
  { left: "37%", top: "28%", size: 5, delay: "2.6s" },
  { left: "54%", top: "72%", size: 3, delay: "0.8s" },
  { left: "68%", top: "22%", size: 6, delay: "3.4s" },
  { left: "81%", top: "56%", size: 4, delay: "2s" },
  { left: "92%", top: "34%", size: 5, delay: "4.2s" },
];

/** Fixed decorative layer: grid, glow and drifting particles. */
export function QuantumBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="hero-aura absolute inset-0 opacity-70" />
      <div className="quantum-grid absolute inset-0 opacity-60" />
      {PARTICLES.map((p) => (
        <span
          key={p.left + p.top}
          className="particle absolute"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
