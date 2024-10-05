<template>
  <Popup @click="close" @blur="close" class="cursor-pointer">
    <img src="@/assets/images/close.svg" class="h-5 mb-4 float-right"/>
    <div class="w-full aspect-square mb-4 bg-blue-400 flex items-center justify-center relative">
      <p class="absolute -top-7 font-body">Hypothetical visualization</p>
      <NuxtImg class="w-full" :src="`/images/${item.image}.jpg`" loading="lazy"/>
    </div>
    <p class="mb-2 text-4xl font-main capitalize">{{item.name}}</p>
    <p class="mb-2 text-lg font-main text-blue-400">{{item.tagline}}</p>
    <p class="font-body text-sm">{{item.description}}</p>
  </Popup>
</template>

<script setup>
const emit = defineEmits(['close']);

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

function close() {
  emit('close')
}
</script>