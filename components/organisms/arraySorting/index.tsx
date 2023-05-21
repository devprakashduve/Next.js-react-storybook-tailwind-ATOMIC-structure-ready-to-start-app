import { Stats, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Physics, PlaneProps, useBox, usePlane } from "@react-three/cannon";

import Box from "../../atoms/box";

import BoxRow from "../../molecules/boxRow";

function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }), useRef());
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[25, 25]} />
      <meshStandardMaterial />
    </mesh>
  );
}
// function Plane(props: PlaneProps) {
//    const [ref, api] = useBox(
//     () => ({ args: [1, 1, 1], mass: 0, ...props }),
//     useRef()
//   )
//   return (
//     <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}  position={[0, 0, 0]}>
//       <boxGeometry args={[100, 1, 100]}/>
//        <meshNormalMaterial />
//      </mesh>
//   )
// }

// function Box(props) {
//   const [ref, api] = useBox(
//     () => ({ args: [1, 1, 1], mass: 1, ...props }),
//     useRef()
//   )

//   return (
//     <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshNormalMaterial />
//     </mesh>
//   )
// }

// function Sphere(props) {
//   const [ref, api] = useSphere(
//     () => ({ args: [0.75], mass: 1, ...props }),
//     useRef()
//   )

//   return (
//     <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
//       <sphereGeometry args={[0.75]} />
//       <meshNormalMaterial />
//     </mesh>
//   )
// }

// function Cylinder(props) {
//   const [ref, api] = useCylinder(
//     () => ({ args: [1, 1, 2, 8], mass: 1, ...props }),
//     useRef()
//   )

//   return (
//     <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
//       <cylinderGeometry args={[1, 1, 2, 8]} />
//       <meshNormalMaterial />
//     </mesh>
//   )
// }

// function TorusKnot(props) {
//   const geometry = useMemo(() => new TorusKnotGeometry(), [])
//   const [ref, api] = useTrimesh(
//     () => ({
//       args: [geometry.attributes.position.array, geometry.index.array],
//       mass: 1,
//       ...props,
//     }),
//     useRef()
//   )

//   return (
//     <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
//       <torusKnotGeometry />
//       <meshNormalMaterial />
//     </mesh>
//   )
// }

const Base: React.FC = () => {
  const [ref] = useBox(() => ({
    mass: 0,
    args: [10, 1, 10],
    position: [0, 0, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxBufferGeometry args={[10, 1, 10]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const Pillar: React.FC = () => {
  const [ref] = useBox(() => ({
    mass: 0,
    args: [1, 4, 1],
    position: [0, 2, 0],
  }));

  return (
    <mesh ref={ref} castShadow>
      <boxBufferGeometry args={[1, 4, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default function App() {
  return (
    <Canvas shadows camera={{ position: [-2, 2, 10] }}>
      {/* <spotLight
        position={[-3, 15, 15]}
        angle={Math.PI / 4}
        penumbra={0.5}
        castShadow
      /> */}
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 25, 25]}
        angle={Math.PI / 4}
        penumbra={0.5}
        castShadow
      />
      {/* <Physics>
        <Base />
        <Pillar />
      </Physics> */}
      <Physics>
        {/* <Plane rotation={[-Math.PI / 2, 0, 0]} /> */}

        <Box
          positionVal={[0, 0, 0]}
          scaleVal={[100, 2, 100]}
          massVal={0}
          velocityVal={0}
          enableReceiveShadow={true}
          enablecastShadow={false}
          material="standard"
          enableGravity={false}
        />

        <BoxRow />
        {/* <Box position={[-4, 3, 0]} x={1} y={1} z={1}  />
          <Box position={[-2, 3, 0]} x={1} y={2} z={1} />
          <Box position={[0, 3, 0]} x={1} y={2} z={1}  /> */}
        {/* <Cylinder radious={1} height={3} thickness={40} position={[1, 3, 0]} /> */}
        {/* <Sphere position={[-2, 3, 0]} />
          <Cylinder position={[0, 3, 0]} /> */}

        {/* <TorusKnot position={[4, 3, 0]} /> */}
      </Physics>
      <OrbitControls target-y={0} />
      <Stats />
    </Canvas>
  );
}
