<template>
  <main class="flex-auto bg-brand-grigio p-8">
    <ol>
      <job-listing />
      <job-listing />
      <job-listing />
    </ol>
  </main>
</template>

<script>
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: { JobListing },
};
</script>
