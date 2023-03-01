<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Avatar from './Avatar.vue'
</script>
<template>
  <div
    class="border-slate-100 shadow-slate-900/5 rounded-xl flex items-center px-4 py-3 space-x-5 bg-white border shadow-xl"
  >
    <button class="text-slate-400 flex items-center justify-center">
      <i class="ph-caret-left" style="font-size: 28px"></i>
    </button>
    <div class="flex items-center justify-center space-x-3">
      <Avatar class="border-slate-200 w-16 h-16 p-1 border rounded-md"></Avatar>
      <Avatar class="border-slate-200 w-16 h-16 p-1 border rounded-md"></Avatar>
      <Avatar class="border-slate-200 w-16 h-16 p-1 border rounded-md"></Avatar>
      <Avatar class="border-slate-200 w-16 h-16 p-1 border rounded-md"></Avatar>
      <Avatar class="border-slate-200 w-16 h-16 p-1 border rounded-md"></Avatar>
      <Avatar class="border-slate-200 w-16 h-16 p-1 border rounded-md"></Avatar>
    </div>
    <button class="text-slate-400 flex items-center justify-center">
      <i class="ph-caret-right" style="font-size: 28px"></i>
    </button>
  </div>
</template>
<style></style>
