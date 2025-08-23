// Torus3D.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Torus() {
    const meshRef = useRef();
    const materialRef = useRef();

    // Animation (rotation + pulse + color shift)
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        if (meshRef.current) {
            // Rotation
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;

            // Pulse (scale grows & shrinks like breathing)
            const scale = 1 + Math.sin(elapsedTime) * 0.1;
            meshRef.current.scale.set(scale, scale, scale);
        }

        if (materialRef.current) {
            // Rainbow gradient effect using HSL
            const hue = (elapsedTime * 40) % 360; // cycle through colors
            materialRef.current.color.setHSL(hue / 360, 0.8, 0.5);
        }
    });

    return (
        <mesh ref={meshRef}>
            {/* Torus Geometry */}
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
        </mesh>
    );
}

export default function Torus3D() {
    return (
        <div style={{ width: "100%", height: "50vh", background: "white", position: "relative", zIndex: "99999" }}>
            <Canvas camera={{ position: [3, 3, 3] }}>
                {/* Light Setup */}
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1.5} color="white" />
                <spotLight position={[-5, -5, -5]} intensity={0.7} color="blue" />

                {/* Torus Shape */}
                <Torus />

                {/* Controls for Interaction */}
                <OrbitControls enableZoom={true} />
            </Canvas>
        </div>
    );
}
