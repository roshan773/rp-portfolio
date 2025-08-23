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
            <torusGeometry args={[1, 0.4, 16, 100]} />
            {/* Material */}
            <meshStandardMaterial color="#4B9CE2" metalness={0.7} roughness={0.2} />
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
