//Libraries
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
//Components
import Layout from '~/components/views/Layout'
import LandingPage from '~/components/views/LandingPage'
import NewPlaylist from '~/components/views/NewPlaylist'
//Store
import store from '~/store'
import { getCurrentUser } from '~/store/modules/auth'

function checkIfAuthenticated(nextState, replace, callback) {
    store.dispatch(getCurrentUser()).then(() => callback()).catch(() => {
        if(nextState.location.pathname !== '/') {
            replace('/')
        }
        callback()
    })
}

const routes = (
    <Route path="/" component={Layout} onEnter={checkIfAuthenticated}>
       <IndexRoute component={LandingPage} />
       <Route path="playlist/:type" component={NewPlaylist} />
       <Redirect from="*" to="/" />
    </Route>
)

export default routes
