'use client'
import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

const Earth2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Default to desktop size; will update if screen is smaller.
  const [size, setSize] = useState(600);

  // Update canvas size based on window width.
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(300);
      } else {
        setSize(600);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    let phi = 0;
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: size * 2, // Double for retina clarity
      height: size * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [1, 0.5, 3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 2],
      opacity: 1,
      offset: [-size / 2, 0],
      markers: [],
      onRender: (state: Record<string, any>) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [size]);

  return (
    <div className="flex items-center justify-center z-[10]">
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="max-w-full"
      />
    </div>
  );
};

export default Earth2;
