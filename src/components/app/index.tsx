import React, { Suspense } from "react";

// 3JS
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";

// COMPONENTS
import Character from "components/models/character";

const App: React.FC = () => {
  const { progress } = useProgress();

  return (
    <main>
      <Canvas
        camera={{
          fov: 18,
        }}
        style={{
          background: "#fff",
          height: "100vh",
          width: "100vw",
        }}
      >
        <ambientLight intensity={0.8} />
        <Suspense fallback={<Html center>{progress} % loaded</Html>}>
          <Character />
          <Environment files="/models/skybox/bosque.hdr" background />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </main>
  );
};

export default App;
