"use client";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Gavel from "@/components/Gavel";
import ScalesOfJustice from "@/components/ScalesOfJustice";
import LawBook from "@/components/LawBook";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Canvas>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            color={"#FFD700"}
          />

          {/* আইন সম্পর্কিত 3D অবজেক্ট */}
          <Gavel position={[2, -1, -4]} />
          <ScalesOfJustice position={[-2, 0.5, -5]} />
          <LawBook position={[0, -0.5, -3]} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
    </main>
  );
}
