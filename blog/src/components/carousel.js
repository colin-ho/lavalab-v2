// carousel component... fk
import React from "react"
import styled from 'styled-components'

import LeftIconDisabled from "../../static/icon/Left-Arrow-Icon/disabled.png"
import RightIconDisabled from "../../static/icon/Right-Arrow-Icon/disabled.png"
import LeftIconEnabled from "../../static/icon/Left-Arrow-Icon/light.png"
import RightIconEnabled from "../../static/icon/Right-Arrow-Icon/light.png"


const StyledCarousel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;


    .carouselControls {
        display: flex;
        align-items: center;
        position: relative;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-color: #000000;
    }

    .carouselContent {
        width: 100%;
        flex-grow: 1;
    }

    .carouselTitle {
        text-transform: uppercase;
        font-family: 'NeurialGrotesk-Medium';
        padding: 32px 0;
    }

    img {
        heght: 15px;
        width: 15px;
        padding: 6px;
        border: 1px solid #FFFFFF;
        border-radius: 100px;
        margin-left: 32px;
    }

    img.disabled {
        border: 1px solid #8e8e93;
    }

    .currentPage {
        margin-left: 15px;
        color: white;
    }
`

const Carousel = ( props ) => {
    return (
        <StyledCarousel>
            <p className='carouselTitle'>{ props.title }</p>
            <div className='carouselContent'>

            </div>
            <div className='carouselControls'>
                <img src={ LeftIconDisabled } className='disabled'></img>
                <img src={ RightIconEnabled }></img>
                <div className='currentPage'>Curriculum</div>
            </div>
        </StyledCarousel>
    )
}

export { Carousel }