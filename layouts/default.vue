<template>
    <div class="flex overflow-hidden flex-col text-xl transition-all" :class="['w-full', 'min-h-screen', 'gap-12', {'bg-blue-dark': themeStore.isDark}]">
        <Drawer v-if="drawerStore.actived"/>
        <Nav/>
        <slot/>
    </div>
</template>

<script setup>
import { useTheme, useDrawer } from '~/stores/store';
const themeStore = useTheme()
const drawerStore = useDrawer()

onMounted(()=>{
    themeStore.getThemeForLocalStorage(JSON.parse(localStorage.getItem('theme')))
})

</script>