<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { IAvatar } from '@/types/avatar'
import type { PropType } from 'vue'
import Avatar from './Avatar.vue'

defineProps({
  editingAvatar: {
    required: true,
    type: Object as PropType<IAvatar>
  }
})
</script>
<template>
  <div class="grow flex flex-col items-center justify-center w-4/5 space-y-2">
    <Avatar
      id="preview"
      class="lg:max-w-lg w-4/5 max-w-[200px]"
      :color="editingAvatar.color"
      :radius="editingAvatar.radius"
      :effect="editingAvatar.effect"
      :eyes="editingAvatar.eyes"
    ></Avatar>
    <p class="dark:text-slate-50 text-slate-900 animate-bounce lg:text-3xl text-xl">
      # {{ editingAvatar.id }}
    </p>
    <canvas id="canvas" class="hidden"></canvas>
  </div>
</template>
<style></style>
