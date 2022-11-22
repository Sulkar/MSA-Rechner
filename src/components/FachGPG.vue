<script>
import Notenfeld from "./Notenfeld.vue";
import Notenplatzhalter from "./Notenplatzhalter.vue";
import Gesamtnote from "./Gesamtnote.vue";
import InfoIcon from "./InfoIcon.vue";

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
    };
  },
  watch: {
    gesamtnote(newValue, oldValue) {
      this.$emit("getFachNote", "gpg", newValue);
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
      <Notenfeld id="G1" nextId="N1" typ="jahresnote" @getNote="handleGetNote"></Notenfeld>
      <Notenplatzhalter width="100px;"></Notenplatzhalter>

      <Gesamtnote id="G2" :note="gesamtnote"></Gesamtnote>
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
