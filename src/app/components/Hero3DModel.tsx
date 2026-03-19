'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Line, Environment } from '@react-three/drei';
import * as THREE from 'three';

function AbstractCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null); // Ref for the main group to apply rotation
  const ring1Ref = useRef<THREE.Mesh>(null); // Ref for the first ring

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Base continuous rotation
      const baseRotY = time * 0.1;
      const baseRotZ = Math.sin(time * 0.2) * 0.05;

      // Interactive mouse parallax (reacts to user hovering around the screen)
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;

      // Smooth interpolation towards mouse target combined with base rotation
      groupRef.current.rotation.x += 0.05 * (-targetY - groupRef.current.rotation.x);
      groupRef.current.rotation.y += 0.05 * (targetX + baseRotY - groupRef.current.rotation.y);
      groupRef.current.rotation.z = baseRotZ;
    }

    // Animate rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.2;
      ring1Ref.current.rotation.y = time * 0.3;
    }
  });

  return (
    // Removed Float component as rotation is now handled by useFrame on the group
    <group ref={groupRef}>
      {/* Outer distorted core */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#626bff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </Sphere>
      
      {/* Inner glowing core */}
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </Sphere>

      {/* Orbit rings representing data streams */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.015, 16, 100]} />
        <meshStandardMaterial color="#0078d4" opacity={0.6} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[4, 0.01, 16, 100]} />
        <meshStandardMaterial color="#9692ff" opacity={0.4} transparent />
      </mesh>
    </group>
  );
}

function NetworkLines() {
  const points1 = [new THREE.Vector3(-4, -2, -2), new THREE.Vector3(0, 0, 0), new THREE.Vector3(4, 2, -2)];
  const points2 = [new THREE.Vector3(-3, 3, -1), new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, -3, -1)];

  return (
    <group>
      <Line points={points1} color="#1b84ff" lineWidth={2} dashed dashSize={0.5} gapSize={0.2} />
      <Line points={points2} color="#0078d4" lineWidth={1.5} />
    </group>
  );
}

export function Hero3DModel() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-70">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#9692ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#0078d4" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" distance={10} />
        
        {/* Futuristic starfield backdrop for the tech vibe */}
        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1.5} />
        
        <AbstractCore />
        <NetworkLines />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
