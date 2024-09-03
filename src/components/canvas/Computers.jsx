import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ scale, position }) => {
  const { scene, error } = useGLTF("/Parivesh-Portfolio/desktop_pc/scene.gltf");

  if (error) {
    console.log("Failed to load model ", error);
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [scale, setScale] = useState(0.75);
  const [position, setPosition] = useState([0, -3.25, -1.5]);

  useEffect(() => {
    const updateModelSettings = () => {
      const width = window.innerWidth;

      if (width <= 500) {
        setScale(0.3);
        setPosition([0, -2, -0.6]);
      } else if (width <= 768) { // For medium-sized screens
        setScale(0.6);
        setPosition([0, -3, -1.5]);
      } else {
        setScale(0.75);
        setPosition([0, -3.25, -1.5]);
      }
    };

    updateModelSettings(); // Set initial values
    window.addEventListener("resize", updateModelSettings);

    return () => {
      window.removeEventListener("resize", updateModelSettings);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers scale={scale} position={position} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
