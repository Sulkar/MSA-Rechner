<script>
import Notenfeld from "./Notenfeld.vue";
import Notenplatzhalter from "./Notenplatzhalter.vue";
import Gesamtnote from "./Gesamtnote.vue";
import InfoIcon from "./SymbolMuendlich.vue";

export default {
  components: {
    Notenfeld,
    Gesamtnote,
    Notenplatzhalter,
    InfoIcon,
  },
  data() {
    return {
      jahresnote: 0,
      gesamtnote: 0,
      info: "",
      windowWidth: 0,
    };
  },
  created(){
    this.windowWidth = window.innerWidth;
  },
  watch: {
    gesamtnote(newValue, oldValue) {
      this.$emit("getFachNote", "informatikNote", newValue);
    },
  },
  methods: {
    handleGetNote(typ, note) {
      this[typ] = parseInt(note);
      this.calculateGesamtnote();
    },
    calculateGesamtnote() {
      this.gesamtnote = this.jahresnote;
      //Mündliche Prüfung? Wenn Jahresnote 5 oder 6 ist
      if (this.jahresnote >= 5) {
        this.info = "*";
      } else {
        this.info = "";
      }
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="fach" v-if="windowWidth > 450">Informatik</div>
    <div class="fach" v-else>Info</div>
    <div class="notenfelderRow">
      <Notenfeld id="I1" nextId="D2" typ="jahresnote" @getNote="handleGetNote"></Notenfeld>
      <Notenplatzhalter width="100px;"></Notenplatzhalter>

      <Gesamtnote id="I2" :note="gesamtnote"></Gesamtnote>
      <InfoIcon :icon="info"></InfoIcon>
      <Notenplatzhalter width="15px;"></Notenplatzhalter>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  margin-top: 10px;
}
.notenfelderRow {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}



</style>
