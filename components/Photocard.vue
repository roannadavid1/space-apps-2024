<template>
  <div v-if="item">
    <div class="w-full aspect-square bg-blue-400 flex items-center justify-center">
      <NuxtImg class="w-full" :src="`/images/${item.image}.jpg`" loading="lazy"/>
    </div>
    <p class="text-md font-main mt-4 capitalize">
      {{item.name}}
    </p>
    <p class="text-sm font-main text-blue-400">
			{{item.tagline}}
		</p>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>