import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

// The .glb files are compressed with gltf-transform (meshopt geometry
// compression), so every GLTFLoader needs the meshopt decoder to read them.
// Pass this as the third argument to useLoader(GLTFLoader, path, ...).
export const configureGltfLoader = (loader) => loader.setMeshoptDecoder(MeshoptDecoder);
