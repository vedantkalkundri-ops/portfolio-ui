"use client";

import { useEffect, useRef } from "react";


let time = 0;
export default function TopoBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function noise(x) {
      return Math.sin(x * 0.01) * 50;
    }
    function getDynamicColor(t, offset = 0) {
      // t = time, offset = per-line variation
      const r = Math.floor(59 + Math.sin(t + offset) * 20);   // blue base
      const g = Math.floor(130 + Math.sin(t + offset + 1) * 40);
      const b = Math.floor(246 + Math.cos(t + offset) * 20);

      return `rgba(${r}, ${g}, ${b}, 0.35)`;
    }
    function getDynamicColor(t, offset = 0) {
      const mix = (Math.sin(t * 0.5 + offset) + 1) / 2; // 0 → 1

      // Blue
      const r1 = 59, g1 = 130, b1 = 246;

      // Purple
      const r2 = 139, g2 = 92, b2 = 246;

      const r = Math.floor(r1 + (r2 - r1) * mix);
      const g = Math.floor(g1 + (g2 - g1) * mix);
      const b = Math.floor(b1 + (b2 - b1) * mix);

      return `rgba(${r}, ${g}, ${b}, 0.35)`;
    }
    class Line {
  constructor(y) {
    this.baseY = y;
    this.offset = 0;
    this.velocity = 0;
  }

  update(time) {
    let dy = mouse.y - this.baseY;
    let dist = Math.abs(dy);

    if (dist < 150) {
      this.velocity -= dy * 0.002;
    }

    // spring physics
    this.velocity += (0 - this.offset) * 0.05;
    this.velocity *= 0.9;
    this.offset += this.velocity;

    // auto movement
    this.offset += Math.sin(time + this.baseY * 0.01) * 0.2;
  }

  draw(i, time) {
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x += 20) {
      let y =
        this.baseY +
        this.offset +
        Math.sin(x * 0.01 + time + i) * 15;

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    // ✅ KEEP ONLY ONE GRADIENT
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

      gradient.addColorStop(0, getDynamicColor(time, i * 0.3));
      gradient.addColorStop(0.5, getDynamicColor(time + 1, i * 0.5));
      gradient.addColorStop(1, getDynamicColor(time + 2, i * 0.7));

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5 + Math.sin(i * 0.4) * 1.2;
    ctx.shadowColor = getDynamicColor(time, i * 0.4);
    ctx.shadowBlur = 10;
    ctx.stroke();
  }
}

    let lines = [];

    function init() {
      lines = [];
      for (let i = 0; i < 26; i++) {
        lines.push(new Line(i * (window.innerHeight / 25)));
      }
    }

    function animate() {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01; // 🔥 controls speed

      lines.forEach((line, i) => {
        line.update(time);   // pass time
        line.draw(i, time);  // pass time
      });

      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="topoCanvas" />;
}