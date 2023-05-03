<template>
    <div class="w-52 h-52 flex items-center text-center flex-col gap-2 border border-blue-default rounded-xl p-2 border-blue-500 shadow-lg shadow-cyan-500/50">
        <span class="text-xl sm:text-2xl text-blue-secoundary text-border">{{ props.title }}</span>
        <p class="text-lg"><slot/></p>
    </div>
</template>

<script setup>
  import {useTheme} from '~/stores/store'
  const themeStore = useTheme()
const props = defineProps({
    title: String
})
</script>