
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sparkles,
  Environment,
} from "@react-three/drei";

function GoldObject() {
  const mainRef = useRef();
  const ringsRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (mainRef.current) {
      mainRef.current.rotation.y += delta * 0.35;
      mainRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.y += delta * 0.2;
      ringsRef.current.rotation.x += delta * 0.12;
    }

    if (groupRef.current) {
      groupRef.current.rotation.x = state.pointer.y * 0.12;
      groupRef.current.rotation.z = -state.pointer.x * 0.12;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.7}
    >
      <group ref={groupRef}>

        {/* Champagne Bronze Sphere */}
        <mesh ref={mainRef}>
          <icosahedronGeometry args={[1, 5]} />

          <meshPhysicalMaterial
            color="#B88D5B"
            metalness={0.72}
            roughness={0.24}
            clearcoat={1}
            clearcoatRoughness={0.16}
            emissive="#6D4825"
            emissiveIntensity={0.12}
          />
        </mesh>

        {/* First Orbital Ring */}
        <group ref={ringsRef}>
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <torusGeometry args={[1.55, 0.018, 16, 120]} />

            <meshStandardMaterial
              color="#D5B58A"
              metalness={0.8}
              roughness={0.3}
            />
          </mesh>

          {/* Second Orbital Ring */}
          <mesh rotation={[0.8, 0.5, 0.9]}>
            <torusGeometry args={[1.8, 0.012, 16, 120]} />

            <meshStandardMaterial
              color="#A78355"
              metalness={0.75}
              roughness={0.32}
            />
          </mesh>
        </group>

        {/* Floating Bronze Accent */}
        <mesh position={[1.7, 1.1, 0.2]}>
          <sphereGeometry args={[0.09, 32, 32]} />

          <meshStandardMaterial
            color="#E6CCAA"
            emissive="#A78355"
            emissiveIntensity={0.5}
          />
        </mesh>

      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="hero3d-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>

        {/* Studio reflections for metallic appearance */}
        <Environment preset="studio" />

        {/* Soft lighting */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2.5}
          color="#FFF0D8"
        />

        <pointLight
          position={[-4, -2, 3]}
          color="#C49A6C"
          intensity={2}
        />

        <pointLight
          position={[2, 3, -2]}
          color="#E8D1AE"
          intensity={1.5}
        />

        {/* Champagne Sparkles */}
        <Sparkles
          count={100}
          scale={5}
          size={2}
          speed={0.3}
          opacity={0.45}
          color="#C5A477"
        />

        <GoldObject />

      </Canvas>
    </div>
  );
}
