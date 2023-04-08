<template>
  <button :class="{ primary: primary }">{{ text }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
  data(){
    return{
      primary: true,
    }
  }
};
</script>

<style scoped>
button {
  align-items: center;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 18px;
  font-weight: 500;
  transition: 0.5s;
}

.primary {
  @apply hover:shadow-blue;
  background: #00b4d8;
  border: 2px solid #f2cc8f;
  color: aliceblue;
}

.secondary {

}
</style>
