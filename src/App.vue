<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preview from './components/Preview.vue'
import Editor from './components/Editor.vue'
import { provide, reactive } from 'vue'
import type { IAvatar, IColor } from './types/avatar'
import avatarKey from '@/key/avatar'

const editingAvatar = reactive<IAvatar>({
  color: { primaryColor: '#00ff00', secondaryColor: undefined, backgroundColor: undefined },
  radius: undefined
})

provide(avatarKey, editingAvatar)

const updateColor = (key: keyof IColor, value: string) => {
  if (editingAvatar.color) {
    editingAvatar.color[key] = value
  }
}
</script>

<template>
  <div class="flex items-center justify-between w-screen h-screen p-12">
    <div
      class="basis-7/12 flex flex-col items-center justify-between h-full space-y-8 overflow-y-auto"
    >
      <Header></Header>
      <Preview></Preview>
      <Footer></Footer>
    </div>
    <Editor class="basis-3/12"></Editor>
  </div>
</template>

<style scoped></style>
