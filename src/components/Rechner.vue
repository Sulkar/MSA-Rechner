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
      deutsch: 0,
      mathematik: 0,
      englisch: 0,
      projekt: 0,
      projektnote: 0,
      wib: 0,
      boz: 0,
      religion: 0,
      gpg: 0,
      nut: 0,
      informatik: 0,
      gesamtnote: 0,
      info: "Unvollständige Noten ...",
      fachArray: ["deutsch", "mathematik", "englisch", "wib", "boz", "religion", "gpg", "nut", "informatik"],
    };
  },
  methods: {
    sindNotenVollstaendig() {
      let tempFachArray = this.fachArray;
      tempFachArray.push("projektnote");
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
      let tempFachArray = this.fachArray;
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
        if (count5 > 1 || count6 > 0 || this.projektnote == 6) {
          this.info = "Du hast den MSA nicht bestanden 😭";
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
