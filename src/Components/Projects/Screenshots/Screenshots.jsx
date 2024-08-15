import React, {useState, useEffect } from 'react';
import './Screenshots.css';
import gameplay from '../../../assets/screenshots/ttt_gameplay_desktop.JPG';

export default function Screenshots({screenshotList}) {
    const [imgIndex, setImgIndex] = useState(0);
    const [currentImg, setCurrentImg] = useState(null);

    useEffect(() => {
        let fetchImage = async (imgTitle) => {
            const image = await import(`../../../assets/screenshots/${imgTitle}.JPG`);
            return image;
        }
        fetchImage(screenshotList[imgIndex]).then((res) => {
            setCurrentImg(res.default);
        })
    }, [imgIndex, screenshotList]);

    let carouselButtons = [];
    screenshotList.forEach((item, index) => {
        carouselButtons.push(
            <div
                className="carouselButton"
                onClick={() => {setImgIndex(index)}}
                style={(index === imgIndex) ? {backgroundColor: 'grey'} : {} }
            >
            </div>
        )
    });

    const advanceCarousel = () => {
        if (imgIndex === screenshotList.length - 1) {
            setImgIndex(0); 
        } else {
            setImgIndex(imgIndex + 1 );
        }
    }

    useEffect(() => {
        const advancer = setInterval(advanceCarousel,  2000);
        return () => clearInterval(advancer);
    })

    return (
        <div className="Screenshots">
            {/* <img src={screenshotList[imgIndex]} alt={screenshotList[imgIndex]} /> */}
            <img src={currentImg} alt={'gameplay'} />
            <div className="carouselBar">
                {carouselButtons}
            </div>
        </div>
    )
}
