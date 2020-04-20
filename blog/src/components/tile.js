// Stuff for tiling
import React from "react"
import styled from 'styled-components'

const ContentContainer = styled.div`
    width: 95%;
    max-width: 1312px;
    margin: 0 auto;
    padding: 20px 0;
`

const TileRow = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 0;
`

const Tile = styled.div`
    height: 640px;
    width: 640px;
    background-color: white;
`

const ImageTile = styled(Tile)`
    background-image: url(${ props => props.image });
    background-size: cover;
`

const StyledContentTile = styled(Tile)`
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        width: 576px;
        height: 576px;
        border-top: 1px solid #e5e5ea;
    }
`

const ContentTile = (props) => {
    return(
        <StyledContentTile>
            <div className='content'>
                { props.children }
            </div>
        </StyledContentTile>
    )
}


const StyledEventLabel = styled.div`
    display: flex;
    position: relative;
    top: 508px;
    left: 32px;
    height: 100px;
    width: 394px;
    background-color: white;
    align-items: center;
    font-size: 16px;

    img {
        height: 18px;
        width: 18px;
        padding: 8px;
        border: 1px solid #ff5c39;
        border-radius: 100px;
        margin-left: 30px;
        margin-right: 15px;
    }

    .eventName {
        font-family: 'NeurialGrotesk-Medium'
    }

    .eventDate {
        color: #8e8e93;
    }
`

const EventLabel = (props) => {
    return(
        <StyledEventLabel>
            <img src={ props.icon }/>
            <div className='eventDetails'>
                <p className='eventName'>{ props.name }</p>
                <p className='eventDate'>{ props.location} · {props.date}</p>
            </div>
        </StyledEventLabel>
    )
}


export {
    ContentContainer,
    TileRow,
    Tile,
    ImageTile,
    ContentTile,
    EventLabel
}