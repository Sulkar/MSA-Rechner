<script setup>
import { store } from "./store.js";
const emit = defineEmits(["getNote"]);

const props = defineProps({
  typ: {
    type: String,
  },
  nextId: {
    type: String,
  },
});

function updateNote(event) {
  const currentValue = event.target.value;
  emit("getNote", props.typ, currentValue);
  focusNextNotenfeld();
}

function focusNextNotenfeld() {
  const newNotenfeld = document.querySelector("#" + props.nextId + " input");
  newNotenfeld.focus();
  newNotenfeld.select();
}
</script>

<template>
  <div class="row">
    <input :placeholder="typ" @input="updateNote" />
  </div>
</template>

<style scoped>
.row {
  display: flex;
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

@media (min-width: 1024px) {
  .fach h1,
  .fach h3 {
    text-align: left;
  }
}
</style>
