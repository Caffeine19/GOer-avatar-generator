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
  <div name="section" class="space-y-3">
    <div name="section-title" class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <i :class="titleIcon" style="font-size: 28px"></i>
        <h2 class="cartograph-cf-regular-italic text-slate-900 text-xl">{{ titleText }}</h2>
      </div>
      <button
        class="flex items-center justify-center transition-transform duration-300"
        @click="toggleSectionContent"
        :class="isSectionContentCollapsed ? 'rotate-0' : 'rotate-180'"
      >
        <i class="ph-caret-down text-slate-400" style="font-size: 20px"></i>
      </button>
    </div>
    <div
      name="section-content"
      class="pl-1 space-y-3 transition-all duration-300"
      :class="isSectionContentCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-screen '"
    >
      <slot name="content" :isSectionContentCollapsed="isSectionContentCollapsed"> </slot>
    </div>
    <slot name="remark"></slot>
  </div>
</template>
