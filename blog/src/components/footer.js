import React from "react"
import styled from 'styled-components'

let StyledFooter = styled.div`
    background-color: black;
    color: white;
    height: 60px;
    position: absolute;
    width: 100%;
    text-align: center;
    line-height: 60px;
    font-family: 'NeurialGrotesk';

    @media only screen and (max-width: 600px) { 
        font-size: 14px;
    }
`

const Footer = () => (
    <StyledFooter>
        <p>LavaLab 2020. All Rights Reserved.</p>
    </StyledFooter>
    
)

export default Footer