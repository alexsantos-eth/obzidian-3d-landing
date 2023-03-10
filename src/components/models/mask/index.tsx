import React, { useMemo } from "react";

// LOADERS
import { BufferGeometry, Mesh, TextureLoader } from "three";
import { useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

const Mask: React.FC = () => {
  const fbx = useFBX("/models/mascara/MascaraCompleta1_Low.fbx");
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      "/models/mascara/MascaraCompleta1_Low_Mascara_BaseColor.1001.png",
      "/models/mascara/MascaraCompleta1_Low_Mascara_Height.1001.png",
      "/models/mascara/MascaraCompleta1_Low_Mascara_Normal.1001.png",
      "/models/mascara/MascaraCompleta1_Low_Mascara_Roughness.1001.png",
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
    <group position={[0, -26, 0]} scale={[0.15, 0.15, 0.15]}>
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

useFBX.preload("/models/mascara/MascaraCompleta1_Low.fbx");
export default Mask;
