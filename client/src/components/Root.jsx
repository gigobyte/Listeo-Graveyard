import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components';
import MainLayout from './layouts/MainLayout'

injectGlobal`
    body {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
    }
`

const Root = () =>
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>

export default Root