import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import { ContentContainer, TileRow, ImageTile, EventLabel, ContentTile, EmploymentTile, Masthead, MastheadTextTile } from "../components/tile"
import { Carousel, CarouselSlide, TiledCarousel, SinglePanel } from "../components/carousel"

import HeroTop from '../../static/img/Spring-2019-Retreat.jpg'
import TileDemoNight from '../../static/img/Fall-2019-Demo-Night.jpg'

import RightArrowIcon from '../../static/icon/Right-Arrow-Icon/Light.png'
import DownArrowIcon from '../../static/icon/Down-Arrow-Icon/Light.png'
import PlayIcon from '../../static/icon/Play-Icon/Light.png'
import DemoNightIcon from '../../static/icon/Events/Demo-Night-Icon/Highlight.png'

import PersonIcon from '../../static/icon/Person-Icon/Highlight.png'

import FirstStepsIcon from '../../static/icon/Events/First-Steps-Icon/Highlight.png'
import BeachBonfireIcon from '../../static/icon/Events/Beach-Bonfire-Icon/Highlight.png'

import AirbnbIcon from '../../static/icon/Airbnb-Icon/Light.png'
import AmazonIcon from '../../static/icon/Amazon-Icon/Light.png'
import AppleIcon from '../../static/icon/Apple-Icon/Light.png'
import FacebookIcon from '../../static/icon/Facebook-Icon/Light.png'
import GoogleIcon from '../../static/icon/Google-Icon/Light.png'
import MicrosoftIcon from '../../static/icon/Microsoft-Icon/Light.png'
import RobinhoodIcon from '../../static/icon/Robinhood-Icon/Light.png'
import SlackIcon from '../../static/icon/Slack-Icon/Light.png'
import SnapchatIcon from '../../static/icon/Snapchat-Icon/Light.png'
import TwitterIcon from '../../static/icon/Twitter-Icon/Light.png'
import UberIcon from '../../static/icon/Uber-Icon/Light.png'
import MoreIcon from'../../static/icon/Add-Icon/Light.png'

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
                    <ContentTile title="LavaLab for Impact 2020" type="full">
                        <Masthead>
                            <MastheadTextTile>
                                    <h1 className='hero-header'>Social Entrepreneurship Toolkit</h1>
                                    <p className="subheader">
                                        LavaLab is dedicating its efforts this semester to support USC's
                                        black community.
                                    </p>
                                    <p classname="content">
                                        LavaLab will be shifting its focus from recruiting a cohort to
                                        building an accessible, inclusive, virtual program this fall.
                                        We are launching a Social Entrepreneurship Toolkit that has two components,
                                        LavaConnect and LavaLearn.
                                    </p>
                            </MastheadTextTile>
                        </Masthead>
                    </ContentTile>
                </TileRow>
            </ContentContainer>
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
                        <TiledCarousel titles={['First Steps', 'Beach Bonfire', 'Beach Bonfire']}>
                            <CarouselSlide icon={ FirstStepsIcon }>
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
                            <CarouselSlide icon={ BeachBonfireIcon }>
                                    <h1>
                                        Beach bonfire
                                    </h1>
                                    <p>
                                        SOOO HYPE
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ BeachBonfireIcon }>
                                    <h1>
                                        Beach bonfire
                                    </h1>
                                    <p>
                                        SOOO HYPE
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ BeachBonfireIcon }>
                                    <h1>
                                        Beach bonfire
                                    </h1>
                                    <p>
                                        SOOO HYPE
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ BeachBonfireIcon }>
                                    <h1>
                                        Beach bonfire
                                    </h1>
                                    <p>
                                        SOOO HYPE
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ BeachBonfireIcon }>
                                    <h1>
                                        Beach bonfire
                                    </h1>
                                    <p>
                                        SOOO HYPE
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ BeachBonfireIcon }>
                                    <h1>
                                        Beach bonfire
                                    </h1>
                                    <p>
                                        SOOO HYPE
                                    </p>
                            </CarouselSlide>
                        </TiledCarousel>
                    </ContentTile>
                </TileRow>
            </ContentContainer>
            <ImageHero background={ HeroTop } height='500'>
                <div className='event-container'>
                    <EventLabel icon={ DemoNightIcon } name='Demo Night' location='Los Angeles, CA' date='Fall 2019'/>                  
                </div>
            </ImageHero>
            <ContentContainer>
                <TileRow>
                    <ContentTile type='full' title='Community'>
                        <SinglePanel>
                            <CarouselSlide>
                                <h1>
                                A network of like-minded innovators, over 200 members strong and growing
                                </h1>
                                <p>
                                Your fellow cohort members are friends for life. With an expansive network 
                                of designers, developers, product managers, and all-around great people, 
                                LavaLab offers the unique opportunity to become part of something greater 
                                than yourself. Our community is full of rich life experience and extensive 
                                industry knowledge. With kickbacks, parties, and workshops, alumni are always 
                                involved, even after their Cohort semester.
                                </p>
                            </CarouselSlide>
                        </SinglePanel>
                    </ContentTile>
                </TileRow>
            </ContentContainer>
            <ImageHero className='quote'>
                <div className='quote-content'>
                    <span>“</span><br/>
                    (CAN WE REPLACE THIS lmao)
                    LavaLab was seriously one of the most 
                    unique experiences of my life. I loved it — 
                    I felt like I grew a lot, especially as a presenter. I made amazing friends and it opened a huuuge door with Microsoft 
                    as well.

                    <div className='quote-profile'>
                        <img src={ PersonIcon } />

                        <div className='quote-profile-details'>
                            <p className='name'>
                                Jay Goettman
                            </p>
                            <p className='detail'>
                                Product Manager · Fall 2019
                            </p>
                        </div>
                        
                    </div>
                </div>
            
            </ImageHero>

            <ContentContainer>
                <TileRow>
                    <ContentTile title='Alumni Project Spotlight'>
                        <Carousel titles={['Kyoku', 'Project Wren']}>
                            <CarouselSlide>
                                <h1>
                                    Kyoku
                                </h1>
                                <p>
                                Working with dietitians and doctors, Kyoku creates personalized nutrition, tailored to the body type, workout activity, and fitness goals 
                                of each user. They provide unique, plant-based, superfood shakes in beautifully designed, 
                                single-serve packets that are delivered 
                                monthly to your doorstep.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>
                                    Project Wren
                                </h1>
                                <p>
                                    Something
                                </p>
                            </CarouselSlide>
                        </Carousel>
                    </ContentTile>

                    <EmploymentTile title='Alumni Industry Employment' theme='dark'>
                        <EmploymentContent>
                            <div className='employment-item'>
                                <img src={ AirbnbIcon }/>
                                Airbnb
                            </div>
                            <div className='employment-item'>
                                <img src={ AmazonIcon }/>
                                Amazon
                            </div>
                            <div className='employment-item'>
                                <img src={ AppleIcon }/>
                                Apple
                            </div>
                            <div className='employment-item'>
                                <img src={ FacebookIcon }/>
                                Facebook
                            </div>
                            <div className='employment-item'>
                                <img src={ GoogleIcon }/>
                                Google
                            </div>
                            <div className='employment-item'>
                                <img src={ MicrosoftIcon }/>
                                Microsoft
                            </div>
                            <div className='employment-item'>
                                <img src={ RobinhoodIcon }/>
                                Slack
                            </div>
                            <div className='employment-item'>
                                <img src={ SnapchatIcon }/>
                                Snapchat
                            </div>
                            <div className='employment-item'>
                                <img src={ SlackIcon }/>
                                Slack
                            </div>
                            <div className='employment-item'>
                                <img src={ TwitterIcon }/>
                                Twitter
                            </div>
                            <div className='employment-item'>
                                <img src={ UberIcon }/>
                                Uber
                            </div>
                            <div className='employment-item'>
                                <img className='more-icon' src={ MoreIcon }/>
                                And more
                            </div>
                        </EmploymentContent>
                    </EmploymentTile>
                </TileRow>
                <TileRow>
                    <ContentTile title='Executive Team' type='full'>
                        <ExecutiveBoard>
                            <div className="member">
                                <img className="profile-pic"/>
                                <div className="description">
                                    <div className="eboard-icon"></div>
                                    <div className="description-inner">
                                        <p className="name">Glory Kanes</p>
                                        <p className="eboard-title">President</p>
                                    </div>
                                </div>
                            </div>
                        </ExecutiveBoard>
                    </ContentTile>
                </TileRow>
            </ContentContainer>
        </div>
    )
}

const ExecutiveBoard = styled.div`
    display: flex;
    flex-wrap: 4;

    .member {
        flex-basis: 25%;
        width: 25%;

        .profile-pic {
            background-color: grey;
            width: 288px;
            height: 288px;
            margin: 0 auto;
            margin-top: 20px;
            display: block;
        }

        .description {
            margin-top: 20px;
            display: flex;
            align-items: center;

            p {
                margin: 5px 0;
            }
            
            .eboard-icon {
                width: 35px;
                height: 35px;
                display: block;
                background-color: orange;
            }

            .description-inner {
                margin-left: 10px;

                .eboard-title {
                    text-transform: none;
                    color: #8e8e93;
                }
            }

            
        }
    }
`

const EmploymentContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
    width: 100%;

    .employment-item {
        flex: 1 0 21%;
        text-align: center;
        color: #8e8e93;
        margin-bottom: 70px;

        img {
            display: block;
            margin: 0 auto;
            margin-bottom: 10px;
            height: 48px;
        }


        .more-icon {
            height: 20px;
            border: 1px solid white;
            padding: 4px;
            margin-top: 10px;
            margin-bottom: 20px;
            border-radius: 100px;
        }
    }   
`

const ImageHero = styled.div`
    position: relative;
    background-image: url(${ props => props.background });
    height: ${({ height }) => height ? height : '810'}px;
    width: 100%;
    background-size: cover;

    &.quote {
        color: white;
        background-color: black;
        font-family: 'Editor';
        font-size: 52px;
        line-height: 62px;
        display: flex;
        align-items: center;
        
        .quote-content { 
            margin: 0 auto;
            width: 95%;
            max-width: 1044px;
            span{
                color: #ff5c39;
            }

            .quote-profile {
                margin-top: 40px;
                display: flex;
                align-items: center;
                font-size: 16px;
                line-height: 17.5px;

                img {
                    height: 18px;
                    width: 18px;
                    padding: 8px;
                    border: 1px solid #ff5c39;
                    border-radius: 100px;
                    margin-right: 15px;
                }

                .quote-profile-details {
                    .name {
                        font-family: 'NeurialGrotesk-Medium';
                    }

                    .detail {
                        font-family: 'NeurialGrotesk';
                        color: #8e8e93;
                    }
                }
            }
        }

    }

    .event-container {
        position: relative;
        max-width: 1044px;
        margin: 0 auto;
        height: 100%;
    }

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