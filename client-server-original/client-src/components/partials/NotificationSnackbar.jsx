//Libraries
import React from 'react'
import { connect } from 'react-redux'
//Components
import Snackbar from 'material-ui/Snackbar'
//store
import store from '~/store'
import { hideNotification } from '~/store/modules/state'

@connect((store) => ({
    message: store.state.notificationSnackbarMessage
}))
class NotificationSnackbar extends React.Component {
    handleAutoClose = () => {
        store.dispatch(hideNotification())
    }

    render() {
        const { message } = this.props
        const shouldOpen = message.length > 0

        return (
            <Snackbar
                open={shouldOpen}
                message={message}
                autoHideDuration={3000}
                bodyStyle={{backgroundColor: '#1a8cb7'}}
                onRequestClose={this.handleAutoClose}
            />
        )
    }
}

export default NotificationSnackbar
