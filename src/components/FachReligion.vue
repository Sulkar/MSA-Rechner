<script setup>
import Notenfeld from "./Notenfeld.vue";
import { store } from "./store.js";

defineProps({});

let zeugnisNote;
let pruefungsNote;

function berechneGesamtnote() {
  //..
}
function handleGetNote(typ, note) {
  if(typ == "Zeugnis"){
    zeugnisNote = note;
  }else if(typ == "Prüfung"){
    pruefungsNote = note;
  }
  
  console.log(typ);
  console.log(note);
}
</script>

<template>
  <div class="row">
    <div class="fach">Religion</div>

    <Notenfeld id="R1" nextId="R2" typ="Zeugnis" @getNote="handleGetNote"></Notenfeld>
    <Notenfeld id="R2" nextId="M1" typ="Prüfung" @getNote="handleGetNote"></Notenfeld>
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
