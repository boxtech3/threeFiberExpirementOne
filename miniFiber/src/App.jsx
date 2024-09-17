import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// gonna try some threeFiber stuff
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'



function App() {

  return (
    <><p>Running Shoes</p><div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry />
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]}/>
        </mesh>
      </Canvas>
      <Canvas  />
    </div></>
  )
}

export default App
