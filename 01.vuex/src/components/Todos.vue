<template>
  <div>
    <h3>Todos</h3>

    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>

    <div class="todos">
      <div 
        @dblclick="onDblClick(todo)" 
        v-for="todo in allTodos" 
        :key="todo.id" 
        class="todo"
        :class="{'is-complete': todo.completed}"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fa-solid fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updTodo)
    }
  },
  created() {
    // created() runs before component loads
    this.fetchTodos()
  },
  mounted() {
    // console.log(this.allTodos)
  }
}
</script>

<style>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
  i {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .legend {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: -0.5rem;
  }
  .complete-box,
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
  .incomplete-box {
    background: #41b883;
  }
  .is-complete {
    background: #35495e;
    color: #fff;
  }
  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>