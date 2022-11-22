<script>
export default {
  props: {
    note: Number,
  },
  methods: {
    setNote() {
      if (this.note == 0) {
        return "";
      } else {
        return this.note;
      }
    },
    getBackgroundColor() {
      if (this.note < 5) {
        return "good";
      } else {
        return "bad";
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
