<template>
  <div class="game-body h-full overflow-scroll">
    <div class="mb-8 text-white">
      <button class="size-6" @click="$router.back()">
				<Pressable>
					<img src="@/assets/images/back.svg" class="invert"/>
				</Pressable>
			</button>
    </div>
    <ClientOnly>
      <div class="game-grid grid grid-cols-4 gap-2 place-items-center">
        <Card v-for="item, index in game_array" :item="item" :index="index" @click="selectCard(item)"></Card>
      </div>
    </ClientOnly>

    <ViewPopup v-if="show_collected_popup && collected" :item="collected" @close="hideCollectedPopup"/>

    <GameOverPopup v-if="show_game_over_popup" :new_items="new_items_found" @playAgain="playAgain"/>

  </div>
</template>

<script setup>
import { useGameStore } from '~/store/game'
import { planets } from '@/assets/data.json'

const gameStore = useGameStore()

const game_array = ref([])

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateUniqueRandomCardsFromArray(array, count) {
  if (count > array.length) {
    throw new Error("Count cannot be greater than the array length.");
  }
  const shuffled_array = shuffleArray(array);
  return shuffled_array.slice(0, count);
}

let total_matched = 0
const UNIQUE_COUNT = 5
const CARD_COUNT = 20

const new_items_found = ref([])
const show_collected_popup = ref(false)

function setGame() {
  game_array.value = []
  new_items_found.value = []
  total_matched = 0

  const random_cards = generateUniqueRandomCardsFromArray(cloneObject(planets), UNIQUE_COUNT);

  while(game_array.value.length < CARD_COUNT) {
    game_array.value.push(...cloneObject(random_cards))
  }

  shuffleArray(game_array.value)

  game_array.value.forEach((card, index) => {
    card.index = index;
  });
}

if (process.client) {
  setGame()
}

let card_1 = null
let card_2 = null
let is_processing = false
function selectCard(card) {
  if (card_1 && card_2 || card.is_removed || is_processing) {
    return
  }

  card.is_selected = true;
  if (!card_1) {
    card_1 = card;
    return
  }

  card_2 = card;

  if (card_1.index == card_2.index) {
    card_2 = null;
    return;
  }

  is_processing = true

  if (card_1.id == card_2.id) {
    card_1.is_matched = true;
    card_2.is_matched = true;
    total_matched++;

    if (!gameStore.collected.includes(card_1.id)) {
      gameStore.collected.push(card_1.id);
      new_items_found.value.push(card_1);
      setTimeout(() => {
        displayCollectedPopup(card_1);
      }, 500)
    }
  }

  setTimeout(() => {
    if (card_1.id == card_2.id) {
      card_1.is_removed = true;
      card_2.is_removed = true;
    } else {
      card_1.is_selected = false;
      card_2.is_selected = false;
    }

    card_1 = null;
    card_2 = null;

    is_processing = false;

    if (total_matched == (game_array.value.length / 2) && !show_collected_popup.value) {
      displayGameOverPopup()
    }
  }, 500);

}

const collected = ref()
function displayCollectedPopup(card) {
  collected.value = card;
  show_collected_popup.value = true;
  console.log("new collection!", card.name)
}

function hideCollectedPopup() {
  show_collected_popup.value = false;
  if (total_matched == (game_array.value.length / 2)) {
    displayGameOverPopup()
  }
}

const show_game_over_popup = ref(false)
function displayGameOverPopup() {
  console.log("game over")
  show_game_over_popup.value = true;
}

function playAgain() {
  show_game_over_popup.value = false;
  setGame()
}

</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.game-body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.game-body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>