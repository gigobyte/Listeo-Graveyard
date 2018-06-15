//Libraries
import React from 'react'
import { connect } from 'react-redux'
//Components
import Header from '~/components/partials/Header'
import NewPlaylistModal from '~/components/partials/NewPlaylistModal'
import NotificationSnackbar from '~/components/partials/NotificationSnackbar'
//Styles and Media
import { fullPage } from '~/styles/shared.scss'

@connect((store) => ({
    user: store.auth.user
}))
class Layout extends React.Component {
    render() {
        return (
            <div class={fullPage}>
                {this.props.user &&
                    <div>
                        <Header />
                        {this.props.children}
                        <NewPlaylistModal />
                    </div>
                }

                {!this.props.user &&
                    this.props.children
                }

                <NotificationSnackbar />
            </div>
        )
    }
}

export default Layout
