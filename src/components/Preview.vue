<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { IAvatar } from '@/types/avatar'
import type { IUpdateId } from '@/types/updateId'
import { ref, toRefs, watch, type PropType } from 'vue'
import Avatar from './Avatar.vue'

const props = defineProps({
  editingAvatar: {
    required: true,
    type: Object as PropType<IAvatar>
  },
  updateId: {
    type: Function as PropType<IUpdateId>,
    required: true
  }
})

const id = ref(props.editingAvatar.id)

watch(
  () => props.editingAvatar.id,
  (newVal) => {
    id.value = newVal
  }
)
</script>
<template>
  <div class="grow flex flex-col items-center justify-center w-4/5 space-y-3">
    <Avatar
      id="preview"
      class="lg:max-w-lg w-4/5 max-w-[200px]"
      :color="editingAvatar.color"
      :radius="editingAvatar.radius"
      :effect="editingAvatar.effect"
      :eyes="editingAvatar.eyes"
    ></Avatar>
    <div class="flex items-center justify-between">
      <span class="dark:text-slate-50 text-slate-900 md:text-3xl cartograph-cf-regular text-xl"
        >&lt;</span
      >

      <input
        v-model="id"
        @change="updateId(id)"
        class="dark:text-slate-50 text-slate-900 animate-bounce md:text-3xl cartograph-cf-regular hover:animate-none focus:animate-none w-3/5 text-xl text-center bg-transparent outline-none"
      />
      <span class="dark:text-slate-50 text-slate-900 md:text-3xl cartograph-cf-regular text-xl"
        >/&gt;</span
      >
    </div>

    <canvas id="canvas" class="hidden"></canvas>
  </div>
</template>
<style></style>
