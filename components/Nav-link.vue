<template>
  <NuxtLink class="nuxt-link" :href="props.to">
    <slot />
  </NuxtLink>
</template> 
<script setup>
const props = defineProps({
  to: String,
});
</script>
<style scoped>
.nuxt-link{
 @apply p-2 cursor-pointer text-white-100 text-lg
}
</style>
