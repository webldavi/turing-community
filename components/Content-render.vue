<template>
  <div class="w-full h-max prose prose-invert" v-html="md">
  </div>
</template>
<script setup>
import {marked} from "marked"
const md = ref("> Teste")

onMounted(()=>{
    md.value = marked.parse(md.value)
    console.log(md.value)
})
</script>