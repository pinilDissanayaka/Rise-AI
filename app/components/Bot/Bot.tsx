"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF as GLTFThree } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import * as THREE from "three";

import { useEffect, useState } from "react";

export function Model(): JSX.Element {
  const [canvasSize, setCanvasSize] = useState(250);
  const fixedScale = 3;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCanvasSize(150); // Adjust size for mobile view
      } else {
        setCanvasSize(250); // Default size for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      style={{
        width: `${canvasSize}px`,
        height: `${canvasSize}px`,
        background: "transparent",
      }}
      gl={{ alpha: true }}
      camera={{
        position: [0, 0, 10 * fixedScale],
        fov: 50,
      }}
    >
      <ambientLight intensity={0.5} />
      {/* If you want to rotate/pan/zoom, uncomment OrbitControls:
          <OrbitControls enablePan enableZoom enableRotate /> 
      */}
      <ModelContent scale={fixedScale} />
    </Canvas>
  );
}

function ModelContent({ scale }: { scale: number }) {
  const modelRef = useRef<THREE.Group>(null);
  // Load your GLTF model
  const { scene } = useGLTF("/bot.glb") as unknown as GLTFThree;

  // Simple rotation around Y axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  // Render the model if it exists
  return scene ? <primitive ref={modelRef} object={scene} scale={scale} /> : null;
}
