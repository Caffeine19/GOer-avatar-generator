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
  <div class="shrink flex items-center justify-center w-4/5">
    <Avatar
      id="preview"
      class="max-h-lg max-w-lg"
      :color="editingAvatar?.color"
      :radius="editingAvatar?.radius"
      :effect="editingAvatar.effect"
      :eyes="editingAvatar.eyes"
    ></Avatar>
    <canvas id="canvas" class="hidden"></canvas>
  </div>
</template>
<style></style>
