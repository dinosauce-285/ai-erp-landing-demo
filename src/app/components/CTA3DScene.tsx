'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[1.5, 0.4, 200, 32]}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </TorusKnot>
    </Float>
  );
}

export function CTA3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={3} color="#0078d4" />
        <directionalLight position={[-10, -10, -10]} intensity={2} color="#9692ff" />
        <Environment files="/hdr/studio_small_03_1k.hdr" />
        <FloatingKnot />
      </Canvas>
    </div>
  );
}
