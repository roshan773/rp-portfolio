// Sphere3D.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Sparkles } from "@react-three/drei";

function FloatingSphere() {
  const meshRef = useRef();

  // Rotation + floating animation
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(elapsedTime) * 0.2; // floating up & down
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/* Sphere Geometry */}
      <sphereGeometry args={[1.4, 64, 64]} />

      {/* Gradient-like Material */}
      <meshStandardMaterial
        color="#ffffffff"   // base Tailwind blue
        metalness={0.33}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function Sphere3D() {
  return (
    <div style={{ width: "100%", height: "100vh"}}>
      <Canvas shadows camera={{ position: [3, 2, 5], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Floating Sphere */}
        <FloatingSphere />

        {/* Subtle Sparkles */}
        <Sparkles
          count={40}
          scale={[5, 5, 5]}
          size={2}
          speed={0.3}
          opacity={0.5}
          color="#60a5fa" // soft blue sparkles
        />

        {/* Soft realistic shadow under sphere */}
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.25}
          scale={12}
          blur={3}
          far={6}
        />

        {/* Orbit Controls */}
        <OrbitControls enableZoom={false} enablePan={true} />
      </Canvas>
    </div>
  );
}
