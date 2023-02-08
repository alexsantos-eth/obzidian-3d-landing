import React, { Suspense } from "react";

// 3JS
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";

// COMPONENTS
import Mask from "components/models/mask";
import Mask1 from "components/models/mask1";
import Mask2 from "components/models/mask2";

const App: React.FC = () => {
  const { progress } = useProgress();
  const [mask, setMask] = React.useState(0);

  const changeMask = (mask: number) => () => setMask(mask);

  return (
    <main>
      <Canvas
        camera={{
          fov: 18,
        }}
        style={{
          background: "#fff",
          height: "calc(100vh - 50px)",
          width: "100vw",
        }}
      >
        <ambientLight intensity={0.8} />
        <Suspense fallback={<Html center>{progress} % loaded</Html>}>
          {mask === 0 && <Mask />}
          {mask === 1 && <Mask1 />}
          {mask === 2 && <Mask2 />}
          <Environment files="/models/skybox/bosque.hdr" background />
        </Suspense>

        <OrbitControls />
      </Canvas>
      <div>
        <button
          onClick={changeMask(0)}
          style={{ fontSize: "15px", padding: "15px" }}
        >
          Mascara 1
        </button>
        <button
          onClick={changeMask(1)}
          style={{ fontSize: "15px", padding: "15px" }}
        >
          Mascara 2
        </button>
        <button
          onClick={changeMask(2)}
          style={{ fontSize: "15px", padding: "15px" }}
        >
          Mascara 3
        </button>
      </div>
    </main>
  );
};

export default App;
