import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TileProps {
  position?: [number, number, number];
  color?: string;
}

export default function Tile({
  position = [0, 0, 0],
  color = '#ff6b6b',
}: TileProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={clicked ? 1.2 : hovered ? 1.1 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
    </mesh>
  );
}
