//Libraries
import React from 'react'
import classNames from 'classnames'
//Components
import RaisedButton from 'material-ui/RaisedButton'
//Styles and Media
import style from '~/styles/components/HeaderNewPlaylistButton.scss'
import { primaryButton } from '~/styles/shared.scss'
//Store
import store from '~/store'
import { toggleNewPlaylistModal } from '~/store/modules/state'

class HeaderNewPlaylistButton extends React.Component {
    openNewPlaylistModal = () => {
        store.dispatch(toggleNewPlaylistModal())
    }

    render() {
        return (
            <div>
                <RaisedButton primary label="Start a playlist"
                                class={classNames(style.buttonContainer, primaryButton)}
                                onClick={this.openNewPlaylistModal}
                />
            </div>
        )
    }
}

export default HeaderNewPlaylistButton
