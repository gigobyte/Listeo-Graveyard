/* eslint-disable fp/no-unused-expression */
import React from 'react'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components';
import MainLayout from 'components/layouts/MainLayout'
import store from 'store'

injectGlobal`
    html, body, .render-target {
        height: 100%;
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
    }
`

const Root = () =>
    <Provider store={store}>
        <MainLayout />
    </Provider>

export default Root