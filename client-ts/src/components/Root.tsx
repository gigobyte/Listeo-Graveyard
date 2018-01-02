import * as React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
    html, body, .render-target {
        height: 100%;
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
    }
`

const Root = () =>
    <div></div>

export default Root