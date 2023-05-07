<template>
  <div class="h-16 w-full border-b border-solid border-brand-panna bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="font-bold text-brand-verde">{{
            FILTERED_JOBS.length
          }}</span>
          jobs matched</span
        >
      </div>
      <div v-else>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>Find your next job at </span>
        <router-link
          :to="{ name: 'JobResults' }"
          class="h-full items-center text-brand-cyan"
          >Grop Careers</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useJobsStore } from "@/stores/jobs";

const route = useRoute();
const onJobResultsPage = computed(() => route.name === "JobResults");

const jobsStore = useJobsStore();
const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS);
</script>
