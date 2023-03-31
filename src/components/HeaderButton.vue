<script lang="ts">
export type HeaderButtonProps = {
  title: string
  action: Function
  icon: string
}
</script>

<script setup lang="ts">
defineProps<HeaderButtonProps>()
</script>
<template>
  <button
    @click="() => action"
    class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-600 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
  >
    <i :class="icon" style="font-size: 28px"></i>
  </button>
</template>
