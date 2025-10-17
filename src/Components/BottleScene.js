import {Canvas} from "@react-three/fiber";
import {Environment,OrbitControls,useGLTF} from "@react-three/drei"
import { Suspense } from "react";

function BottleModel(){
    const {scene} = useGLTF("/models/matchalate.glb");
    return <primitive object={scene} scale={0.4} position={[0,-1.3,0]}/>;
}

export default function BottleScene(){
    return(
        <>
            <div id="canvas">
                <Canvas camera={{position:[0,1,3]}}>
                    <ambientLight intensity={0.4}/>
                    <directionalLight position={[4, 2, 5]} intensity={0.6} />
                    <directionalLight position={[8, 5, -5]} intensity={0.8} />
                    <Suspense fallback={null}>
                        <BottleModel/>
                        <Environment preset="studio" environmentIntensity={0.8}/>
                    </Suspense>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0}/>
                </Canvas>
            </div>
        </>
    )
}