<template>
	<div class="w-full h-full overflow-hidden">
		<div class="flex flex-row justify-between items-center h-8 text-white font-main mb-8">
			<div class="flex flex-row">
				<button class="size-6 mr-4" @click="$router.back()">
					<Pressable>
						<img src="@/assets/images/back.svg" class="invert"/>
					</Pressable>
				</button>
				<button class="size-6" @click="goHome">
					<Pressable>
						<img src="@/assets/images/home.svg" class="invert"/>
					</Pressable>
				</button>
			</div>
			<NuxtLink to="https://eyes.nasa.gov/apps/exo/#/" target="_blank">
				<div class="flex items-center justify-center cursor-pointer h-8">
					<Pressable class="flex items-center justify-center border border-amber-300 rounded-full px-5">
						<img src="@/assets/images/satellite.svg" class="invert h-5 mr-2"/> More Exoplanets!
					</Pressable>
				</div>
			</NuxtLink>
		</div>
		<div class="gallery overflow-scroll">
			<div v-for="(type, index) in gallery_types" :class="[index == 0 ? 'mt-2' : 'mt-8', index == gallery_types.length - 1 ? 'mb-8' : '']">
				<details open class="bg-black">
					<summary class="flex flex-col mb-4 sticky top-0 z-10 bg-black cursor-pointer">
						<div class="flex flex-row justify-between cursor-pointer font-main text-amber-300 text-xl">
							<h2>{{type.name}}</h2>
							<div class="arrow">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
								</svg>
							</div>
						</div>
						<p class="text-sm text-body text-white mb-4">
							{{type.description}}
						</p>
					</summary>
					<div class="gallery-grid grid grid-cols-2 gap-2 place-items-center mt-2">
						<Pressable v-for="planet in type.planets" class="bg-white shadow-md rounded-lg p-2 mb-2"
						@click="view(planet)">
							<Photocard :item="planet" />
						</Pressable>
					</div>
				</details>
			</div>
		</div>

		<ViewPopup v-if="show_view_popup" :item="planet_to_view" @close="show_view_popup = false" />

	</div>
</template>
  
<script setup>
import { types, planets } from '@/assets/data.json'

const router = useRouter()

const gallery_types = ref([])
gallery_types.value = cloneObject(types)
const gallery_planets = cloneObject(planets)

gallery_planets.forEach((planet) => {
	const type = gallery_types.value.find((c) => c.id == planet.type)
	if (!type.planets) {
		type.planets = []
	}
	type.planets.push(planet)
})

const show_view_popup = ref(false)
const planet_to_view = ref();
function view(planet) {
	planet_to_view.value = planet;
	show_view_popup.value = true;
}

function goHome() {
	navigateTo({path: '/'})
}

</script>

<style>
.gallery {
	height: calc(100% - 4rem);
}

details[open] .arrow {
	transform: rotate(180deg);
}

/* Hide scrollbar for Chrome, Safari and Opera */
.gallery::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.gallery {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>