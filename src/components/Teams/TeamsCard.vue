<template>
  <div>
    <div class="mx-10 mt-10 flex max-w-md">
      <img :src="src" class="h-52 w-80 object-cover" />
      <div class="ml-3">
        <a href="#" class="text-lg text-brand-blue">{{ title }}</a>
        <p>{{ descr }}</p>
        <a href="#" class="text-brand-cyan">Learn more</a>
        <br />
        <a href="#" class="text-brand-cyan">See jobs</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    descr: String,
    src: String,
  },
};
</script>
