import { Suspense,useState,useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Computers = ({ismobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <ambientLight intensity={3} />
      
      {/* <hemisphereLight intensity={0.15}  groundColor="black" />   not working */}
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={ismobile ? 0.5 : 0.75}
        position={ismobile ? [0, -9, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [ismobile,setisMobile] = useState(false);
  useEffect(()=>{
    // set the initial value of the ismobile
    const mediaQuery = window.matchMedia("(max-width-500px)")
    setisMobile(mediaQuery.matches);

    // callback function
    const handleMediaQueryChanges = (event)=>{
      setisMobile(event.matches)
    }
    // add event listener onChange to the mediaQuery so that if any changes occurs in media handleMediaQueryChanges is called and update the isMobile accordingly
    mediaQuery.addEventListener('change',handleMediaQueryChanges)

    return ()=>{
      // remove the EventListner(compentWillUnmount() in class based component)
      mediaQuery.removeEventListener("change",handleMediaQueryChanges)
    }
  },[])
  return (
    <Canvas 
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers ismobile={ismobile} />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;
// export default Computers;