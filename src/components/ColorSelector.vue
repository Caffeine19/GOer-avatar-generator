<script setup lang="ts">
defineProps<{ value?: string }>()
defineEmits<{ (e: 'updateValue', value: string): void }>()
</script>
<template>
  <div class="flex items-center space-x-3">
    <div class="border-slate-200 w-fit relative p-1 border rounded">
      <label for="colorWell">
        <div
          class="w-16 h-5 rounded cursor-pointer"
          :style="{ backgroundColor: value || '#61BCE2' }"
        ></div>
      </label>
      <input
        type="color"
        :value="value"
        id="colorWell"
        class="absolute top-0 left-0 w-full opacity-0"
        @input="$emit('updateValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <div
      class="border-slate-200 h-7 flex items-center justify-center w-24 overflow-hidden border rounded"
    >
      <p class="text-slate-700 cartograph-cf-regular text-base">{{ value }}</p>
    </div>
  </div>
</template>
