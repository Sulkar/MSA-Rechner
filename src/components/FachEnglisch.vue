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
  data() {
    return {
      jahresnote: 0,
      schriftlich: 0,
      muendlich: 0,
      gesamtnote: 0,
      info: "",
    };
  },
  mixins: [globalFunctions],
  watch: {
    gesamtnote(newValue, oldValue) {
      this.$emit("getFachNote", "englischGesamtnote", newValue);
    },
  },
  methods: {
    sindNotenVollstaendig() {
      let fachArray = ["jahresnote", "schriftlich", "muendlich"];
      let notenCounter = 0;
      fachArray.forEach((fach) => {
        let tempNote = this[fach];
        if (tempNote != 0 && !isNaN(tempNote)) {
          notenCounter++;
        }
      });
      if (notenCounter == fachArray.length) {
        return true;
      } else {
        return false;
      }
    },
    handleGetNote(typ, note) {
      this[typ] = parseInt(note);
      if (this.sindNotenVollstaendig()) {
        this.calculateGesamtnote();
      }else{
        this.gesamtnote = 0;
      }
    },
    calculateGesamtnote() {
      let pruefungsnote = Math.round((this.schriftlich * 2 + this.muendlich) / 3);
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
    <div class="fach">Englisch</div>
    <div class="notenfelderRow">
      <Notenfeld id="E1" nextId="P1" typ="jahresnote" @getNote="handleGetNote"></Notenfeld>
      <Notenfeld id="E2" nextId="D3" typ="schriftlich" @getNote="handleGetNote"></Notenfeld>
      <Notenfeld id="E3" nextId="P3" typ="muendlich" @getNote="handleGetNote"></Notenfeld>
      <Gesamtnote id="E4" :note="gesamtnote"></Gesamtnote>
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
