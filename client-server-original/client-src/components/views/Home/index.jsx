//Libraries
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
//Components
import HomeTutorial from '~/components/views/Home/HomeTutorial'
import HomeCategoryTitle from '~/components/views/Home/HomeCategoryTitle'
//Styles and Media
import { colNoPadding } from '~/styles/shared.scss'

@connect((store) => ({
    user: store.auth.user
}))
class Home extends React.Component {
    componentDidMount() {
        document.title = 'Listeo'
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <HomeTutorial />
                    </Row>
                    <Row>
                        <HomeCategoryTitle text="Popular Playlists"/>
                    </Row>
                    <Row>
                        <Col md={6} class={colNoPadding}>
                            <HomeCategoryTitle text="Latest Activity"/>
                        </Col>
                        <Col md={6} class={colNoPadding}>
                            <HomeCategoryTitle text="Newest Playlists"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
