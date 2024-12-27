<script setup lang="ts">
import { ref, onMounted } from "vue";

let counter = ref(0);

onMounted(() => {
  console.log("Komponente wurde gemountet und ist sichtbar.");
});
</script>
<template>
  <div>
    <h1>hi</h1>
    <button @click="counter++">KLICK MICH</button>
    <p>{{ counter }}</p>
  </div>
</template>

<style scoped></style>
