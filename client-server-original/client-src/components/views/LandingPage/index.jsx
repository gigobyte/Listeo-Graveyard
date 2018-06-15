//Libraries
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
//Components
import { Button } from 'reactstrap'
import LandingPageHeader from '~/components/views/LandingPage/LandingPageHeader'
import LandingPageAuthSidebar from '~/components/views/LandingPage/LandingPageAuthSidebar'
import Home from '~/components/views/Home'
//Styles and Media
import style from '~/styles/components/LandingPage.scss'
import { fullPage } from '~/styles/shared.scss'
//Store
import store from '~/store'
import { toggleAuthSidebar, setAuthSidebarPage } from '~/store/modules/state'

@connect((store) => ({
    user: store.auth.user
}))
class LandingPage extends React.Component {
    handleGetStartedButton = () => {
        store.dispatch(setAuthSidebarPage('register'))
        store.dispatch(toggleAuthSidebar())
    }

    render() {
        return (
            <div>
                {!this.props.user &&
                    <div class={classNames(style.container, fullPage)}>
                        <LandingPageHeader />
                        <div>
                            <h1 class={style.mainText}>A sophisticated platform for creating and sharing curated playlists</h1>
                            <Button
                                outline class={style.getStartedButton}
                                size="lg"
                                onClick={this.handleGetStartedButton}
                            >
                                    Get started
                            </Button>
                            <LandingPageAuthSidebar />
                        </div>
                    </div>
                }

                {this.props.user &&
                    <Home />
                }
            </div>
        )
    }
}

export default LandingPage
