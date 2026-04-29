import {  useThree } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { color, normalMap, texture } from "three/tsl";
import * as THREE from "three";
import { useEffect } from "react";


const Dog = ()=>{

    const model = useGLTF("/models/dog.drc.glb")
  
    useThree(({camera, scene, gl})=>{
        camera.position.z = 0.55
        gl.toneMapping = THREE.ReinhardToneMapping
        gl.outputColorSpace = THREE.SRGBColorSpace

    })

    const {actions} = useAnimations(model.animations, model.scene)

    useEffect(()=>{
        actions["Take 001"].play()

    },[actions])
    const [
        normalMap,
        sampleMatCap
    ] = (useTexture(["/dog_normals.jpg", "/matcap/mat-2.png"])).map(texture=>{
        texture.flipY = false,
        texture.colorSpace = THREE.SRGBColorSpace
        return texture
    })

    const dogMaterial = new THREE.MeshMatcapMaterial({
            normalMap: normalMap,
            matcap: sampleMatCap

        })
   
    model.scene.traverse((child)=>{
       if(child.name.includes('DOG')){
        child.material = dogMaterial
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