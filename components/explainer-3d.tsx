"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, Stars } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

function Coil() {
  const points = useMemo(() => {
    const path = new THREE.CatmullRomCurve3(
      Array.from({ length: 140 }, (_, i) => {
        const t = (i / 139) * Math.PI * 6;
        const r = 1.4;
        const y = THREE.MathUtils.mapLinear(i, 0, 139, -1.2, 1.2);
        return new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r);
      })
    );
    return path.getPoints(200);
  }, []);

  const tube = useMemo(() => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 400, 0.04, 12, false), [points]);

  return (
    <mesh geometry={tube}>
      <meshStandardMaterial color="#3BF7A6" emissive="#1de5c0" emissiveIntensity={0.8} roughness={0.2} metalness={0.4} />
    </mesh>
  );
}

function Pipe() {
  return (
    <mesh>
      <cylinderGeometry args={[0.9, 0.9, 3.2, 48]} />
      <meshStandardMaterial color="#0f172a" roughness={0.6} metalness={0.2} />
    </mesh>
  );
}

function Pulses() {
  const positions = useMemo(() => {
    const seededRandom = () => THREE.MathUtils.seededRandom();
    const arr = [];
    for (let i = 0; i < 800; i++) {
      arr.push((seededRandom() - 0.5) * 1.6, THREE.MathUtils.randFloatSpread(3.2), (seededRandom() - 0.5) * 1.6);
    }
    return new Float32Array(arr);
  }, []);
  return (
    <points position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#7DF2FF" size={0.04} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function Explainer3D() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neon/30 bg-gradient-to-br from-[#060b15] via-[#0a1324] to-[#040811] shadow-soft-glow">
      <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-white/60">Loading 3D...</div>}>
        <Canvas dpr={[1, 1.8]}>
          <color attach="background" args={["#060b15"]} />
          <ambientLight intensity={0.35} />
          <pointLight position={[4, 4, 2]} intensity={12} color="#3BF7A6" />
          <pointLight position={[-5, -4, -2]} intensity={6} color="#7DF2FF" />
          <PerspectiveCamera makeDefault position={[3, 1.2, 3]} fov={50} />
          <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.5}>
            <group position={[0, 0, 0]}>
              <Pipe />
              <Coil />
              <Pulses />
            </group>
          </Float>
          <Stars radius={8} depth={6} count={800} factor={0.4} saturation={0.15} fade speed={1} />
          <OrbitControls enablePan={false} minDistance={3} maxDistance={6} />
        </Canvas>
      </Suspense>
    </div>
  );
}
