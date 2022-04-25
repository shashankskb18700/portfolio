import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
import {
  OrbitControls,
  Sparkles,
  shaderMaterial,
  useGLTF,
  useTexture,
  RoundedBox,
  Circle,
} from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import et from "../../Assets/img/js1.png";
import et1 from "../../Assets/img/firebas.png";
import et2 from "../../Assets/img/javas.png";
import et3 from "../../Assets/img/mongo.png";
import et4 from "../../Assets/img/nodee.png";
import et5 from "../../Assets/img/reacty.png";
// import "./styles.css";

function Box() {
  const [toxref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  const boxRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    boxRef.current.rotation.y += 0.01;
    // boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.z = (1 + Math.sin(0 / 1.5)) / 20;
  });

  const colorMap = useLoader(TextureLoader, et);
  const texture_2 = useLoader(TextureLoader, et1);
  const texture_3 = useLoader(TextureLoader, et2);
  const texture_4 = useLoader(TextureLoader, et3);
  const texture_5 = useLoader(TextureLoader, et4);
  const texture_6 = useLoader(TextureLoader, et5);
  // const { nodes } = useGLTF("./portal-2.glb");
  // const [texture1] = useLoader(THREE.ImageLoader, ["../../Assets/img/js1.png"]);
  return (
    <group>
      <mesh
        onClick={() => {
          setInterval(() => {
            api.velocity.set(0, 9, 0);
            // api.velocity.set(0, -2, 0);
          }, 1000);
        }}
        // ref={toxref}
        position={[0, 0, 0]}
        ref={boxRef}
        rotation-x={Math.PI * 0.25}
        rotation-y={Math.PI * 0.25}
      >
        {/* <mesh
        geometry={nodes.lampLightL.geometry}
        material-color="#f0bf94"
        position={[0.89, 1.07, -0.14]}
        scale={[0.07, 0.11, 0.07]}
      /> */}
        <boxBufferGeometry attach="geometry" />
        {/* <meshBasicMaterial attachArray="material" map={texture1} /> */}
        <meshStandardMaterial attachArray="material" map={colorMap} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attachArray="material" map={texture_2} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attachArray="material" map={texture_3} />
        <meshStandardMaterial attachArray="material" map={texture_4} />
        <meshStandardMaterial attachArray="material" map={texture_5} />
        <meshStandardMaterial attachArray="material" map={texture_6} />
        {/* <Circle /> */}
        {/* <meshLambertMaterial attachArrays="material" color="hotpink" /> */}
      </mesh>

      {/* <mesh
        geometry={nodes.lampLightL.geometry}
        material-color="#f0bf94"
        position={[0.89, 1.07, -0.14]}
        scale={[0.07, 0.11, 0.07]}
      /> */}
    </group>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  );
}

export const Boxo = ({
  scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 4),
}) => {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      {/* <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      /> */}
      {/* <Stars /> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 20, 10]} angle={0.9} castShadow />
      <Suspense fallback={null}>
        <Physics>
          <Sparkles
            count={scale.length}
            size={scale}
            position={[0, 0, 0]}
            scale={[4, 1.5, 4]}
            speed={0.3}
          />
          <Box />
          {/* <Plane /> */}
        </Physics>
      </Suspense>
    </Canvas>
  );
};
