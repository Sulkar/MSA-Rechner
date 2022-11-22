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
  <span @click="openModal()"> Infos <IconInfo style="margin-left: 5px"></IconInfo> </span>

  <Teleport to="body">
    <InfoModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Infos MSA-Rechner</h3>
      </template>
      <template #body>
        <ul style="padding-left: 15px">
          <li><IconMuendlich></IconMuendlich> mündliche Prüfung möglich.</li>
          <li>Informationn zur Berechnung: <a target="_blank" href="https://www.gesetze-bayern.de/Content/Document/BayMSO-23">MSO $23</a>.</li>
        </ul>
      </template>
      <template #footer> </template>
    </InfoModal>
  </Teleport>
</template>

<style scoped>
span {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
