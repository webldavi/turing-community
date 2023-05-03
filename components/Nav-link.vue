<template>
  <NuxtLink class="p-2 text-xl cursor-pointer text-white-100" :href="props.to">
    <slot />
  </NuxtLink>
</template> 
<script setup>
const props = defineProps({
  to: String,
});
</script>
