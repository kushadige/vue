<template>
  <header class="header">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <h1>Todo List</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
  }
  .header h1 {
    padding: 20px 0;
  }
  nav {
    background: #fff;
    padding: 10px 0;
    border-bottom: 1px solid #fff;
  }
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>