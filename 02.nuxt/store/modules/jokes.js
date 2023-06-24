const state = {
  jokes: []
}

const getters = {
  allJokes: (state) => state.jokes
}

const actions = {
  async fetchJokes({ commit }) {
    try {
      const res = await fetch("https://icanhazdadjoke.com/search?page=2", {
        headers: {
          "Accept": "application/json"
        }
      })
      const json = await res.json()
      commit("setJokes", json.results)
    } catch(err) {
      console.log(err)
    }
  },
  async searchText({ commit }, text) {
    try {
      const res = await fetch(`https://icanhazdadjoke.com/search?term=${text}`, {
        headers: {
          "Accept": "application/json"
        }
      })
      const json = await res.json()
      commit("setJokes", json.results)
    } catch(err) {
      console.log(err)
    }
  }
}

const mutations = {
  setJokes: (state, jokes) => (state.jokes = jokes)
}

export default {
  state,
  getters,
  actions,
  mutations
}