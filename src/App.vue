<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preview from './components/Preview.vue'
import Editor from './components/Editor.vue'
</script>

<template>
  <div class="flex items-center justify-between w-screen h-screen p-12">
    <div class="basis-7/12 flex flex-col items-center justify-between h-full">
      <Header></Header>
      <Preview></Preview>
      <Footer></Footer>
    </div>
    <Editor class="basis-3/12"></Editor>
  </div>
</template>

<style scoped></style>
