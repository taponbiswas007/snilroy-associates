"use client";

import { Group } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type GroupRef = Group;

const LawBook = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  const ref = useRef<GroupRef>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.006;
    }
  });

  return (
    <group ref={ref} position={position}>
      {/* Book body */}
      <mesh>
        <boxGeometry args={[1, 0.15, 1.4]} />
        <meshStandardMaterial
          color={"#8B0000"}
          metalness={0.4}
          roughness={0.5}
        />
      </mesh>
      {/* Book spine */}
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.1, 0.2, 1.4]} />
        <meshStandardMaterial color={"#FFD700"} />
      </mesh>
    </group>
  );
};

export default LawBook;
