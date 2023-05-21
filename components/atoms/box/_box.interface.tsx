export interface BoxProps {
  scaleVal: [x: number, y: number, z: number];
  positionVal: [x: number, y: number, z: number];
  rotationVal?: [x: number, y: number, z: number];
  massVal?: any;
  velocityVal?: any;
  material?: "basic" | "normal" | "standard" | "multiTexture";
  enableReceiveShadow?: boolean;
  enablecastShadow?: boolean;
  enableTransparent?: boolean;
  enableGravity?: boolean;
  customTexture?: boolean;
  arrayValue?: number;
  side?: any;
  children?: any;
}
