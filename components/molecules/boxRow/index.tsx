import React from "react";
import Box from "../../atoms/box";
import { DoubleSide, Vector3 } from "three";
import InfoBox from "../infoBox";

// import { Box } from '@react-three/drei';

const BoxRow = () => {
  const boxes = [];
  const array = [5, 3, 8, 9, 10, 2, 1, 4, 6, 7];
  for (let i = 0; i < array.length; i++) {
    const px = -5 + (i + 1);

    const sy = array[i];

    boxes.push(
      <group>
        <Box
          positionVal={[px + 1, 1.2, 0]}
          scaleVal={[1, 1 / 2, 1]}
          velocityVal={0}
          massVal={0}
          material="normal"
          enableTransparent={true}
          side={DoubleSide}
        >
          {/* <InfoBox position={new Vector3(0, 1, 0)} text={"This is info box"} /> */}
        </Box>
        <Box
          positionVal={[px + 1, 1.2, 0]}
          scaleVal={[1 / 2, 1 / 2, 1 / 2]}
          velocityVal={0}
          massVal={0}
          enableTransparent={false}
          customTexture={true}
          arrayValue={i}
        />
        <Box
          positionVal={[px + 1, 1.7, 0]}
          scaleVal={[1 / 2, 1 / 2, 1 / 2]}
          velocityVal={0}
          massVal={0}
          material="standard"
          enableTransparent={false}
          customTexture={true}
          arrayValue={array[i]}
        />
        <Box
          positionVal={[px + 1, 1.95 + sy / 2 / 2, 0]}
          scaleVal={[1 / 2, sy / 2, 1 / 2]}
          velocityVal={0}
          massVal={0}
          material="multiTexture"
          customTexture={true}
          arrayValue={array[i]}
          enableGravity={true}
        />
        {/* <Box position={[px+1, sy+1, 0]} x={1/4} y={sy/4} z={1/4} velocityVal={5}  massVal={2} material='normal' enableTransparent={false}/> */}
      </group>
    );
  }

  return <>{boxes}</>;
};

const App = () => {
  return <BoxRow />;
};

export default App;
