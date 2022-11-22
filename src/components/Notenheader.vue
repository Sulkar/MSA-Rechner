<script>
import LogoMSA from "./LogoMSA.vue";

export default {
  components: { LogoMSA },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="rowNotenHeader">
    <LogoMSA></LogoMSA>
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
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /*margin-bottom: 25px;*/
}
</style>
