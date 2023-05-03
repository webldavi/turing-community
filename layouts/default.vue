<template>
    <div class="flex flex-col" :class="['w-full', 'min-h-screen', 'gap-12', {'bg-blue-dark': themeStore.isDark}]">
        <Nav/>
        <slot/>
    </div>
</template>

<script setup>
import { useTheme } from '~/stores/store';
const themeStore = useTheme()

</script>