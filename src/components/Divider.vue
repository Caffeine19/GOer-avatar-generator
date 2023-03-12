<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
withDefaults(defineProps<{ direction?: 'vertical' | 'horizontal'; percent?: string }>(), {
  direction: 'horizontal'
})
</script>

<template>
  <div
    class="w-[90%] h-[1px] border-slate-100 border-b mx-auto transition-colors dark:border-slate-700"
    v-if="direction == 'horizontal'"
  ></div>
  <div v-else class="flex items-center">
    <div
      class="w-[1px] border-r border-slate-100 transition-colors dark:border-slate-700"
      :class="percent"
    ></div>
  </div>
</template>
