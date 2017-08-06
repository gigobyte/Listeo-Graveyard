import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../../style/FlexContainer'
import FlexItem from '../../style/FlexItem'
import background from '../../media/home-background.jpg'

const Logo = styled.div`
    font-size: 48px;
`

const Container = FlexContainer.extend`
    height: 100vh;
    width: 100vw;
    background: url(${background});
    padding: 60px;
    color: white;
`

const Box = FlexItem.extend`
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`

const Heading = styled.div`
    padding-top: 200px;
    font-size: 24px;
`

const Description = styled.p`
    font-size: 18px;
    padding-top: 30px;
`

const Home = () =>
    <Container direction="column">
        <Logo>Listeo</Logo>
        <FlexContainer>
            <Box size="1">
                <Heading>Listeo is a platform for creating and sharing video playlists</Heading>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. 
                </Description>
            </Box>
            <Box size="2">
            </Box>
        </FlexContainer>
    </Container>

export default Home