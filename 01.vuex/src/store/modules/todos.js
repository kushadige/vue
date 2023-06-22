// state, getters, actions, mutations

const state = {
  todos: []
}

const getters = {
  allTodos: (state) => state.todos
}

const actions = {
  async fetchTodos({ commit }) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      commit("setTodos", data)
    } catch(err) {
      console.log(err)
    }
  },
  async addTodo({ commit }, title) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          completed: false
        })
      })
      const data = await res.json()
      commit("newTodo", data)
    } catch(err) {
      console.log(err)
    }
  },
  async deleteTodo({ commit }, id) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
      })
      commit("removeTodo", id)
    } catch(err) {
      console.log(err)
    }
  },
  async filterTodos({ commit }, e) {
    try {
      const limit = +e.target.value
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      const data = await res.json()
      commit("setTodos", data)
    } catch(err) {
      console.log(err)
    }
  },
  async updateTodo({ commit }, updTodo) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updTodo)
      })
      const data = await res.json()
      commit("updateTodo", data)
    } catch(err) {
      console.log(err)
    }
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id)
    if(index !== -1) {
      state.todos.splice(index, 1, updTodo)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}