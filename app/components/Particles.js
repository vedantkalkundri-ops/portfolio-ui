"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    class Particle {
      constructor(angle, radius, speed, size, color) {
        this.angle = angle;
        this.radius = radius;
        this.speed = speed;
        this.size = size;
        this.color = color;
      }

      update() {
        // swirl rotation
        this.angle += this.speed;

        // mouse interaction (pull center)
        let dx = mouse.x - canvas.width / 2;
        let dy = mouse.y - canvas.height / 2;

        let centerX = canvas.width / 2 + dx * 0.2;
        let centerY = canvas.height / 2 + dy * 0.2;

        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;

        this.draw();
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function getColor() {
      const colors = [
        "#3b82f6", // blue
        "#8b5cf6", // purple
        "#ec4899", // pink
        "#f59e0b", // orange
        "#22c55e", // green
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function init() {
      particles = [];

      for (let i = 0; i < 400; i++) {
        particles.push(
          new Particle(
            Math.random() * Math.PI * 2,
            Math.random() * 300,
            (Math.random() - 0.5) * 0.01,
            Math.random() * 2,
            getColor()
          )
        );
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => p.update());

      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

  }, []);

  return <canvas ref={canvasRef} className="particles" />;
}