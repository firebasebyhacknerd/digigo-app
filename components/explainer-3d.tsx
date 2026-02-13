"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

function Pipe() {
  return (
    <mesh>
      <cylinderGeometry args={[0.78, 0.78, 3.2, 56]} />
      <meshStandardMaterial color="#4b617e" roughness={0.45} metalness={0.5} />
    </mesh>
  );
}

function Coil() {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        Array.from({ length: 160 }, (_, i) => {
          const t = (i / 159) * Math.PI * 8;
          const radius = 1.16;
          const y = THREE.MathUtils.mapLinear(i, 0, 159, -1.4, 1.4);
          return new THREE.Vector3(Math.cos(t) * radius, y, Math.sin(t) * radius);
        })
      ),
    []
  );

  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 420, 0.035, 16, false),
    [curve]
  );

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color="#00a7c7"
        emissive="#1cc6e2"
        emissiveIntensity={0.75}
        roughness={0.2}
        metalness={0.7}
      />
    </mesh>
  );
}

function Pulses() {
  const positions = useMemo(() => {
    const points: number[] = [];
    const rng = THREE.MathUtils.seededRandom;
    for (let i = 0; i < 900; i += 1) {
      points.push((rng() - 0.5) * 1.8, THREE.MathUtils.randFloatSpread(3.4), (rng() - 0.5) * 1.8);
    }
    return new Float32Array(points);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#8ce7f7" size={0.038} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function FieldRings() {
  const rings = useMemo(() => {
    return Array.from({ length: 6 }, (_, idx) => {
      const y = THREE.MathUtils.mapLinear(idx, 0, 5, -1.25, 1.25);
      return { y, scale: 0.88 + idx * 0.08 };
    });
  }, []);

  return (
    <group>
      {rings.map((ring) => (
        <mesh key={`${ring.y}-${ring.scale}`} rotation={[Math.PI / 2, 0, 0]} position={[0, ring.y, 0]} scale={ring.scale}>
          <torusGeometry args={[1.06, 0.005, 14, 120]} />
          <meshBasicMaterial color="#7fd7ec" transparent opacity={0.48} />
        </mesh>
      ))}
    </group>
  );
}

export function Explainer3D() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-[#f1f8ff] via-[#e5f2ff] to-[#f8fcff] shadow-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,167,199,0.18),transparent_40%),radial-gradient(circle_at_80%_85%,rgba(13,77,145,0.18),transparent_42%)]" />
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center text-sm font-medium text-blue-700">
            Loading 3D simulation...
          </div>
        }
      >
        <Canvas dpr={[1, 1.8]}>
          <color attach="background" args={["#0f2844"]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 3]} intensity={12} color="#1cc6e2" />
          <pointLight position={[-4, -3, -3]} intensity={8} color="#7fd7ec" />
          <pointLight position={[0, 2, -4]} intensity={4} color="#ffcc8a" />
          <PerspectiveCamera makeDefault position={[3.4, 1.1, 3.4]} fov={46} />
          <Float speed={1.35} rotationIntensity={0.22} floatIntensity={0.36}>
            <group>
              <Pipe />
              <Coil />
              <Pulses />
              <FieldRings />
            </group>
          </Float>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3.2}
            maxPolarAngle={Math.PI / 1.9}
            autoRotate
            autoRotateSpeed={0.7}
          />
        </Canvas>
      </Suspense>
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        3D signal-flow simulation
      </div>
    </div>
  );
}
