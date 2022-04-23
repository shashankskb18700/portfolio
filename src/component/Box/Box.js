import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
// import "./styles.css";

function Box() {
  const [toxref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  const boxRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    boxRef.current.rotation.y += 0.01;
    // boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
  });

  return (
    <mesh
      onClick={() => {
        setInterval(() => {
          api.velocity.set(0, 9, 0);
          // api.velocity.set(0, -2, 0);
        }, 100);
      }}
      // ref={toxref}
      position={[0, 0, 0]}
      ref={boxRef}
      rotation-x={Math.PI * 0.25}
      rotation-y={Math.PI * 0.25}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
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

export default function Boxo() {
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
      <spotLight position={[10, 15, 10]} angle={0.9} castShadow />
      <Suspense fallback={null}>
        <Physics>
          <Box />
          {/* <Plane /> */}
        </Physics>
      </Suspense>
    </Canvas>
  );
}
