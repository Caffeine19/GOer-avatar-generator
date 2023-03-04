<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, type PropType } from 'vue'

import Avatar from './Avatar.vue'
import Divider from './Divider.vue'

import type { IAvatar } from '@/types/avatar'

const props = defineProps({ editingAvatar: { type: Object as PropType<IAvatar>, required: true } })

const logoColor = computed(() => {
  return {
    primaryColor: props.editingAvatar.color?.primaryColor,
    secondaryColor: props.editingAvatar.color?.secondaryColor,
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
</script>
<template>
  <div
    class="rounded-xl shadow-slate-900/5 dark:shadow-black/20 border-slate-100 2xl:w-4/5 dark:border-slate-700 dark:bg-slate-800 flex items-center justify-between w-full px-4 py-3 bg-white border shadow-xl"
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
    <div class="xl:flex items-stretch hidden space-x-4">
      <button
        class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
      >
        <i class="ph-floppy-disk" style="font-size: 28px"></i>
        <span class="xl:block hidden text-lg">保存</span>
      </button>
      <Divider direction="vertical" />
      <button
        class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 flex items-center p-2 space-x-3 transition-colors border border-transparent rounded-md"
        @click="downloadAvatar"
      >
        <i class="ph-download-simple" style="font-size: 28px"></i>
        <span class="xl:block hidden text-lg">下载</span>
      </button>
    </div>
    <button
      class="text-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-900 hover:bg-slate-50 hover:border-slate-100 xl:hidden flex items-center p-1 space-x-3 transition-colors border border-transparent rounded-md"
    >
      <i class="ph-list-dashes" style="font-size: 28px"></i>
    </button>
  </div>
</template>
<style></style>
