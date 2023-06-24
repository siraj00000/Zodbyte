import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { SpotLight } from "@react-three/drei";
// import { useControls } from "leva";
import '../styles/component.css'
// import { Hidden } from "@mui/material";
import ScrollDown from "./ScrollDown";

//initial state of spot light controls
const map = "disturb.jpg";
const intensity = 200;
const distance = 150;
const angle = 0.11;
const penumbra = 0.53;
const decay = 1.2;
const focus = 1;
const x = 97,
  y = 60,
  z = 34;

const color = "#157b8d";

const LucyModel = () => {
  const gltf = useLoader(GLTFLoader, "/models/Lucy100k.gltf");
  const model = gltf.scene;
  const { camera } = useThree();
  // const controls = useControls({
  //   x: { value: x, min: -100, max: 100, step: 1 },
  //   y: { value: y, min: -100, max: 100, step: 1 },
  //   z: { value: z, min: -100, max: 100, step: 1 },
  // });

  useFrame(() => {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
  });

  useEffect(() => {
    if (model) model.rotateY(THREE.MathUtils.degToRad(250));
  }, [model]);

  // decrease the size of the model
  model.scale.set(0.12, 0.12, 0.12);
  // model.position.set(5, 75, 0);

  // use the useRef hook to access the model mesh
  const meshRef = useRef();
  // set the position of the model based on the values of the controls
  model.position.set(25, 85, 10);

  return <primitive object={model} ref={meshRef} receiveShadow />;
};

export default function Main() {
  const spotLightRef = React.useRef();
  const lightHelperRef = React.useRef();
  // const planeRef = React.useRef();
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

  //initial state of spot light controls
  // const spotlightControls = useControls({
  //   color: "#157b8d",
  //   intensity: { value: intensityValue, min: 10, max: 200, step: 10 },
  //   distance: { value: distanceValue, min: 150, max: 500, step: 10 },
  //   //to add a texture to the light, we need to use the texture object
  //   map: {
  //     value: "disturb.jpg",
  //     options: ["none", "disturb.jpg", "colors.png", "uv_grid_opengl.jpg"],
  //   },
  //   angle: { value: angleValue, min: 0.05, max: Math.PI / 2, step: 0.01 },
  //   penumbra: { value: penumbraValue, min: 0, max: 1, step: 0.01 },
  //   decay: { value: decayValue, min: 1, max: 2, step: 0.01 },
  //   focus: { value: focus, min: -3, max: 3, step: 0.05 },
  // });

  //to rotate spot light continuously
  const RotateLight = () => {
    useFrame(() => {
      spotLightRef.current.position.x = Math.sin(Date.now() * 0.0003) * 800;
      spotLightRef.current.position.z = Math.cos(Date.now() * 0.0003) * 800;
    });
    return (
      <spotLight
        ref={spotLightRef}
        scale={[10, 10, 10]}
        color={color}
        intensity={intensity}
        distance={distance}
        map={textures && textures[map]}
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
    <div className="h-[130vh] sm:h-[130vh] md:h-[105vh]"
      style={{
  

        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
        }}
      >
        {" "}
        <Canvas
          camera={{
            position: [100, 60, 25],
            fov: 15,
            near: 1,
            far: 1000,
          }}
        >
          <pointLight position={[600, 35, 300]} castShadow intensity={0.2} />
          {/* <OrbitControls
          minDistance={20}
          maxDistance={2000}
          maxPolarAngle={Math.PI / 2}
        /> */}
          <group scale={[0.09, 0.09, 0.09]} position={[0, -2, 0]}>
            <mesh rotation-x={-Math.PI / 2} position={[0, -1, -10]}>
              <planeGeometry args={[2000, 2000]} />
              <meshLambertMaterial color={0x808080} />
            </mesh>

            <LucyModel />

            <group position={[0, 1200, 0]}>
              <RotateLight />
            </group>
            {spotLightRef.current && (
              <spotLightHelper
                args={[spotLightRef.current]}
                ref={lightHelperRef}
              />
            )}
          </group>
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
