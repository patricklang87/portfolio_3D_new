import React from 'react';
import { projects } from '../projectsState';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

export default function MobileProjectList({setCurrentInfo, currentInfo}) {
    const projectList = projects.map((project) => {
        return (
            <ProjectInfo setCurrentInfo={setCurrentInfo} project={project} key={project.title} />
        );
    });

    return (
        <div>
            {projectList}
        </div>
    )
}
