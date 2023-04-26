<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2">
            <input type="checkbox" id="VueTube" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="Between Vue" class="mr-3" />
            <label for="Between Vue">Between Vue</label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="Et Vue Brute" class="mr-3" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="Vue and a Half Man" class="mr-3" />
            <label for="Vue and a Half Man">Vue and a Half Man</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: { CollapsibleAccordion },
};
</script>
