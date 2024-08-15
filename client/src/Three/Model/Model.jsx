import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame } from '@react-three/fiber';
import { radius, projects } from '../../Components/Projects/projectsState';

export default function Model({modelPath, position=[0, 0, 0], setModelSelected, scale=1, isProjectModel, setCameraPosition, setHovered, setCurrentInfo, projNum, project, ...props}) {
    const gltf = useLoader(GLTFLoader, modelPath);
    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y -= .01; 
    });



    const angleAdjustmentDeg = -14;
    let angleAdjustmentRad = angleAdjustmentDeg * (Math.PI / 180);
    if (window.innerWidth < 480) angleAdjustmentRad = 0;


    const handleClick = (e) => {
        if (isProjectModel) {
            e.stopPropagation();
            
            if (window.innerWidth > 480) {
                setCurrentInfo(project);
                setModelSelected(true);
                setTimeout(() => {
                    document.querySelector('#projects').scrollIntoView(false);
                }, 400);  
            } else {
                setTimeout(() => {
                    document.getElementById(project.title).scrollIntoView(true);
                }, 400);
                
            }
            
            const camPosX = (radius + 40) * Math.cos((projNum * 2 * Math.PI / projects.length) + angleAdjustmentRad);
            const camPosZ = (radius + 40) * Math.sin((projNum * 2 * Math.PI / projects.length) + angleAdjustmentRad);
            setCameraPosition([camPosX, 10, camPosZ]);  
        }
    }

    return (
        <mesh {...props} ref={ref} position={position} castShadow recieveShadow onPointerOver={(e) => setHovered(ref)}
        onPointerOut={(e) => setHovered(null)} onClick={(e) => handleClick(e)}>
            <primitive object={gltf.scene} dispose={null} scale={[scale, scale, scale]} />
        </mesh>     
    ) 
}
