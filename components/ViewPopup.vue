<template>
  <Popup @click="close" @blur="close" class="cursor-pointer">
    <img src="@/assets/images/close.svg" class="h-5 mb-4 float-right"/>

    <div class="w-full aspect-square mb-4 bg-blue-400 flex items-center justify-center relative">
      <p class="absolute -top-7 font-body text-sm">Hypothetical visualization</p>
      <NuxtImg class="w-full" :src="`/images/${item.image}.jpg`" loading="lazy"/>
    </div>

    <p class="text-3xl font-main capitalize">{{item.name}}</p>
    <p class="mb-2 text-md font-main text-blue-400">{{item.tagline}}</p>

    <div class="w-full my-6">
      <p class="mb-2 text-body text-md">
        <span class="font-bold">Size: </span>
        <span class="font-main text-pink-700">
          {{ item.name }}
        </span>
        vs 
        <span class="font-main"
        :class="`${item.comparison == 'Earth' ? 'text-sky-400' : 'text-orange-400'}`">
          {{ item.comparison }}
        </span>
      </p>
      <div class="w-full flex flex-row justify-between items-center">
        <div class="w-3/5 text-sm font-body">
          {{ is_larger_than_earth ? 'Larger than ' : 'Smaller than ' }}
          <span class="text-sky-400 font-main">Earth</span>
          <br>
          {{ is_larger_than_jupiter ? 'Larger than ' : 'Smaller than ' }}
          <span class="text-orange-400 font-main">Jupiter</span>

          <div class="w-full text-xs mt-4 font-main">
            <div class="flex flex-row items-center justify-end pr-2">
              <span class="text-pink-700">{{ item.name }}</span>
              <div class="w-3 h-3 ml-2 bg-pink-700"></div>
            </div>
            <div v-if="item.comparison == 'Earth'" class="flex flex-row items-center justify-end pr-2">
              <span class="text-sky-400">Earth</span>
              <div class="w-3 h-3 ml-2 bg-sky-400"></div>
            </div>
            <div v-else class="flex flex-row items-center justify-end pr-2">
              <span class="text-orange-400">Jupiter</span>
              <div class="w-3 h-3 ml-2 bg-orange-400"></div>
            </div>
          </div>
        </div>

        <div class="w-2/5">
          <div class="relative w-full aspect-square flex items-center justify-center">
            <template v-if="item.comparison == 'Jupiter'">
              <div class="w-full absolute aspect-square rounded-full bg-cover bg-center"
              :class="[is_larger_than_jupiter ? 'bg-pink-700' : `bg-[url('/images/jupiter-icon.png')]`]"></div>
              <div class="absolute aspect-square rounded-full bg-cover bg-center"
              :class="[is_larger_than_jupiter ? `bg-[url('/images/jupiter-icon.png')]` : 'bg-pink-700']"
              :style="`width: ${smaller_planet_size}%`"></div>
            </template>
            <template v-else>
              <div class="w-full absolute aspect-square rounded-full bg-cover bg-center"
              :class="[is_larger_than_earth ? 'bg-pink-700' : `bg-[url('/images/earth-icon.png')]`]"></div>
              <div class="absolute aspect-square rounded-full bg-cover bg-center"
              :class="[is_larger_than_earth ? `bg-[url('/images/earth-icon.png')]` : 'bg-pink-700']"
              :style="`width: ${smaller_planet_size}%`"></div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 place-items-center my-2 font-body">
      <div class="text-center bg-slate-100 w-full py-2 rounded">
        <span class="text-sm">How far away<br>from Earth?</span>
        <p class="flex flex-row items-center justify-center text-3xl font-main mt-4 text-blue-800">
          <img src="@/assets/images/flashlight.svg" class="h-8 mr-2"/>
          {{ item.distance }}
        </p>
        <span class="text-sm font-main text-blue-800">light-years</span>
      </div>
      <div class="text-center bg-slate-100 w-full py-2 rounded">
        <span class="text-sm">Travel time by<br>car (60mph)</span>
        <p class="flex flex-row items-center justify-center text-3xl font-main mt-4 text-blue-800">
          <img src="@/assets/images/car.svg" class="h-8 mr-2"/>
          {{ item.car_travel }}
        </p>
        <span class="text-sm font-main text-blue-800">{{ item.unit_travel }} years</span>
      </div>
    </div>

    <p class="font-body text-sm mt-4">
      <span class="font-bold">Type: </span>{{item.type_name}}
    </p>
    <p class="font-body text-sm">
      <span class="font-bold">Discovered: </span>{{item.discovery}}
    </p>

    <p class="font-body text-sm mt-4">{{item.description}}</p>

    <NuxtLink :to="`https://science.nasa.gov/exoplanet-catalog/${item.id}`" target="_blank">
      <div class="flex items-center justify-center cursor-pointer h-8 my-6">
        <Pressable class="flex items-center justify-center bg-pink-700 rounded-full px-5 text-white font-main">
          <img src="@/assets/images/satellite.svg" class="invert h-5 mr-2"/> Learn more!
        </Pressable>
      </div>
    </NuxtLink>

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

// a computed ref
const is_larger_than_earth = computed(() => {
  if (props.item.comparison == 'Earth' && props.item.radius_multiplier > 1) {
    return true
  } else if (props.item.comparison == 'Jupiter') {
    return true
  }
  return false
})

const is_larger_than_jupiter = computed(() => {
  if (props.item.comparison == 'Jupiter' && props.item.radius_multiplier > 1) {
    return true
  } else if (props.item.comparison == 'Earth') {
    return false
  }
  return false
})

const smaller_planet_size = computed(() => {
  if (props.item.radius_multiplier > 1) {
    return (1 / props.item.radius_multiplier) * 100
  }
  return props.item.radius_multiplier * 100
})

function close() {
  emit('close')
}
</script>