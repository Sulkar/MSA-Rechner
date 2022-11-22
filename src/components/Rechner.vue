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
      religion: 0,
      gpg: 0,
      nut: 0,
      informatik: 0,
      gesamtnote: 0,
      info: "",
    };
  },
  methods: {
    handleGetGesamtNote(fach, note) {
      this[fach] = parseInt(note);
      this.checkFachnoten();
    },
    checkFachnoten() {
      let fachArray = ["deutsch", "mathematik", "englisch", "projekt", "religion", "gpg", "nut", "informatik"];
      let count5 = 0;
      let count6 = 0;
      fachArray.forEach((fach) => {
        if (this[fach] == 5) {
          count5++;
        } else if (this[fach] == 6) {
          count6++;
        }
      });
      if (count5 > 1 || count6 > 0) {
        this.info = "Du hast den MSA nicht bestanden 😭";
      } else {
        this.info = "Du hast den MSA bestanden 😁";
      }
    },
  },
};
</script>

<template>
  <Notenheader></Notenheader>
  <FachDeutsch @getFachNote="handleGetGesamtNote"></FachDeutsch>
  <FachMathematik @getFachNote="handleGetGesamtNote"></FachMathematik>
  <FachEnglisch @getFachNote="handleGetGesamtNote"></FachEnglisch>
  <FachProjekt @getFachNote="handleGetGesamtNote"></FachProjekt>
  <FachReligion @getFachNote="handleGetGesamtNote"></FachReligion>
  <FachGPG @getFachNote="handleGetGesamtNote"></FachGPG>
  <FachNuT @getFachNote="handleGetGesamtNote"></FachNuT>
  <FachInformatik @getFachNote="handleGetGesamtNote"></FachInformatik>
  <div class="trenner"></div>
  <div>
    <div style="text-align: center; font-size: 1.2em">{{ info }}</div>
    <div style="text-align: center"><ButtonInfo></ButtonInfo></div>
  </div>
</template>

<style>
.trenner {
  margin: 10px 0 10px 0;
  border: 2px solid #008036;
}
</style>
