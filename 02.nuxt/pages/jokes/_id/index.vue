<template>
  <div>
    <nuxt-link to="/jokes">Back to Jokes</nuxt-link>
    <h3>{{ joke }}</h3>
    <hr />
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  data() {
    return {
      joke: ""
    }
  },
  computed: {
    ...mapGetters(["getJoke"])
  },
  methods: {
    ...mapActions(["fetchJoke"])
  },
  async created() {
    await this.fetchJoke(this.$route.params.id)
    this.joke = this.getJoke
  },
  head() {
    return {
      title: this.joke.substring(0, 30) + '...',
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.joke
        }
      ]
    }
  }
}
</script>

<style>
h3 {
  padding: 1rem;
}
hr {
  margin-bottom: 1rem;
}
</style>