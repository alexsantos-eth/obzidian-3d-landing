import React, { useMemo } from "react";

// LOADERS
import { BufferGeometry, Mesh, TextureLoader } from "three";
import { useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

const Mask: React.FC = () => {
  const fbx = useFBX("/models/mascara2/Mascara2_LowInstagram.fbx");
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      "/models/mascara2/Mascara2_LowInstagram_Mascara2_BaseColor.1001.png",
      "/models/mascara2/Mascara2_LowInstagram_Mascara2_Height.1001.png",
      "/models/mascara2/Mascara2_LowInstagram_Mascara2_Normal.1001.png",
      "/models/mascara2/Mascara2_LowInstagram_Mascara2_Roughness.1001.png",
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
    <group position={[0, -25, 0]} scale={[0.15, 0.15, 0.15]}>
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

useFBX.preload("/models/mascara2/Mascara2_LowInstagram.fbx");
export default Mask;
