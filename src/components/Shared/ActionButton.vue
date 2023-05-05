<!-- eslint-disable prettier/prettier -->
<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "primary",
    validator(value: string) {
      return ["primary", "secondary"].includes(value);
    },
  },
});
const { type } = toRefs(props);
const buttonClass = computed(() => {
  return {
    [type.value]: true,
  };
});
</script>

<style scoped>
button {
  @apply rounded;
  align-items: center;
  padding: 0.5em;
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
