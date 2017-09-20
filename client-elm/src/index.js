import Elm from './Main.elm'

const node = document.querySelector('.render-target')
const app = Elm.Main.embed(node)
