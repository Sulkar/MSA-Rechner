<script>
export default {
  props: {
    width: String,
  },
  methods: {
    getWidth() {
      if (this.width != null && this.width != "") {
        return "width: " + this.width;
      } else {
        return "width: 30px;";
      }
    },
  },
};
</script>

<template>
  <div :style="getWidth()"></div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
