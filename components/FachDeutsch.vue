<template>
  <b-row class="justify-content-md-center">
    <b-col cols="3">Deutsch {{ this.$store.state.gesamtnoteDeutsch }}</b-col>
    <b-col cols="3"
      ><b-form-input
        class="inputNote"
        ref="jahresnote_deutsch"
        placeholder="JN"
        v-on:keyup="focusNextInput()"
        v-model="jahresnote"
        :formatter="formatInput"
      >
      </b-form-input
    ></b-col>
    <b-col cols="3"
      ><b-form-input
        class="inputNote"
        ref="pruefungsnote_deutsch"
        placeholder="PN"
        v-on:keyup="focusNextInput()"
        v-model="pruefungsnote"
        :formatter="formatInput"
      >
      </b-form-input
    ></b-col>
    <b-col cols="3"
      ><b-form-input
        class="inputNote"
        placeholder="GN"
        v-model="gesamtnote"
        disabled
      >
      </b-form-input
    ></b-col>
  </b-row>
</template>

<script>
export default {
  name: "FachDeutsch",
  //props: ["jahresnote", "pruefungsnote", "gesamtnote"],
  data: () => ({
    jahresnote: "",
    pruefungsnote: "",
    currentFocus: 0,
    inputfields: {
      1: "jahresnote_deutsch",
      2: "pruefungsnote_deutsch",
    },
  }),
  computed: {
    gesamtnote() {
      let jahresnote = parseInt(this.jahresnote, 10);
      let pruefungsnote = parseInt(this.pruefungsnote, 10);
      let gesamtnote = "";
      if (!isNaN(jahresnote) && !isNaN(pruefungsnote)) {
        gesamtnote = jahresnote + pruefungsnote;
        this.$store.commit("setGesamtnoteDeutsch", gesamtnote);
        return gesamtnote;
      }
      this.$store.commit("setGesamtnoteDeutsch", gesamtnote);
      return "";
    },
  },
  mounted() {
    this.focusNextInput();
  },
  methods: {
    focusNextInput() {
      if (this.inputfields[this.currentFocus + 1] == undefined)
        this.currentFocus = 1;
      else this.currentFocus++;
      this.$refs[this.inputfields[this.currentFocus]].focus();
      this.$refs[this.inputfields[this.currentFocus]].select();
    },
    formatInput(e) {
      let number = parseInt(String(e), 10);
      if (isNaN(number)) return "";
      if (number > 6) return 6;
      else if (number < 1) return 1;
      return number;
    },
  },
};
</script>

<style>
.inputNote {
  width: 50px;
  text-align: center;
}
</style>