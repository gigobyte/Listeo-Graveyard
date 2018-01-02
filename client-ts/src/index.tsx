import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './components/Root'

const render = (AppComponent: React.SFC) =>
    ReactDOM.render(
        <AppContainer>
            <AppComponent />
        </AppContainer>,
        document.querySelector('.render-target')
    )

render(Root)

if (module.hot) {
    module.hot.accept('./components/Root', () => render(Root))
}