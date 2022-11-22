<script>
import IconInfo from "./icons/IconInfo.vue";
import InfoModal from "./InfoModal.vue";
import IconMuendlich from "./icons/IconMuendlich.vue";

export default {
  components: {
    IconInfo,
    IconMuendlich,
    InfoModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    icon: String,
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<template>
  <span id="btnInfo" @click="openModal()"> Infos <IconInfo style="margin-left: 5px"></IconInfo> </span>

  <Teleport to="body">
    <InfoModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Info MSA-Rechner</h3>
      </template>
      <template #body>
        <p>Mit Hilfe des MSA-Rechners kannst du prüfen, ob du den Mittleren Schulabschluss bestanden hast.</p>
        <br />
        <ul style="padding-left: 15px">
          <li><IconMuendlich></IconMuendlich> mündliche Prüfung möglich.</li>
          <li><span style="font-weight: bold">T/WiK/ES</span> = Technik/Wirtschaft und Kommunikation/Ernährung und Soziales</li>
          <li>Weitere Informationn auf: <a target="_blank" href="https://www.unsere-schule.org">unsere-schule.org</a>.</li>
        </ul>
      </template>
      <template #footer> </template>
    </InfoModal>
  </Teleport>
</template>

<style scoped>
#btnInfo {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
