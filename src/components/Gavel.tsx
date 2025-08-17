"use client";

import { Group } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type GroupRef = Group;

const Gavel = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  const ref = useRef<GroupRef>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // slow rotation
    }
  });

  return (
    <group ref={ref} position={position}>
      {/* Handle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial
          color={"#654321"}
          metalness={0.2}
          roughness={0.6}
        />
      </mesh>
      {/* Hammer Head */}
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[0.3, 0.15, 0.15]} />
        <meshStandardMaterial
          color={"#8B4513"}
          metalness={0.3}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
};

export default Gavel;
