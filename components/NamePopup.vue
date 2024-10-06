<template>
  <Popup @click="close" @blur="close" class="cursor-pointer">
    <img src="@/assets/images/close.svg" class="h-5 mb-4 float-right"/>

		<h1 class="text-xl mt-8 mb-8 font-body">
			How do exoplanets get their names?
		</h1>

		<div class="game-grid grid grid-cols-3 gap-1">
			<div class="w-full text-center">
				<p class="text-2xl font-main text-emerald-600">HD</p>
				<p class="text-sm font-body text-emerald-600">telescope or survey</p>
			</div>
			<div class="w-full text-center">
				<p class="text-2xl font-main text-blue-600">189733</p>
				<p class="text-sm font-body text-blue-600">catalog order</p>
			</div>
			<div class="w-full text-center">
				<p class="text-2xl font-main text-indigo-600">b</p>
				<p class="text-sm font-body text-indigo-600">planet order</p>
			</div>
		</div>

		<p class="text-xs mt-4 mb-8">Example: HD 189733 b - A blue-ish planet where it may rain glass sideways</p>

		<div class="font-body text-sm">
			<p>
				Exoplanet names can look long and complicated at first, but they have a logic behind them that is important to scientists cataloging thousands of planets.
			</p>
			<br>
			<p>
				The first part of the name is usually the telescope or survey that found it. In this case <b>"HD"</b> stands for the "Henry Draper Catalogue,” a widely-used star catalog.
			</p>
			<br>
			<p>The number <b>189733</b> is the order in which the star was catalogued by position (the 189,733rd star added to the catalog).
			</p>
			<br>
			<p>
				The lowercase letter <b>"b"</b> stands for the planet, in the order in which the planet was found. The first planet found is always named b, with ensuing planets named c, d, e, f and so on.
			</p>
			<br>
			<p>
				The star that the exoplanet orbits is usually the undeclared <b>"A"</b> of the system, which can be useful if the system contains multiple stars, which themselves may be designated B, C. (Stars are designated with capital letters; planets receive lowercase designations.) 
			</p>
			<br>
			<p>
				If a bunch of exoplanets around the same star are found at once, the planet closest to its star is named b with more distant planets named c, d, e and so on.
			</p>
		</div>



		<!-- <div class="text-4xl font-main text-center">
			<span>HD</span>&nbsp;
			<span>189733</span>&nbsp;
			<span>b</span>
		</div>

		<table class="table-auto">
			<tbody>
				<tr>
					<td>HD</td>
					<td>
						The first part of the name is usually the telescope or survey that found it. <br>
						In this case "HD" stands for the "Henry Draper Catalogue,” a widely-used star catalog.
					</td>
				</tr>
			</tbody>
		</table>

		<div class="font-body text-sm">
			<p>
				Exoplanet names can look long and complicated at first, but they have a logic behind them that is important to scientists cataloging thousands of planets.
			</p>
		</div> -->
<!-- 
		<p>
			Exoplanet names can look long and complicated at first, especially in comparison to names like Venus and Mars. But they have a logic behind them that is important to scientists cataloging thousands of planets.
		</p>

		<p>
			Let's use HD 189733 b (a blue-ish planet where it may rain glass sideways) as an example. The first part of the name is usually the telescope or survey that found it. In this case "HD" stands for the "Henry Draper Catalogue,” a widely-used star catalog. The number 189733 is the order in which the star was catalogued by position (the 189,733rd star added to the catalog).
		</p>

		<p>
			The lowercase letter "b" stands for the planet, in the order in which the planet was found. The first planet found is always named b, with ensuing planets named c, d, e, f and so on. The star that the exoplanet orbits is usually the undeclared "A" of the system, which can be useful if the system contains multiple stars, which themselves may be designated B, C. (Stars are designated with capital letters; planets receive lowercase designations.) If a bunch of exoplanets around the same star are found at once, the planet closest to its star is named b with more distant planets named c, d, e and so on.
		</p> -->

    <NuxtLink to="https://science.nasa.gov/exoplanets/how-do-exoplanets-get-their-names/" target="_blank">
      <div class="flex items-center justify-center cursor-pointer h-8 my-6 w-full">
        <Pressable class="flex items-center justify-center bg-pink-700 rounded-full px-5 text-white font-main">
          <img src="@/assets/images/satellite.svg" class="invert h-5 mr-2"/> Learn more!
        </Pressable>
      </div>
    </NuxtLink>

  </Popup>
</template>

<script setup>
const emit = defineEmits(['close']);

function close() {
  emit('close')
}
</script>