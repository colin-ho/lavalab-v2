import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import { ContentContainer, TileRow, ImageTile, EventLabel, ContentTile, EmploymentTile, Masthead, MastheadTextTile, FreeTile, CommunityTile, MastheadTile } from "../components/tile"
import { Carousel, CarouselSlide, TiledCarousel, SinglePanel } from "../components/carousel"

import HeroTop from '../../static/img/Spring-2019-Retreat.jpg'
import Fall2019DemoNight from '../../static/img/Fall-2019-Retreat.jpg'

import TileDemoNight from '../../static/img/Fall-2019-Demo-Night.jpg'

import RightArrowIcon from '../../static/icon/Right-Arrow-Icon/Light.png'
import DownArrowIcon from '../../static/icon/Down-Arrow-Icon/Light.png'
import PlayIcon from '../../static/icon/Play-Icon/Light.png'
import DemoNightIcon from '../../static/icon/Events/Demo-Night-Icon/Highlight.png'

import LavaLabLogo from "../../static/lavalab-logo.png"

import PersonIcon from '../../static/icon/Person-Icon/Highlight.png'

import FirstStepsIcon from '../../static/icon/Events/First-Steps-Icon/Highlight.png'
import BeachBonfireIcon from '../../static/icon/Events/Beach-Bonfire-Icon/Highlight.png'
import FiresideChatsIcon from '../../static/icon/Events/Fireside-Chat-Icon/Highlight.png'
import AlumniWorkshopsIcon from '../../static/icon/Events/Alumni-Workshop-Icon/Highlight.png'
import CommunityRetreatIcon from '../../static/icon/Events/Community-Retreat-Icon/Highlight.png'
import PitchNightIcon from '../../static/icon/Events/Pitch-Night-Icon/Highlight.png'
import HackNightIcon from '../../static/icon/Events/Hack-Night-Icon/Highlight.png'
import LavaLabFormalIcon from '../../static/icon/Events/LavaLab-Formal-Icon/Highlight.png'

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

import PresidentIcon from '../../static/icon/President-Icon/Highlight.png'
import CurriculumIcon from '../../static/icon/Curriculum-Icon/Highlight.png'
import RecruitmentIcon from '../../static/icon/Recruitment-Icon/Highlight.png'
import CommunityIcon from '../../static/icon/Community-Icon/Highlight.png'
import IndustryRelationsIcon from '../../static/icon/Industry-Relations-Icon/Highlight.png'
import FinanceIcon from '../../static/icon/Finance-Icon/Highlight.png'
import DesignIcon from '../../static/icon/Design-Icon/Highlight.png'
import DevelopmentIcon from '../../static/icon/Development-Icon/Highlight.png'
import MarketingIcon from '../../static/icon/marketing.png'

import Anant from '../../static/img/exec/anant.jpg'
import Bella from '../../static/img/exec/bella.jpg'
import Ivy from '../../static/img/exec/ivy.jpg'
import Jessica from '../../static/img/exec/jessica.jpg'
import Jimena from '../../static/img/exec/jimena.jpg'
import Madison from '../../static/img/exec/madison.jpg'
import Tomas from '../../static/img/exec/tomas.jpg'
import Viren from '../../static/img/exec/viren.jpg'
import Glory from '../../static/img/exec/glory.png'

import "./home.css"
const HomePage = () => {
    return (
        <div className='page'>
            <ImageHero background={ HeroTop }>
                <div className='hero-content'>
                    <img src={ LavaLabLogo }/>
                    <HeroDivider></HeroDivider>
                    <h1 className='hero-header'>Find Your Cofounders</h1>
                    <div className='bottom-row'>
                        {/* <Button text='Join our community'/> */}
                        {/* <div className='clear-button'>
                            <p>Watch the film</p>
                            <img src={ PlayIcon }/>
                        </div> */}
                        {/* <div className='get-to-know-us'>
                            Get to know us
                            <img src={ DownArrowIcon }/>
                        </div> */}
                    </div>
                </div>
            </ImageHero>

            <ContentContainer>
                <TileRow>
                    <MastheadTile title="LavaLab for Impact Fall 2020" type="full" height="350">
                        <Masthead>
                            <MastheadTextTile>
                                <h1 className='hero-header'>Social Entrepreneurship Toolkit</h1>
                                <p className="subheader">
                                    LavaLab is dedicating its efforts this semester to support USC's
                                    black community.
                                </p>
                                <p classname="content">
                                    LavaLab will be shifting its focus from recruiting a cohort to 
                                    <em> building an accessible, inclusive, virtual program this fall. </em>
                                    We are launching a Social Entrepreneurship Toolkit that has two components,
                                    Lava<em>Connect</em> and Lava<em>Learn</em>.
                                </p>
                            </MastheadTextTile>
                            <div className='right'>
                                <div className='tile connect'>
                                    <p className='tile-title'>Lava<em>Connect</em></p>
                                    <p className='detail'>
                                        Lava<em>Connect</em> pairs students who have entrepreneurial ideas 
                                        that support the BIPOC community with Lava alumni who can 
                                        provide coding, designing, project management and mentorship.
                                    </p>
                                    <div className='action-bar-container'>
                                        <div className='action-bar'>
                                            <p className='left-text'>
                                                For Students
                                            </p>
                                            <p className='right-text'>
                                                Submit an idea by 8/31
                                            </p>
                                            <a href="https://docs.google.com/forms/d/1ImgYmVf3HJYCbYBOtqBWUYl-2PjRcGitS3yODJ2L9d0/viewform?ts=5f28b778&edit_requested=true">
                                                <img src={ RightArrowIcon }/>
                                            </a>
                                        </div>
                                        <div className='divider'/>
                                        <div className='action-bar'>
                                            <p className='left-text'>
                                                For Lava Alumni
                                            </p>
                                            <p className='right-text'>
                                                Sign up to help
                                            </p>
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbelrNdQVhqGuTMJDQiDdiC54uu_onwcP1USqpuadVbXwttA/viewform">
                                                <img src={ RightArrowIcon }/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='tile learn'>
                                    <p className='tile-title'>Lava<em>Learn</em></p>
                                    <p className='detail'>
                                        Lava<em>Learn</em> provides open access curriculum along with 
                                        entrepreneurial and tech resources, workshops, and fireside 
                                        chats to USC and the greater public.
                                    </p>
                                    <a href="https://www.flow.page/lavalab">
                                        <div className='be-notified'>
                                            <p>Sign up for Lava<em>Learn</em> updates</p>
                                            <img src={ RightArrowIcon }/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Masthead>
                    </MastheadTile>
                </TileRow>
                <TileRow>
                    <ImageTile image={ TileDemoNight } >
                        <EventLabel icon={ DemoNightIcon } name='Demo Night' location='Los Angeles, CA' date='Fall 2019'/>
                    </ImageTile>
                    <ContentTile title='Welcome'>
                        <Carousel titles={['Welcome', 'The Experience', 'Curriculum']}>
                            <CarouselSlide>
                                <h1>
                                    Welcome
                                </h1>
                                <p>
                                    <em>Fully immerse yourself in the startup experience.</em>
                                    We are the University of Southern California’s premiere, student-run, product incubator. 
                                    Every semester, LavaLab invites a new cohort of visionary designers, developers, and project 
                                    managers to build tomorrow’s startups, today.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>
                                    The Experience
                                </h1>
                                <p>
                                    Every semester for the past 7 years, LavaLab takes a cohort of 28 students composed of designers, 
                                    developers, and project managers. After getting to know your fellow cohort members, you are then 
                                    put into teams of 4 to create your startup. Dream big: makeup company, bar hopping app, parking 
                                    hardware--anything goes.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>
                                    Curriculum
                                </h1>
                                <p>
                                    Our trademark curriculum teaches you how to build a product, from ideation to deployment, while 
                                    reinforcing principles of entrepreneurship and innovation. Learn the ins-and-outs of your role 
                                    as a designer, developer, or project manager.
                                </p>
                            </CarouselSlide>
                        </Carousel>
                    </ContentTile>
                </TileRow>
                <TileRow>
                    <ContentTile type='full' title='Events'>
                        <TiledCarousel titles={['First Steps', 'Beach Bonfire', 'Fireside Chats', 'Alumni Workshops', 'Community Retreat', 'Pitch Night', 'Hack Night', 'Demo Night', 'LavaLab Formal']}>
                            <CarouselSlide icon={ FirstStepsIcon }>
                                    <h1>
                                        Idea Grind
                                    </h1>
                                    <p>
                                        Jump right in and see what LavaLab is about with our spin 
                                        on an Info Session. Through discussion and brainstorming, 
                                        hearing from E-board, and asking questions, you'll get a 
                                        taste of what LavaLab is about.
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ BeachBonfireIcon }>
                                    <h1>
                                        Beach bonfire
                                    </h1>
                                    <p>
                                        The first social event of the new cohort. Bond with your 
                                        fellow cohort members and LavaLab alumni over roasted marshmallows.
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ FiresideChatsIcon }>
                                    <h1>
                                        Fireside Chats
                                    </h1>
                                    <p>
                                        Each semester, LavaLab invites the industry’s top pioneers and entrepreneurs 
                                        to share their experiences and engage with our members. In the past, we’ve 
                                        had industry leaders like Elon Musk, Evan Spiegel, and Arielle Zuckerberg.
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ AlumniWorkshopsIcon }>
                                    <h1>
                                        Alumni Workshops
                                    </h1>
                                    <p>
                                        LavaLum know best. Learn insights and skills from alumni-led workshops 
                                        on anything from React Native, to Figma shortcuts, to giving the best pitch.
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ CommunityRetreatIcon }>
                                    <h1>
                                        Community Retreat
                                    </h1>
                                    <p>
                                        Who doesn’t love a weekend getaway? Join fellow cohort members and LavaLab alumni 
                                        for a trip away from Downtown Los Angeles. Get to know your future co-founders on a 
                                        whole ‘nother level.
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ PitchNightIcon }>
                                    <h1>
                                        Pitch Night
                                    </h1>
                                    <p>
                                        Two weeks before the final showcase, run through your pitch with no judgement. 
                                        Get feedback from LavaLum on how to perfect your product and pitch for Demo Night.
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ HackNightIcon }>
                                    <h1>
                                        Hack Night
                                    </h1>
                                    <p>
                                        It’s the final stretch. Join your fellow devs and designers to grind out the finishing 
                                        touches of your product. Fuel up with free food and encouragement from our E-board.
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ DemoNightIcon }>
                                    <h1>
                                        Demo Night
                                    </h1>
                                    <p>
                                        The Oscars of LavaLab. Demo and pitch your product to investor judges to showcase your 
                                        team's hard work. Congratulations, you’re now a LavaLum!
                                    </p>
                            </CarouselSlide>
                            <CarouselSlide icon={ LavaLabFormalIcon }>
                                    <h1>
                                        LavaLab Formal
                                    </h1>
                                    <p>
                                        A celebration of hard work, new friends, and the graduation of another accomplished cohort. Cheers!
                                    </p>
                            </CarouselSlide>
                        </TiledCarousel>
                    </ContentTile>
                </TileRow>
            </ContentContainer>
            <ImageHero background={ Fall2019DemoNight } height='800'>
                <div className='event-container'>
                    <EventLabel icon={ DemoNightIcon } name='Retreat' location='Los Angeles, CA' date='Fall 2019'/>                  
                </div>
            </ImageHero>
            <ContentContainer>
                <TileRow>
                    <CommunityTile type='full' title='Community'>
                        <SinglePanel>
                            <CarouselSlide>
                                <h1>
                                    A network of passionate innovators, over 350 members strong and growing.
                                </h1>
                                <p>
                                    The LavaLab network is like no other. We are a community of entrepreneurs, go-getters, 
                                    and change makers who value connection, deep engagement, and building for a brighter 
                                    future. Grow together in an environment that meets you where you’re at and pushes you 
                                    to become the best version of yourself. At LavaLab, you’ll meet your future co-founders 
                                    and some of your closest friends.
                                </p>
                            </CarouselSlide>
                        </SinglePanel>
                    </CommunityTile>
                </TileRow>
            </ContentContainer>
            <ImageHero className='quote'>
                <div className='quote-content'>
                    <span>“</span><br/>
                        Lavalab made my semester one of the most rewarding experiences as a student so far. Turning a vision into 
                        a reality, finding lifelong friends and potential cofounders, and learning to hustle make this something 
                        I'd recommend to everyone.
                    <div className='quote-profile'>
                        <img src={ PersonIcon } />

                        <div className='quote-profile-details'>
                            <p className='name'>
                                Shub Gaur
                            </p>
                            <p className='detail'>
                                Product Manager · Spring 2020
                            </p>
                        </div>
                        
                    </div>
                </div>
            
            </ImageHero>

            <ContentContainer>
                <TileRow>
                    <ContentTile title='Alumni Project Spotlight'>
                        <Carousel titles={['Kyoku', 'Recess', 'Spree']}>
                            <CarouselSlide>
                                <h1>
                                    Kyoku
                                </h1>
                                <p>
                                Post-ride recovery shakes made for your body type, riding style, and cycling goals from plant-based superfoods. Personalized for optimal performance. 
                                </p>
                                <a href="https://kyoku.com/">
                                    https://kyoku.com/
                                </a>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>
                                    Recess
                                </h1>
                                <p>
                                    Recess creates shared calendars that display free-time between all parties and suggests 
                                    personalized activities for you and your group. Maintain your friendships with a frictionless 
                                    scheduling flow.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>
                                    Spree
                                </h1>
                                <p>
                                    Everyone hates comparing prices online. Spree turns anyone into a shopping wizard by 
                                    automatically comparing prices and checking out from everywhere, in just one click!
                                </p>
                                <a href="https://www.joinspree.com/">
                                    https://www.joinspree.com/
                                </a>
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
                    <FreeTile title='Executive Team' type='full'>
                        <hr/>
                        <p className='title'>
                            Executive Team
                        </p>   
                        <ExecutiveBoard>
                            
                            <div className="member">
                                <img src={ Glory } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ PresidentIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Glory Kanes</p>
                                        <p className="eboard-title">President</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={ Viren } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ CurriculumIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Viren Parmar</p>
                                        <p className="eboard-title">Director of Cirriculum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={ Bella } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ RecruitmentIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Bella Archer</p>
                                        <p className="eboard-title">Director of Recruitment</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={ Anant } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ CommunityIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Anant Vasudevan</p>
                                        <p className="eboard-title">Director of Community</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={ Madison } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ IndustryRelationsIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Madison Gong</p>
                                        <p className="eboard-title">Director of Industry Relations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={ Jimena } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ FinanceIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Jimena Villarreal</p>
                                        <p className="eboard-title">Director of Sponsorship</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={ Ivy } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ DesignIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Ivy Tsang</p>
                                        <p className="eboard-title">Director of Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={ Tomas } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ DevelopmentIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Tomas Acin</p>
                                        <p className="eboard-title">Director of Development</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={ Jessica } className="profile-pic"/>
                                <div className="description">
                                    <img className="eboard-icon" src={ MarketingIcon }/>
                                    <div className="description-inner">
                                        <p className="name">Jessica Wang</p>
                                        <p className="eboard-title">Director of Marketing</p>
                                    </div>
                                </div>
                            </div>
                        </ExecutiveBoard>
                    </FreeTile>
                </TileRow>
            </ContentContainer>
        </div>
    )
}

const ExecutiveBoard = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
    padding-top: 60px;
    padding-bottom: 50px;

    .member {
        position: relative;
        width: 33.33%;
        display: block;
        box-sizing: border-box;
        padding: 0 30px;

        .profile-pic {
            background-color: grey;
            width: 100%;
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
                border: 1px solid #ff5c39;
                box-sizing: border-box;
                padding: 6px;
                border-radius: 100px;
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

    @media only screen and (max-width: 900px) { 
        .member {
            padding: 20px;
        }
        
    }

    @media only screen and (max-width: 550px) { 
        .member {
            width: 50%;
            margin: 0 auto;
            padding: 10px;
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

        @media only screen and (max-width: 1115px) { 
            margin-bottom: 30px;
        }

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
    background-position: center;

    @media only screen and (max-width: 1115px) { 
        height: 500px;
        background-position: center;
    }

    &.quote {
        color: white;
        background-color: black;
        font-family: 'Editor';
        font-size: 52px;
        line-height: 62px;
        display: flex;
        align-items: center;

        @media only screen and (max-width: 1115px) { 
            font-size: 25px;
            line-height: 32px;
        }
        
        .quote-content { 
            margin: 0 auto;
            width: 85%;
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
        vertical-align: top;

        img {
            display: inline-block;
            width: 250px;
        }
        
        @media only screen and (max-width: 1115px) { 
            top: 150px;
        }
    }

    .hero-header {
        font-size: 81px;
        font-family: 'Editor';
        color: white;
        width: 50%;
        line-height: 1.1;
        margin: 15px 0;
        display: inline-block;

        @media only screen and (max-width: 1115px) { 
            font-size: 55px;
        }
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