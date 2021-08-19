import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import {
  ContentContainer,
  TileRow,
  ImageTile,
  ImageTileHeight,
  EventLabel,
  ContentTile,
  EmploymentTile,
  Masthead,
  MastheadTextTile,
  FreeTile,
  CommunityTile,
  MastheadTile,
} from "../components/tile"
import {
  Carousel,
  CarouselSlide,
  TiledCarousel,
  SinglePanel,
} from "../components/carousel"

import HeroTop from "../../static/img/Spring-2019-Retreat.jpg"
import Fall2019DemoNight from "../../static/img/Fall-2019-Retreat.jpg"

import TileDemoNight from "../../static/img/Fall-2019-Demo-Night.jpg"

import RightArrowIcon from "../../static/icon/Right-Arrow-Icon/Light.png"
import DownArrowIcon from "../../static/icon/Down-Arrow-Icon/Light.png"
import PlayIcon from "../../static/icon/Play-Icon/Light.png"
import DemoNightIcon from "../../static/icon/Events/Demo-Night-Icon/Highlight.png"

import LavaLabLogo from "../../static/lavalab-logo.png"

import PersonIcon from "../../static/icon/Person-Icon/Highlight.png"

import FirstStepsIcon from "../../static/icon/Events/First-Steps-Icon/Highlight.png"
import BeachBonfireIcon from "../../static/icon/Events/Beach-Bonfire-Icon/Highlight.png"
import FiresideChatsIcon from "../../static/icon/Events/Fireside-Chat-Icon/Highlight.png"
import AlumniWorkshopsIcon from "../../static/icon/Events/Alumni-Workshop-Icon/Highlight.png"
import CommunityRetreatIcon from "../../static/icon/Events/Community-Retreat-Icon/Highlight.png"
import PitchNightIcon from "../../static/icon/Events/Pitch-Night-Icon/Highlight.png"
import HackNightIcon from "../../static/icon/Events/Hack-Night-Icon/Highlight.png"
import LavaLabFormalIcon from "../../static/icon/Events/LavaLab-Formal-Icon/Highlight.png"

import AirbnbIcon from "../../static/icon/Airbnb-Icon/Light.png"
import AmazonIcon from "../../static/icon/Amazon-Icon/Light.png"
import AppleIcon from "../../static/icon/Apple-Icon/Light.png"
import FacebookIcon from "../../static/icon/Facebook-Icon/Light.png"
import GoogleIcon from "../../static/icon/Google-Icon/Light.png"
import MicrosoftIcon from "../../static/icon/Microsoft-Icon/Light.png"
import RobinhoodIcon from "../../static/icon/Robinhood-Icon/Light.png"
import SlackIcon from "../../static/icon/Slack-Icon/Light.png"
import SnapchatIcon from "../../static/icon/Snapchat-Icon/Light.png"
import TwitterIcon from "../../static/icon/Twitter-Icon/Light.png"
import UberIcon from "../../static/icon/Uber-Icon/Light.png"
import MoreIcon from "../../static/icon/Add-Icon/Light.png"

import PresidentIcon from "../../static/icon/President-Icon/Highlight.png"
import CurriculumIcon from "../../static/icon/Curriculum-Icon/Highlight.png"
import RecruitmentIcon from "../../static/icon/Recruitment-Icon/Highlight.png"
import CommunityIcon from "../../static/icon/Community-Icon/Highlight.png"
import IndustryRelationsIcon from "../../static/icon/Industry-Relations-Icon/Highlight.png"
import FinanceIcon from "../../static/icon/Finance-Icon/Highlight.png"
import DesignIcon from "../../static/icon/Design-Icon/Highlight.png"
import DevelopmentIcon from "../../static/icon/Development-Icon/Highlight.png"
import MarketingIcon from "../../static/icon/marketing.png"

import Eshana from "../../static/img/exec/eshana.jpg"
import Steph from "../../static/img/exec/steph.jpg"
import Haley from "../../static/img/exec/haley.jpg"
import Mia from "../../static/img/exec/mia.jpg"
import Madison from "../../static/img/exec/madison.jpg"
import Nikhil from "../../static/img/exec/nikhil.jpeg"
import Natalia from "../../static/img/exec/natalia.jpg"
import Shub from "../../static/img/exec/shub.png"
import Amber from "../../static/img/exec/amber.png"

import "./home.css"
const HomePage = () => {
  return (
    <div className="page">
      {/* <VideoHero>
        <video
          id="video"
          className="video-player embed-responsive embed-responsive-1by1"
          height="100%"
          controls
          playsInline
          style={{ padding: "0 auto", textAlign: "center", width: "100%" }}
          autoPlay
        >
          <source
            className="embed-response-item"
            src={PromoVideo}
            type="video/mp4"
          />
        </video>
      </VideoHero> */}
      <ImageHero background={HeroTop}>
        <div className="hero-content">
          <img src={LavaLabLogo} />
          <HeroDivider></HeroDivider>
          <h1 className="hero-header">Find Your Cofounders</h1>
          <div className="bottom-row">
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
        <TileRow height={"600 px"}>
          <ContentTile
            image={HeroTop}
            className="video"
            height={550}
            title="Fall 2021 Intro"
          >
            <iframe
              src="https://player.vimeo.com/video/589509456?h=51f392d0c5"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                padding: "0 auto",
                paddingBottom: 16,
                marginTop: 28,
                textAlign: "center",
                width: "100%",
                height: "100%",
              }}
              frameborder="0"
              allowfullscreen
              title="Lavalab Fall 2021 Promo"
            ></iframe>
            {/* <video
              id="video"
              className="video-player embed-responsive embed-responsive-1by1"
              height="100%"
              controls
              playsInline
              style={{ padding: "0 auto", textAlign: "center", width: "100%" }}
              autoPlay
            >
              <source
                className="embed-response-item"
                src={PromoVideo}
                type="video/mp4"
              />
            </video> */}
          </ContentTile>
          <ContentTile title="Find Your Role" height={550}>
            <Carousel titles={["Developer", "Designer", "Product Manager"]}>
              <CarouselSlide>
                <h1>Developer</h1>
                <p>
                  <em>Who you are:</em>
                  You have a knack for building and are able to hack through
                  anything (literally and metaphorically). You are fearless in
                  creating and are ready to teach yourself unknown tech
                  concepts. Your grit and perseverance keep you going through
                  coding challenges.
                  <em>What you'll be doing:</em>
                  Working with a fellow developer on your team to build your
                  product: an app, website, or physical product. Creating an MVP
                  with baseline features to get your product's ideas across.
                  Coming together with your PM and designer to brainstorm the
                  problem you want to solve and how to address it.
                </p>
              </CarouselSlide>
              <CarouselSlide>
                <h1>Designer</h1>
                <p>
                  <em>Who you are:</em>
                  You have a passion about crafting visual experiences. You are
                  empathetic and able to put yourself in the user's shoes. Your
                  ability to learn continues to push your design skills. Your
                  creativity and attention to detail take your abilities to the
                  next level.
                  <em>What you'll be doing:</em>
                  Designing the MVP for your team's product including the
                  branding, user experience, and marketing materials.
                  Conceptualize the best way to get your product's message
                  across through creative expression. Coming together with your
                  PM and developers to brainstorm the problem you want to solve
                  and how to address it.
                </p>
              </CarouselSlide>
              <CarouselSlide>
                <h1>Product Manager</h1>
                <p>
                  <em>Who you are:</em>
                  You are ready to disrupt the norm and solve any problem that
                  comes your way. You naturally take leadership positions in
                  your own ventures, jobs, or class projects and are able to get
                  a team working together to execute. You have a vision and love
                  approaching obstacles in a creative way.
                  <em>What you'll be doing:</em>
                  Creating direction for your team through organization and
                  collaboration. Working with your designer and developers to
                  drive the product forward. Ideating on key innovations and
                  scoping out the market for your product.
                </p>
              </CarouselSlide>
            </Carousel>
          </ContentTile>
        </TileRow>
        <TileRow>
          <MastheadTile title="What's Happening Now" type="full" height="350">
            <Masthead>
              <MastheadTextTile>
                <h1 className="hero-header">
                  Applications for our Fall 2021 Cohort will open on 8/27.
                </h1>
              </MastheadTextTile>
              <div className="right">
                <div className="tile apply">
                  <p className="tile-title">Come to the Idea Grind on 8/30.</p>
                  <p className="detail">
                    The Idea Grind is our take on an info session where you'll
                    get to brainstorm ideas and meet some of our E-Board
                    members.
                  </p>
                  {/* <a href="https://youtu.be/UGWgv9HuOJs" target="_blank">
                    <div className="be-notified">
                      <p>Watch here</p>
                      <img src={RightArrowIcon} />
                    </div>
                  </a> */}
                </div>
                <div className="tile learn">
                  <p className="tile-title">LavaLearn</p>
                  <p className="detail">
                    LavaLearn is our signature open-access curriculum, providing
                    entrepreneurial and tech resources, workshops, and fireside
                    chats to USC and the greater public.
                  </p>
                  <a href="https://lavalearn.org/" target="_blank">
                    <div className="be-notified">
                      <p>Check it out</p>
                      <img src={RightArrowIcon} />
                    </div>
                  </a>
                </div>
              </div>
            </Masthead>
          </MastheadTile>
        </TileRow>
        <TileRow>
          <ImageTile image={TileDemoNight} height={"100%"}>
            <EventLabel
              icon={DemoNightIcon}
              name="Demo Night"
              location="Los Angeles, CA"
              date="Fall 2019"
            />
          </ImageTile>
          <ContentTile title="Welcome">
            <Carousel titles={["Welcome", "The Experience", "Curriculum"]}>
              <CarouselSlide>
                <h1>Welcome</h1>
                <p>
                  <em>Fully immerse yourself in the startup experience.</em>
                  We are the University of Southern California’s premiere,
                  student-run, product incubator. Every semester, LavaLab
                  invites a new cohort of visionary designers, developers, and
                  project managers to build tomorrow’s startups, today.
                </p>
              </CarouselSlide>
              <CarouselSlide>
                <h1>The Experience</h1>
                <p>
                  Every semester for the past 7 years, LavaLab takes a cohort of
                  28 students composed of designers, developers, and project
                  managers. After getting to know your fellow cohort members,
                  you are then put into teams of 4 to create your startup. Dream
                  big: makeup company, bar hopping app, parking
                  hardware--anything goes.
                </p>
              </CarouselSlide>
              <CarouselSlide>
                <h1>Curriculum</h1>
                <p>
                  Our trademark curriculum teaches you how to build a product,
                  from ideation to deployment, while reinforcing principles of
                  entrepreneurship and innovation. Learn the ins-and-outs of
                  your role as a designer, developer, or project manager.
                </p>
              </CarouselSlide>
            </Carousel>
          </ContentTile>
        </TileRow>
        <TileRow>
          <ContentTile type="full" title="Events">
            <TiledCarousel
              titles={[
                "First Steps",
                "Beach Bonfire",
                "Fireside Chats",
                "Alumni Workshops",
                "Community Retreat",
                "Pitch Night",
                "Hack Night",
                "Demo Night",
                "LavaLab Formal",
              ]}
            >
              <CarouselSlide icon={FirstStepsIcon}>
                <h1>Idea Grind</h1>
                <p>
                  Jump right in and see what LavaLab is about with our spin on
                  an Info Session. Through discussion and brainstorming, hearing
                  from E-board, and asking questions, you'll get a taste of what
                  LavaLab is about.
                </p>
              </CarouselSlide>
              <CarouselSlide icon={BeachBonfireIcon}>
                <h1>Beach bonfire</h1>
                <p>
                  The first social event of the new cohort. Bond with your
                  fellow cohort members and LavaLab alumni over roasted
                  marshmallows.
                </p>
              </CarouselSlide>
              <CarouselSlide icon={FiresideChatsIcon}>
                <h1>Fireside Chats</h1>
                <p>
                  Each semester, LavaLab invites the industry’s top pioneers and
                  entrepreneurs to share their experiences and engage with our
                  members. In the past, we’ve had industry leaders like Elon
                  Musk, Evan Spiegel, and Arielle Zuckerberg.
                </p>
              </CarouselSlide>
              <CarouselSlide icon={AlumniWorkshopsIcon}>
                <h1>Alumni Workshops</h1>
                <p>
                  LavaLum know best. Learn insights and skills from alumni-led
                  workshops on anything from React Native, to Figma shortcuts,
                  to giving the best pitch.
                </p>
              </CarouselSlide>
              <CarouselSlide icon={CommunityRetreatIcon}>
                <h1>Community Retreat</h1>
                <p>
                  Who doesn’t love a weekend getaway? Join fellow cohort members
                  and LavaLab alumni for a trip away from Downtown Los Angeles.
                  Get to know your future co-founders on a whole ‘nother level.
                </p>
              </CarouselSlide>
              <CarouselSlide icon={PitchNightIcon}>
                <h1>Pitch Night</h1>
                <p>
                  Two weeks before the final showcase, run through your pitch
                  with no judgement. Get feedback from LavaLum on how to perfect
                  your product and pitch for Demo Night.
                </p>
              </CarouselSlide>
              <CarouselSlide icon={HackNightIcon}>
                <h1>Hack Night</h1>
                <p>
                  It’s the final stretch. Join your fellow devs and designers to
                  grind out the finishing touches of your product. Fuel up with
                  free food and encouragement from our E-board.
                </p>
              </CarouselSlide>
              <CarouselSlide icon={DemoNightIcon}>
                <h1>Demo Night</h1>
                <p>
                  The Oscars of LavaLab. Demo and pitch your product to investor
                  judges to showcase your team's hard work. Congratulations,
                  you’re now a LavaLum!
                </p>
              </CarouselSlide>
              <CarouselSlide icon={LavaLabFormalIcon}>
                <h1>LavaLab Formal</h1>
                <p>
                  A celebration of hard work, new friends, and the graduation of
                  another accomplished cohort. Cheers!
                </p>
              </CarouselSlide>
            </TiledCarousel>
          </ContentTile>
        </TileRow>
      </ContentContainer>
      <ImageHero background={Fall2019DemoNight} height="800">
        <div className="event-container">
          <EventLabel
            icon={DemoNightIcon}
            name="Retreat"
            location="Los Angeles, CA"
            date="Fall 2019"
          />
        </div>
      </ImageHero>
      <ContentContainer>
        <TileRow>
          <CommunityTile type="full" title="Community">
            <SinglePanel>
              <CarouselSlide>
                <h1>
                  A network of passionate innovators, over 350 members strong
                  and growing.
                </h1>
                <p>
                  The LavaLab network is like no other. We are a community of
                  entrepreneurs, go-getters, and change makers who value
                  connection, deep engagement, and building for a brighter
                  future. Grow together in an environment that meets you where
                  you’re at and pushes you to become the best version of
                  yourself. At LavaLab, you’ll meet your future co-founders and
                  some of your closest friends.
                </p>
              </CarouselSlide>
            </SinglePanel>
          </CommunityTile>
        </TileRow>
      </ContentContainer>
      <ImageHero className="quote">
        <div className="quote-content">
          <span>“</span>
          <br />
          Lavalab made my semester one of the most rewarding experiences as a
          student so far. Turning a vision into a reality, finding lifelong
          friends and potential cofounders, and learning to hustle make this
          something I'd recommend to everyone.
          <div className="quote-profile">
            <img src={PersonIcon} />

            <div className="quote-profile-details">
              <p className="name">Shub Gaur</p>
              <p className="detail">Product Manager · Spring 2020</p>
            </div>
          </div>
        </div>
      </ImageHero>

      <ContentContainer>
        <TileRow>
          <ContentTile title="Alumni Project Spotlight">
            <Carousel titles={["Kyoku", "Recess", "Spree"]}>
              <CarouselSlide>
                <h1>Kyoku</h1>
                <p>
                  Post-ride recovery shakes made for your body type, riding
                  style, and cycling goals from plant-based superfoods.
                  Personalized for optimal performance.
                </p>
                <a href="https://kyoku.com/">https://kyoku.com/</a>
              </CarouselSlide>
              <CarouselSlide>
                <h1>Recess</h1>
                <p>
                  Recess creates shared calendars that display free-time between
                  all parties and suggests personalized activities for you and
                  your group. Maintain your friendships with a frictionless
                  scheduling flow.
                </p>
              </CarouselSlide>
              <CarouselSlide>
                <h1>Spree</h1>
                <p>
                  Everyone hates comparing prices online. Spree turns anyone
                  into a shopping wizard by automatically comparing prices and
                  checking out from everywhere, in just one click!
                </p>
                <a href="https://www.joinspree.com/">
                  https://www.joinspree.com/
                </a>
              </CarouselSlide>
            </Carousel>
          </ContentTile>

          <EmploymentTile title="Alumni Industry Employment" theme="dark">
            <EmploymentContent>
              <div className="employment-item">
                <img src={AirbnbIcon} />
                Airbnb
              </div>
              <div className="employment-item">
                <img src={AmazonIcon} />
                Amazon
              </div>
              <div className="employment-item">
                <img src={AppleIcon} />
                Apple
              </div>
              <div className="employment-item">
                <img src={FacebookIcon} />
                Facebook
              </div>
              <div className="employment-item">
                <img src={GoogleIcon} />
                Google
              </div>
              <div className="employment-item">
                <img src={MicrosoftIcon} />
                Microsoft
              </div>
              <div className="employment-item">
                <img src={RobinhoodIcon} />
                Robinhood
              </div>
              <div className="employment-item">
                <img src={SnapchatIcon} />
                Snapchat
              </div>
              <div className="employment-item">
                <img src={SlackIcon} />
                Slack
              </div>
              <div className="employment-item">
                <img src={TwitterIcon} />
                Twitter
              </div>
              <div className="employment-item">
                <img src={UberIcon} />
                Uber
              </div>
              <div className="employment-item">
                <img className="more-icon" src={MoreIcon} />
                And more
              </div>
            </EmploymentContent>
          </EmploymentTile>
        </TileRow>
        <TileRow>
          <FreeTile title="Executive Team" type="full">
            <hr />
            <p className="title">Executive Team</p>
            <ExecutiveBoard>
              <div className="member">
                <img src={Natalia} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={PresidentIcon} />
                  <div className="description-inner">
                    <p className="name">Natalia Murillo</p>
                    <p className="eboard-title">President</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Shub} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={CurriculumIcon} />
                  <div className="description-inner">
                    <p className="name">Shub Gaur</p>
                    <p className="eboard-title">Director of Operations</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Amber} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={RecruitmentIcon} />
                  <div className="description-inner">
                    <p className="name">Amber Pugh</p>
                    <p className="eboard-title">Director of Recruitment</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Eshana} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={CommunityIcon} />
                  <div className="description-inner">
                    <p className="name">Eshana Seshadri</p>
                    <p className="eboard-title">Director of Community</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Madison} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={IndustryRelationsIcon} />
                  <div className="description-inner">
                    <p className="name">Madison Gong</p>
                    <p className="eboard-title">
                      Director of Industry Relations
                    </p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Mia} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={FinanceIcon} />
                  <div className="description-inner">
                    <p className="name">Mia Ahmady</p>
                    <p className="eboard-title">Director of Sponsorship</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Steph} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={DesignIcon} />
                  <div className="description-inner">
                    <p className="name">Stephanie Noh</p>
                    <p className="eboard-title">Director of Design</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Nikhil} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={DevelopmentIcon} />
                  <div className="description-inner">
                    <p className="name">Nikhil Patel</p>
                    <p className="eboard-title">Director of Development</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Haley} className="profile-pic" />
                <div className="description">
                  <img className="eboard-icon" src={MarketingIcon} />
                  <div className="description-inner">
                    <p className="name">Haley Ho</p>
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
  background-image: url(${props => props.background});
  height: ${({ height }) => (height ? height : "810")}px;
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
    font-family: "Editor";
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
      span {
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
            font-family: "NeurialGrotesk-Medium";
          }

          .detail {
            font-family: "NeurialGrotesk";
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
    font-family: "Editor";
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

const VideoHero = styled.div`
  position: relative;
  height: ${({ height }) => (height ? height : "810")}px;
  width: 100%;
  background-size: cover;
  background-color: black;
  background-position: center;

  @media only screen and (max-width: 1115px) {
    height: 500px;
    background-position: center;
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
  font-family: "NeurialGrotesk-Medium";

  img {
    display: block;
    height: 18px;
    width: 18px;
    padding-left: 10px;
  }
`

const Button = props => {
  return (
    <StyledButton>
      <p>{props.text}</p>
      <img src={RightArrowIcon} />
    </StyledButton>
  )
}

export default HomePage
