<template>
  <article class="article" :class="computedTheme">
    <section class="section_1">
      <img src="../assets/images/TuringLogo.png" alt="Turing Logo" />
      <div>
        <h1 class="text-border">Contribua!</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
          <span>Mande seu Pull Request!</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>

          <span>Ajude os membros respondendo perguntas</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
            />
          </svg>
          <span
            >Contruibua financeiramente nos enviando um pix para manter a
            comunidade</span
          >
        </div>
        <ul>
          <li>Chave pix: community.turing@gmail.com</li>
          <li>Nome de: Luís Daví Rebouças</li>
          <li>Oganização: NU-PAGAMENTOS</li>
        </ul>
      </div>
    </section>
    <section class="section_2">
      <span class="text-border">Sobre Nós</span>
      <div>
        <Link-card
          title="Instagram"
          to="https://www.instagram.com/turingcommunity/"
        >
          Nos siga no instagram para ficar por dentro das novidades da
          comunidade
        </Link-card>
        <Link-card title="Discord" to="https://discord.com/invite/Tp4p3n7N69">
          Entre em nosso servidor para aproveitar tudo que oferecemos
        </Link-card>
        <Link-card
          title="Youtube"
          to="https://www.youtube.com/channel/UClUbjLPoGgk-CGfm9cpdHhA"
        >
          Se inscreva em nosso canal para ter acesso a todos os nossos cursos
        </Link-card>
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
</script>

<style scoped>
.article {
  @apply w-full min-h-screen px-8 sm:px-16 flex flex-col items-center gap-16 pb-16;
}
.section_1 {
  @apply h-[70vh] flex flex-col items-center justify-center lg:flex-row-reverse w-max h-max gap-4 py-16;
}
.section_1 > img {
  @apply w-full sm:w-96 h-96;
}
.section_1 > div {
  @apply flex flex-col h-max gap-6 w-96;
}
.section_1 > div > h1 {
  @apply text-2xl sm:text-4xl text-blue-secoundary;
}
.section_1 > div > div {
  @apply flex flex-row gap-1;
}
.section_1 > div > div > span {
  @apply text-xl flex-1;
}
.section_1 > ul {
  @apply text-lg pl-10 list-disc;
}

.section_2 {
  @apply flex flex-col gap-16 items-center;
}
.section_2 > span {
  @apply text-2xl sm:text-4xl text-blue-secoundary;
}
.section_2 > div {
  @apply w-full h-full flex flex-row flex-wrap justify-center gap-4 lg:gap-16;
}
</style>
