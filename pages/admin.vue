<template>
  <article class="main righteous" :class="computedTheme">
    <section class="section">
      <div class="panel">
        <h1 class="text-3xl">Login</h1>
        <img src="../assets/images/TuringLogo.png" class="w-72 h-72" alt="" />
        <div class="flex flex-col gap-4">
          <input placeholder="Seu email" type="email" class="input" />
          <input placeholder="Sua Senha" type="password" class="input" />
        </div>
        <button class="button">Login</button>
      </div>
    </section>
  </article>
</template>
<script setup>
import { useTheme } from "~/stores/store";
definePageMeta({
  middleware: "admin",
});

const themeStore = useTheme();

const computedTheme = computed(() => {
  return {
    dark: !themeStore.isDark,
    light: themeStore.isDark,
  };
});
</script>
<style scoped>
.article {
  @apply w-full min-h-screen px-8 sm:px-16 flex flex-col items-center gap-16;
}

.section {
  @apply w-full h-full flex justify-center;
}

.panel {
  @apply w-max h-max flex flex-col items-center justify-between p-6 gap-16 border-2 border-blue-default rounded-lg shadow-lg shadow-cyan-500/50 p-2;
}
.input {
  @apply w-96 text-sm h-12 bg-transparent border-2 outline-none border-blue-default rounded-lg p-2;
}
.button {
  @apply w-full py-4 rounded-md bg-blue-default shadow-lg shadow-cyan-500/50 hover:bg-blue-default/50 hover:shadow-cyan-500/25 transition-all;
}

.dark {
  @apply text-black-50;
}
.light {
  @apply text-white-80;
}
</style>
