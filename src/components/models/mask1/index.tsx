import React, { useMemo } from "react";

// LOADERS
import { BufferGeometry, Mesh, TextureLoader } from "three";
import { useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

const Mask: React.FC = () => {
  const fbx = useFBX("/models/mascara1/Mascara3_Low2.fbx");
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      "/models/mascara1/Mascara3_Low2_Mascara3_BaseColor.1001.png",
      "/models/mascara1/Mascara3_Low2_Mascara3_Height.1001.png",
      "/models/mascara1/Mascara3_Low2_Mascara3_Normal.1001.png",
      "/models/mascara1/Mascara3_Low2_Mascara3_Roughness.1001.png",
    ]
  );

  const geometries: BufferGeometry[] = [];
  fbx.traverse((c) => {
    if (c.type === "Mesh") {
      const _c = c as Mesh;
      geometries.push(_c.geometry);
    }
  });

  return (
    <group position={[0, -24, 0]} scale={[0.15, 0.15, 0.15]}>
      {geometries.map((geometry, index) => (
        <mesh key={index} geometry={geometry}>
          <meshStandardMaterial
            map={colorMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementMap={displacementMap}
          />
        </mesh>
      ))}
    </group>
  );
};

useFBX.preload("/models/mascara1/Mascara3_Low2.fbx");
export default Mask;
