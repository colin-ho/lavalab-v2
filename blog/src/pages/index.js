import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import HomePage from "./home.js"

const IndexPage = () => (
  <Layout>
    <HomePage></HomePage>
    {/* <div class='image-section' style={{ backgroundImage: `url('img/Spring-2019-Retreat.jpg')` }}>
      <div class='hero'>
        <div class='divider'/>
        <div class='hero-text'>
          Find your <br/>co-founders
        </div>
        <div class='hero-controls'>
          <div class='btn'>Join our community <img src={'icon/Right-Arrow-Icon/Light.png'}/></div>
          <div class='link'>Watch the film <img src={'icon/Play-Icon/Light.png'}/></div>
          <div class='link right-justify'>Get to know us <img class='circle-icon' src={'icon/Down-Arrow-Icon/Light.png'}/></div>
        </div>
      </div>
    </div>

    <div class='content-section'>
      <div class='content content-half'>
        <div class='col-half'>        
          <div class='tile tile-square' style={{ backgroundImage: `url('img/Fall-2019-Demo-Night.jpg')` }}>
            <div class='label'>
              <img class='label-icon' src={'icon/Events/Demo-Night-Icon/Highlight.png'}/>
              <div class='label-content'>
                <div class='label-name'>
                  Demo Night
                </div>
                <div class='label-detail'>
                  Los Angeles, CA · Fall 2019
                </div>
              </div>
            </div>
          </div>       
        </div>
        <div class='col-half'>
          <div class='tile tile-square'>
            <div class='tile-content'>
              <div class='top-bar'/>
              <div class='tile-label'>Welcome</div>
              <div class='carousel'>
                <div class='carousel-item'>
                  <h3 class='carousel-header'>A definitive home for euntrepeneurs</h3>
                  <p class='carousel-text'>
                    We are the University of Southern California’s premiere, student-run, product incubator. Every semester since 
                    2013, we have invited 28 of the university’s most visionary designers, developers, and product managers to build 
                    tomorrow’s technology startups, today.
                  </p>
                </div>
                <div class='carousel-nav'>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    
      <div class='content content-full' style={{height: 500}}>
        <div class='tile tile-full'>
          <div class='tile-content'>
            <div class='top-bar'/>
            <div class='tile-label'>Events</div>
          </div>
        </div>
      </div>
    </div>

    <div class='image-section' style={{ backgroundImage: `url('img/Fall-2019-Retreat.jpg')` }}>
      <div class='image-section-inner'>
        <div class='label'>
          <img class='label-icon' src={'icon/Events/Community-Retreat-Icon/Highlight.png'}/>
          <div class='label-content'>
            <div class='label-name'>
              Community Retreat
            </div>
            <div class='label-detail'>
              Big Bear, CA · Fall 2019
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='content-section'>
      <div class='content content-full' style={{height: 500}}>
        <div class='tile tile-full'>
          <div class='tile-content'>
            <div class='top-bar'/>
            <div class='tile-label'>Community</div>
          </div>
        </div>
      </div>
    </div>

    <div class='content-section content-section-dark'>
      <div class='quote'>
        <em class='orange'>“</em><br/>
        LavaLab was seriously one of the most 
        unique experiences of my life. I loved it — 
        I felt like I grew a lot, especially as a presenter. I 
        made amazing friends and it opened a huuuge door with 
        Microsoft as well.
      </div>
    </div>

    <div class='content-section'>
      <div class='content content-half'>
        <div class='col-half'>
          <div class='tile tile-square'>
            <div class='tile-content'>
              <div class='top-bar'/>
              <div class='tile-label'> Project Spotlight</div>
              <div class='carousel'>
                <div class='carousel-item'>
                  <h3 class='carousel-header'>Kyoku</h3>
                  <p class='carousel-text'>
                    Working with...
                  </p>
                </div>
                <div class='carousel-nav'>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-half'>
          <div class='tile tile-square black'>
            <div class='tile-content'>
              <div class='top-bar'/>
              <div class='tile-label'>Alumni Industry Employment</div>
              <div class='employment-grid'>
                <div class='employment-icon'>
                  <img src={'icon/Airbnb-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Airbnb
                  </p>
                </div>
                <div class='employment-icon'>
                  <img src={'icon/Amazon-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Amazon
                  </p>
                </div>
                <div class='employment-icon'>
                  <img src={'icon/Apple-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Apple
                  </p>
                </div>
                <div class='employment-icon'>
                  <img src={'icon/Facebook-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Facebook
                  </p>
                </div>
                
                <div class='employment-icon'>
                  <img src={'icon/Google-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Google
                  </p>
                </div>
                <div class='employment-icon'>
                  <img src={'icon/Microsoft-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Microsoft
                  </p>
                </div>
                <div class='employment-icon'>
                  <img src={'icon/Robinhood-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Robinhood
                  </p>
                </div>
                <div class='employment-icon'>
                  <img src={'icon/Slack-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Slack
                  </p>
                </div>

                <div class='employment-icon'>
                  <img src={'icon/Snapchat-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Snapchat
                  </p>
                </div>
                <div class='employment-icon'>
                  <img src={'icon/Twitter-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Twitter
                  </p>
                </div>
                <div class='employment-icon'>
                  <img src={'icon/Uber-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    Uber
                  </p>
                </div>
                <div class='employment-icon see-more'>
                  <img src={'icon/Right-Arrow-Icon/Light.png'}/>
                  <p class='employment-icon-text'>
                    See more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class='content content-full' style={{height: 850}}>
        <div class='tile tile-full'>
          <div class='tile-content'>
            <div class='top-bar'/>
            <div class='tile-label'>Executive Team</div>
            <div class='exec-grid'>
              <div class='exec-tile'>
                <div class='exec-tile-content'>
                  <img class='exec-pic' src={'img/exec/rikki.jpg'}/>
                  <img class='exec-icon' src={'icon/President-Icon/Highlight.png'}/>                
                  <div class='exec-info'>
                    <div class='exec-name'>Ankit Mukherjee</div>
                    <div class='exec-title'>President</div>
                  </div>
                </div>
              </div>
              <div class='exec-tile'>
                <div class='exec-tile-content'>
                  <img class='exec-pic' src={'img/exec/rikki.jpg'}/>
                  <img class='exec-icon' src={'icon/President-Icon/Highlight.png'}/>                
                  <div class='exec-info'>
                    <div class='exec-name'>Ankit Mukherjee</div>
                    <div class='exec-title'>President</div>
                  </div>
                </div>
              </div>
              <div class='exec-tile'>
                <div class='exec-tile-content'>
                  <img class='exec-pic' src={'img/exec/rikki.jpg'}/>
                  <img class='exec-icon' src={'icon/President-Icon/Highlight.png'}/>                
                  <div class='exec-info'>
                    <div class='exec-name'>Ankit Mukherjee</div>
                    <div class='exec-title'>President</div>
                  </div>
                </div>
              </div>
              <div class='exec-tile'>
                <div class='exec-tile-content'>
                  <img class='exec-pic' src={'img/exec/rikki.jpg'}/>
                  <img class='exec-icon' src={'icon/President-Icon/Highlight.png'}/>                
                  <div class='exec-info'>
                    <div class='exec-name'>Ankit Mukherjee</div>
                    <div class='exec-title'>President</div>
                  </div>
                </div>
              </div>

              <div class='exec-tile'>
                <div class='exec-tile-content'>
                  <img class='exec-pic' src={'img/exec/rikki.jpg'}/>
                  <img class='exec-icon' src={'icon/President-Icon/Highlight.png'}/>                
                  <div class='exec-info'>
                    <div class='exec-name'>Ankit Mukherjee</div>
                    <div class='exec-title'>President</div>
                  </div>
                </div>
              </div>
              <div class='exec-tile'>
                <div class='exec-tile-content'>
                  <img class='exec-pic' src={'img/exec/rikki.jpg'}/>
                  <img class='exec-icon' src={'icon/President-Icon/Highlight.png'}/>                
                  <div class='exec-info'>
                    <div class='exec-name'>Ankit Mukherjee</div>
                    <div class='exec-title'>President</div>
                  </div>
                </div>
              </div>
              <div class='exec-tile'>
                <div class='exec-tile-content'>
                  <img class='exec-pic' src={'img/exec/rikki.jpg'}/>
                  <img class='exec-icon' src={'icon/President-Icon/Highlight.png'}/>                
                  <div class='exec-info'>
                    <div class='exec-name'>Ankit Mukherjee</div>
                    <div class='exec-title'>President</div>
                  </div>
                </div>
              </div>
              <div class='exec-tile'>
                <div class='exec-tile-content'>
                  <img class='exec-pic' src={'img/exec/rikki.jpg'}/>
                  <img class='exec-icon' src={'icon/President-Icon/Highlight.png'}/>                
                  <div class='exec-info'>
                    <div class='exec-name'>Ankit Mukherjee</div>
                    <div class='exec-title'>President</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

  </Layout>
)

export default IndexPage
