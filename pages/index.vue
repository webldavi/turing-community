<template>
  <article class="article" :class="computedTheme">
    <section class="section_1">
      <img
        src="../assets/images/TuringLogo.png"
        alt="Turing Logo"
        class="image"
      />
      <div class="text-welcome">
        <span>Bem vindo á</span>
        <h1>Turing Community</h1>
        <p>
          Uma comunidade projetada para ser inclusiva e acessível a todos os
          níveis de habilidade.
        </p>
      </div>
    </section>
    <section class="section_2">
      <span class="">Sobre Nós</span>

      <div>
        <AboutCard title="Missão">
          Ser uma comunidade acessivel, segura e inclusiva, para todos que
          desejam obter conhecimento
        </AboutCard>
        <AboutCard title="Valores">
          A Turing Community valoriza a colaboração, o respeito, a inclusão e o
          conhecimento.
        </AboutCard>
        <AboutCard title="Comunidade">
          Ser uma comunidade acessivel, segura e inclusiva, para todos que
          desejam obter conhecimento
        </AboutCard>
      </div>
    </section>
  </article>
</template>
<script setup>
import { useTheme } from "~/stores/store";
const themeStore = useTheme();

const computedTheme = computed(() => {
  return {
    "text-black-50": !themeStore.isDark,
    "text-white-80": themeStore.isDark,
  };
});

definePageMeta({
  layout: "default",
});
</script>
<style scoped>
.article {
  @apply w-full min-h-screen px-8 sm:px-16 flex flex-col items-center justify-center gap-16 pb-16;
}

.section_1 {
  @apply h-[70vh] flex flex-col items-center justify-center lg:flex-row-reverse w-max h-max gap-4;
}
.image {
  @apply w-full sm:w-96 h-96;
}
.text-welcome {
  @apply flex flex-col h-max w-96;
}
.text-welcome > span {
  @apply text-xl sm:text-3xl;
}
.text-welcome > h1 {
  @apply text-2xl sm:text-4xl text-blue-secoundary text-border;
}
.text-welcome > p {
  @apply text-lg sm:text-xl break-words;
}

.section_2 {
  @apply flex flex-col gap-16 items-center;
}

.section_2 > span {
  @apply text-2xl sm:text-4xl text-blue-secoundary text-border;
}
.section_2 > div {
  @apply w-full h-full flex flex-col md:flex-row gap-4 lg:gap-16;
}
.text-border {
  text-shadow: 2px 2px 0px #000;
}
</style>
