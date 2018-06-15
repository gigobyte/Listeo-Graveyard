//Libraries
import React from 'react'
//Components
import { Col, Row, Container } from 'reactstrap'
import NewPlaylistCreateForm from '~/components/views/NewPlaylist/NewPlaylistCreateForm'
//Styles and Media
import style from '~/styles/components/NewPlaylist.scss'

class NewPlaylist extends React.Component {
    render() {
        const { type } = this.props.params

        return (
            <div>
                <Container class={style.container}>
                    <div class={style.heading}>Start a playlist</div>
                    <Row>
                        <Col md={8}>
                            {type === 'new' &&
                                <NewPlaylistCreateForm />
                            }

                            {type === 'import'}
                        </Col>
                        <Col md={4}>
                            <div class={style.subheading}>What is a playlist?</div>
                            <p class={style.annotation}>
                                Lorem ipsum dolor sit amet, agam ignota accusam per ea, modo antiopam consequuntur no mel.
                                In porro consulatu his. Vix ei fuisset mnesarchum philosophia, paulo oratio albucius ei cum.
                                Vim et utamur forensibus. Oratio audiam repudiare nam ne, nam natum error iracundia at.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NewPlaylist
