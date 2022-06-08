<template>
  <div>Voorbeeld tekst</div>
  <router-link class="pl-4 text-blue-500" :to="'/voorbeeld'">Voorbeeld link</router-link>
  <Hero />
  <ImageHeader />
  <StoreTest />
</template>

<script setup lang="ts">
import ImageHeader from "./components/ImageHeader.vue";
import Hero from "./components/Hero.vue";
import StoreTest from "./components/StoreTest.vue";
</script>
<style scoped></style>
