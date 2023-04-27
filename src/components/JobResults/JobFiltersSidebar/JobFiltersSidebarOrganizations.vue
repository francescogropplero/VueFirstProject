<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="h-8 w-1/2"
          >
            <input
              @change="selectOrganization"
              v-model="selectedOrganizations"
              :value="organization"
              :id="organization"
              class="mr-3"
              type="checkbox"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import { mapActions, mapState } from "pinia";
import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/stores/jobs";
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from "@/stores/user";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: { CollapsibleAccordion },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      this.$router.push({ name: "JobResults" });
    },
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },
};
</script>
