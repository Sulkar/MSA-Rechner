<script setup>
import { onMounted, ref } from "vue";
import FachDeutsch from "./FachDeutsch.vue";
import { store } from "./store.js";
import FachReligion from "./FachReligion.vue";
import FachMathematik from "./FachMathematik.vue";

onMounted(() => {
  document.querySelector("#R1 input").focus();
});
</script>

<template>
  <FachReligion></FachReligion>
  <FachMathematik></FachMathematik>
  <FachDeutsch></FachDeutsch>
  <div>
    {{ store.Gesamtnote }}
  </div>
</template>
