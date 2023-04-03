import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Room = ({ isMobile, isMedium }) => {
  const room = useGLTF("./room/room.glb");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <pointLight intensity={1} />
      <primitive
        object={room.scene}
        scale={isMobile ? 0.4 : isMedium ? 0.5 : 0.75}
        position={isMobile ? [0, -1.8, 0] : isMedium ? [0, -2.4, 0] : [0, -2.2, 0]}
        rotation={[0.01, -0.2,0]}
      />
    </mesh>
  );
};

const RoomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuerySmallDevice = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuerySmallDevice.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuerySmallDevice.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuerySmallDevice.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQueryMediumDevice = window.matchMedia("(max-width: 800px)");
    // Set the initial value of the `isMobile` state variable
    setIsMedium(mediaQueryMediumDevice.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMedium(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQueryMediumDevice.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQueryMediumDevice.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [14, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          minAzimuthAngle={-0.2}
          maxAzimuthAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / -1}
          minPolarAngle={Math.PI / 2}
        />
        <Room isMobile={isMobile} isMedium={isMedium}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;
