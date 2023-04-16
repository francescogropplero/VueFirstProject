<template>
  <div class="h-16 w-full border-b border-solid border-brand-panna bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="font-bold text-brand-verde">1653</span> jobs
          matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSubnav",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>

<style scoped></style>
