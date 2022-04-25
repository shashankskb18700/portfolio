import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

import et from "../../Assets/img/js1.png";
import et1 from "../../Assets/img/firebas.png";
import et2 from "../../Assets/img/javas.png";
import et3 from "../../Assets/img/mongo.png";
import et4 from "../../Assets/img/nodee.png";
import et5 from "../../Assets/img/reacty.png";
import { useTexture } from "@react-three/drei";
import { Sphere } from "three";
function Box() {
  const texture_1 = useLoader(TextureLoader, et);
  const texture_2 = useLoader(TextureLoader, et1);
  const texture_3 = useLoader(TextureLoader, et2);
  const texture_4 = useLoader(TextureLoader, et3);
  const texture_5 = useLoader(TextureLoader, et4);
  const texture_6 = useLoader(TextureLoader, et5);

  const mesh = useRef();
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });
  useFrame((state) => {
    // mesh.current.material.forEach(
    //   (material) =>
    //     (material.uniforms.time.value = state.clock.getElapsedTime())
    // );
    // mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01;
  });
  return (
    <mesh ref={mesh} position={[0.6, 0.3, 0]}>
      <boxBufferGeometry attach="geometry" />
      <boxBufferGeometry attach="geometry" />
      <circleGeometry />

      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
    </mesh>
  );
}

function Sq() {
  const texture_1 = useLoader(TextureLoader, et);
  const texture_2 = useLoader(TextureLoader, et1);
  const texture_3 = useLoader(TextureLoader, et2);
  const texture_4 = useLoader(TextureLoader, et3);
  const texture_5 = useLoader(TextureLoader, et4);
  // const texture_6 = useLoader(TextureLoader, et5);

  const mesh = useRef();
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });
  useFrame((state) => {
    // mesh.current.material.forEach(
    //   (material) =>
    //     (material.uniforms.time.value = state.clock.getElapsedTime())
    // );
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} position={[0, 0.2, 0]} rotateY={0.523599}>
      <boxBufferGeometry attachArray="geometry" />
      <boxBufferGeometry attachArray="geometry" />
      <planeBufferGeometry attachArray="geometry" />

      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      {/* <meshStandardMaterial map={texture_6} attachArray="material" /> */}
    </mesh>
  );
}

function Sq2() {
  const texture_1 = useLoader(TextureLoader, et);
  const texture_2 = useLoader(TextureLoader, et1);
  const texture_3 = useLoader(TextureLoader, et2);
  const texture_4 = useLoader(TextureLoader, et3);
  // const texture_5 = useLoader(TextureLoader, et4);
  // const texture_6 = useLoader(TextureLoader, et5);

  const mesh = useRef();
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });
  useFrame((state) => {
    // mesh.current.material.forEach(
    //   (material) =>
    //     (material.uniforms.time.value = state.clock.getElapsedTime())
    // );
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01;
  });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attachArray="geometry" />
      <boxBufferGeometry attachArray="geometry" />
      <planeBufferGeometry attachArray="geometry" />

      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      {/* <meshStandardMaterial map={texture_5} attachArray="material" /> */}
      {/* <meshStandardMaterial map={texture_6} attachArray="material" /> */}
    </mesh>
  );
}

function Sq3() {
  const texture_1 = useLoader(TextureLoader, et);
  const texture_2 = useLoader(TextureLoader, et1);
  const texture_3 = useLoader(TextureLoader, et2);
  // const texture_4 = useLoader(TextureLoader, et3);
  // const texture_5 = useLoader(TextureLoader, et4);
  // const texture_6 = useLoader(TextureLoader, et5);

  const mesh = useRef();
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });
  useFrame((state) => {
    // mesh.current.material.forEach(
    //   (material) =>
    //     (material.uniforms.time.value = state.clock.getElapsedTime())
    // );
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01;
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxBufferGeometry attachArray="geometry" />
      <boxBufferGeometry attachArray="geometry" />
      <planeBufferGeometry attachArray="geometry" />

      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      {/* <meshStandardMaterial map={texture_4} attachArray="material" /> */}
      {/* <meshStandardMaterial map={texture_5} attachArray="material" /> */}
      {/* <meshStandardMaterial map={texture_6} attachArray="material" /> */}
    </mesh>
  );
}

export default function BoxTh() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {/* <Suspense fallback={null}> */}
      <Box />
      {/* </Suspense> */}
      <Sq />
      {/* <Sq2 /> */}
      {/* <Sq3 /> */}
    </Canvas>
  );
}
