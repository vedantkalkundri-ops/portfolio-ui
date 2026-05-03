"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AIThinkingOrb() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    
    // Add a subtle fog to fade dots further away
    scene.fog = new THREE.FogExp2(0x050510, 0.15);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
    mount.appendChild(renderer.domElement);

    // 2. Generate Orb Particles (Fibonacci Sphere for even distribution)
    const particleCount = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount);

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < particleCount; i++) {
      const y = 1 - (i / (particleCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const r = 2.0; // Base radius of the orb
      positions[i * 3] = r * Math.cos(theta) * radiusAtY;
      positions[i * 3 + 1] = r * y;
      positions[i * 3 + 2] = r * Math.sin(theta) * radiusAtY;

      // Random value per particle for noise
      randoms[i] = Math.random();
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));

    // 3. Custom Shader Material for Pulses
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#00ffcc") }, // Cyan/Teal AI color
      },
      vertexShader: `
        uniform float uTime;
        attribute float aRandom;
        varying float vAlpha;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);

          // Create a wave pulse that travels from bottom to top
          float pulse = sin(modelPosition.y * 3.0 - uTime * 4.0) * 0.5 + 0.5;
          
          // Add secondary high-frequency noise for a "digital" feel
          float noise = sin(aRandom * 100.0 + uTime * 2.0) * 0.5 + 0.5;

          // Combine pulse and noise for final scale
          float size = (pulse * 3.0 + noise * 1.5 + 1.0);

          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;

          gl_Position = projectedPosition;
          
          // Perspective size attenuation
          gl_PointSize = size * (15.0 / -viewPosition.z);

          // Pass alpha intensity to fragment shader
          vAlpha = (pulse * 0.6 + noise * 0.4) * 0.8 + 0.2;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;

        void main() {
          // Shape the point into a soft circle instead of a square
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;

          gl_FragColor = vec4(uColor, strength * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending, // Makes overlapping dots glow brighter
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // 4. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 5. Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update shader uniforms
      material.uniforms.uTime.value = elapsedTime;

      // Rotate the entire orb
      points.rotation.y = elapsedTime * 0.15;
      points.rotation.x = sinWave(elapsedTime * 0.05) * 0.2; // Gentle tilt
      points.rotation.z = elapsedTime * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Helper for smooth organic movement
    const sinWave = (t) => Math.sin(t);

    animate();

    // 6. Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#050510", // Very dark navy/black base
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0, // Fixed z-index so it's not hidden behind parent background
      }}
    />
  );
}
