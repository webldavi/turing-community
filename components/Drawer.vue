<template>
  <div id="drawer" class="drawer">
    <button
      @click="themeStore.updateTheTheme()"
    >
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
      <span>Tema</span>
    </button>
    <Nav-link to="/">Inicio</Nav-link>
    <Nav-link to="/cursos">Cursos</Nav-link>
    <Nav-link to="/community">Comumidade</Nav-link>
  </div>
</template>
<script setup>
import { useTheme } from "~/stores/store";
const themeStore = useTheme();
</script>
<style scoped>
@keyframes drawer {
  0% {
    right: -100%;
  }
  100% {
    right: 0px;
  }
}

#drawer {
  animation: drawer 2s;
  right: 0px;
}
.drawer{
  @apply w-4/5 h-max transition-all flex flex-col items-center text-2xl py-2 gap-4 border-2 border-blue-800 bg-blue-default/75 backdrop-blur z-20 fixed top-1/3 rounded-l-[50px]
}
.drawer > button{
  @apply w-full h-max border-b-2 border-blue-800 flex flex-row gap-2 items-center justify-center text-white-100 py-4
}
</style>
