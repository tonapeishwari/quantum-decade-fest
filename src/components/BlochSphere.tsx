export function BlochSphere({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      role="img"
      aria-label="Animated diagram of a Bloch sphere, used to represent the state of a qubit"
      className={`bloch-sphere w-full max-w-[280px] ${className}`}
    >
      <defs>
        <radialGradient id="blochFill" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="hsl(var(--bloch-hi, 190 90% 70%) / 0.28)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <circle cx="110" cy="110" r="82" fill="url(#blochFill)" className="stroke-primary/50" strokeWidth="1.2" />
      <ellipse cx="110" cy="110" rx="82" ry="26" className="fill-none stroke-accent/40" strokeWidth="1" />
      <ellipse cx="110" cy="110" rx="26" ry="82" className="fill-none stroke-accent/25" strokeWidth="1" />

      <line x1="110" y1="20" x2="110" y2="200" className="stroke-border" strokeWidth="1" />
      <line x1="20" y1="110" x2="200" y2="110" className="stroke-border" strokeWidth="1" />

      <g className="bloch-vector" style={{ transformOrigin: "110px 110px" }}>
        <line x1="110" y1="110" x2="168" y2="62" className="stroke-accent" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="168" cy="62" r="5" className="fill-accent" />
      </g>

      <circle cx="110" cy="110" r="3" className="fill-primary" />
      <text x="110" y="14" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="monospace">
        |0⟩
      </text>
      <text x="110" y="214" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="monospace">
        |1⟩
      </text>
    </svg>
  );
}
