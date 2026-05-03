"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOPICS = [
  { label: "SEO Fundamentals", icon: "🔍" },
  { label: "Keyword Research Strategies", icon: "🗝️" },
  { label: "Content Marketing", icon: "📝" },
  { label: "Social Media Marketing", icon: "📱" },
  { label: "Online Reputation Marketing", icon: "⭐" },
  { label: "Digital Branding & Visibility", icon: "🌐" },
];

export default function EduSlideshow() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0);
      setActive((prev) => (prev + 1) % TOPICS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      setProgress(Math.min((elapsed / 2800) * 100, 100));
      if (elapsed < 2800) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <div className="edu-slideshow">
      <p className="edu-slideshow-label">Training Focused On</p>

      <div className="edu-slideshow-track">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            className="edu-slideshow-item"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="edu-slideshow-icon">{TOPICS[active].icon}</span>
            {TOPICS[active].label}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="edu-slideshow-dots">
        {TOPICS.map((_, i) => (
          <button
            key={i}
            className={`edu-dot${i === active ? " edu-dot--active" : ""}`}
            onClick={() => { setActive(i); setProgress(0); }}
          />
        ))}
      </div>

      <div className="edu-progress-track">
        <div className="edu-progress-fill" style={{ width: `${progress}%`, transition: "width 0.05s linear" }} />
      </div>
    </div>
  );
}