'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshTransmissionMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function GlassObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * -0.5;
      coreRef.current.rotation.y = state.clock.elapsedTime * -0.4;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
      {/* Outer Glass Shell */}
      <Icosahedron ref={meshRef} args={[1.5, 0]}>
        <MeshTransmissionMaterial 
          backside 
          samples={4} 
          thickness={0.5} 
          chromaticAberration={1} 
          anisotropy={0.5} 
          color="#9692ff" 
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
        />
      </Icosahedron>
      {/* Inner solid core */}
      <Icosahedron ref={coreRef} args={[0.5, 0]}>
        <meshStandardMaterial color="#0078d4" emissive="#0078d4" emissiveIntensity={2} />
      </Icosahedron>
    </Float>
  );
}

export function Feature3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#9692ff" />
        <Environment files="/hdr/potsdamer_platz_1k.hdr" />
        <GlassObject />
      </Canvas>
    </div>
  );
}
