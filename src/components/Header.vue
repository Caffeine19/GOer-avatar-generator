<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, inject, ref, type PropType } from 'vue'

import Avatar from './Avatar.vue'
import Divider from './Divider.vue'

import type { IAvatar } from '@/types/avatar'

import { themeKey, toggleThemeKey } from '@/symbols/theme'
import { THEME } from '@/types/theme'
const props = defineProps({
  editingAvatar: { type: Object as PropType<IAvatar>, required: true },
  saveAvatar: {
    type: Function,
    required: true
  }
})

const logoColor = computed(() => {
  return {
    primaryColor: props.editingAvatar.color.primaryColor,
    secondaryColor: props.editingAvatar.color.secondaryColor,
    backgroundColor: 'none'
  }
})

const downloadAvatar = () => {
  let svg = document.getElementById('preview')
  if (svg) {
    const data = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([data], {
      type: 'image/svg+xml;charset=utf-8'
    })
    const url = URL.createObjectURL(svgBlob)
    const img = new Image()
    img.addEventListener('load', () => {
      const canvas = document.getElementById('canvas')
      if (canvas) {
        ;(canvas as HTMLCanvasElement).width = 512
        ;(canvas as HTMLCanvasElement).height = 512

        const context = (canvas as HTMLCanvasElement).getContext('2d')
        if (context) {
          context.drawImage(img, 0, 0, 512, 512)
          URL.revokeObjectURL(url)
          // trigger a synthetic download operation with a temporary link
          const a = document.createElement('a')
          a.download = 'image.png'
          document.body.appendChild(a)
          a.href = (canvas as HTMLCanvasElement).toDataURL()
          a.click()
          a.remove()
        }
      }
    })
    img.src = url
  }
}

const theme = inject(themeKey)
const toggleTheme = inject(toggleThemeKey)

const isMenuOpening = ref(false)
const toggleMenu = () => {
  isMenuOpening.value = !isMenuOpening.value
}
</script>
<template>
  <div
    class="rounded-xl shadow-slate-900/5 dark:shadow-black/20 border-slate-100 2xl:w-4/5 dark:border-slate-700 dark:bg-slate-800 relative flex items-center justify-between w-full px-4 py-3 transition-colors bg-white border shadow-xl"
  >
    <div class="flex items-center space-x-3">
      <Avatar
        class="xl:w-16 xl:h-16 md:w-12 md:h-12 md:-mt-3 w-8 h-8 -mt-2"
        :color="logoColor"
      ></Avatar>
      <h1
        class="cartograph-cf-regular-italic text-gradient xl:text-2xl md:text-xl text-lg"
        :style="{
          'background-image': `-webkit-linear-gradient(right, ${
            logoColor.primaryColor || '#61BCE2'
          },${logoColor.secondaryColor || '#90D0EB'}, ${logoColor.primaryColor || '#61BCE2'})`
        }"
      >
        GOer-avatar-generator
      </h1>
    </div>
    <div class="xl:flex items-stretch hidden space-x-2">
      <button
        @click="() => saveAvatar()"
        class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
      >
        <i class="ph-floppy-disk" style="font-size: 28px"></i>
      </button>
      <Divider direction="vertical" percent="h-3/5" />
      <button
        class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
        @click="downloadAvatar"
      >
        <i class="ph-download-simple" style="font-size: 28px"></i>
      </button>
      <Divider direction="vertical" percent="h-3/5" />
      <div>
        <button
          class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
          @click="toggleTheme"
          v-if="theme == THEME.LIGHT"
        >
          <i class="ph-moon-stars" style="font-size: 28px"></i>
        </button>
        <button
          class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
          @click="toggleTheme"
          v-else
        >
          <i class="ph-sun" style="font-size: 28px"></i>
        </button>
      </div>
    </div>
    <button
      class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 xl:hidden flex items-center p-1 space-x-3 transition-colors border border-transparent rounded-md"
      @click="toggleMenu"
    >
      <i class="ph-list-dashes" style="font-size: 28px"></i>
    </button>
    <div
      class="top-20 dark:border-slate-700 dark:bg-slate-800 rounded-xl shadow-slate-900/5 dark:shadow-black/20 border-slate-100 xl:hidden absolute right-0 z-10 flex flex-col items-center px-4 py-2 space-y-2 transition-colors bg-white border"
      :class="isMenuOpening ? 'flex' : 'hidden'"
    >
      <button
        @click="() => saveAvatar()"
        class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
      >
        <i class="ph-floppy-disk" style="font-size: 28px"></i>
        <span class="text-lg">??????</span>
      </button>
      <Divider />
      <button
        class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
        @click="downloadAvatar"
      >
        <i class="ph-download-simple" style="font-size: 28px"></i>
        <span class="text-lg">??????</span>
      </button>
      <Divider />
      <div>
        <button
          class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
          @click="toggleTheme"
          v-if="theme == THEME.LIGHT"
        >
          <i class="ph-moon-stars" style="font-size: 28px"></i>
          <span class="w-9 text-lg">???~</span>
        </button>
        <button
          class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
          @click="toggleTheme"
          v-else
        >
          <i class="ph-sun" style="font-size: 28px"></i>
          <span class="w-9 text-lg">??????</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
