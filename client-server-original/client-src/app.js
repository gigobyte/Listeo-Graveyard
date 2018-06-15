import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'
import store from '~/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import '~/styles/main.scss'

injectTapEventPlugin()

const muiTheme = getMuiTheme({
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande"'
})

document.onreadystatechange = function () {
    if(document.readyState === 'complete') {
        const app = document.querySelector('.render-target')

        const history = syncHistoryWithStore(browserHistory, store)

        ReactDOM.render(
            <MuiThemeProvider muiTheme={muiTheme}>
                <Provider store={store}>
                    <Router history={history} routes={routes} />
                </Provider>
            </MuiThemeProvider>, app
        )
    }
}
