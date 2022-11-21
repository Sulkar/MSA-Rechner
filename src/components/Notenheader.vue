<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="rowNotenHeader">
    <span>Jahresnote</span>
    <span>schriftlich</span>
    <span>mündlich</span>
    <span>Gesamtnote</span>
  </div>
</template>

<style scoped>
span {
  transform: rotate(-45deg);
  margin-left: -15px;
}
.rowNotenHeader {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}
</style>
