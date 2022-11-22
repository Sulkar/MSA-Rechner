<script>
import Notenfeld from "./Notenfeld.vue";
import Gesamtnote from "./Gesamtnote.vue";
import globalFunctions from "./mixins/globalFunctions";
import Notenplatzhalter from "./Notenplatzhalter.vue";
import InfoIcon from "./SymbolMuendlich.vue";

export default {
  components: {
    Notenfeld,
    Gesamtnote,
    Notenplatzhalter,
    InfoIcon,
  },
  created() {
    this.windowWidth = window.innerWidth;
  },
  data() {
    return {
      jahresnote: 0,
      schriftlich: 0,
      gesamtnote: 0,
      info: "",
      windowWidth: 0,
    };
  },
  mixins: [globalFunctions],
  watch: {
    gesamtnote(newValue, oldValue) {
      this.$emit("getFachNote", "mathematik", newValue);
    },
  },
  methods: {
    handleGetNote(typ, note) {
      this[typ] = parseInt(note);
      this.calculateGesamtnote();
    },
    calculateGesamtnote() {
      let pruefungsnote = this.schriftlich;
      //Gesamtnote auf zwei Stellen gerundet
      let tempGesamtnote = Math.round(((this.jahresnote + pruefungsnote) / 2) * 100) / 100;
      //Prüfungsnote überwiegt?
      this.gesamtnote = this.gUpdatePruefungsnoteUeberwiegt(pruefungsnote, this.jahresnote, tempGesamtnote);
      //Mündliche Prüfung möglich?
      if (this.gIsMuendlichePruefungHauptfach(pruefungsnote, this.jahresnote, this.gesamtnote)) {
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
    <div class="fach" v-if="windowWidth > 450">Mathematik</div>
    <div class="fach" v-else>Mathe</div>
    <div class="notenfelderRow">
      <Notenfeld id="M1" nextId="M2" typ="jahresnote" @getNote="handleGetNote"></Notenfeld>
      <Notenfeld id="M2" nextId="E1" typ="schriftlich" @getNote="handleGetNote"></Notenfeld>
      <Notenplatzhalter width="50px;"></Notenplatzhalter>
      <Gesamtnote id="M3" :note="gesamtnote"></Gesamtnote>
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
@media (min-width: 450px) {
}
</style>
