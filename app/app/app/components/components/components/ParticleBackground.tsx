'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 3000;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.05;
    ref.current.rotation.y = t;
    ref.current.rotation.x = t * 0.3;
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#e8e0d5" size={0.025} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  );
}

function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const geo = useMemo(() => new THREE.PlaneGeometry(30, 30, 80, 80), []);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, Math.sin(x * 0.4 + t * 0.5) * 0.3 + Math.sin(y * 0.3 + t * 0.4) * 0.2);
    }
    pos.needsUpdate = true;
  });
  return (
    <mesh ref={meshRef} geometry={geo} rotation={[-Math.PI / 3, 0, 0]} position={[0, -3, -2]}>
      <meshStandardMaterial color="#c8bfaf" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

export default function ParticleBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Particles />
        <WavePlane />
      </Canvas>
    </div>
  );
}