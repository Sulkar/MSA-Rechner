<script>
import Notenfeld from "./Notenfeld.vue";
import Notenplatzhalter from "./Notenplatzhalter.vue";
import Gesamtnote from "./Gesamtnote.vue";
import SymbolMuendlich from "./SymbolMuendlich.vue";
import NotenfeldWiBBoZ from "./NotenfeldWiBBoZ.vue";

export default {
  components: {
    Notenfeld,
    Gesamtnote,
    Notenplatzhalter,
    SymbolMuendlich,
    NotenfeldWiBBoZ,
  },
  data() {
    return {
      jahresnote: 0,
      gesamtnote: 0,
      info: "",
    };
  },
  watch: {
    gesamtnote(newValue, oldValue) {
      this.$emit("getFachNote", "gpgNote", newValue);
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
    <div class="fach">GPG</div>
    <div class="notenfelderRow">
      <NotenfeldWiBBoZ id="G1" nextId="N1" typ="jahresnote" @getNote="handleGetNote"></NotenfeldWiBBoZ>     
      <SymbolMuendlich :icon="info"></SymbolMuendlich>
      <Notenplatzhalter width="165px;"></Notenplatzhalter>
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
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.fach h1,
.fach h3 {
  text-align: center;
}
</style>
