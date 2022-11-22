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
  <div><input :class="getBackgroundColor()" placeholder="" :value="setNote()" disabled /></div>
</template>

<style scoped>
input {
  width: 30px;
  height: 24px;
  background-color: lightgreen;
  color: white;
  text-align: center;
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

</style>
