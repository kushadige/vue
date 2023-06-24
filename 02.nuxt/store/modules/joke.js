const state = {
  joke: {}
}

const getters = {
  getJoke: (state) => (state.joke)
}

const actions = {
  async fetchJoke({ commit }, id) {
    try {
      const res = await fetch(`https://icanhazdadjoke.com/j/${id}`, {
        headers: {
          "Accept": "application/json"
        }
      })
      const json = await res.json()
      commit("setJoke", json.joke)
    } catch(err) {
      console.log(err)
    }
  }
}

const mutations = {
  setJoke: (state, joke) => (state.joke = joke)
}

export default {
  state,
  getters,
  actions,
  mutations
}