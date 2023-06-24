<template>
  <div class="container">
    <Header />
    <nuxt />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background: #f4f4f4;
  }
  a {
    text-decoration: none;
    color: #666;
  }
  ul {
    list-style: none;
  }
  .container {
    max-width: 800px;
    margin: 2rem auto;
    overflow: hidden;
    padding: 1rem 2rem;
    background: #fff;
  }
</style>