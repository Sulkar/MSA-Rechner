<template>
  <b-row class="justify-content-md-center">
    <b-col cols="3">Mathe {{ this.$store.state.gesamtnoteMathe }}</b-col>
    <b-col cols="3"
      ><b-form-input
        class="inputNote"
        ref="jahresnote_mathe"
        placeholder="JN"
        @focus="updateCurrentFocus($event)"
        v-on:keyup="focusNextInput()"
        v-model="jahresnote"
        :formatter="formatInput"
      >
      </b-form-input
    ></b-col>
    <b-col cols="3"
      ><b-form-input
        class="inputNote"
        ref="pruefungsnote_mathe"
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
  name: "FachMathe",
  //props: ["jahresnote", "pruefungsnote", "gesamtnote"],
  data: () => ({
    jahresnote: "",
    pruefungsnote: "",
    currentFocus: 0,
    inputfields: {
      1: "jahresnote_mathe",
      2: "pruefungsnote_mathe",
    },
  }),
  computed: {
    gesamtnote() {
      let jahresnote = parseInt(this.jahresnote, 10);
      let pruefungsnote = parseInt(this.pruefungsnote, 10);
      let gesamtnote = "";
      if (!isNaN(jahresnote) && !isNaN(pruefungsnote)) {
        gesamtnote = jahresnote + pruefungsnote;
        this.$store.commit("setGesamtnoteMathe", gesamtnote);
        return gesamtnote;
      }
      this.$store.commit("setGesamtnoteMathe", "");
      return "";
    },
  },
  mounted() {
    this.focusNextInput();
  },
  methods: {
    updateCurrentFocus(e){
      console.log(e.target);
    },
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