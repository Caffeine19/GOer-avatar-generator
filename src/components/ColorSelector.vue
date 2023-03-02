<script setup lang="ts">
defineProps<{ value?: string }>()
defineEmits<{ (e: 'updateValue', value: string): void }>()
</script>
<template>
  <div class="border-slate-200 w-fit relative p-1 border-2 rounded">
    <label for="colorWell">
      <div class="w-16 h-6 rounded" :style="{ backgroundColor: value || '#61BCE2' }"></div
    ></label>
    <input
      type="color"
      :value="value"
      id="colorWell"
      class="absolute top-0 left-0 w-full opacity-0"
      @change="$emit('updateValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
