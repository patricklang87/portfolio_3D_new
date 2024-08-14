import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Outline } from "@react-three/postprocessing";
import "./Projects.css";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

import Lighting from "../../Three/Lighting/Lighting";
import LoadingModel from "../../Three/LoadingModel/LoadingModel";
import Model from "../../Three/Model/Model";
import CameraControls from "../../Three/CameraControls";
import Terrain from "../../Three/Terrain";
import { radius, projects } from "./projectsState";
import MobileProjectsList from "./MobileProjectList/MobileProjectList";

export default function Projects() {
  const [cameraPosition, setCameraPosition] = useState([0, 10, 110]);
  const [hovered, setHovered] = useState(null);
  const selected = hovered ? [hovered] : undefined;
  const [currentInfo, setCurrentInfo] = useState(null);
  const [changingFocus, setChangingFocus] = useState(false);

  const projectCarousel = projects.map((project, index) => {
    const projNum = index;
    const xPos = radius * Math.cos((projNum * 2 * Math.PI) / projects.length);
    const zPos = radius * Math.sin((projNum * 2 * Math.PI) / projects.length);
    return (
      <Model
        isProjectModel={true}
        setCameraPosition={setCameraPosition}
        setChangingFocus={setChangingFocus}
        setHovered={setHovered}
        setCurrentInfo={setCurrentInfo}
        key={project.title}
        modelPath={project.modelPath}
        scale={project.scale}
        project={project}
        position={[xPos, 0, zPos]}
        projNum={projNum}
      />
    );
  });

  return (
    <div dpr={[1, 2]} className="Projects" id="projects">
      <Canvas
        shadowMap
        camera={{
          position: [0, 10, 110],
          fov: 40,
        }}
      >
        <CameraControls
          cameraPosition={cameraPosition}
          changingFocus={changingFocus}
          setChangingFocus={setChangingFocus}
          currentInfo={currentInfo}
        />
        <Lighting />
        <Suspense fallback={<LoadingModel />}>{projectCarousel}</Suspense>
        <fog attach="fog" args={["#FF4E50", 40, 150]} />
        <Terrain GROUND_HEIGHT={-2} setCurrentInfo={setCurrentInfo} />
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            selection={selected}
            visibleEdgeColor="white"
            edgeStrength={100}
          />
        </EffectComposer>
      </Canvas>
      {currentInfo && (
        <ProjectInfo setCurrentInfo={setCurrentInfo} project={currentInfo} />
      )}
      {window.innerWidth < 480 && <MobileProjectsList />}
    </div>
  );
}
