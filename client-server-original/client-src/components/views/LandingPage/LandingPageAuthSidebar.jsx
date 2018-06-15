//Libraries
import React from 'react'
import { connect } from 'react-redux'
//Components
import { Container } from 'reactstrap'
import Drawer from 'material-ui/Drawer'
import LandingPageAuthSidebarRegister from '~/components/views/LandingPage/LandingPageAuthSidebarRegisterForm'
import LandingPageAuthSidebarLogin from '~/components/views/LandingPage/LandingPageAuthSidebarLoginForm'
import LandingPageAuthSidebarAbout from '~/components/views/LandingPage/LandingPageAuthSidebarAbout'
//Styles and Media
import style from '~/styles/components/LandingPageAuthSidebar.scss'
//Store
import store from '~/store'
import { toggleAuthSidebar } from '~/store/modules/state'

@connect((store) => ({
    authSidebarOpened: store.state.authSidebarOpened,
    authSidebarSelectedPage: store.state.authSidebarSelectedPage
}))
class LandingPage extends React.Component {
    hideSidebar = () => {
        store.dispatch(toggleAuthSidebar())
    }

    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    openSecondary
                    width={window.innerWidth * 0.3}
                    onRequestChange={this.hideSidebar}
                    open={this.props.authSidebarOpened}
                    containerStyle={{backgroundColor: '#fafbfb'}}
                >
                    <Container class={style.formContainer}>
                        {this.props.authSidebarSelectedPage === 'register' &&
                            <LandingPageAuthSidebarRegister />
                        }

                        {this.props.authSidebarSelectedPage === 'login' &&
                            <LandingPageAuthSidebarLogin />
                        }

                        {this.props.authSidebarSelectedPage === 'about' &&
                            <LandingPageAuthSidebarAbout />
                        }
                    </Container>
                </Drawer>
            </div>
        )
    }
}

export default LandingPage
