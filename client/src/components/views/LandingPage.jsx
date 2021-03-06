import React from 'react'
import styled from 'styled-components'
import FlexContainer from 'style/FlexContainer'
import RegisterForm from 'components/partials/RegisterForm'
import backgroundImage from 'media/background.png';

const Logo = styled.div`
    font-size: 48px;
`

const Container = FlexContainer.extend`
    flex-direction: column;
    background: url(${backgroundImage});
    background-size: cover;
    padding: 50px;
    color: white;
    height: 100%;
    box-sizing: border-box;
`

const Content = FlexContainer.extend`
    padding-top: 130px;
`

const LeftSide = FlexContainer.extend`
    flex: 1;
    flex-direction: column;
    padding-top: 100px;
`

const Heading = styled.div`
    font-size: 30px;
`

const Description = styled.div`
    padding-top: 30px;
`

const RightSide = FlexContainer.extend`
    flex: 1;
    padding-right: 30px;
`

const LandingPage = () =>
    <Container>
        <Logo>Listeo</Logo>
        <Content>
            <LeftSide>
                <Heading>
                    Listeo is a platform for creating and sharing video playlists
                </Heading>
                <Description>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer
                     took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. 
                 </Description>
            </LeftSide>
            <RightSide>
                <RegisterForm />
            </RightSide>
        </Content>
    </Container>

export default LandingPage