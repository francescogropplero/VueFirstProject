<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-grigio-2"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="casaInput relative flex h-full flex-1 items-center pr-3">
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <text-input id="role" placeholder="Software Engineer" v-model="role" />
      </div>

      <span
        class="flex h-full items-center border-l border-r border-brand-grigio-2 bg-brand-grigio px-3"
        >in</span
      >
    
      <div class="casaInput relative flex h-full flex-1 items-center pl-3">
        <label for="location" class="absolute left-0 -top-10">Where?</label>
        <text-input id="location" placeholder="Los Angeles" v-model="location" />
      </div>
    </div>

    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-5xl"
      style="
        height: 100%;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      "
    />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "../Shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: { ActionButton, TextInput },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    updateRole(payload) {
      this.role = payload;
    },
    updateLocation(payload) {
      this.location = payload;
    },
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: { role: this.role, location: this.location },
      });
    },
  },
};
</script>
