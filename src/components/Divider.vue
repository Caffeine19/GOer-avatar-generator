<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
withDefaults(defineProps<{ direction?: 'vertical' | 'horizontal' }>(), { direction: 'horizontal' })
</script>

<template>
  <div
    class="w-[90%] h-[1px] border-slate-200 border-b mx-auto"
    v-if="direction == 'horizontal'"
  ></div>
  <div class="w-[1px] border-r border-slate-200" v-else></div>
</template>
