<template>
  <header>
    <h1 class="title">Dad Jokes</h1>
    <ul class="navbar">
      <li v-for="link in links" v-bind:key="link.path">
        <nuxt-link v-bind:to="link.path">{{ link.label }}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          path: "/",
          label: "Home"
        },
        {
          path: "/about",
          label: "About"
        },
        {
          path: "/jokes",
          label: "Jokes"
        }
      ]
    }
  }
}
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem 0;
    border-bottom: 1px dotted #ccc;
  }
  .title {
    font-size: 3rem;
    color: #526488;
  }
  .navbar {
    display: flex;
  }
  .navbar a {
    display: inline-block;
    background: #333;
    color: #fff;
    padding: 0.3rem 1rem;
    margin-right: 0.5rem;
    text-decoration: none;
  }
  .navbar a.nuxt-link-exact-active {
    color: yellow;
  }
</style>