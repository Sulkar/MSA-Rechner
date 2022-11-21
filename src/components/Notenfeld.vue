<script>
import globalFunctions from "./mixins/globalFunctions";

export default {
  props: { typ: String, nextId: String },
  mixins: [globalFunctions],
  methods: {
    updateNote(event) {
      const currentValue = event.target.value;
      this.$emit("getNote", this.typ, currentValue);
      this.focusNextNotenfeld();
    },
    focusNextNotenfeld() {
      if (this.nextId != null && this.nextId != "") {
        const newNotenfeld = document.querySelector("#" + this.nextId + " input");
        newNotenfeld.focus();
        newNotenfeld.select();
      }
    },
    setFocus() {
      let currentElementId = this.$el.id;
      document.querySelector("#" + currentElementId + " input").select();
    },
  },
};
</script>

<template>
  <div>
    <input placeholder="-" @input="updateNote" @click="setFocus" />
  </div>
</template>

<style scoped>
input {
  width: 30px;
  height: 24px;
  text-align: center;
}
div {
  display: flex;
  margin-left: 20px;
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
