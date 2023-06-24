<template>
  <div>
    <h1>About</h1>
    <p>This is an app that displays dad jokes</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About",
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