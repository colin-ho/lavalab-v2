// Stuff for tiling
import React from "react"
import styled from 'styled-components'

const ContentContainer = styled.div`
    width: 95%;
    max-width: 1044px;
    margin: 30px auto;
    padding: 20px 0;
`

const TileRow = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
`

const Tile = styled.div`
    position: relative;
    height: 512px;
    width: 512px;
    background-color: white;

    
    
`

const ImageTile = styled(Tile)`
    background-image: url(${ props => props.image });
    background-size: cover;
`

const StyledContentTile = styled(Tile)`
    width: ${({ type }) => type == 'full' ? 1044 : 512 }px;
    background-color: ${({ theme }) => theme == 'dark' ? 'black' : 'white' };
    color: ${({ theme }) => theme == 'dark' ? 'white' : 'black' };

    .content {
        position: absolute;
        top: 20px;
        bottom: 20px;
        left: 20px;
        right: 20px;
        border-top: 1px solid ${({ theme }) => theme == 'dark' ? '#2c2c2e' : '#e5e5ea' };
    }

    .title {
        position: absolute;
        left: 20px;
        top: 30px;
        text-transform: uppercase;
        font-family: 'NeurialGrotesk-Medium';
        padding: 16px 0;
        font-size: 14px;
    }

    .employment-content {
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
    }

    
`

const ContentTile = (props) => {
    return(
        <StyledContentTile theme={ props.theme } type={ props.type }>
            <p className='title'>
                    { props.title }
            </p>    
            <div className='content'>
                
                { props.children }
            </div>
        </StyledContentTile>
    )
}

const EmploymentTile = styled(ContentTile)`
    background-color: black;
    color: white;

    display: flex;
    flex-wrap: wrap;
`


const StyledEventLabel = styled.div`
    display: flex;
    position: absolute;
    left: 20px;
    bottom: 20px;
    height: 80px;
    width: 340px;
    background-color: white;
    align-items: center;
    font-size: 16px;
    line-height: 18px;

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
    Tile ,
    ImageTile,
    ContentTile,
    EmploymentTile,
    EventLabel
}