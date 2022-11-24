<script>
import Notenfeld from "./Notenfeld.vue";
export default {
  extends: Notenfeld,
  data: {
    tempNote: 0,
  },
  methods: {
    updateNote(event) {
      if (isNaN(event.target.value)) {
        event.target.value = "";
      } else if (event.target.value.length > 1) {
        event.target.value = event.target.value[0];
      } else {
        const currentValue = event.target.value;
        this.tempNote = currentValue;
        this.$emit("getNote", this.typ, currentValue);
        this.focusNextNotenfeld();
      }
    },
    getBackgroundColor() {
      if (this.tempNote == 0 || isNaN(this.tempNote)) {
        return "neutral";
      }
      if (this.tempNote == 6) {
        return "bad";
      } else {
        return "good";
      }
    },
  },
};
</script>

<template>
  <div>
    <input type="number" :class="getBackgroundColor()" placeholder="-" @input="updateNote" @click="setFocus" />
  </div>
</template>

<style scoped>
.good {
  color:white;
  background-color: #80D59A;
  
}
.bad {
  color:white;
  background-color: lightcoral;
  
}
input {
  width: 30px;
  text-align: center;
  font-size: large;
}
div {
  display: flex;
  
}
</style>
