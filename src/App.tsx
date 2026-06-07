import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Tile from './components/Tile';

function App() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls makeDefault />

      {/* A simple 3x3 grid of tiles */}
      {Array.from({ length: 9 }).map((_, i) => {
        const x = (i % 3) - 1;
        const z = Math.floor(i / 3) - 1;
        return (
          <Tile
            key={i}
            position={[x, 0, z]}
            color={i % 2 === 0 ? '#ff6b6b' : '#4ecdc4'}
          />
        );
      })}
    </Canvas>
  );
}

export default App;
