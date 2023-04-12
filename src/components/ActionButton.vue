<!-- eslint-disable prettier/prettier -->
<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text:{
      type: String,
      required: true,
    },
    type:{
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      }
    }
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  align-items: center;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 17px;
  font-weight: 500;
  transition: 0.5s;
}

.primary {
  @apply hover:shadow-blue;
  background: #00b4d8;
  border: 2px solid #f2cc8f;
  color: aliceblue;
}

.secondary {
  @apply bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white;
}
</style>
