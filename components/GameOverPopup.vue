<template>
  <Popup>
    <div class="text-center p-4">
      <h1 class="text-2xl font-main text-red-400">Good Job!</h1>
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
          <img src="@/assets/images/gallery.svg" class="invert h-6 mr-2"/> Exoplanets
        </Pressable>
      </div>
      <div v-if="new_items.length > 0" class="font-body mt-4">
        <p class="mb-2">Exoplanets discovered:</p>
				<div class="gallery-grid grid grid-cols-2 gap-2 place-items-center mt-2">
					<Pressable v-for="item in new_items" class="bg-white shadow-md rounded-lg p-2 mb-2"
					@click="view(item)">
						<Photocard :item="item" />
					</Pressable>
				</div>
      </div>

			<ViewPopup v-if="show_view_popup" :item="planet_to_view" @close="show_view_popup = false"/>

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

const show_view_popup = ref(false)
const planet_to_view = ref();
function view(planet) {
	planet_to_view.value = planet;
	show_view_popup.value = true;
}
</script>