<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, inject, ref, reactive } from 'vue'

import type { IAvatar } from '@/types/avatar'
import { THEME } from '@/types/theme'

import { themeKey, toggleThemeKey } from '@/symbols/theme'

import type { HeaderButtonProps } from './HeaderButton.vue'
import ButtonPopover from './ButtonPopover.vue'
import Modified from '@/components/Modified.vue'
import HeaderButton from './HeaderButton.vue'
import Divider from './Divider.vue'
import Avatar from './Avatar.vue'
const props = defineProps<{
  editingAvatar: IAvatar
  saveAvatar: Function
  deleteAvatar: Function
  createAvatar: Function
  modified: boolean
  openMessenger: Function
}>()

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
    props.openMessenger({ status: true, info: '开始下载' })
  }
}

const theme = inject(themeKey)
const toggleTheme =
  inject(toggleThemeKey) ||
  (() => {
    console.log('inject toggle theme failed')
  })

const isMenuOpening = ref(false)
const toggleMenu = () => {
  isMenuOpening.value = !isMenuOpening.value
}

const HeaderButtonOptions = reactive<HeaderButtonProps[]>([
  { title: '保存', action: props.saveAvatar, icon: 'ph-floppy-disk' },
  { title: '下载', action: downloadAvatar, icon: 'ph-download-simple' },
  { title: '添个', action: props.createAvatar, icon: 'ph-plus' },
  { title: '扬喽', action: props.deleteAvatar, icon: 'ph-trash' }
])
</script>
<template>
  <div
    class="rounded-lg md:rounded-xl shadow-slate-900/5 dark:shadow-black/20 border-slate-100 3xl:w-4/5 dark:border-slate-700 dark:bg-slate-800 md:px-4 md:py-3 relative flex items-center justify-between w-full px-1.5 py-1.5 transition-colors bg-white border shadow-xl"
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
    <div class="xl:flex items-stretch hidden space-x-1">
      <div
        v-for="(button, index) in HeaderButtonOptions"
        :key="index"
        class="relative flex items-stretch space-x-1"
      >
        <Modified v-if="button.title == '保存' && modified" class="top-2 left-2"></Modified>
        <ButtonPopover :content="button.title">
          <HeaderButton
            :title="button.title"
            :icon="button.icon"
            :action="button.action"
            :showTitle="false"
          >
          </HeaderButton>
        </ButtonPopover>
        <Divider direction="vertical" percent="h-3/5" />
      </div>
      <ButtonPopover :content="theme == THEME.LIGHT ? '夜~' : '日！'">
        <HeaderButton
          :icon="theme == THEME.LIGHT ? 'ph-moon-stars' : 'ph-sun'"
          :title="theme == THEME.LIGHT ? '夜~' : '日！'"
          :action="toggleTheme"
          :showTitle="false"
        ></HeaderButton>
      </ButtonPopover>
    </div>
    <div class="xl:hidden relative">
      <HeaderButton
        icon="ph-list-dashes"
        title="菜单"
        :action="toggleMenu"
        :showTitle="false"
      ></HeaderButton>
      <Modified v-if="modified && !isMenuOpening" class="top-1 left-1"></Modified>
    </div>
    <div
      class="top-20 dark:border-slate-700 dark:bg-slate-800 rounded-xl shadow-slate-900/5 dark:shadow-black/20 border-slate-100 xl:hidden absolute right-0 z-10 flex flex-col items-center px-4 py-2 space-y-1 transition-colors bg-white border"
      :class="isMenuOpening ? 'flex' : 'hidden'"
    >
      <div v-for="(button, index) in HeaderButtonOptions" :key="index" class="space-y-1">
        <Modified v-if="button.title == '保存' && modified" class="top-4 left-5"></Modified>
        <HeaderButton
          :title="button.title"
          :icon="button.icon"
          :action="button.action"
        ></HeaderButton>
        <Divider />
      </div>
      <HeaderButton
        :icon="theme == THEME.LIGHT ? 'ph-moon-stars' : 'ph-sun'"
        :title="theme == THEME.LIGHT ? '夜~' : '日！'"
        :action="toggleTheme"
      ></HeaderButton>
    </div>
  </div>
</template>
<style></style>
