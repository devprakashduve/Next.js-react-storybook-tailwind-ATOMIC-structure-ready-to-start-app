import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

import { InfoBoxProps } from "./_infoBox.interface";
import { Html } from "@react-three/drei";

const InfoBox = (props: InfoBoxProps) => {
  const { position, text } = props;
  const boxRef = useRef<HTMLDivElement>(null);

  useFrame(() => {
    if (boxRef.current) {
      // Update the position of the info box based on the object's position
      const { x, y, z } = position;
      const { top, left } = boxRef.current.getBoundingClientRect();
      boxRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  return (
    <Html>
      {/* <div className="info-box" ref={boxRef}>
        {text}
      </div> */}
    </Html>
  );
};

export default InfoBox;
