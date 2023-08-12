<template>
  <article class="main" :class="computedTheme">
    <section class="section_1">
      <span>Nossos Cursos</span>
      <ul>
        <li
          v-for="(item, index) in filterList"
          :key="index"
          @click="updateFilter(index)"
          :class="{ selected: item.actived }"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>
    <section class="section_2">
      <div v-if="courseList.length <= 0">
        <img src="../../assets/images/CommingSoon.png" alt="" />
      </div>
      <CourseCard
        v-for="(course, index) in courseList"
        :key="index"
        :course="course"
        :to="`/cursos/${course._id}`"
      />
    </section>
  </article>
</template>

<script setup>
import { useTheme, useCourse } from "~/stores/store";

const themeStore = useTheme();

const courseStore = useCourse();
const courseList = ref(courseStore.courseList);

const computedTheme = computed(() => {
  return {
    "text-black-50": !themeStore.isDark,
    "text-white-80": themeStore.isDark,
  };
});

const filterList = ref([
  { name: "Todos", actived: true, level: 0 },
  { name: "Iniciante", actived: false, level: 1 },
  { name: "Intermediário", actived: false, level: 2 },
  { name: "Avançado", actived: false, level: 3 },
]);

function updateFilter(index) {
  courseList.value = courseStore.courseList.filter(
    (c) => c.level == filterList.value[index].level
  );
  if (index == 0) courseList.value = courseStore.courseList;

  filterList.value[
    filterList.value.findIndex((i) => i.actived == true)
  ].actived = false;
  filterList.value[index].actived = true;
}
</script>

<style scoped>
.main {
  @apply w-full min-h-screen px-8 sm:px-16 flex flex-col items-center gap-16 pb-16;
}
.section_1 {
  @apply w-full h-max flex flex-col md:flex-row gap-2 md:justify-between py-16;
}
.selected {
  @apply bg-blue-default/75 text-white-80;
}
.section_1 > span {
  @apply text-3xl;
}
.section_1 > ul {
  @apply flex flex-row text-sm md:text-lg gap-2 md:gap-8;
}
.section_1 > ul > li {
  @apply p-2 rounded-lg cursor-pointer;
}
.section_2 {
  @apply flex flex-wrap flex-row gap-8 items-center justify-center;
}
.section_2 > div {
  @apply w-full sm:w-96 ;
}
</style>
