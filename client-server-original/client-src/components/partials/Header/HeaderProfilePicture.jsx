//Libraries
import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
//Components
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap'
import FlatButton from 'material-ui/FlatButton'
//Styles and Media
import style from '~/styles/components/HeaderProfilePicture.scss'
//Store
import store from '~/store'
import { toggleProfilePicturePopover, wipeState } from '~/store/modules/state'
import { logout } from '~/store/modules/auth'

@connect((store) => ({
    opened: store.state.profilePicturePopoverOpened,
    user: store.auth.user
}))
class HeaderProfilePicture extends React.Component {
    //DOM is manipulated directly here to style the popover
    componentDidUpdate = () => {
        const popover = document.getElementById('profilePicturePopover')
        if(!popover) {
            return
        }
        popover.parentNode.classList.add('app-popover')
    }

    toggle = () => {
        store.dispatch(toggleProfilePicturePopover())
    }

    logout = () => {
        store.dispatch(logout())
        store.dispatch(wipeState())
        browserHistory.push('/')
    }

    render() {
        const { opened, user } = this.props

        return (
            <div>
                <img src="http://placehold.it/48x48"
                    id="profilePicture"
                    class={style.profilePicture}
                    alt="Profile picture"
                    onClick={this.toggle}
                />
                <Popover id="profilePicturePopover"
                        placement="bottom"
                        isOpen={opened}
                        target="profilePicture"
                        toggle={this.toggle}
                >
                    <PopoverTitle>{user.username} <FlatButton label="Sign out" onClick={this.logout}/></PopoverTitle>
                    <PopoverContent>
                        <div class={style.menuItem}>Profile</div>
                        <div class={style.menuItem}>Settings</div>
                    </PopoverContent>
                </Popover>
            </div>
        )
    }
}

export default HeaderProfilePicture
