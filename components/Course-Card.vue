<template>
  <div class="card" @click="navigateTo(props.to)">
    <span>{{ course.title }}</span>
    <p>{{ course.desc }}</p>
    <div>
      <div>
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
        <span class="font-medium">{{ course.classqty }}</span>
      </div>

      <span>{{ course.nivel }}</span>

      <div>
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
        <span class="font-medium">{{ course.time }}h</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  course: Object,
  to: String,
});
</script>

<style scoped>
.card {
  @apply w-80 transition-all h-44 flex flex-col justify-between gap-2 border-2 border-gray-500 p-2 rounded-xl cursor-pointer hover:border-blue-500 hover:shadow-lg hover:shadow-cyan-500/50;
}
.card > span {
  @apply text-3xl;
}
.card > p {
  @apply text-lg;
}
.card > div {
  @apply flex flex-row justify-between items-center;
}
.card > div > div {
  @apply flex flex-row gap-1;
}
.card > div > span {
  @apply bg-blue-default/75 px-2 py-1 text-white-80 rounded-lg; 
}
</style>
