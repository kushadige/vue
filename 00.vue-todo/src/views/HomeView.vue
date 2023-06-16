<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../components/Todos.vue";
import AddTodo from "../components/AddTodo.vue";

export default {
  name: "home",
  components: {
    AddTodo,
    Todos
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async deleteTodo(id) {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          this.todos = this.todos.filter(todo => todo.id !== id);
        }
      } catch(err) {
        console.log(err);
      }
    },
    async addTodo(todo) {
      const { title, completed } = todo;
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            completed
          })
        });
        const json = await res.json();
        this.todos = [...this.todos, json];
      } catch(err) {
        console.log(err);
      }
    },
  },
  async created() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      const data = await res.json();
      this.todos = data;
    } catch(err) {
      console.log(err);
    } 
  }
};
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
