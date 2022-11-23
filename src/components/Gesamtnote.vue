<script>
export default {
  props: {
    note: Number,
    disableColor: Boolean,
  },
  methods: {
    setNote() {
      if (this.note == 0 || isNaN(this.note)) {
        return "";
      } else {
        return this.note;
      }
    },
    getBackgroundColor() {
      if (this.note == 0 || isNaN(this.note) || this.disableColor) {
        return "neutral";
      }
      if (this.note >= 5) {
        return "bad";
      } else {
        return "good";
      }
    },
  },
};
</script>

<template>
  <div><input :class="getBackgroundColor()" placeholder="" :value="setNote()" readonly /></div>
</template>

<style scoped>
input {
  width: 30px;
  background-color: lightgreen;
  color: white;
  text-align: center;
  font-size: large;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
}
.neutral {
  background-color: white;
  color: black;
}
.good {
  background-color: lightgreen;
}
.bad {
  background-color: lightcoral;
}
div {
  display: flex;
  margin-left: 20px;
}
</style>
