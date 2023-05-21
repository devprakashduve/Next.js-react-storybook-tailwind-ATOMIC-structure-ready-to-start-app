import { CustomMeshProps } from "./_customMesh.interface";
const CustomMesh = (props: CustomMeshProps) => {
  const {children}=props
  return <mesh {...props} >
    {children? children:null}
  </mesh>;
};

export default CustomMesh;
