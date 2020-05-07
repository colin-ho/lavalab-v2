// carousel component... fk
import React, { useState } from "react"
import styled from 'styled-components'

import LeftIconDisabled from "../../static/icon/Left-Arrow-Icon/disabled.png"
import RightIconDisabled from "../../static/icon/Right-Arrow-Icon/disabled.png"
import LeftIconEnabled from "../../static/icon/Left-Arrow-Icon/light.png"
import RightIconEnabled from "../../static/icon/Right-Arrow-Icon/light.png"


const StyledCarousel = styled.div`
    width: 472px;
    height: 100%;
    overflow: hidden;


    .carouselControls {
        display: flex;
        align-items: center;
        position: absolute;
        width: 472px;
        left: 0;
        bottom: 0;
        height: 80px;
        background-color: #000000;
    }

    .carouselContent {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);   
    }

    img {
        height: 15px;
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

    .carouselSlideContainer {
        flex: 1;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
`

const StyledCarouselSlide = styled.div`
    margin-top: 60px;
    height: 80%;
    width: 100%;

    h1 {
        font-family: 'Editor';
        font-size: 42px;
        padding: 20px 0;
        line-height: 46px;
    }

    p {
        font-size: 18px;
        line-height: 1.2;
    }
`

const CarouselSlide = ({title, children}) => (
    <StyledCarouselSlide>
        <p className='title'> {title} </p>
        { children }
    </StyledCarouselSlide>
) 

const Carousel = ( {children, titles} ) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <StyledCarousel>
            <div className='carouselContent' style={{
                width: `${100 * children.length}%`,
                transform: `translateX(${-100/children.length * currentSlide}%)`
            }}>
                {
                    children.map((slide, idx) =>(
                        <div className='carouselSlideContainer' key={ idx }>
                            { slide }
                        </div>
                    ))
                }
                { children }
            </div>
            <div className='carouselControls'>
                <img src={ currentSlide === 0 ? LeftIconDisabled : LeftIconEnabled } className={ currentSlide === 0 ? 'disabled' : '' } onClick={() => { if(currentSlide !== 0) setCurrentSlide(currentSlide - 1) }}></img>
                <img src={ currentSlide === children.length - 1 ? RightIconDisabled : RightIconEnabled } className={ currentSlide === children.length - 1 ? 'disabled' : '' } onClick={() => { if(currentSlide < children.length - 1) setCurrentSlide(currentSlide + 1) }}></img>
                <div className='currentPage'>{ currentSlide < children.length - 1 ? titles[currentSlide + 1] : ``}</div>
            </div>
        </StyledCarousel>
    )
}

export { Carousel, CarouselSlide }