<template>
    <main :class="{ 'bg-blue-dark': themeStore.isDark }">
        <Drawer v-if="drawerStore.actived" />
        <Nav />
        <slot />
    </main>
</template>

<script setup>
import { useTheme, useDrawer } from "~/stores/store";
const themeStore = useTheme();
const drawerStore = useDrawer();

onMounted(() => {
    themeStore.getThemeForLocalStorage(JSON.parse(localStorage.getItem("theme")));
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

* {
    font-family: "Righteous", cursive;
}

.main {
    @apply flex overflow-hidden flex-col text-xl transition-all w-full min-h-screen gap-12;
}
</style>
