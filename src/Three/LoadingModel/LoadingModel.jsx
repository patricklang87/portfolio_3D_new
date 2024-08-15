import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber' 

export default function LoadingModel() {

    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.y += .2;
    })

    return (
        <mesh ref={ref} visible position={[0, 10, 50]} rotation={[0, 0, 0]}>
            <dodecahedronGeometry attach="geometry" args={[6, 0]} />
            <meshStandardMaterial
                attach="material"
                color="aquamarine"
                transparent
                opacity={1}
                emissive={true}
                emissiveIntensity={1.5}
                roughness={1}
                metalness={0}
            />
        </mesh>
    )
}
