import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components';
import MainLayout from './layouts/MainLayout'
import store from '../store'

injectGlobal`
    html, body, .render-target {
        height: 100%;
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
    }
`

const Root = () =>
    <Provider store={store}>
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    </Provider>

export default Root