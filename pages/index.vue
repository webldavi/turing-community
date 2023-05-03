<template>
  <main
    class="w-full min-h-screen px-8 sm:px-16 flex flex-col items-center gap-16 righteous pb-16"
    :class="computedTheme"
  >
    <section
      class="h-[70vh] flex flex-col items-center justify-center lg:flex-row-reverse w-max h-max gap-4"
    >
      <img
        src="../assets/images/TuringLogo.png"
        alt="Turing Logo"
        class="w-full sm:w-96 h-96"
      />
      <div class="flex flex-col h-max w-96">
        <span class="text-xl sm:text-3xl">Bem vindo á</span>
        <h1 class="text-2xl sm:text-4xl text-blue-secoundary text-border">
          Turing Community
        </h1>
        <p class="text-lg sm:text-xl break-words">
          Uma comunidade projetada para ser inclusiva e acessível a todos os
          níveis de habilidade.
        </p>
      </div>
    </section>
    <section class="flex flex-col gap-16 items-center">
      <span class="text-2xl sm:text-4xl text-blue-secoundary text-border"
        >Sobre Nós</span
      >

      <div class="w-full h-full flex flex-col md:flex-row gap-4 lg:gap-16">
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
  </main>
</template>
<script setup>
import { useTheme } from "~/stores/store";
const themeStore = useTheme();

const computedTheme = computed(()=>{
  return {
      'text-black-50': !themeStore.isDark,
      'text-white-80': themeStore.isDark,
    }
})

definePageMeta({
  layout: "default",
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

.righteous {
  font-family: "Righteous", cursive;
}
.text-border {
  text-shadow: 2px 2px 0px #000;
}
</style>
