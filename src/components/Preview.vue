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
      class="max-h-lg max-w-lg"
      :color="editingAvatar?.color"
      :radius="editingAvatar?.radius"
    ></Avatar>
  </div>
</template>
<style></style>
