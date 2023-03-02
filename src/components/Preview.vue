<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { inject } from 'vue'
import Avatar from './Avatar.vue'

import avatarKey from '@/key/avatar'

const editingAvatar = inject(avatarKey)
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
