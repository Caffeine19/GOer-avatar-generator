<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
withDefaults(defineProps<{ direction?: 'vertical' | 'horizontal' }>(), { direction: 'horizontal' })
</script>

<template>
  <div
    class="w-[90%] h-[1px] border-slate-100 border-b mx-auto dark:border-slate-700"
    v-if="direction == 'horizontal'"
  ></div>
  <div class="w-[1px] border-r border-slate-100 dark:border-slate-700" v-else></div>
</template>
