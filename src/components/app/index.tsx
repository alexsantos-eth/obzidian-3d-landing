import React, { Suspense } from "react";

// 3JS
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

// COMPONENTS
import Character from "components/models/character";

const App: React.FC = () => {
  return (
    <main>
      <Canvas
        camera={{
          fov: 18,
        }}
        style={{
          background: "#000",
          height: "100vh",
          width: "100vw",
        }}
      >
        <ambientLight intensity={0.8} />
        <Suspense fallback={null}>
          <Character />
        </Suspense>
        <OrbitControls autoRotate />
        <Environment files="/models/skybox/bosque.hdr" background />
      </Canvas>
    </main>
  );
};

export default App;
