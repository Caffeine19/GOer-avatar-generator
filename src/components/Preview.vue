<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { reactive } from 'vue'
import Avatar from './Avatar.vue'

import type { IAvatar } from '@/types/avatar'

const previewAvatarConfig = reactive<IAvatar>({
  // color: {
  //   primaryColor: '#003400',
  //   backgroundColor: '#00ff00',
  //   secondaryColor: '#ff00ff'
  // }
  radius: 32
})
</script>
<template>
  <div class="shrink flex items-center justify-center w-4/5">
    <Avatar
      class="max-h-lg max-w-lg"
      :color="previewAvatarConfig.color"
      :radius="previewAvatarConfig.radius"
    ></Avatar>
  </div>
</template>
<style></style>
