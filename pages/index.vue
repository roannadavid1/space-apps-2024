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
			<div class="w-[4/5] h-2/5 mt-4 mb-8 flex justify-center items-center cursor-pointer">
				<ClientOnly>
					<NuxtImg :src="'/images/' + home_image" class="w-full h-full object-contain" @click="getRandomPlanet()"/>
				</ClientOnly>
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
</template>

<script setup>
import { planets } from '@/assets/data.json'

const home_image = ref('')
let prev_image = null
function getRandomPlanet() {
	let random_index = Math.floor(Math.random() * planets.length);
	while(prev_image == random_index) {
		random_index = Math.floor(Math.random() * planets.length);
	}
	home_image.value = planets[random_index].image + '.jpg';
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