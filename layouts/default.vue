<template>
    <div class="flex flex-col transition-all" :class="['w-full', 'min-h-screen', 'gap-12', {'bg-blue-dark': themeStore.isDark}]">
        <Nav/>
        <slot/>
    </div>
</template>

<script setup>
import { useTheme } from '~/stores/store';
const themeStore = useTheme()
// useHead({
//   title: 'Turing Community | Portal',
// })

onMounted(()=>{
    themeStore.getThemeForLocalStorage(JSON.parse(localStorage.getItem('theme')))
})

</script>