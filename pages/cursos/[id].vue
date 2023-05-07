<template>
  <article class="article" :class="computedTheme">
    <section class="section_1">
      <div class="aboutCourse">
        <button @click="navigateTo('/cursos')">
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span>Voltar</span>
        </button>
        <h1>{{ filtredCourse.title }}</h1>
        <div>
          <div class="countLesson">
            <div class="icon">
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
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <div class="icon-name">
              <span>Total de</span>
              <span class="text-lg">{{ filtredCourse.classqty }} Aulas</span>
            </div>
          </div>
          <div class="countHour">
            <div class="icon">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="icon-name">
              <span>Duração</span>
              <span class="text-lg">{{ filtredCourse.time }}h</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lessonList">
        <div v-for="(lesson, index) in filtredCourse.lessons" :key="index">
          <button
            :class="{ 'bg-green-400 text-green-900': lesson.checked }"
            @click="updateCheckButton(index)"
          >
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div>
            <span @click="updateCurrentLesson(index)">{{ lesson.title }}</span>
            <div class="flex flex-row gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ lesson.time }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section_2" ref="iframeUpdate">
      <VideoPlayer :source="filtredCourse.lessons[selectedLesson].link" />
      <div class="aboutLesson">
        <h1>
          {{ filtredCourse.lessons[selectedLesson].title }}
        </h1>
        <div>
          <div class="icon">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="icon-name">
            <span class="text-sm">Duração</span>
            <span class="text-lg">{{
              filtredCourse.lessons[selectedLesson].time
            }}</span>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<script setup>
import { useTheme, useCourse } from "~/stores/store";

const courseStore = useCourse();
const filtredCourse = ref(
  courseStore.courseList.filter(
    (c) => c._id == JSON.parse(useRoute().params.id)
  )[0]
);
const selectedLesson = ref(0);

function updateCurrentLesson(index) {
  selectedLesson.value = index;
}

function updateCheckButton(index) {
  filtredCourse.value.lessons[index].checked =
    !filtredCourse.value.lessons[index].checked;
  localStorage.setItem(
    `${filtredCourse.value._id}`,
    JSON.stringify(filtredCourse.value.lessons)
  );
}
onMounted(() => {
  filtredCourse.value.lessons =
    JSON.parse(localStorage.getItem(`${filtredCourse.value._id}`)) ||
    filtredCourse.value.lessons;
});
const themeStore = useTheme();
const computedTheme = computed(() => {
  return {
    "text-black-50": !themeStore.isDark,
    "text-white-80": themeStore.isDark,
  };
});
</script>

<style>
.article {
  @apply w-full min-h-screen px-8 sm:px-16 flex flex-col-reverse lg:flex-row justify-center gap-16 pb-16;
}
.section_1 {
  @apply h-max w-full lg:w-96 flex flex-col gap-8;
}
.section_1 > .aboutCourse {
  @apply w-full h-max flex flex-col gap-2 rounded-lg border-2 border-gray-400 py-2 px-4;
}
.section_1 > .aboutCourse > button {
  @apply flex flex-row gap-1 w-max;
}
.section_1 > .aboutCourse > span {
  @apply text-lg;
}
.section_1 > .aboutCourse > div {
  @apply w-full flex flex-row justify-between;
}
.section_1 > .aboutCourse > div > .countLesson {
  @apply w-max flex flex-row gap-2 items-center justify-center;
}
.section_1 > .aboutCourse > div > .countLesson > .icon {
  @apply p-2 bg-emerald-500/75 h-max w-max rounded-lg;
}
.section_1 > .aboutCourse > div > .countHour > .icon {
  @apply p-2 bg-blue-default/75 h-max w-max rounded-lg;
}
.section_1 > .aboutCourse > div > .countLesson > .icon-name {
  @apply flex flex-col;
}
.section_1 > .aboutCourse > div > .countHour > .icon-name {
  @apply flex flex-col;
}
.section_1 > .lessonList {
  @apply flex flex-col gap-4;
}
.section_1 > .lessonList > div {
  @apply w-full py-2 px-4 flex flex-row justify-start gap-4 border-2 rounded-lg items-center cursor-pointer border-gray-400 hover:border-blue-500 hover:shadow-lg hover:shadow-cyan-500/50;
}
.section_1 > .lessonList > div > button {
  @apply h-max w-max rounded-full;
}
.section_1 > .lessonList > div > div {
  @apply flex flex-col gap-1;
}
.section_1 > .lessonList > div > div > span {
  @apply text-xl hover:text-blue-default transition-all;
}
.section_2 {
  @apply w-full lg:flex-1 flex flex-col gap-4;
}
.section_2 > .aboutLesson {
  @apply w-full px-4 py-2 rounded-lg border-2 border-gray-400 flex flex-row justify-between items-center;
}
.section_2 > .aboutLesson > h1 {
  @apply text-2xl;
}
.section_2 > .aboutLesson > div {
  @apply w-max flex flex-row gap-2 items-center justify-center;
}
.section_2 > .aboutLesson > div > .icon {
  @apply p-2 bg-blue-default/75 h-max w-max rounded-lg;
}
.section_2 > .aboutLesson > div > .icon-name {
  @apply flex flex-col;
}
</style>
