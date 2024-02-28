<template>
  <div class="icon">
    <nuxt-icon :name="name" filled /> 
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: null
  }
})
</script>

<style lang="scss" scoped>
.icon {
  @apply flex items-center justify-center fill-current;

  &:deep(svg) {
    @apply mb-0 w-auto;
  }
}
</style>