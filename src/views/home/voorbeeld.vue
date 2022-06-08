<template>
  <div class="text-base">Wat tekst</div>
  <img
    loading="lazy"
    class="md:pb-24 pb-4 mx-auto md:w-5/12"
    :src="France"
    alt="Kirk Lin"
    title="hi there"
  /> 
</template>

<script setup lang="ts">

import france from "~/assets/frankrijk.jpg";
const France = france;
// import ImageHeader from "./components/ImageHeader.vue";
// import Hero from "./components/Hero.vue";
// import StoreTest from "./components/StoreTest.vue";
</script>
<style scoped></style>
