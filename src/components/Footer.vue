<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Avatar from './Avatar.vue'
import type { IAvatar } from '@/types/avatar'
import { reactive } from 'vue'

const sampleAvatars = reactive<IAvatar[]>([
  {},
  {
    color: {
      primaryColor: '#FFCBCB',
      secondaryColor: '#FFE0E0',
      backgroundColor: '#FAEFEF'
    },
    radius: 32
  },
  {
    color: {
      primaryColor: '#FFCB8F',
      secondaryColor: '#FFE5C6',
      backgroundColor: '#FFECD6'
    },
    radius: 32
  },
  {
    color: {
      primaryColor: '#FFF',
      secondaryColor: '#000',
      backgroundColor: '#E6E6E6'
    },
    radius: 32
  },
  {
    color: {
      primaryColor: '#d0bfff',
      secondaryColor: '#b197fc',
      backgroundColor: '#f3d9fa'
    },
    radius: 32
  }
])
</script>
<template>
  <div
    class="border-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/20 shadow-slate-900/5 rounded-xl md:px-4 md:py-3 md:space-x-5 flex items-center max-w-full px-2 py-2 space-x-3 transition-colors bg-white border shadow-xl"
  >
    <button class="text-slate-400 flex items-center justify-center">
      <i class="ph-caret-left" style="font-size: 28px"></i>
    </button>
    <div class="overflow-x-auto">
      <div class="w-fit flex items-center justify-center space-x-3">
        <Avatar
          v-for="(sample, index) in sampleAvatars"
          :key="index"
          :color="sample.color"
          :radius="sample.radius"
          class="border-slate-200 dark:border-slate-600 md:w-16 md:h-16 w-12 h-12 p-1 transition-colors border rounded-md"
        ></Avatar>
      </div>
    </div>

    <button class="text-slate-400 flex items-center justify-center">
      <i class="ph-caret-right" style="font-size: 28px"></i>
    </button>
  </div>
</template>
<style></style>
