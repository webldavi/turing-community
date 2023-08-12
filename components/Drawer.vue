<template>
  <div id="drawer" class="drawer">
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
.drawer {
  @apply w-4/5 h-max transition-all flex flex-col items-center text-2xl py-2 gap-4 border-2 border-blue-800 bg-blue-default/75 backdrop-blur z-20 fixed top-1/3 rounded-l-[50px];
}
.drawer > button {
  @apply w-full h-max border-b-2 border-blue-800 flex flex-row gap-2 items-center justify-center text-white-100 py-4;
}
</style>
