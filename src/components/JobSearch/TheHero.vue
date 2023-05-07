<template>
  <main class="flex h-screen flex-col">
    <section class="pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>

        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>

        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            class="img h-96 w-96 object-cover"
            :src="image.src"
            :class="image.action"
            alt=""
            crossorigin="anonymous"
          />
        </div>

        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>

    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-brand-grigio"
        >
          <img :src="img" class="object-contain" />
          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>
            <p class="mt-3 text-sm">
              {{ description }}
            </p>
          </div>
          <router-link
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-cyan"
            >Show jobs</router-link
          >
        </router-link>
      </template>
    </spot-light>
  </main>
</template>

<script lang="ts" setup>
import TheHeadline from "./TheHeadline.vue";
import JobSearchForm from "./JobSearchForm.vue";
import SpotLight from "./SpotLight.vue";

import { ref, onMounted } from "vue";

const interval = ref<ReturnType<typeof setInterval>>();

const images = [
  {
    action: "Build",
    src: "https://images.unsplash.com/photo-1553406830-f6e44ac97624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  },
  {
    action: "Create",
    src: "https://images.unsplash.com/photo-1614036742146-6e9bb0a163d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80",
  },
  {
    action: "Design",
    src: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80",
  },
  {
    action: "Code",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
];

const image = ref(images[0]);

const changeImage = () => {
  interval.value = setInterval(() => {
    image.value = nextImageInList(images, image.value);
  }, 3000);
};

const nextImageInList = (list, currentItem) => {
  const currentIndex = list.findIndex(
    (item) => item.action === currentItem.action
  );
  const nextIndex = (currentIndex + 1) % list.length;
  return list[nextIndex];
};

onMounted(changeImage);
</script>

<style scoped>
.img {
  border-radius: 50%;
}
</style>
