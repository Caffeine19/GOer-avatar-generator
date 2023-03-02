<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Avatar from './Avatar.vue'
import Divider from './Divider.vue'

import type { IAvatar } from '@/types/avatar'
const logoAvatar: IAvatar = {
  color: { backgroundColor: 'transparent' }
}
</script>
<template>
  <div
    class="rounded-xl shadow-slate-900/5 border-slate-100 flex items-center justify-between w-4/5 px-4 py-3 bg-white border shadow-xl"
  >
    <div class="flex items-center space-x-3">
      <Avatar class="w-16 h-16 -mt-4" :color="logoAvatar.color"></Avatar>
      <h1
        class="cartograph-cf-regular-italic text-gradient text-2xl"
        style="background-image: -webkit-linear-gradient(right, #61bce2, #d2f4f0, #90d0eb)"
      >
        GOer-avatar-generator
      </h1>
    </div>
    <div class="flex items-center space-x-4">
      <button class="text-slate-700 flex items-center space-x-3">
        <i class="ph-download-simple" style="font-size: 28px"></i>
        <span class="text-lg">保存</span>
      </button>

      <button class="text-slate-700 flex items-center space-x-3">
        <i class="ph-upload-simple" style="font-size: 28px"></i>
        <span class="text-lg">导出</span>
      </button>
    </div>
  </div>
</template>
<style></style>
