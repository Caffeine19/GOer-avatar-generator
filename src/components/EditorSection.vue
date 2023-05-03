<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  titleIcon: string
  titleText: string
}>()

const isSectionContentCollapsed = ref(true)

const toggleSectionContent = () => {
  isSectionContentCollapsed.value = !isSectionContentCollapsed.value
}
</script>
<template>
  <div name="section" class="space-y-3" v-auto-animate>
    <div name="section-title" class="flex items-center justify-between">
      <div class="text-slate-900 dark:text-white flex items-center space-x-3 transition-colors">
        <i :class="titleIcon" style="font-size: 28px"></i>
        <h2 class="cartograph-cf-regular-italic text-xl">{{ titleText }}</h2>
      </div>
      <button
        class="dark:hover:bg-slate-700 hover:bg-slate-100 hover:border-slate-50 dark:hover:border-slate-600 flex items-center justify-center p-1 transition-transform duration-300 border border-transparent rounded-full"
        @click="toggleSectionContent"
        :class="isSectionContentCollapsed ? 'rotate-0' : 'rotate-180'"
      >
        <i class="ph-caret-down text-slate-400" style="font-size: 20px"></i>
      </button>
    </div>
    <div
      name="section-content"
      class="pl-1 space-y-3 transition-all duration-300"
      v-if="isSectionContentCollapsed"
    >
      <slot name="content"></slot>
    </div>
    <slot name="remark"></slot>
  </div>
</template>
