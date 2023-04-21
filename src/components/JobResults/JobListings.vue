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
import axios from "axios";

export default {
  name: "JobListings",

  components: { JobListing },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/jobs").then((response) => {
      this.jobs = response.data;
    });
  },
};
</script>
