import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import { ContentContainer, TileRow, ImageTile, EventLabel, ContentTile } from "../components/tile"
import { Carousel, CarouselSlide } from "../components/carousel"

import HeroTop from '../../static/img/Spring-2019-Retreat.jpg'
import TileDemoNight from '../../static/img/Fall-2019-Demo-Night.jpg'

import RightArrowIcon from '../../static/icon/Right-Arrow-Icon/Light.png'
import DownArrowIcon from '../../static/icon/Down-Arrow-Icon/Light.png'
import PlayIcon from '../../static/icon/Play-Icon/Light.png'
import DemoNightIcon from '../../static/icon/Events/Demo-Night-Icon/Highlight.png'

import "./home.css"
const HomePage = () => {
    return (
        <div className='page'>
            <ImageHero background={ HeroTop }>
                <div className='hero-content'>
                    <HeroDivider></HeroDivider>
                    <h1 className='hero-header'>Find Your Cofounders</h1>
                    <div className='bottom-row'>
                        <Button text='Join our community'/>
                        <div className='clear-button'>
                            <p>Watch the film</p>
                            <img src={ PlayIcon }/>
                        </div>
                        <div className='get-to-know-us'>
                            Get to know us
                            <img src={ DownArrowIcon }/>
                        </div>
                    </div>
                </div>
            </ImageHero>
            <ContentContainer>
                <TileRow>
                    <ImageTile image={ TileDemoNight } >
                        <EventLabel icon={ DemoNightIcon } name='Demo Night' location='Los Angeles, CA' date='Fall 2019'/>
                    </ImageTile>
                    <ContentTile title='Welcome'>
                        <Carousel titles={['Welcome', 'Cirrculum']}>
                            <CarouselSlide>
                                <h1>
                                    A definitive home for euntrepreneurs
                                </h1>
                                <p>
                                    We are the University of Southern California’s premiere, student-run, product incubator. 
                                    Every semester since 2013, we have invited 28 of the university’s most visionary 
                                    designers, developers, and product managers to build tomorrow’s technology startups, 
                                    today.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>
                                    This panel is about curriculum
                                </h1>
                                <p>
                                    Lorem ipsum yah yeet
                                </p>
                            </CarouselSlide>
                        </Carousel>
                    </ContentTile>
                </TileRow>
                <TileRow>
                    <ContentTile type='full' title='Events'>
                        <Carousel titles={['First Steps', 'Beach Bonfire']}>
                            <CarouselSlide>
                                    <h1>
                                        First steps
                                    </h1>
                                    <p>
                                        Traditional information sessions are boring.
                                        So, we created First Steps: a networking event 
                                        and ideation sprint open to any prospective applicants 
                                        who want a taste of the LavaLab experience, a breakdown 
                                        of the organization, and a detailed walkthrough of our 
                                        application process. 
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                    <h1>
                                        Beach bonfire
                                    </h1>
                                    <p>
                                        SOOO HYPE
                                    </p>
                            </CarouselSlide>
                        </Carousel>
                    </ContentTile>
                </TileRow>
            </ContentContainer>
        </div>
    )
}

const ImageHero = styled.div`
    background-image: url(${ props => props.background });
    height: 810px;
    width: 100%;
    background-size: cover;

    .hero-content {
        position: relative;
        margin: 0 auto;
        max-width: 1044px;
        width: 90%;
        top: 460px;  
    }

    .hero-header {
        font-size: 81px;
        font-family: 'Editor';
        color: white;
        width: 50%;
        line-height: 1.1;
        margin: 30px 0;
    }

    .bottom-row {
        display: flex;
        align-items: middle;
    }
    
    .clear-button {
        margin-left: 10px;
        display: inline-flex;
        color: white;
        padding: 10px 15px;
        justify-content: center;
    }

    .clear-button img {
        height: 18px;
        width: 18px;
        display: block;
        padding-left: 10px;
    }

    .get-to-know-us {
        display: inline-flex;
        padding: 0 15px;
        color: white;
        align-items: center;
        position: relative;
        margin-left: auto;
        font-family: NeurialGrotesk-Medium;
    }

    .get-to-know-us img {
        display: block;
        height: 14px;
        width: 14px;
        margin-left: 10px;
        padding: 8px;
        border: 1px white solid;
        border-radius: 20px;
    }
`

const HeroDivider = styled.div`
    height: 1px;
    background-color: white;
    margin: 0 auto;
`

const StyledButton = styled.div`
    display: inline-flex;
    background-color: #ff5c39;    
    border-radius: 2px;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    justify-content: center;
    font-family: 'NeurialGrotesk-Medium';
    
    img {
        display: block;
        height: 18px;
        width: 18px;
        padding-left: 10px;
    }
`


const Button = (props) => {
    return(
        <StyledButton>
            <p>
                { props.text }
            </p>
            <img src={RightArrowIcon} />
        </StyledButton>
    )
}

export default HomePage