<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preview from './components/Preview.vue'
import Editor from './components/Editor.vue'
import { reactive } from 'vue'
import type { IAvatar, IColor, IEffect, IEyes } from './types/avatar'
import type { IUpdateEyes } from './types/updateEyes'

const editingAvatar = reactive<IAvatar>({
  color: { primaryColor: undefined, secondaryColor: undefined, backgroundColor: undefined },
  radius: 16,
  effect: {
    blur: 0
  },
  eyes: {
    leftEye: {
      x: 0,
      y: 0,
      scale: 100
    },
    rightEye: {
      x: 0,
      y: 0,
      scale: 100
    }
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
  console.log(typeof value)
  if (editingAvatar.effect) editingAvatar.effect[key] = value
}

const updateEyes: IUpdateEyes = (
  whichOne: keyof IEyes,
  key: keyof IEyes['leftEye'] | keyof IEyes['rightEye'],
  value: number
) => {
  console.log(whichOne, key, value)
  if (editingAvatar?.eyes) {
    console.log(true)
    editingAvatar.eyes[whichOne][key] = value
    console.log(editingAvatar.eyes[whichOne][key])
  }
}
</script>

<template>
  <div
    class="sm:flex-row sm:p-12 sm:space-x-12 sm:space-y-0 flex flex-col items-center justify-between w-screen h-screen p-0 space-y-4"
  >
    <div
      class="basis-6/12 sm:basis-7/12 sm:p-0 flex flex-col items-center justify-between w-full h-full p-3 space-y-8 overflow-y-auto"
    >
      <Header :editingAvatar="editingAvatar"></Header>
      <Preview :editingAvatar="editingAvatar"></Preview>
      <Footer></Footer>
    </div>
    <Editor
      class="sm:basis-5/12 2xl:basis-4/12 basis-6/12"
      :editingAvatar="editingAvatar"
      :updateColor="updateColor"
      :updateRadius="updateRadius"
      :updateEffect="updateEffect"
      :updateEyes="updateEyes"
    ></Editor>
  </div>
</template>
