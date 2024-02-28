<template>
  <img class="block w-full h-full object-cover"
    :src="src"
    :alt="alt"
    width="auto"
    height="auto"
    loading="lazy"
  />
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String
})
</script>