import { useEffect, useRef } from "react";
import * as THREE from "three";

const Particles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current || window.innerWidth < 768) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(1);
    mountRef.current.appendChild(renderer.domElement);

    /* ===== PARTICLES (VERY FEW) ===== */

    const COUNT = 80;
    const DIST = 1.2;

    const positions = new Float32Array(COUNT * 3);
    const velocity = [];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = 0;

      velocity.push({
        x: (Math.random() - 0.5) * 0.0006,
        y: (Math.random() - 0.5) * 0.0006,
      });
    }

    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const dotMaterial = new THREE.PointsMaterial({
      color: 0x94a3b8, // slate-400
      size: 0.035,
      opacity: 0.6,
      transparent: true,
    });

    const dots = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dots);

    /* ===== LINES (VERY SUBTLE) ===== */

    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      opacity: 0.05,
      transparent: true,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    /* ===== ANIMATION (VERY SLOW) ===== */

    const animate = () => {
      const p = dotGeometry.attributes.position.array;
      const linePos = [];

      for (let i = 0; i < COUNT; i++) {
        p[i * 3] += velocity[i].x;
        p[i * 3 + 1] += velocity[i].y;

        if (p[i * 3] > 5 || p[i * 3] < -5) velocity[i].x *= -1;
        if (p[i * 3 + 1] > 3 || p[i * 3 + 1] < -3) velocity[i].y *= -1;

        for (let j = i + 1; j < COUNT; j++) {
          const dx = p[i * 3] - p[j * 3];
          const dy = p[i * 3 + 1] - p[j * 3 + 1];
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < DIST) {
            linePos.push(
              p[i * 3], p[i * 3 + 1], 0,
              p[j * 3], p[j * 3 + 1], 0
            );
          }
        }
      }

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePos, 3)
      );

      dotGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Particles;
