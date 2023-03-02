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
    }
  },
  {
    color: {
      primaryColor: '#FFCB8F',
      secondaryColor: '#FFE5C6',
      backgroundColor: '#FFECD6'
    }
  },
  {
    color: {
      primaryColor: '#FFF',
      secondaryColor: '#000',
      backgroundColor: '#E6E6E6'
    }
  },
  {
    color: {
      primaryColor: '#d0bfff',
      secondaryColor: '#b197fc',
      backgroundColor: '#f3d9fa'
    }
  }
])
</script>
<template>
  <div
    class="border-slate-100 shadow-slate-900/5 rounded-xl flex items-center px-4 py-3 space-x-5 bg-white border shadow-xl"
  >
    <button class="text-slate-400 flex items-center justify-center">
      <i class="ph-caret-left" style="font-size: 28px"></i>
    </button>
    <div class="flex items-center justify-center space-x-3">
      <Avatar
        v-for="(sample, index) in sampleAvatars"
        :key="index"
        :color="sample.color"
        class="border-slate-200 w-16 h-16 p-1 border rounded-md"
      ></Avatar>
    </div>
    <button class="text-slate-400 flex items-center justify-center">
      <i class="ph-caret-right" style="font-size: 28px"></i>
    </button>
  </div>
</template>
<style></style>
