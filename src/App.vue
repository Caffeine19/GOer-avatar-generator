<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preview from './components/Preview.vue'
import Editor from './components/Editor.vue'
import { onMounted, provide, reactive, ref, watch } from 'vue'
import type { IAvatar, IColor, IEffect, IEyes } from './types/avatar'
import type { IUpdateEyes } from './types/updateEyes'
import { useStorage } from './hooks/useStorage'
import { THEME } from '@/types/theme'
import { themeKey, toggleThemeKey } from './symbols/theme'
import type { Ref } from 'vue'

const editingAvatar = ref<IAvatar>({
  id: '佚名',
  color: {},
  eyes: {
    rightEye: {},
    leftEye: {}
  },
  effect: {}
})

const avatarList = reactive<IAvatar[]>([])

const getAvatar = () => {
  const res = localStorage.getItem('avatarIdList')
  if (res) {
    //如果之前有存过avatar
    const avatarIdList: IAvatar['id'][] = JSON.parse(res)

    avatarIdList.forEach((id) => {
      const res = localStorage.getItem('avatar-' + id)
      if (res) {
        avatarList.push(JSON.parse(res))
      }
    })
    editingAvatar.value = avatarList[0]
  } else {
    //如果之前没有存入过avatar
    //则填充进预设的sample
    const sampleIdList = ['原皮', '猛男粉', '🍌黄', '🐼熊猫', '小黑紫']
    const sampleAvatarList: IAvatar[] = [
      {
        id: sampleIdList[0],
        color: {},
        eyes: {
          rightEye: {},
          leftEye: {}
        },
        effect: {}
      },
      {
        id: sampleIdList[1],
        color: {
          primaryColor: '#FFCBCB',
          secondaryColor: '#FFE0E0',
          backgroundColor: '#FAEFEF'
        },
        radius: 32,
        eyes: {
          rightEye: {},
          leftEye: {}
        },
        effect: {}
      },
      {
        id: sampleIdList[2],
        color: {
          primaryColor: '#FFCB8F',
          secondaryColor: '#FFE5C6',
          backgroundColor: '#FFECD6'
        },
        radius: 32,
        eyes: {
          rightEye: {},
          leftEye: {}
        },
        effect: {}
      },
      {
        id: sampleIdList[3],
        color: {
          primaryColor: '#FFF',
          secondaryColor: '#000',
          backgroundColor: '#E6E6E6'
        },
        radius: 32,
        eyes: {
          rightEye: {},
          leftEye: {}
        },
        effect: {}
      },
      {
        id: sampleIdList[4],
        color: {
          primaryColor: '#d0bfff',
          secondaryColor: '#b197fc',
          backgroundColor: '#f3d9fa'
        },
        radius: 32,
        eyes: {
          rightEye: {},
          leftEye: {}
        },
        effect: {}
      }
    ]
    localStorage.setItem('avatarIdList', JSON.stringify(sampleIdList))
    sampleAvatarList.forEach((sample) => {
      localStorage.setItem('avatar-' + sample.id, JSON.stringify(sample))
      avatarList.push(sample)
    })
    editingAvatar.value = avatarList[0]
  }
}

onMounted(() => {
  getAvatar()
})

const updateColor = (key: keyof IColor, value: string) => {
  editingAvatar.value.color[key] = value
}

const updateRadius = (value: number) => {
  editingAvatar.value.radius = value
}

const updateEffect = (key: keyof IEffect, value: number) => {
  // console.log(typeof value)
  editingAvatar.value.effect[key] = value
}

const updateEyes: IUpdateEyes = (
  whichOne: keyof IEyes,
  key: keyof IEyes['leftEye'] | keyof IEyes['rightEye'],
  value: number
) => {
  // console.log(whichOne, key, value)
  editingAvatar.value.eyes[whichOne][key] = value
  // console.log(editingAvatar.eyes[whichOne][key])
}

const theme = useStorage('theme', null) as Ref<THEME>
provide(themeKey, theme)
const toggleTheme = () => {
  theme.value = theme.value == THEME.LIGHT ? THEME.DARK : THEME.LIGHT
}
provide(toggleThemeKey, toggleTheme)

watch(
  theme,
  (newVal) => {
    if (newVal === THEME.DARK) {
      console.log(newVal)
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  { immediate: true }
)

onMounted(() => {
  if (
    theme.value === THEME.DARK ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    theme.value = THEME.DARK
  } else {
    theme.value = THEME.LIGHT
  }
})
</script>

<template>
  <div
    class="md:flex-row md:p-12 md:space-x-12 md:space-y-0 flex flex-col items-center justify-between w-screen h-screen p-0 space-y-4"
  >
    <div
      class="basis-6/12 md:basis-7/12 md:p-0 flex flex-col items-center justify-between w-full h-full p-3 overflow-y-auto"
    >
      <Header :editingAvatar="editingAvatar"></Header>
      <Preview :editingAvatar="editingAvatar"></Preview>
      <Footer :avatar-list="avatarList"></Footer>
    </div>
    <Editor
      class="md:basis-5/12 2xl:basis-4/12 basis-6/12 w-full"
      :editingAvatar="editingAvatar"
      :updateColor="updateColor"
      :updateRadius="updateRadius"
      :updateEffect="updateEffect"
      :updateEyes="updateEyes"
    ></Editor>
  </div>
</template>
