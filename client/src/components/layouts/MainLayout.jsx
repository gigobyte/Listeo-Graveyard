import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'

const MainLayout = () =>
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>

export default MainLayout