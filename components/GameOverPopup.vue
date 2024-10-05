<template>
  <Popup>
    <div class="text-center p-4">
      <h1 class="text-2xl font-main text-red-400">Good Job!</h1>
      <div v-if="new_items.length > 0" class="font-body mt-4">
        <p class="mb-2">Exoplanets discovered:</p>
        <p class="font-main" v-for="item in new_items">{{item.name}}</p>
      </div>

      <div class="w-40 h-10 mt-4 mx-auto font-main">
        <Pressable @click="goHome" class="font-main text-white bg-amber-300 rounded-full w-40 h-10 p-2 flex items-center justify-center">
          <img src="@/assets/images/home.svg" class="invert h-6 mr-2"/> Home
        </Pressable>
      </div>
      <div class="w-40 h-10 mt-2 mx-auto font-main">
        <Pressable @click="playAgain" class="font-main text-white bg-teal-300 rounded-full w-40 h-10 p-2 flex items-center justify-center">
          <img src="@/assets/images/play.svg" class="invert h-6 mr-2"/> Play again
        </Pressable>
      </div>
      <div class="w-40 h-10 mt-2 mx-auto font-main">
        <Pressable @click="goGallery" class="font-main text-white bg-sky-300 rounded-full w-40 h-10 p-2 flex items-center justify-center">
          <img src="@/assets/images/gallery.svg" class="invert h-6 mr-2"/> Gallery
        </Pressable>
      </div>
    </div>
  </Popup>
</template>

<script setup>
const emit = defineEmits(['playAgain']);

const props = defineProps({
  new_items: {
    type: Array,
    default: []
  },
});

function goHome() {
  navigateTo({path: '/'})
}

function goGallery() {
  navigateTo({path: '/gallery'})
}

function playAgain() {
  emit('playAgain')
}
</script>