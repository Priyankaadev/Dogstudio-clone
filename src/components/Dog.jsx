import {  useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { normalMap } from "three/tsl";
import * as THREE from "three";


const Dog = ()=>{

    const model = useGLTF("/models/dog.drc.glb")
    useThree(({camera, scene, gl})=>{
        camera.position.z = 0.6

    })

    const textures = useTexture({
        normalMap:"/dog_normals.jpg"
    })
    
    textures.normalMap.flipY = false

    model.scene.traverse((child)=>{
       if(child.name.includes('DOG')){
        child.material = new THREE.MeshMatcapMaterial({
            normalMap: textures.normalMap
        })
       }
    })

    return(
    <>
    <primitive object={model.scene} position={[0.25,-0.55,0]} rotation={[0,Math.PI/6,0]}  />
       <directionalLight color={0xFFFFFF} intensity={10} position={0,5,5} />  
       <OrbitControls /> 
    </>
    )
}

export default Dog;