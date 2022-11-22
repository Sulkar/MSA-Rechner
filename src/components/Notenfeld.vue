<script>
import globalFunctions from "./mixins/globalFunctions";

export default {
  props: { typ: String, nextId: String },
  mixins: [globalFunctions],
  methods: {
    updateNote(event) {
      if (isNaN(event.target.value)) {
        event.target.value = "";
      } else if (event.target.value.length > 1) {
        event.target.value = event.target.value[0];
      } else {
        const currentValue = event.target.value;
        this.$emit("getNote", this.typ, currentValue);
        this.focusNextNotenfeld();
      }
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
  text-align: center;
  font-size: large;
}
div {
  display: flex;
  margin-left: 20px;
}
</style>
