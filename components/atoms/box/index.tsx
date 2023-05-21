// import { useRef } from 'react'
import { useBox } from "@react-three/cannon";
import { BoxProps } from "./_box.interface";
import { useTexture } from "@react-three/drei";
import THREE, {
  Mesh,
  MeshBasicMaterial,
  DoubleSide,
  Vector2,
  CanvasTexture,
  TextureLoader,
  BackSide,
  FrontSide,
  MeshStandardMaterial,
} from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = (props: BoxProps) => {
  const {
    scaleVal,
    positionVal,
    rotationVal,
    massVal,
    velocityVal,
    enableReceiveShadow,
    enablecastShadow,
    enableTransparent,
    enableGravity,
    customTexture,
    arrayValue,
    children,
  } = props;
  let massValue = 1;
  if (massVal < 1) {
    massValue = 0;
  }
  let velocityValue = 5;
  if (velocityVal < 1) {
    velocityValue = 0;
  }
  let enableReceiveShadowVal = true;
  if (enableReceiveShadow === false) {
    enableReceiveShadowVal = false;
  }
  let enablecastShadowVal = true;
  if (enablecastShadow === false) {
    enablecastShadowVal = false;
  }

  let enableTransparentVal = false;
  if (enableTransparent === true) {
    enableTransparentVal = true;
  }

  const [ref, api] = useBox(() => ({
    args: scaleVal,
    position: positionVal,
    mass: massValue,
    ...props,
  }));

  const texture = useTexture("/images/card-top.jpg");

  const meshRef = useRef<Mesh>();

  // Create a canvas element
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d")!;

  // Generate a random number
  let randomNumber = Math.floor(Math.random() * 100);
  if (arrayValue >= 0) {
    randomNumber = arrayValue;
  }

  // Draw the random number on the canvas
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = "208px sans-serif";
  context.fillStyle = "Red";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(
    randomNumber.toString(),
    canvas.width / 2,
    canvas.height / 2
  );

  // Create a texture from the canvas
  const dynamicTexture = new CanvasTexture(canvas);

  // Update the material's map with the dynamic texture
  useFrame(() => {
    if (meshRef.current) {
      const material = meshRef.current.material as MeshBasicMaterial;
      material.map = dynamicTexture;
      material.needsUpdate = true;
    }
  });

  const material = (materialtype: string) => {
    if (materialtype === "standard") {
      return (
        <meshStandardMaterial
          map={customTexture ? dynamicTexture : null}
          transparent={enableTransparentVal}
          opacity={0.5}
          color={"lime"}
        />
      );
    } else if (materialtype === "multiTexture") {
      const textureLoader = new TextureLoader();
      const texture1 = textureLoader.load("/images/card-top.jpg");
      const texture2 = textureLoader.load("/images/card-top.jpg");
      const texture3 = textureLoader.load("/images/card-top.jpg");
      const texture4 = textureLoader.load("/images/card-top.jpg");
      const texture5 = textureLoader.load("/images/card-top.jpg");
      const texture6 = textureLoader.load("/images/card-top.jpg");

      // Create an array of materials with the textures
      const materials = [
        new MeshStandardMaterial({ map: texture1 }), // Front face material
        new MeshStandardMaterial({ map: texture2 }), // Back face material
        new MeshStandardMaterial({ map: dynamicTexture }), // Top face material
        new MeshStandardMaterial({ map: texture4 }), // Bottom face material
        new MeshStandardMaterial({ map: texture5 }), // Right face material
        new MeshStandardMaterial({ map: texture6 }), // Left face material
      ];
      return (
        <>
          <meshStandardMaterial map={texture1} />
          <meshStandardMaterial map={texture2} />
          <meshStandardMaterial map={texture3} />
          <meshStandardMaterial map={texture4} />
          <meshStandardMaterial map={texture5} />
          <meshStandardMaterial map={texture6} />
          <primitive object={materials} attach="material" />
        </>
      );
    } else if (materialtype === "normal") {
      return (
        <meshNormalMaterial transparent={enableTransparentVal} opacity={0.5} />
      );
    }
  };

  return (
    <mesh
      ref={ref}
      castShadow={enablecastShadowVal}
      onPointerDown={() => api.velocity.set(0, velocityValue, 0)}
      receiveShadow={true}
    >
      {/* <Box rotationVal={[0,0,0]}     
      scaleVal={[5, 1, 5]} 
      positionVal={[0, 0.5, 0]} / > */}
      <boxGeometry args={scaleVal}>{children ? children : null}</boxGeometry>
     
      {props.material ? (
        material(props.material)
      ) : (
        <meshBasicMaterial
          map={customTexture ? dynamicTexture : texture}
          transparent={enableTransparentVal}
          opacity={0.5}
        />
      )}
    </mesh>
  );
};

export default Box;
