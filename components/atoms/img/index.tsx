import React from "react";
import Image from "next/image";
import { ImgProps } from "./_img.interface";
const Img = (props: ImgProps) => {
  return (
    <Image {...props} width={3000} height={3000} className={props.classes} />
  );
};

export default Img;
