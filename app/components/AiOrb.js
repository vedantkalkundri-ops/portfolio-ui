"use client";

import { useEffect, useState } from "react";

export default function AiOrb() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="ai-orb-container">
      <div className="ai-orb">
        <div className="orb-core"></div>
        {/* Ring 1 (X-Y plane) */}
        <div className="orb-ring ring-1">
          {[...Array(24)].map((_, i) => (
            <div key={`r1-${i}`} className="orb-dot" style={{ transform: `rotateZ(${i * 15}deg) translateX(120px) rotateZ(${-i * 15}deg)` }} />
          ))}
        </div>
        {/* Ring 2 (Y-Z plane) */}
        <div className="orb-ring ring-2">
          {[...Array(24)].map((_, i) => (
            <div key={`r2-${i}`} className="orb-dot" style={{ transform: `rotateZ(${i * 15}deg) translateX(120px) rotateZ(${-i * 15}deg)` }} />
          ))}
        </div>
        {/* Ring 3 (X-Z plane) */}
        <div className="orb-ring ring-3">
          {[...Array(24)].map((_, i) => (
            <div key={`r3-${i}`} className="orb-dot" style={{ transform: `rotateZ(${i * 15}deg) translateX(120px) rotateZ(${-i * 15}deg)` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
