<script>
import FachDeutsch from "./FachDeutsch.vue";
import FachReligion from "./FachReligion.vue";
import FachMathematik from "./FachMathematik.vue";
import FachProjekt from "./FachProjekt.vue";
import FachEnglisch from "./FachEnglisch.vue";
import FachGPG from "./FachGPG.vue";
import FachNuT from "./FachNuT.vue";
import FachInformatik from "./FachInformatik.vue";
import Notenheader from "./Notenheader.vue";
import IconMuendlich from "./icons/IconMuendlich.vue";
import ButtonInfo from "./ButtonInfo.vue";

export default {
  components: {
    FachDeutsch,
    FachReligion,
    FachMathematik,
    FachProjekt,
    FachEnglisch,
    FachGPG,
    FachNuT,
    FachInformatik,
    IconMuendlich,
    ButtonInfo,
    Notenheader,
  },
  mounted() {
    document.querySelector("#D1 input").focus();
  },
  data() {
    return {
      deutschGesamtnote: 0,
      mathematikGesamtnote: 0,
      englischGesamtnote: 0,
      projektGesamtnote: 0,
      projektNote: 0,
      wibNote: 0,
      bozNote: 0,
      religionNote: 0,
      gpgNote: 0,
      nutNote: 0,
      informatikNote: 0,
      info: "Unvollständige Noten ...",
      fachArray: ["deutschGesamtnote", "mathematikGesamtnote", "englischGesamtnote", "wibNote", "bozNote", "religionNote", "gpgNote", "nutNote", "informatikNote"],
    };
  },
  methods: {
    sindNotenVollstaendig() {
      let tempFachArray = Array.from(this.fachArray);
      tempFachArray.push("projektNote");
      let notenCounter = 0;
      tempFachArray.forEach((fach) => {
        let tempNote = this[fach];
        if (tempNote != 0 && !isNaN(tempNote)) {
          notenCounter++;
        }
      });
      if (notenCounter == tempFachArray.length) {
        return true;
      } else {
        return false;
      }
    },
    handleGetNote(fach, note) {
      this[fach] = parseInt(note);
      this.checkFachnoten();
    },
    checkFachnoten() {
      let tempFachArray = Array.from(this.fachArray);
      let count5 = 0;
      let count6 = 0;
      tempFachArray.forEach((fach) => {
        if (this[fach] == 5) {
          count5++;
        } else if (this[fach] == 6) {
          count6++;
        }
      });
      if (this.sindNotenVollstaendig()) {
        if (count5 > 1 || count6 > 0 || this.projektNote == 6) {
          this.info = "Du hast den MSA nicht bestanden 😭*";
        } else {
          this.info = "Du hast den MSA bestanden 😁";
        }
      } else {
        this.info = "Unvollständige Noten ...";
      }
    },
  },
};
</script>

<template>
  <Notenheader></Notenheader>
  <FachDeutsch @getFachNote="handleGetNote"></FachDeutsch>
  <FachMathematik @getFachNote="handleGetNote"></FachMathematik>
  <FachEnglisch @getFachNote="handleGetNote"></FachEnglisch>
  <FachProjekt @getFachNote="handleGetNote"></FachProjekt>
  <FachReligion @getFachNote="handleGetNote"></FachReligion>
  <FachGPG @getFachNote="handleGetNote"></FachGPG>
  <FachNuT @getFachNote="handleGetNote"></FachNuT>
  <FachInformatik @getFachNote="handleGetNote"></FachInformatik>
  <div class="trenner"></div>
  <div>
    <div style="text-align: center">{{ info }}</div>
    <div style="text-align: center"><ButtonInfo></ButtonInfo></div>
  </div>
</template>

<style>
.trenner {
  margin: 10px 0 10px 0;
  border: 2px solid #008036;
  background-color: #008036;
}
</style>
