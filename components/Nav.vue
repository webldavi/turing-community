<template>
  <nav class="nav">
    <div class="brand_name">
      <span>Turing</span>
      <span>Community</span>
    </div>
    <div class="theme_button">
      <button @click="themeStore.updateTheTheme()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
      <Nav-link to="/">Inicio</Nav-link>
      <Nav-link to="/cursos">Cursos</Nav-link>
      <Nav-link to="/community">Comumidade</Nav-link>
    </div>
    <button @click="drawerStore.updateDrawer()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </nav>
</template>

<script setup>
import { useTheme, useDrawer } from "~/stores/store";
const themeStore = useTheme();
const drawerStore = useDrawer();
</script>

<style scoped>
.nav {
  @apply w-full h-16 bg-blue-default px-8 sm:px-16 flex flex-row justify-between;
}
.nav > .brand_name {
  @apply flex justify-center items-center sm:gap-2 sm:flex-row flex-col h-full w-max text-white-100 text-xl sm:text-3xl;
}
.nav > .theme_button {
  @apply w-max hidden h-full md:flex items-center justify-center gap-5 lg:gap-16 text-white-100;
}
.nav > button {
  @apply md:hidden text-white-100;
}
</style>
