import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';
extend({OrbitControls});

export default function CameraControls({cameraPosition, modelSelected=false, currentInfo}) {
    const {
        camera,
        gl: { domElement }
    } = useThree();
    const controls = useRef();

    useFrame((state) => {
        controls.current.update()   
    });

    let [x, y, z] = cameraPosition;

    useFrame(() => {
        if (modelSelected) {
                const camPosVec = new THREE.Vector3(x, y, z);
            camera.position.lerp(camPosVec, 0.1);
        }
    });


    return (
        <orbitControls
            enabled={true}
            ref={controls}
            args={[camera, domElement]}
            enableZoom={false}
            autoRotate={!modelSelected}
            autoRotateSpeed={-1}
            enableDamping={true}
            // maxAzimuthAngle={Math.PI / 4}
            maxPolarAngle={1.44} //1.57
            // minAzimuthAngle={-Math.PI / 4}
            minPolarAngle={1.44}
        />
    )
}
