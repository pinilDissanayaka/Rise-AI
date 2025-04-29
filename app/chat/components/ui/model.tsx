// app/chat/components/ui/model.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model({ className, scale = 1 }: { className?: string; scale?: number }) {
  const { scene } = useGLTF("/chatUI/futuristic_flying_animated_robot_-_low_poly.glb");
  return (
    <div className={className}>
      <Canvas className="h-full w-full">
        <ambientLight intensity={0.5} />
        <OrbitControls enablePan enableZoom enableRotate />
        <primitive object={scene} scale={scale} />
      </Canvas>
    </div>
  );
}
