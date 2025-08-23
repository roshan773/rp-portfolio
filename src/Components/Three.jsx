import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Torus() {
    const meshRef = useRef();

    // Rotation animation
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            {/* Torus Geometry */}
<<<<<<< HEAD
            <torusGeometry args={[1.5, 0.7, 30, 200]} />
            
            {/* Material with ref for color animation */}
            <meshStandardMaterial
                ref={materialRef}
                metalness={0.8}
                roughness={0.2}
                side={THREE.DoubleSide}
            />

            {/* Sparkle effect (adds glowing particles on surface) */}
            <Sparkles
                count={100}
                scale={[3, 3, 3]}
                size={2}
                speed={0.5}
                opacity={0.8}
                color="white"
            />
=======
            <torusGeometry args={[1, 0.4, 16, 100]} />
            {/* Material */}
            <meshStandardMaterial color="#4B9CE2" metalness={0.7} roughness={0.2} />
>>>>>>> 4a91933186b31d7d66f7c0f8bc0450ed0a6b677a
        </mesh>
    );
}

export default function Torus3D() {
    return (
        <div style={{ width: "100%", height: "100vh", background: "white" }}>
            <Canvas camera={{ position: [3, 3, 3] }}>
                {/* Light Setup */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Torus Shape */}
                <Torus />

                {/* Controls for Interaction */}
                <OrbitControls enableZoom={true} />
            </Canvas>
        </div>
    );
}
