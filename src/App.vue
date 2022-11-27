<script>
import Rechner from "./components/Rechner.vue";

export default {
  components: {
    Rechner,
  },
};
</script>

<template>
  <header></header>

  <main>
    <div id="wrapper">
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
  margin: 0 auto 0.4rem;
}

@media (min-width: 450px) {
  #wrapper {
    border-radius: 25px;
    border: 10px solid #008036;
    padding: 10px 10px 10px;
  }
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
