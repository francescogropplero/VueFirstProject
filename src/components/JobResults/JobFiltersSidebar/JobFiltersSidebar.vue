<template>
  <div
    class="border-brand-gray-1 flex w-96 flex-col border-r border-solid bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="mt-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <collapsible-accordion header="Degree"/>

      <collapsible-accordion header="Job types">
        <p>c'est nul</p>
      </collapsible-accordion>

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
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebar",
  components: { ActionButton, CollapsibleAccordion },
};
</script>
