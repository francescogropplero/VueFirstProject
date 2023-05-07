<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light">
        That's literally awesome to work here. Why don't you join?
      </h2>
    </template>
  </header-container>
  <div class="flex justify-center">
    <div class="flex max-w-5xl flex-wrap justify-center">
      <teams-card
        class="my-4 w-1/2"
        src="https://images.unsplash.com/photo-1596496181848-3091d4878b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Engineering & Technology"
        descr="Develop the products and tools of the future for billions of users."
      /><teams-card
        class="my-4 w-1/2"
        src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80"
        title="Sales, Service & Support"
        descr="Equip businesses with the right tools to help them grow."
      />
      <teams-card
        class="my-4 w-1/2"
        src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Marketing & Communications"
        descr="Connect users to the product magic."
      />
      <teams-card
        class="my-4 w-1/2"
        src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80"
        title="Design"
        descr="Create beautiful and intuitive experiences."
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
import TeamsCard from "@/components/Teams/TeamsCard.vue";
</script>
