import React, { useRef } from "react";




import {
  Mesh,
  MeshBasicMaterial,
  DoubleSide,
  Vector2,
  CanvasTexture,
} from "three";

import { useFrame } from "@react-three/fiber";

const DynamicTexture: React.FC = () => {
  const meshRef = useRef<Mesh>();

  // Create a canvas element
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d")!;

  // Generate a random number
  const randomNumber = Math.floor(Math.random() * 100);

  // Draw the random number on the canvas
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = "48px sans-serif";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(
    randomNumber.toString(),
    canvas.width / 2,
    canvas.height / 2
  );

  // Create a texture from the canvas
  const texture = new CanvasTexture(canvas);

  // Update the material's map with the dynamic texture
  useFrame(() => {
    if (meshRef.current) {
      const material = meshRef.current.material as MeshBasicMaterial;
      material.map = texture;
      material.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeBufferGeometry args={[1, 1]} />
      <meshBasicMaterial side={DoubleSide} />
    </mesh>
  );
};
const App = () => {
  return <DynamicTexture />;
};

export default App;
