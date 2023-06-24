import Vuex from "vuex"

import jokes from "./modules/jokes"
import joke from "./modules/joke"

export default () => {
  return new Vuex.Store({
    modules: {
      jokes,
      joke
    }
  })
}