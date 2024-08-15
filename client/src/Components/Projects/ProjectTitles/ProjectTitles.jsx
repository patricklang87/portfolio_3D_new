import React, { useState, useEffect, useCallback } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs';
import './ProjectTitles.css';
import { radius, projects } from '../projectsState';

export default function ProjectTitles({ currentInfo, setCurrentInfo, setModelSelected, setCameraPosition }) {
    const [titleIndex, setTitleIndex] = useState(0);

    const titles = projects.map((proj) => {
        return proj.title
    });

    //On mobile screens, the charm appears in the middle when selected. On large screens, it floats slightly to the left
    const angleAdjustmentDeg = -14;
    let angleAdjustmentRad = angleAdjustmentDeg * (Math.PI / 180);
    if (window.innerWidth < 480) angleAdjustmentRad = 0;

   //Used to move the camera as one scrolls through the title list. Sin and Cos are used to find the X and Z coordinates at a particular angle on the circumfrance of a circle
    const updateCamera = useCallback(() => {
        const camPosX = (radius + 40) * Math.cos(((titleIndex) * 2 * Math.PI / projects.length) + angleAdjustmentRad);
        const camPosZ = (radius + 40) * Math.sin(((titleIndex) * 2 * Math.PI / projects.length) + angleAdjustmentRad);
        setCameraPosition([camPosX, 10, camPosZ]); 
    }, [titleIndex, angleAdjustmentRad, setCameraPosition]);


    //change camera position whenever the titleIndex changes
    useEffect(() => {
        updateCamera();
    }, [titleIndex])
  
    const increment = () => {
        let newIndex = (titleIndex !== projects.length - 1) ? titleIndex + 1 : 0;
        setTitleIndex(newIndex);
        setModelSelected(true);
    }

    const decrement = () => {
        let newIndex = (titleIndex === 0) ? projects.length - 1 : titleIndex - 1;
        setTitleIndex(newIndex);
        setModelSelected(true);
    }

    const handleSelectTitle = () => {
        setCurrentInfo(projects[titleIndex]);
        setModelSelected(true);
        setTimeout(() => {
            document.querySelector('#projects').scrollIntoView(false);
        }, 400);  
    }

    return (
        <div className="ProjectTitles" style={{display: (currentInfo) ? 'none' : 'flex' }}>
            <div onClick={increment}>
                <BsFillCaretLeftFill className='selectable' size="2em" />
            </div> 
            <div className="titlesList" style={{width: "250px"}}
            onClick={handleSelectTitle}
            >
                <h1 className='selectable'>
                    {titles[titleIndex]}
                </h1>
            </div> 
            <div onClick={decrement}>
                <BsFillCaretRightFill size="2em" className='selectable' />
            </div>    
        </div>
    )
}
