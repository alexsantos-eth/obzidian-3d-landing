import React, { Suspense, useState } from "react";

// 3JS
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";

// COMPONENTS
import Mask from "components/models/mask";
import Mask1 from "components/models/mask1";
import Mask2 from "components/models/mask2";

const App: React.FC = () => {
  // PRFOGRESS
  const { progress } = useProgress();

  const [mask, setMask] = useState(0);
  const changeMask = (mask: number) => () => setMask(mask);

  const [activeBackground, setActiveBackground] = useState(false);
  const changeBackground = () => setActiveBackground(!activeBackground);

  return (
    <main>
      <Canvas
        style={{
          background: "#fff",
          height: "calc(100vh - 150px)",
          width: "100vw",
        }}
      >
        <ambientLight intensity={0.5} />
        <Suspense
          fallback={
            <Html>
              {/* TEXT WITH PROGESS */}
              <div
                style={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "bold",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Cargando {progress.toFixed(2)}%
              </div>
            </Html>
          }
        >
          <Environment preset="sunset" background={activeBackground} blur={0} />
          <OrbitControls />
          {mask === 0 && <Mask />}
          {mask === 1 && <Mask1 />}
          {mask === 2 && <Mask2 />}
        </Suspense>
      </Canvas>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <button
          style={{ fontSize: "15px", padding: "10px 20px" }}
          onClick={changeMask(0)}
        >
          Mask 1
        </button>
        <button
          style={{ fontSize: "15px", padding: "10px 20px" }}
          onClick={changeMask(1)}
        >
          Mask 2
        </button>
        <button
          style={{ fontSize: "15px", padding: "10px 20px" }}
          onClick={changeMask(2)}
        >
          Mask 3
        </button>
        <button
          style={{ fontSize: "15px", padding: "10px 20px" }}
          onClick={changeBackground}
        >
          Activar fondo
        </button>
      </div>
    </main>
  );
};

export default App;
