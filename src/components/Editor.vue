<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, type PropType } from 'vue'

import ColorSelector from './ColorSelector.vue'
import Slider from './Slider.vue'
import Divider from './Divider.vue'
import EditorSection from './EditorSection.vue'
import AvatarCode from './AvatarCode.vue'

import type { IAvatar } from '@/types/avatar'
import type { IUpdateColor } from '@/types/updateColor'
import type { IUpdateRadius } from '@/types/updateRadius'
import type { IUpdateEffect } from '@/types/updateEffect'
import type { IUpdateEyes } from '@/types/updateEyes'

const props = defineProps({
  editingAvatar: { type: Object as PropType<IAvatar>, required: true },
  updateColor: { type: Function as PropType<IUpdateColor>, required: true },
  updateRadius: { type: Function as PropType<IUpdateRadius>, required: true },
  updateEffect: { type: Function as PropType<IUpdateEffect>, required: true },
  updateEyes: { type: Function as PropType<IUpdateEyes>, required: true },

  isMobileDevice: { type: Boolean, required: true },
  isEditorOpening: { type: Boolean, required: true },
  toggleEditor: { type: Function, required: true }
})

const code = computed(() => {
  const c = `{
    "color": {
        "primaryColor": "${props.editingAvatar.color.primaryColor}",
        "secondaryColor": {
            "auto": false,
            "value": "${props.editingAvatar.color.secondaryColor}"
        },
        "backgroundColor": "${props.editingAvatar.color.backgroundColor}",
    },
    "eyes": {
        "left": {
            "scale": "${props.editingAvatar.eyes.leftEye.scale}",
            "x": "${props.editingAvatar.eyes.leftEye.x}",
            "y": "${props.editingAvatar.eyes.leftEye.y}"
        },
        "right": {
            "scale": "${props.editingAvatar.eyes.rightEye.scale}",
            "x": "${props.editingAvatar.eyes.rightEye.x}",
            "y": "${props.editingAvatar.eyes.rightEye.y}"
        }
    },
    "effect": {
        "blur": "${props.editingAvatar.effect.blur}",
    },
    "roundCorner": {
        "borderRadius": "${props.editingAvatar.radius}",
    },
    "decoration": null
}`
  return c
})
</script>
<template>
  <div
    class="md:rounded-xl transition-colors dark:border-slate-700 dark:bg-slate-800 border-slate-100 rounded-t-xl md:border md:max-w-[400px] h-full p-4 overflow-y-auto bg-white border-t shadow-xl space-y-4 shadow-slate-900/5 dark:shadow-black/20"
  >
    <button
      v-if="isMobileDevice"
      @click="() => toggleEditor()"
      class="text-slate-700 hover:dark:bg-slate-50/10 hover:bg-slate-800/10 group dark:text-slate-100 flex items-center justify-center p-1 mx-auto transition-colors bg-transparent rounded-full"
    >
      <i
        class="ph-caret-up group-hover:scale-x-75 group-hover:scale-y-125 transition-transform"
        style="font-size: 20px"
      ></i>
    </button>

    <EditorSection title-icon="ph-palette" title-text="Color/颜色">
      <template #content>
        <div class="space-y-1.5">
          <h3 class="text-slate-700  transition-colors cartograph-cf-regular dark:text-slate-100">
            primary color/首要颜色
          </h3>
          <ColorSelector
            :value="editingAvatar.color?.primaryColor || '#61BCE2'"
            @update-value="(event) => updateColor('primaryColor', event)"
          ></ColorSelector>
        </div>
        <div class="space-y-1.5">
          <h3 class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors">
            secondary color/次要颜色
          </h3>
          <ColorSelector
            :value="editingAvatar.color?.secondaryColor || '#90D0EB'"
            @update-value="(event) => updateColor('secondaryColor', event)"
          ></ColorSelector>
        </div>
        <div class="space-y-1.5">
          <h3 class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors">
            background color/背景颜色
          </h3>
          <ColorSelector
            :value="editingAvatar.color?.backgroundColor || '#D2F4F0'"
            @update-value="(event) => updateColor('backgroundColor', event)"
          ></ColorSelector>
        </div>
      </template>
    </EditorSection>
    <Divider></Divider>

    <EditorSection title-icon="ph-atom" title-text="Eyes/眼睛">
      <template v-slot:content>
        <div class="space-y-2">
          <h3
            class="cartograph-cf-regular text-slate-800 dark:text-slate-50 text-base transition-colors"
          >
            left/左
          </h3>
          <div class="space-y-2">
            <div class="flex items-center justify-between space-x-4">
              <h4
                class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors"
              >
                Scale
              </h4>
              <Slider
                class="basis-4/5"
                :max="300"
                :range="editingAvatar.eyes.leftEye.scale || 1"
                @update-range="
                  (event) => {
                    updateEyes('leftEye', 'scale', event)
                  }
                "
              ></Slider>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <h4
                class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors"
              >
                X
              </h4>
              <Slider
                class="basis-4/5"
                :range="editingAvatar.eyes.leftEye.x || 0"
                :min="-50"
                :max="150"
                @update-range="
                  (event) => {
                    updateEyes('leftEye', 'x', event)
                  }
                "
              ></Slider>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <h4
                class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors"
              >
                Y
              </h4>
              <Slider
                class="basis-4/5"
                :range="editingAvatar.eyes.leftEye.y || 0"
                :min="-80"
                :max="80"
                @update-range="
                  (event) => {
                    updateEyes('leftEye', 'y', event)
                  }
                "
              ></Slider>
            </div>
          </div>
        </div>
        <div class="space-y-2">
          <h3
            class="cartograph-cf-regular text-slate-800 dark:text-slate-50 text-base transition-colors"
          >
            right/右
          </h3>
          <div class="space-y-2">
            <div class="flex items-center justify-between space-x-4">
              <h4
                class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors"
              >
                Scale
              </h4>
              <Slider
                class="basis-4/5"
                :range="editingAvatar.eyes.rightEye.scale || 1"
                :max="300"
                @update-range="
                  (event) => {
                    updateEyes('rightEye', 'scale', event)
                  }
                "
              ></Slider>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <h4
                class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors"
              >
                X
              </h4>
              <Slider
                class="basis-4/5"
                :range="editingAvatar.eyes.rightEye.x || 0"
                :min="-100"
                :max="60"
                @update-range="
                  (event) => {
                    updateEyes('rightEye', 'x', event)
                  }
                "
              ></Slider>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <h4
                class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors"
              >
                Y
              </h4>
              <Slider
                class="basis-4/5"
                :range="editingAvatar.eyes.rightEye.y || 0"
                :min="-80"
                :max="80"
                @update-range="
                  (event) => {
                    updateEyes('rightEye', 'y', event)
                  }
                "
              ></Slider>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:remark>
        <p class="text-slate-300 dark:text-slate-500 text-xs font-light transition-colors">
          *大小眼往往被作为判定高智慧人士的依据之一
        </p>
      </template>
    </EditorSection>
    <Divider></Divider>

    <EditorSection title-icon="ph-magic-wand" title-text="Effect/特效">
      <template v-slot:content>
        <div class="flex items-center justify-between space-x-4">
          <h4 class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors">
            Blur
          </h4>
          <Slider
            :max="20"
            class="basis-4/5"
            :range="editingAvatar.effect?.blur || 0"
            @update-range="(event) => updateEffect('blur', event)"
          ></Slider>
        </div>
      </template>
      <template v-slot:remark
        ><p class="text-slate-300 dark:text-slate-500 text-xs font-light transition-colors">
          *我在制作的过程中，保留了一部分模糊，因为我觉得，只有保留一部分模糊，才知道你用的是网图（骄傲）.jpg
        </p></template
      >
    </EditorSection>
    <Divider></Divider>

    <EditorSection title-icon="ph-planet" title-text="Round Corner/圆角">
      <template v-slot:content>
        <div class="flex items-center justify-between space-x-4">
          <h4 class="cartograph-cf-regular text-slate-700 dark:text-slate-100 transition-colors">
            Radius
          </h4>
          <Slider
            class="basis-4/5"
            :range="editingAvatar.radius || 0"
            :max="300"
            @update-range="updateRadius"
          ></Slider>
        </div>
      </template>
    </EditorSection>
    <Divider></Divider>

    <EditorSection title-icon="ph-code" title-text="Code/咒语">
      <template v-slot:content>
        <AvatarCode :code="code"></AvatarCode>
      </template>
    </EditorSection>
  </div>
</template>
