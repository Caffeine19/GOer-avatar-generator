<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, watch } from 'vue'

const percent = ref()
const props = withDefaults(defineProps<{ min?: number; max?: number; range?: number }>(), {
  min: 0,
  max: 100,
  range: 50
})
const localRange = ref<string>(props.range.toString())
const emits = defineEmits<{
  (e: 'updateRange', value: number): void
}>()
watch(
  localRange,
  () => {
    // console.log(typeof localRange.value)
    percent.value = Math.floor(
      ((parseInt(localRange.value) - props.min) / (props.max - props.min)) * 100
    )
    emits('updateRange', parseInt(localRange.value))
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
        class="border-slate-200 opacity-60 dark:border-slate-600 w-full h-5 transition-colors border rounded"
        v-model="localRange"
      />
    </div>
    <div
      class="border-slate-200 dark:border-slate-600 flex items-center justify-center w-10 h-6 overflow-hidden transition-colors border rounded"
    >
      <p
        class="text-slate-700 cartograph-cf-regular dark:text-slate-100 text-base transition-colors"
      >
        {{ localRange }}
      </p>
    </div>
  </div>
</template>

<style scoped>
input[type='range'] {
  -webkit-appearance: none;

  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(v-bind(percent + '%'), #f1f5f9),
    color-stop(v-bind(percent + '%'), #fff)
  );
}
@media (prefers-color-scheme: dark) {
  input[type='range'] {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(v-bind(percent + '%'), #334155),
      color-stop(v-bind(percent + '%'), #1e293b)
    );
  }
}
input[type='range']:focus {
  outline: none;
  @apply opacity-100;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  @apply bg-slate-300 h-7 cursor-ew-resize dark:bg-slate-500 w-4 transition-colors rounded;
}
</style>
