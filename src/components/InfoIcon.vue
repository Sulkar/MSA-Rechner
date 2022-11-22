<script>
import IconMuendlich from "./icons/IconMuendlich.vue";

export default {
  components: {
    IconMuendlich,
  },
  props: {
    icon: String,
  },
  methods: {},
};
</script>

<template>
  <div>
    <IconMuendlich v-if="icon != ''"></IconMuendlich>
  </div>
</template>

<style scoped>
div {
  margin-left: 5px;
  width: 30px;
  text-align: center;
}
</style>
