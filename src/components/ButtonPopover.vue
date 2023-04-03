<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ content: string }>()

const showingPopover = ref(false)

const togglePopover = () => {
  console.log('🚀 ~ file: ButtonPopover.vue:5 ~ showingPopover:', showingPopover)
  showingPopover.value = !showingPopover.value
}
</script>
<template>
  <div @mouseenter="togglePopover" @mouseleave="togglePopover" class="relative">
    <Transition name="zoom">
      <div
        class="-top-10 bg-slate-200 border-slate-300 text-slate-600 dark:bg-slate-600 dark:text-slate-200 dark:border-slate-500 shadow-slate-900/5 dark:shadow-black/20 absolute left-0 right-0 flex items-center justify-center p-1 border rounded shadow-xl"
        v-if="showingPopover"
      >
        <p class="text-sm">{{ content }}</p>
      </div>
    </Transition>
    <slot></slot>
  </div>
</template>

<style scoped>
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.2s ease;
}
.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
