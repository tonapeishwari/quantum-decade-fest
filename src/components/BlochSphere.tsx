import { useRef, useState } from "react";

const R = 82;
const CX = 110;
const CY = 110;

/** Interactive Bloch sphere: drag / touch to move the state vector. */
export function BlochSphere({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [touched, setTouched] = useState(false);
  // theta = polar angle from |0>, phi = azimuth
  const [angles, setAngles] = useState({ theta: Math.PI / 3, phi: Math.PI / 4 });

  const handlePointer = (e: React.PointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 220 - CX;
    const y = ((e.clientY - rect.top) / rect.height) * 220 - CY;
    setAngles({ theta: Math.acos(Math.max(-1, Math.min(1, -y / R))), phi: Math.atan2(x, y) });
    setTouched(true);
  };

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    handlePointer(e);
  };
  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.buttons === 0 && e.pointerType === "mouse") return;
    handlePointer(e);
  };

  // Project vector: x on screen from phi, y from theta
  const tipX = CX + R * Math.sin(angles.theta) * Math.sin(angles.phi);
  const tipY = CY - R * Math.cos(angles.theta);

  const prob0 = Math.cos(angles.theta / 2) ** 2;

  return (
    <div className="flex w-full max-w-[280px] flex-col items-center gap-3">
      <svg
        ref={svgRef}
        viewBox="0 0 220 220"
        role="img"
        aria-label="Interactive Bloch sphere: drag inside the sphere to change the qubit state"
        className={`bloch-sphere w-full touch-none cursor-grab active:cursor-grabbing ${className}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={(e) => {
          const step = 0.15;
          if (e.key === "ArrowUp") setAngles((a) => ({ ...a, theta: Math.max(0, a.theta - step) }));
          else if (e.key === "ArrowDown") setAngles((a) => ({ ...a, theta: Math.min(Math.PI, a.theta + step) }));
          else if (e.key === "ArrowLeft") setAngles((a) => ({ ...a, phi: a.phi - step }));
          else if (e.key === "ArrowRight") setAngles((a) => ({ ...a, phi: a.phi + step }));
          else return;
          setTouched(true);
          e.preventDefault();
        }}
        tabIndex={0}
      >
        <defs>
          <radialGradient id="blochFill" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="hsl(var(--bloch-hi, 190 90% 70%) / 0.28)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <circle cx={CX} cy={CY} r={R} fill="url(#blochFill)" className="stroke-primary/50" strokeWidth="1.2" />
        <ellipse cx={CX} cy={CY} rx={R} ry="26" className="fill-none stroke-accent/40" strokeWidth="1" />
        <ellipse cx={CX} cy={CY} rx="26" ry={R} className="fill-none stroke-accent/25" strokeWidth="1" />

        <line x1={CX} y1="20" x2={CX} y2="200" className="stroke-border" strokeWidth="1" />
        <line x1="20" y1={CY} x2="200" y2={CY} className="stroke-border" strokeWidth="1" />

        <g className={touched ? "" : "bloch-vector"} style={{ transformOrigin: "110px 110px" }}>
          <line
            x1={CX}
            y1={CY}
            x2={tipX}
            y2={tipY}
            className="stroke-accent"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx={tipX} cy={tipY} r="5" className="fill-accent" />
        </g>

        <circle cx={CX} cy={CY} r="3" className="fill-primary" />
        <text x={CX} y="14" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="monospace">
          |0⟩
        </text>
        <text x={CX} y="214" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="monospace">
          |1⟩
        </text>
      </svg>

      <p className="font-mono text-[0.65rem] text-muted-foreground">
        {touched
          ? `P(|0⟩) = ${prob0.toFixed(2)} · P(|1⟩) = ${(1 - prob0).toFixed(2)}`
          : "Drag or tap the sphere to change the state"}
      </p>
    </div>
  );
}
