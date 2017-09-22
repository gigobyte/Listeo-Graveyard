import Elm from './Main.elm'

const forceLoadAll = ''
import('./media' + forceLoadAll)

const node = document.querySelector('.render-target')
const app = Elm.Main.embed(node)
