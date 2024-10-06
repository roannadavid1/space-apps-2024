<template>
	<div class="pressable w-full h-full duration-100 cursor-pointer" :class="{'pressed': pressed}"
		@mousedown="pressed = true" @mouseup="pressed = false"
		@touchstart.passive="pressed = true" @touchend.passive="pressed = false"
	>
		<slot />
	</div>
</template>
  
<script setup>
import { useGameStore } from '~/store/game'
const gameStore = useGameStore()

const pressed = ref(false)

</script>

<style scoped>
.pressable {
	transform-origin: center bottom 0px;
	transform: matrix(1, 0, 0, 1, 0, 0);
}

.pressed {
	transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}
</style>