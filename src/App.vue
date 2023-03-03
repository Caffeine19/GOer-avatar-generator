<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preview from './components/Preview.vue'
import Editor from './components/Editor.vue'
import { reactive } from 'vue'
import type { IAvatar, IColor, IEffect } from './types/avatar'

const editingAvatar = reactive<IAvatar>({
  color: { primaryColor: undefined, secondaryColor: undefined, backgroundColor: undefined },
  radius: undefined,
  effect: {
    blur: 0
  }
})

const updateColor = (key: keyof IColor, value: string) => {
  if (editingAvatar.color) {
    editingAvatar.color[key] = value
  }
}

const updateRadius = (value: number) => {
  editingAvatar.radius = value
}

const updateEffect = (key: keyof IEffect, value: number) => {
  if (editingAvatar.effect) editingAvatar.effect[key] = value
}
</script>

<template>
  <div class="flex items-center justify-between w-screen h-screen p-12">
    <div
      class="basis-7/12 flex flex-col items-center justify-between h-full space-y-8 overflow-y-auto"
    >
      <Header :editingAvatar="editingAvatar"></Header>
      <Preview :editingAvatar="editingAvatar"></Preview>
      <Footer></Footer>
    </div>
    <Editor
      class="basis-3/12"
      :editingAvatar="editingAvatar"
      :updateColor="updateColor"
      :updateRadius="updateRadius"
      :updateEffect="updateEffect"
    ></Editor>
  </div>
</template>
