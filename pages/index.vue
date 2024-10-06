<template>
	<div class="w-full h-full overflow-hidden">
		<div class="w-full h-full flex flex-col justify-center items-center overflow-hidden">
			<h1 class="font-main text-white text-4xl text-center">Exoplanets</h1>
			<div class="mt-4 flex flex-row font-main text-white">
				&nbsp;
				<ClientOnly>
					<p class="trivia text-center text-sm">"Exoplanets are planets outside of our solar system that usually orbit another planets."</p>
				</ClientOnly>
				&nbsp;
			</div>
			<div class="w-4/5 aspect-square mt-4 mb-4 flex flex-col justify-center items-center cursor-pointer">
				<ClientOnly>
					<NuxtImg :src="`/images/${planet.image}.jpg`" class="w-full h-full object-contain" @click="getRandomPlanet()"/>
				</ClientOnly>
				<p class="w-full text-white text-sm mt-2 font-body flex flex-row items-center justify-center">
					{{ planet.name }}
					<div class="h-4 w-4">
						<Pressable @click="show_name_popup = true">
							<img src="@/assets/images/info.svg" class="invert h-4 ml-4"/>
						</Pressable>
					</div>
				</p>
			</div>
			<div class="w-60 h-12 text-xl">
				<Pressable @click="goGame" class="font-main text-white bg-amber-400 shadow-md shadow-white/20 rounded-full p-2 flex items-center justify-center">
					<img src="@/assets/images/play.svg" class="invert h-7 mr-2"/> Play
				</Pressable>
			</div>
			<div class="w-60 h-12 mt-4 text-xl">
				<Pressable @click="goGallery" class="font-main text-white bg-amber-400 shadow-md shadow-white/20 rounded-full p-2 flex items-center justify-center">
					<img src="@/assets/images/gallery.svg" class="invert h-7 mr-2"/> Exoplanets
				</Pressable>
			</div>
		</div>
	</div>

	<NamePopup v-if="show_name_popup" @close="show_name_popup = false"/>
</template>

<script setup>
import { planets } from '@/assets/data.json'

const show_name_popup = ref(false)

const planet = ref('')
let prev_image = null
function getRandomPlanet() {
	let random_index = Math.floor(Math.random() * planets.length);
	while(prev_image == random_index) {
		random_index = Math.floor(Math.random() * planets.length);
	}
	planet.value = planets[random_index];
	prev_image = random_index;
}
getRandomPlanet();

function goGame() {
	navigateTo('/game')
}
function goGallery() {
	navigateTo('/gallery')
}

</script>