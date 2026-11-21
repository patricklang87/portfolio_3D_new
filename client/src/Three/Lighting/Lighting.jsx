import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Where the main light sits relative to the camera, in camera space:
// a little to the viewer's left and slightly above eye level.
const MAIN_LIGHT_OFFSET_FROM_CAMERA = new THREE.Vector3(-25, 15, 0);

export default function Lighting() {
    const mainLightRef = useRef();
    const { camera } = useThree();
    const mainLightPosition = useRef(new THREE.Vector3());

    // The camera orbits the carousel, so the main light moves with it to keep
    // the models lit from the viewer's side. The light points at the carousel
    // center, which is its default target.
    useFrame(() => {
        mainLightPosition.current
            .copy(MAIN_LIGHT_OFFSET_FROM_CAMERA)
            .applyQuaternion(camera.quaternion)
            .add(camera.position);
        mainLightRef.current.position.copy(mainLightPosition.current);
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[-110, 0, 500]} color="purple" intensity={1}/>
            <directionalLight
                ref={mainLightRef}
                castShadow
                intensity={1.5}
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />
            <spotLight color="yellow" intensity={1} position={[1000, 0, 0]}/>
        </>
    )
}
