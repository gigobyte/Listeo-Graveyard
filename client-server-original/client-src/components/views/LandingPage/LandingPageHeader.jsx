//Libraries
import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
//Components
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
//Styles and Media
import style from '~/styles/components/LandingPageHeader.scss'
//Store
import store from '~/store'
import { toggleAuthSidebar, setAuthSidebarPage } from '~/store/modules/state'

@connect((store) => ({
    authSidebarOpened: store.state.authSidebarOpened,
    authSidebarSelectedPage: store.state.authSidebarSelectedPage
}))
class LandingPageHeader extends React.Component {
    gotoSidebarPage = (page) => () => {
        store.dispatch(setAuthSidebarPage(page))
        if(!this.props.authSidebarOpened) {
            store.dispatch(toggleAuthSidebar())
        }
    }

    render() {
        const { authSidebarOpened, authSidebarSelectedPage } = this.props
        const buttonStyle = classNames(style.navlink, style.navbutton, {[style.navbuttonBlack]: authSidebarOpened})

        //TODO: refactor this

        let aboutButtonStyle = buttonStyle
        let registerButtonStyle = buttonStyle
        let loginButtonStyle = buttonStyle

        if(authSidebarOpened) {
            aboutButtonStyle = classNames(buttonStyle, {[style.selected]: authSidebarSelectedPage === 'about'})
            registerButtonStyle = classNames(buttonStyle, {[style.selected]: authSidebarSelectedPage === 'register'})
            loginButtonStyle = classNames(buttonStyle, {[style.selected]: authSidebarSelectedPage === 'login'})
        }

        return (
            <div>
                <Navbar style={{zIndex: 9999}}>
                    <NavbarBrand class={classNames(style.navlink, style.brand)} href="/">Listeo</NavbarBrand>
                    <Nav class="float-xs-right" navbar>
                        <NavItem>
                            <NavLink class={aboutButtonStyle} onClick={this.gotoSidebarPage('about')}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink class={registerButtonStyle} onClick={this.gotoSidebarPage('register')}>Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink class={loginButtonStyle} onClick={this.gotoSidebarPage('login')}>Login</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default LandingPageHeader
