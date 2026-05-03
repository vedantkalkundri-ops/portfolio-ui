"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LETTERS = "PORTFOLIO".split("");

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // enter → select → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("select"), 950);
    const t2 = setTimeout(() => {
      setPhase("exit");
      onComplete?.();
    }, 1800);
    return () => [t1, t2].forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* ── Black overlay: slides up on exit ── */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          background: "#0a0a0a",
          zIndex: 1000,
        }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ── PORTFOLIO word ── */}
      <div className={`intro-word ${phase === "exit" ? "intro-word--corner" : ""}`}>
        <div style={{ position: "relative", display: "inline-block" }}>

          {/* Select highlight sweeps left → right */}
          <motion.span
            className="intro-highlight"
            initial={{ scaleX: 0 }}
            animate={
              phase === "select" || phase === "exit"
                ? { scaleX: 1 }
                : { scaleX: 0 }
            }
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ originX: 0 }}
          />

          {/* Letters stagger in */}
          <span className="intro-letters">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                className="intro-letter"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>

        </div>
      </div>
    </>
  );
}