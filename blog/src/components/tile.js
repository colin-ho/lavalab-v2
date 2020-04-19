// Stuff for tiling
import React from "react"
import styled from 'styled-components'

const ContentContainer = styled.div`
    width: 95%;
    max-width: 1312px;
    margin: 50px auto;
`

const TileRow = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
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

export {
    ContentContainer,
    TileRow,
    Tile,
    ImageTile
}