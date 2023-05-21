// import { useRef } from 'react'
import { useCylinder } from "@react-three/cannon";

import { CylinderProps } from "./_cylinder.interface";
import Mesh from "../customMesh";

const Cylinder = (props: CylinderProps) => {
  const { radious, height, thickness } = props;
  const [ref, api] = useCylinder(() => ({
    args: [1, 1, 2, 8],
    mass: 1,
    ...props,
  }));

  return (
    <Mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
      <cylinderGeometry args={[radious, radious, height, thickness]} />
      <meshNormalMaterial />
    </Mesh>
  );
};

export default Cylinder;
