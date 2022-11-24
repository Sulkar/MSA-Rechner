<script>
import Notenfeld from "./Notenfeld.vue";

import Notenplatzhalter from "./Notenplatzhalter.vue";
import Gesamtnote from "./Gesamtnote.vue";
import InfoIcon from "./SymbolMuendlich.vue";
import NotenfeldProjekt from "./NotenfeldProjekt.vue";
import NotenfeldWiBBoZ from "./NotenfeldWiBBoZ.vue";

export default {
  components: {
    Notenfeld,
    Gesamtnote,
    Notenplatzhalter,
    InfoIcon,
    NotenfeldProjekt,
    NotenfeldWiBBoZ,
  },
  data() {
    return {
      wibNote: 0,
      bozNote: 0,
      projektNote: 0,
      gesamtnote: 0,
      infoWib: "",
      infoBoZ: "",
    };
  },
  watch: {
    wibNote(newValue) {
      this.$emit("getFachNote", "wibNote", newValue);
    },
    bozNote(newValue) {
      this.$emit("getFachNote", "bozNote", newValue);
    },
    projektNote(newValue) {
      this.$emit("getFachNote", "projektNote", newValue);
    },
    gesamtnote(newValue) {
      this.$emit("getFachNote", "projektGesamtnote", newValue);
    },
  },
  methods: {
    sindNotenVollstaendig() {
      let fachArray = ["wibNote", "bozNote", "projektNote"];
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
      this.updateInfoFaecher();
      if (this.sindNotenVollstaendig()) {
        this.calculateGesamtnote();
      } else {
        this.gesamtnote = 0;
      }
    },
    calculateGesamtnote() {
      this.gesamtnote = Math.round((this.wibNote + this.bozNote + this.projektNote * 2) / 4);
    },
    updateInfoFaecher() {
      //Mündliche Prüfung? Wenn Jahresnote 5 oder 6 ist
      if (this.wibNote >= 5) {
        this.infoWib = "*";
      } else {
        this.infoWib = "";
      }

      if (this.bozNote >= 5) {
        this.infoBoZ = "*";
      } else {
        this.infoBoZ = "";
      }
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="projektColumn">
      <div class="fach" style="margin-top: -35px">WiB</div>
      <div class="divider"></div>
      <div class="fach" style="margin-top: 40px">T/WiK/ES</div>
    </div>
    <div class="notenfelderRow">
      <div class="projektColumn">
        <NotenfeldWiBBoZ id="P1" nextId="P2" typ="wibNote" @getNote="handleGetNote"></NotenfeldWiBBoZ>
        <div class="divider"></div>
        <NotenfeldWiBBoZ id="P2" nextId="R1" typ="bozNote" @getNote="handleGetNote"></NotenfeldWiBBoZ>
      </div>

      <div class="projektColumn">
        <InfoIcon :icon="infoWib"></InfoIcon>
        <div class="divider"></div>
        <InfoIcon :icon="infoBoZ"></InfoIcon>
      </div>

      <Notenplatzhalter width="5px;"></Notenplatzhalter>

      <div class="projektColumn" style="width: 60px; align-items: center;">
        <span style="text-align: center">Projekt</span>
        
        <NotenfeldProjekt id="P3" nextId="D1" typ="projektNote" @getNote="handleGetNote"></NotenfeldProjekt>
      </div>

      <div class="projektColumn"></div>
      <div class="projektColumn">
        <Gesamtnote :disableColor="true" id="P4" :note="gesamtnote"></Gesamtnote>
      </div>

      <Notenplatzhalter width="50px;"></Notenplatzhalter>
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
