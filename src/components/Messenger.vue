<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { themeKey } from '@/symbols/theme'
import type { IColor } from '@/types/avatar'
import type { MessengerOption } from '@/types/messenger'
import { THEME } from '@/types/theme'
import { computed, inject, ref } from 'vue'

const props = defineProps<{
  color: IColor
}>()

const messengerOption = inject('messengerOption') as MessengerOption

const theme = inject(themeKey) || ref(THEME.LIGHT)
const messengerStyle = computed(() => {
  return `linear-gradient(rgb(${
    theme.value == THEME.DARK ? '14 23 42' : '248 250 252'
  }) 0 0) padding-box,linear-gradient(to right, ${props.color.primaryColor || '#60BCE2'}, ${
    props.color.secondaryColor || '#89D0EB'
  }) border-box`
})
</script>
<template>
  <Transition name="slide">
    <div class="top-9 fixed left-0 right-0 flex justify-center" v-show="messengerOption.opening">
      <div
        class="dark:text-slate-50 dark:bg-slate-900 text-slate-900 flex items-center p-3 space-x-3 border-2 border-transparent rounded-lg shadow-2xl"
        :style="{ background: messengerStyle }"
      >
        <i class="ph-wind" style="font-size: 31px"></i>
        <p class="text-xl font-medium">{{ messengerOption.info }}</p>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.32s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-4rem);
}
</style>
