<template>
  <div class="border-b border-solid border-brand-grigio-2 py-5">
    <div
      role="button"
      @click="open"
      class="flex cursor-pointer flex-wrap items-center justify-between"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot>
        <p>Error..</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

defineProps({
  header: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() =>
  isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
);
</script>
