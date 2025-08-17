"use client";

import { Group } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type GroupRef = Group;

const ScalesOfJustice = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  const ref = useRef<GroupRef>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={ref} position={position}>
      {/* Stand */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color={"#FFD700"} />
      </mesh>
      {/* Beam */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 0.05, 0.05]} />
        <meshStandardMaterial color={"#FFD700"} />
      </mesh>
      {/* Left plate */}
      <mesh position={[-0.45, 0.2, 0]}>
        <torusGeometry args={[0.15, 0.03, 16, 32]} />
        <meshStandardMaterial color={"#DAA520"} />
      </mesh>
      {/* Right plate */}
      <mesh position={[0.45, 0.2, 0]}>
        <torusGeometry args={[0.15, 0.03, 16, 32]} />
        <meshStandardMaterial color={"#DAA520"} />
      </mesh>
    </group>
  );
};

export default ScalesOfJustice;
