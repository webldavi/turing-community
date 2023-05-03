<template>
  <div
          class="w-64 h-64 flex items-center justify-between text-center flex-col gap-2 border border-blue-default rounded-xl p-2 border-blue-500 shadow-lg shadow-cyan-500/50"
        >
          <span class="text-xl">{{ props.title }}</span>
          <p>
            <slot/>
          </p>
          <a :href="to" class="flex flex-row gap-1 bg-blue-default w-full py-4 items-center justify-center rounded-lg">
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
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <span class="text-2xl">Link</span>
          </a>
        </div>
</template>

<script setup>
const props = defineProps({
    to: String,
    title: String
})
</script>
