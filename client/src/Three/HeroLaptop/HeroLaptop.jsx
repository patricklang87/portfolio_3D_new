import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ErrorBoundary } from 'react-error-boundary';
import * as THREE from 'three';
import laptopModelPath from '../../assets/models/laptop.glb';
import LoadingModel from '../LoadingModel/LoadingModel';
import { configureGltfLoader } from '../gltfLoader';
import './HeroLaptop.css';

// Radians per second. Kept slow so the laptop reads as ambient motion.
const SPIN_SPEED = 0.5;
// The laptop model is tiny in its own units (about 0.55 tall); this scales
// it to fill the hero canvas.
const DISPLAY_HEIGHT = 5;

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function SpinningLaptop() {
    const gltf = useLoader(GLTFLoader, laptopModelPath, configureGltfLoader);
    const spinGroupRef = useRef();
    const shouldSpin = useMemo(() => !prefersReducedMotion(), []);

    // useLoader caches by URL, and the projects carousel shows this same
    // model. A three.js object can only live in one scene, so the hero gets
    // its own copy, scaled and centered on the origin.
    const { laptopScene, laptopScale, laptopOffset } = useMemo(() => {
        const sceneCopy = gltf.scene.clone(true);
        // The carousel sets scale/position on the shared original, and the
        // clone inherits them. Reset them so we measure the model itself.
        sceneCopy.position.set(0, 0, 0);
        sceneCopy.rotation.set(0, 0, 0);
        sceneCopy.scale.set(1, 1, 1);
        sceneCopy.updateMatrixWorld(true);
        const boundingBox = new THREE.Box3().setFromObject(sceneCopy, true);
        const size = boundingBox.getSize(new THREE.Vector3());
        const center = boundingBox.getCenter(new THREE.Vector3());
        const scale = DISPLAY_HEIGHT / size.y;
        return {
            laptopScene: sceneCopy,
            laptopScale: scale,
            laptopOffset: center.multiplyScalar(-scale),
        };
    }, [gltf]);

    useFrame((_, secondsSinceLastFrame) => {
        if (shouldSpin) {
            spinGroupRef.current.rotation.y += SPIN_SPEED * secondsSinceLastFrame;
        }
    });

    return (
        <group ref={spinGroupRef} rotation={[0.15, -0.6, 0]}>
            <primitive object={laptopScene} scale={laptopScale} position={laptopOffset} />
        </group>
    );
}

export default function HeroLaptop() {
    return (
        <div className="heroLaptop" role="img" aria-label="A 3D model of a laptop, slowly spinning">
            <Canvas camera={{ position: [0, 1.5, 9], fov: 40 }} dpr={[1, 2]}>
                <ambientLight intensity={0.6} />
                {/* Key light just left of and above the viewer, matching the projects carousel. */}
                <directionalLight position={[-4, 4, 8]} intensity={2} />
                <directionalLight position={[5, 2, -4]} intensity={0.8} color="#d9b3ff" />
                {/* If the model fails to load, leave the space empty rather than breaking the page. */}
                <ErrorBoundary
                    fallback={null}
                    onError={(error) => console.warn('Could not load the hero laptop model', error)}
                >
                    <Suspense fallback={<LoadingModel position={[0, 0, 0]} size={1.2} />}>
                        <SpinningLaptop />
                    </Suspense>
                </ErrorBoundary>
            </Canvas>
        </div>
    );
}
