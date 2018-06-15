//Libraries
import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
//Components
import { Row, Col, Navbar, Nav, NavItem } from 'reactstrap'
import HeaderSearchbar from '~/components/partials/Header/HeaderSearchbar'
import HeaderNewPlaylistButton from '~/components/partials/Header/HeaderNewPlaylistButton'
import HeaderProfilePicture from '~/components/partials/Header/HeaderProfilePicture'
//Styles and Media
import style from '~/styles/components/Header.scss'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar class={style.container}>
                    <Row>
                        <Col md={2} class={classNames(style.brand, style.headerPart)}>
                            <Link to="/">Listeo</Link>
                        </Col>
                        <Col md={4}>
                            <HeaderSearchbar />
                        </Col>
                        <Nav className="float-xs-right" navbar>
                            <NavItem><HeaderNewPlaylistButton /></NavItem>
                            <NavItem><HeaderProfilePicture /></NavItem>
                        </Nav>
                    </Row>
                </Navbar>
            </div>
        )
    }
}

export default Header
