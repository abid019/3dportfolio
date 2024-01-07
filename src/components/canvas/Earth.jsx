import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from '../Loader'
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")
  return (
    <mesh>
      <ambientLight intensity={3}/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}
const EarthCanvas = () =>{
  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{fov:45,near:0.1, far:200, position:[-4, 3, 6]}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI/2} 
          minPolarAngle={Math.PI/2}
        />
        <Earth/>
      </Suspense>
      <Preload/>
    </Canvas>
  )
}
export default EarthCanvas