<template>
  <div>
    <SearchJoke v-on:search-text="searchText" />
    <Joke 
      v-for="joke in allJokes" 
      v-bind:key="joke.id" 
      v-bind:id="joke.id" 
      v-bind:joke="joke.joke" 
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  computed: {
    ...mapGetters(["allJokes"])
  },
  methods: {
    ...mapActions(["fetchJokes", "searchText"])
  },
  created() {
    this.fetchJokes()
  },
  head() {
    return {
      title: "Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for dad jokes"
        }
      ]
    }
  }
}
</script>