import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Home from '../views/Home'
import LandingPage from '../views/LandingPage'

const Container = styled.div`
    height: 100%;
`

const data = connect((store) => ({
    isLoggedIn: !!store.state.user,
    route: store.location.type
}))

const MainLayout = ({ route, isLoggedIn }) =>
    <Container>
        {route === 'INDEX' && isLoggedIn &&
            <Home />
        }

        {route === 'INDEX' && !isLoggedIn &&
            <LandingPage />
        }
    </Container>

export default data(MainLayout)