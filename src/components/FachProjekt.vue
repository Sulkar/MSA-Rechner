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
      jahresnoteWiB: 0,
      jahresnoteBoz: 0,
      projektnote: 0,
      gesamtnote: 0,
      info: "",
    };
  },
  watch: {
    gesamtnote(newValue, oldValue) {
      this.$emit("getFachNote", "projekt", newValue);
    },
  },
  methods: {
    handleGetNote(typ, note) {
      this[typ] = parseInt(note);
      this.calculateGesamtnote();
    },
    calculateGesamtnote() {
      this.gesamtnote = Math.round((this.jahresnoteWiB + this.jahresnoteBoz + this.projektnote * 2) / 4);
      //Mündliche Prüfung? Wenn Jahresnote 5 oder 6 ist
      if (this.jahresnoteWiB >= 5 || this.jahresnoteBoz >= 5) {
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
    <div class="projektColumn">
      <div class="fach">WiB</div>
      <div class="divider"></div>
      <div class="fach">Technik</div>
    </div>
    <div class="notenfelderRow">
      <div class="projektColumn">
        <Notenfeld id="P1" nextId="P2" typ="jahresnoteWiB" @getNote="handleGetNote"></Notenfeld>
        <div class="divider"></div>
        <Notenfeld id="P2" nextId="P3" typ="jahresnoteBoz" @getNote="handleGetNote"></Notenfeld>
      </div>

      <div class="projektColumn" style="width: 65px; margin-right: -15px">
        <span style="position: absolute; margin-left: 20px">Projekt</span>
      </div>

      <div class="projektColumn">
        <Notenfeld id="P3" nextId="R1" typ="projektnote" @getNote="handleGetNote"></Notenfeld>
      </div>
      <div class="projektColumn">
        <Gesamtnote id="P4" :note="gesamtnote"></Gesamtnote>
      </div>
      <div class="projektColumn">
        <InfoIcon :icon="info"></InfoIcon>
      </div>

      <Notenplatzhalter width="15px;"></Notenplatzhalter>
    </div>
  </div>
</template>

<style scoped>
.projektColumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.divider {
  margin-bottom: 10px;
}
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
