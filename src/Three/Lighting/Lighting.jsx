import React from 'react';

export default function Lighting() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} color="purple" intensity={1}/>
            <directionalLight castShadow
            position={[0, 10, 0]} intensity={1.5}
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            />
            <spotLight color="yellow" intensity={1} position={[1000, 0, 0]}/>
        </>
    )
}
