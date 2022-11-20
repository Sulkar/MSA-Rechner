<script setup>
import Rechner from "./components/Rechner.vue";
</script>

<template>
  <header></header>

  <main>
    <div id="wrapper">
      <img alt="Vue logo" class="logo" src="./assets/quali-yes-no-banner.jpg" width="" height="125" />
      <Rechner></Rechner>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  #wrapper {
    border-radius: 25px;
    border: 10px solid #729fcf;
    padding: 10px 20px 10px;
  }
  header {
    display: flex;
    place-items: center;
  }

  .logo {
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
