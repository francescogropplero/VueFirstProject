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
        :src="src1"
        title="Engineering & Technology"
        descr="Develop the products and tools of the future for billions of users."
      />
      <teams-card
        class="my-4 w-1/2"
        :src="src2"
        title="Sales, Service & Support"
        descr="Equip businesses with the right tools to help them grow."
      />
      <teams-card
        class="my-4 w-1/2"
        :src="src3"
        title="Marketing & Communications"
        descr="Connect users to the product magic."
      />
      <teams-card
        class="my-4 w-1/2"
        :src="src4"
        title="Design"
        descr="Create beautiful and intuitive experiences."
      />
      <teams-card
        class="my-4 w-1/2"
        :src="src5"
        title="Business Strategy"
        descr="Deliver the analysis and insights we use to innovate."
      />
      <teams-card
        class="my-4 w-1/2"
        :src="src6"
        title="Finance"
        descr="Design and manage solutions to support our global business."
      />
    </div>
  </div>
  <the-footer />
</template>

<script lang="ts">
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
import TeamsCard from "@/components/Teams/TeamsCard.vue";
import TheFooter from "@/components/Shared/TheFooter.vue";
export default {
  data() {
    return {
      src1: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      src2: "https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80",
      src3: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      src4: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80",
      src5: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      src6: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    };
  },
  components: {
    HeaderContainer,
    TeamsCard,
    TheFooter,
  },
};
</script>
