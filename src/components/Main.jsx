import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { PLYLoader } from "three/addons/loaders/PLYLoader.js";
import ScrollDown from "./ScrollDown";

//initial state of spot light controls
const map = "disturb.jpg";
const intensity = 50;
const distance = 100;
const angle = Math.PI / 6;
const penumbra = 1;
const decay = 2;
const focus = 1;
const x = 97,
  y = 60,
  z = 34;

const color = "#157b8d";

const LucyModel = () => {
  const ply = useLoader(PLYLoader, "/models/Lucy100k.ply");
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(70, 60, 26);
  }, []);

  const meshRef = useRef();

  // Create mesh and apply properties
  useEffect(() => {
    console.log("here");

    ply.computeVertexNormals();
  }, []);

  // set the position of the model based on the values of the controls

  return (
    <mesh
      position={[0, 18, 0]}
      rotation={[0, -1.9, -0.1]}
      castShadow
      recieveShadow
      ref={meshRef}
      geometry={ply}
      scale={0.024}
    >
      <meshLambertMaterial />
    </mesh>
  );
};

export default function Main() {
  const spotLightRef = React.useRef();
  const lightHelperRef = React.useRef();

  const [textures, setTextures] = React.useState(null);

  React.useEffect(() => {
    const loader = new THREE.TextureLoader().setPath("/textures/");
    const filenames = ["disturb.jpg", "colors.png", "uv_grid_opengl.jpg"];
    const newTextures = { none: null };
    for (let i = 0; i < filenames.length; i++) {
      const filename = filenames[i];
      const texture = loader.load(filename, () => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.colorSpace = THREE.sRGBEncoding;
      });
      newTextures[filename] = texture;
    }
    setTextures(newTextures);
  }, []);

  //to rotate spot light continuously
  const RotateLight = () => {
    useFrame(() => {
      const time = performance.now() / 3000;

      spotLightRef.current.position.x = Math.cos(time) * 25;
      spotLightRef.current.position.z = Math.sin(time) * 25;
    });
    return (
      <spotLight
        ref={spotLightRef}
        color={color}
        position={[25, 50, 25]}
        intensity={intensity}
        distance={distance}
        map={textures["disturb.jpg"]}
        angle={angle}
        penumbra={penumbra}
        decay={decay}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={10}
        shadow-camera-far={200}
        shadow-focus={focus}
      />
    );
  };

  return (
    <div
      style={{
        height: "100vh",

        position: "relative",
      }}
    >
      <div
        style={{
          height: "100vh",
        }}
      >
        {" "}
        <Canvas
          camera={{
            position: [70, 50, 10],
            fov: 40,
            near: 1,
            far: 1000,
          }}
          shadows
        >
          <hemisphereLight
            skyColor='#ffffff' // color of the sky
            groundColor='#8d8d8d' // color of the ground
            intensity={0.05} // intensity of the light intensity={0.35}
          />

          <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
            <planeGeometry args={[1000, 1000]} />
            <meshLambertMaterial color={0x808080} />
          </mesh>

          <LucyModel />

          <RotateLight />

          {spotLightRef.current && (
            <spotLightHelper
              args={[spotLightRef.current]}
              ref={lightHelperRef}
            />
          )}
        </Canvas>
      </div>

      <div
        style={{
          position: "absolute",
          top: "8%",

          zIndex: 5,
          
        }}
        className='flex flex-col h-3/4 left-[2%] right-[2%] md:left-[5%] text-white'
      >
        <span  
          style={{
            overflow: "hidden",
            minHeight:"50px",
            height: "auto",
            
          }}
        ><p className="drop-in font-[yeezy-tstar-700] " style={{
          fontSize: "30px",
          lineHeight: "30px",
          marginBottom: "0.5rem",
          
        }}> We will bring</p>
          
         
        </span>
        <span 
          style={{
            overflow: "hidden",
            minHeight: "90px",
            
          }}
        ><p style={{
          
          lineHeight: "80px",
          marginBottom: "0.5rem",
        }} className="drop-in-2 text-[60px] md:text-[70px] font-[yeezy-tstar-700]">
          Your Vision,
        <br /> </p></span>
        <span style={{
            overflow: "hidden",
            minHeight: "90px",
          }} >
        <p className="drop-in-3  text-[60px] md:text-[70px] font-[yeezy-tstar-700]
        " style={{
          lineHeight: "80px",
          marginBottom: "1rem",
        }}>
           brought to life</p>
          
        </span>
        <span 
          style={{
            minHeight:"100px",
            
          }}
        >
         <p style={{
            
            
          }}
           className="drop-in-3  font-[yeezy-tstar-700]"> Digitally Crafted solutions to bring your business to the next
          level </p>
         <p style={{
            
            
          }}
           className="drop-in-3 font-[yeezy-tstar-700]"> Digitally Crafted solutions to bring your business to the next
          level </p>
         <p style={{
            
            
          }}
           className="drop-in-3 font-[yeezy-tstar-700]"> Digitally Crafted solutions to bring your business to the next
          level </p>
         <p style={{
            
            
          }}
           className="drop-in-3 font-[yeezy-tstar-700]"> Digitally Crafted solutions to bring your business to the next
          level </p>
         <p style={{
            
            
          }}
           className="drop-in-3 font-[yeezy-tstar-700]"> Digitally Crafted solutions to bring your business to the next
          level </p>
         <p style={{
            
            
          }}
           className="drop-in-3 font-[yeezy-tstar-700]"> Digitally Crafted solutions to bring your business to the next
          level </p>
        </span>

      <div className="max-sm:mt-48 mt-16 relative max-w-sm md:max-w-md w-full text-white  rounded-[10px]" id="a">
        <button className="h-auto mx-auto w-full  z-10 relative py-4">
          <span className='text-xl font-semibold font-[yeezy-tstar-700]'>SPEAK TO OUR TEAM TODAY</span><br />
          <span className='text-sm font-[yeezy-tstar-700]'>SPEAK TO OUR TEAM TODAY</span>
        </button>
      </div>
      </div>
      <ScrollDown borderColor={'text-white'}/>
</div>      

      
    
  );
}
