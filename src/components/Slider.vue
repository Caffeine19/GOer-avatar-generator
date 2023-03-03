<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, watch } from 'vue'

const percent = ref()
const props = withDefaults(defineProps<{ min?: number; max?: number; range?: number }>(), {
  min: 0,
  max: 100,
  range: 50
})
const localRange = ref(props.range)
const emits = defineEmits<{
  (e: 'updateRange', value: number): void
}>()
watch(
  localRange,
  () => {
    percent.value = Math.floor(((localRange.value - props.min) / (props.max - props.min)) * 100)
    emits('updateRange', localRange.value)
  },
  { immediate: true }
)
</script>
<template>
  <div class="flex items-center space-x-3">
    <div class="grow flex items-center">
      <input
        type="range"
        id="volume"
        name="volume"
        :min="min"
        :max="max"
        class="border-slate-200 opacity-60 w-full h-5 border rounded"
        v-model="localRange"
        :style="{
          'background-image': `-webkit-gradient(
            linear,
            left top,
            right top,
            color-stop(${percent}%, #f1f5f9),
            color-stop(${percent}%, #fff)
          )`
        }"
      />
    </div>
    <div
      class="border-slate-200 flex items-center justify-center w-10 h-6 overflow-hidden border rounded"
    >
      <p class="text-slate-700 cartograph-cf-regular text-base">{{ localRange }}</p>
    </div>
  </div>
</template>

<style scoped>
input[type='range'] {
  -webkit-appearance: none;

  /* background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(15%, #f1f5f9),
    color-stop(15%, #fff)
  ); */
}

input[type='range']:focus {
  outline: none;
  @apply opacity-100;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  @apply bg-slate-300 h-7 cursor-ew-resize w-4 rounded;
}
</style>
