"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type PointsRef = THREE.Points<
  THREE.BufferGeometry,
  THREE.Material | THREE.Material[]
>;
type GroupRef = THREE.Group;
type MeshRef = THREE.Mesh<
  THREE.BufferGeometry,
  THREE.Material | THREE.Material[]
>;

const GoldenParticles = () => {
  const particlesRef = useRef<PointsRef>(null);
  const count = 2000;

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0005;
      particlesRef.current.rotation.y += 0.001;
    }
  });

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random() > 0.3 ? 0.9 : 0.7;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        {/* Corrected bufferAttribute usage with args */}
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.05}
        sizeAttenuation={true}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.8}
        color={new THREE.Color(0xffd700)}
      />
    </points>
  );
};

const FloatingShapes = () => {
  const groupRef = useRef<GroupRef>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[1, 0, -2]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color={0xffd700}
          emissive={0xffd700}
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[-1.5, 1, -3]}>
        <torusGeometry args={[0.4, 0.1, 16, 32]} />
        <meshStandardMaterial
          color={0xffd700}
          emissive={0xffd700}
          emissiveIntensity={0.1}
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

const ThreeDBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color={0xffd700} />
        <GoldenParticles />
        <FloatingShapes />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
