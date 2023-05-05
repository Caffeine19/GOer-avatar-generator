<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { themeKey } from '@/symbols/theme'
import { computed, inject, ref, watch } from 'vue'
import { THEME } from '@/types/theme'
const percent = ref()
const props = withDefaults(defineProps<{ min?: number; max?: number; range?: number }>(), {
  min: 0,
  max: 100,
  range: 50
})

watch(
  () => props.range,
  (newVal) => {
    percent.value = Math.floor(((newVal - props.min) / (props.max - props.min)) * 100)
  },
  { immediate: true }
)

defineEmits<{
  (e: 'updateRange', value: number): void
}>()

const theme = inject(themeKey)

const sliderDefaultColor = computed(() => (theme?.value == THEME.LIGHT ? '#fff' : '#1e293b'))
const sliderActiveColor = computed(() => (theme?.value === THEME.LIGHT ? '#f1f5f9' : '#334155'))
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
        :value="range"
        class="border-slate-200 opacity-60 dark:border-slate-600 w-full h-5 transition-colors border rounded"
        @input="$emit('updateRange', parseInt(($event.target as HTMLInputElement).value))"
      />
    </div>
    <div
      class="border-slate-200 dark:border-slate-600 flex items-center justify-center w-10 h-6 overflow-hidden transition-colors border rounded"
    >
      <p
        class="text-slate-700 cartograph-cf-regular dark:text-slate-100 text-base transition-colors"
      >
        {{ range }}
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
    color-stop(v-bind(percent + '%'), v-bind(sliderActiveColor)),
    color-stop(v-bind(percent + '%'), v-bind(sliderDefaultColor))
  );
}
/* input[type='range'].test2 {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(v-bind(percent + '%'), #334155),
    color-stop(v-bind(percent + '%'), #1e293b)
  );
} */
input[type='range']:focus {
  outline: none;
  @apply opacity-100;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  @apply bg-slate-300 h-7 cursor-ew-resize dark:bg-slate-500 w-4 transition-colors rounded;
}
</style>
