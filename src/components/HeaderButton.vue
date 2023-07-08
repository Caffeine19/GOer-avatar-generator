<script setup lang="ts">
export type HeaderButtonProps = {
  title: string
  showTitle?: boolean
  action: Function
  icon: string
}

withDefaults(defineProps<HeaderButtonProps>(), { showTitle: true })
</script>
<template>
  <button
    @click="() => action()"
    class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-600 hover:bg-slate-50 hover:border-slate-100 md:p-2 flex items-center p-1 space-x-3 transition-colors border border-transparent rounded-md"
  >
    <i :class="icon" style="font-size: 28px"></i>
    <span class="text-lg" v-if="showTitle">{{ title }}</span>
  </button>
</template>
