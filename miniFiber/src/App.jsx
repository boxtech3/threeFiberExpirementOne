import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import './shoesDemo.png';
import boxTexture from './shoesDemo.png'; // Your texture image

function RotatingBox() {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, boxTexture); // Load the texture
  // Rotate the box every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function App() {
  return (
    <>
      <p>Running Shoes</p>
      <div id="canvas-container">
        <Canvas>
        {/* <image src="./shoesDemo.png" /> */}
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <RotatingBox />
          <OrbitControls /> {/* Allows user interaction */}
        </Canvas>
      </div>
    </>
  );
}

export default App;
