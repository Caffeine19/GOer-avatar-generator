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

function triggerDownload(imgURI: string) {
  var evt = new MouseEvent('click', {
    view: window,
    bubbles: false,
    cancelable: true
  })

  var a = document.createElement('a')
  a.setAttribute('download', 'MY_COOL_IMAGE.png')
  a.setAttribute('href', imgURI)
  a.setAttribute('target', '_blank')

  a.dispatchEvent(evt)
}

const test = () => {
  let svg = document.getElementById('preview')
  if (svg) {
    const data = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([data], {
      type: 'image/svg+xml;charset=utf-8'
    })
    const url = URL.createObjectURL(svgBlob)
    const img = new Image()
    img.addEventListener('load', () => {
      // (Next step: Image to Canvas)

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
    class="rounded-xl shadow-slate-900/5 border-slate-100 flex items-center justify-between w-4/5 px-4 py-3 bg-white border shadow-xl"
  >
    <div class="flex items-center space-x-3">
      <Avatar class="w-16 h-16 -mt-4" :color="logoColor"></Avatar>
      <h1
        class="cartograph-cf-regular-italic text-gradient text-2xl"
        :style="{
          'background-image': `-webkit-linear-gradient(right, ${
            logoColor.primaryColor || '#61BCE2'
          },${logoColor.secondaryColor || '#90D0EB'}, ${logoColor.primaryColor || '#61BCE2'})`
        }"
      >
        GOer-avatar-generator
      </h1>
    </div>
    <div class="flex items-center space-x-4">
      <button class="text-slate-700 flex items-center space-x-3">
        <i class="ph-download-simple" style="font-size: 28px"></i>
        <span class="text-lg">保存</span>
      </button>

      <button class="text-slate-700 flex items-center space-x-3" @click="test">
        <i class="ph-upload-simple" style="font-size: 28px"></i>
        <span class="text-lg">导出</span>
      </button>
    </div>
  </div>
</template>
<style></style>
