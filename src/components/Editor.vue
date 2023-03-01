<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ColorSelector from './ColorSelector.vue'
import Slider from './Slider.vue'
import Divider from './Divider.vue'
</script>
<template>
  <div
    class="shadow-slate-900/5 rounded-xl border-slate-100 h-full p-4 space-y-4 overflow-y-auto bg-white border shadow-xl"
  >
    <div name="section" class="space-y-3">
      <div name="section-title" class="flex items-center justify-between">
        <div class="items-c flex space-x-3">
          <i class="ph-palette" style="font-size: 28px"></i>
          <h2 class="cartograph-cf-regular-italic text-slate-900 text-xl">Color/颜色</h2>
        </div>
        <button class="flex items-center justify-center">
          <i class="ph-caret-down text-slate-400" style="font-size: 20px"></i>
        </button>
      </div>
      <div name="section-content" class="pl-1 space-y-3">
        <div class="space-y-1.5">
          <h3 class="cartograph-cf-regular text-slate-700">primary color/首要颜色</h3>
          <ColorSelector></ColorSelector>
        </div>
        <div class="space-y-1.5">
          <h3 class="cartograph-cf-regular text-slate-700">secondary color/次要颜色</h3>
          <ColorSelector></ColorSelector>
        </div>
        <div class="space-y-1.5">
          <h3 class="cartograph-cf-regular text-slate-700">background color/背景颜色</h3>
          <ColorSelector></ColorSelector>
        </div>
      </div>
    </div>
    <Divider></Divider>
    <div name="section" class="space-y-3">
      <div name="section-title" class="flex items-center justify-between">
        <div class="items-c flex space-x-3">
          <i class="ph-atom" style="font-size: 28px"></i>
          <h2 class="cartograph-cf-regular-italic text-slate-900 text-xl">Eyes/眼睛</h2>
        </div>
        <button class="flex items-center justify-center">
          <i class="ph-caret-down text-slate-400" style="font-size: 20px"></i>
        </button>
      </div>
      <div name="section-content" class="pl-1 space-y-3">
        <div class="space-y-2">
          <h3 class="cartograph-cf-regular text-slate-800 text-base">right/右</h3>
          <div class="space-y-2">
            <div class="flex items-center justify-between space-x-4">
              <h4 class="cartograph-cf-regular text-slate-700">Scale</h4>
              <Slider class="basis-4/5"></Slider>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <h4 class="cartograph-cf-regular text-slate-700">X</h4>
              <Slider class="basis-4/5"></Slider>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <h4 class="cartograph-cf-regular text-slate-700">Y</h4>
              <Slider class="basis-4/5"></Slider>
            </div>
          </div>
        </div>
      </div>
      <div name="section-content" class="pl-1 space-y-3">
        <div class="space-y-2">
          <h3 class="cartograph-cf-regular text-slate-800 text-base">left/左</h3>
          <div class="space-y-2">
            <div class="flex items-center justify-between space-x-4">
              <h4 class="cartograph-cf-regular text-slate-700">Scale</h4>
              <Slider class="basis-4/5"></Slider>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <h4 class="cartograph-cf-regular text-slate-700">X</h4>
              <Slider class="basis-4/5"></Slider>
            </div>
            <div class="flex items-center justify-between space-x-4">
              <h4 class="cartograph-cf-regular text-slate-700">Y</h4>
              <Slider class="basis-4/5"></Slider>
            </div>
          </div>
        </div>
      </div>
      <p class="text-slate-300 text-xs font-light">*大小眼往往被作为判定高智慧人士的依据之一</p>
    </div>
    <Divider></Divider>
    <div name="section" class="space-y-3">
      <div name="section-title" class="flex items-center justify-between">
        <div class="items-c flex space-x-3">
          <i class="ph-drop" style="font-size: 28px"></i>
          <h2 class="cartograph-cf-regular-italic text-slate-900 text-xl">Effect/特效</h2>
        </div>
        <button class="flex items-center justify-center">
          <i class="ph-caret-down text-slate-400" style="font-size: 20px"></i>
        </button>
      </div>

      <div name="section-content" class="pl-1 space-y-3">
        <div class="flex items-center justify-between space-x-4">
          <h4 class="cartograph-cf-regular text-slate-700">Blur</h4>
          <Slider class="basis-4/5"></Slider>
        </div>
      </div>
      <p class="text-slate-300 text-xs font-light">
        *我在制作的过程中，保留了一部分模糊，因为我觉得，只有保留一部分模糊，才知道你用的是网图（骄傲）.jpg
      </p>
    </div>
    <Divider></Divider>
    <div name="section" class="space-y-3">
      <div name="section-title" class="flex items-center justify-between">
        <div class="items-c flex space-x-3">
          <i class="ph-planet" style="font-size: 28px"></i>
          <h2 class="cartograph-cf-regular-italic text-slate-900 text-xl">Round Corner/圆角</h2>
        </div>
        <button class="flex items-center justify-center">
          <i class="ph-caret-down text-slate-400" style="font-size: 20px"></i>
        </button>
      </div>

      <div name="section-content" class="pl-1 space-y-3">
        <div class="flex items-center justify-between space-x-4">
          <h4 class="cartograph-cf-regular text-slate-700">Radius</h4>
          <Slider class="basis-4/5"></Slider>
        </div>
      </div>
    </div>
    <Divider></Divider>
    <div name="section" class="space-y-3">
      <div name="section-title" class="flex items-center justify-between">
        <div class="items-c flex space-x-3">
          <i class="ph-code" style="font-size: 28px"></i>
          <h2 class="cartograph-cf-regular-italic text-slate-900 text-xl">Code/咒语</h2>
        </div>
        <button class="flex items-center justify-center">
          <i class="ph-caret-down text-slate-400" style="font-size: 20px"></i>
        </button>
      </div>

      <div name="section-content" class="pl-1">
        <pre class="">
            <code class="language-json rounded-lg">
{
    "color": {
        "primaryColor": "#00ff00",
        "secondaryColor": {
            "auto": false,
            "value": "#ff00ff"
        }
    },
    "eyes": {
        "left": {
            "scale": 1.2,
            "x": 20,
            "y": 12
        },
        "right": {
            "scale": 1.2,
            "x": 20,
            "y": 12
        }
    },
    "effect": {
        "blur": 0.9
    },
    "roundCorner": {
        "borderRadius": 12
    },
    "decoration": null
}
            </code>
        </pre>
      </div>
    </div>
  </div>
</template>
<style></style>
