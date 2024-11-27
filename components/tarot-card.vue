<template>
  <div class="relative">
    <div class="">
      <div v-if="!flipped" class="text-center">{{ randomCard.name }}</div>
      <div v-else class="text-center text-gray-300">------</div>
    </div>
    <div class="card noSelect" :class="{ 'card--flipped': flipped, 'card--idol': props.flipOnClick }"
      @click="flipHandler">
      <div class="card__loading absolute inset-0 flex items-center justify-center pb-[7%] pr-[4%]" v-if="!randomCard">
        <BaseLoader />
      </div>
      <div class="card__face card__face--front">
        <img :src="randomCard.img" :alt="randomCard.name" v-if="randomCard" />
      </div>
      <div class="card__face card__face--back">
        <img src="/deck-mock/cover_card.png" alt="Back" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  cursor: pointer;
  position: relative;
  max-width: 90vw;
  height: 80vh;
  aspect-ratio: 0.6/1;
  perspective: 1000px;

  &__face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;

    &--front {
      transform: rotateY(0deg);
    }

    &--back {
      transform: rotateY(180deg);
    }
  }

  &--flipped {
    .card__face--front {
      transform: rotateY(180deg);
    }

    .card__face--back {
      transform: rotateY(0deg);
    }
  }

  &--idol {
    animation: idolAnimation 3s ease-in-out infinite;
  }
}

@keyframes idolAnimation {
  0% {
    transform: translateY(0px) rotate3d(10,0,1,0deg);
  }

  50% {
    transform: translateY(-10px) rotate3d(10, 0, 1, 10deg);
  }

  100% {
    transform: translateY(0px) rotate3d(10, 0, 1, 0deg);
  }
}

.noSelect {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.noSelect:focus {
  outline: none !important;
}
</style>

<script setup>
import { defineProps, ref, watch, onMounted } from 'vue';

const props = defineProps({
  flipOnClick: {
    type: Boolean,
    default: true
  },
  selectedCard: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(["card-flipped"]);

const flipped = ref(true);
const loadedCards = ref([]);
const randomCard = ref(false);

watch(
  () => props.selectedCard,
  (newCard) => {
    if (newCard) {
      randomCard.value = newCard;
    }
  },
  { immediate: true }
);

onMounted(() => {
  if (!props.selectedCard) {
    preloadCards();
  }
});

function flipHandler() {
  if (props.flipOnClick) {
    flipCard();
  }
  emit("card-flipped", randomCard.value);
}

// preload promise
function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      resolve();
    };
    img.onerror = (err) => {
      reject(err);
    };
  });
}

// preload card
async function preloadCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
  if (!loadedCards.value.includes(card)) {
    await preloadImage(card.img);
    loadedCards.value.push(card);
  } else {
    preloadCard();
  }
}

// preload 4 random cards
async function preloadCards() {
  for (let i = 0; i < 4; i++) {
    await preloadCard();
    if (i === 0) randomCard.value = loadedCards.value.shift();
  }
}

function flipCard() {
  if (!randomCard.value) return;

  if (flipped.value) {
    randomCard.value = loadedCards.value.shift();
  } else {
    preloadCard();
  }
  flipped.value = !flipped.value;
}

const cards = [
  {
    name: 'The Fool',
    img: '/deck-mock/01_card.png',
  },
  {
    name: 'The Magician',
    img: '/deck-mock/02_card.png',
  },
  {
    name: 'The High Priestess',
    img: '/deck-mock/03_card.png',
  },
  {
    name: 'The Empress',
    img: '/deck-mock/04_card.png',
  },
  {
    name: 'The Emperor',
    img: '/deck-mock/05_card.png',
  },
  // more cards...
];
</script>

<!-- Explanation:
This component has been updated to be more reusable across different contexts:

1. Props:
   - `flipOnClick`: Allows for enabling/disabling the flip on click behavior.
   - `selectedCard`: If provided, will set this card as the active card instead of selecting randomly.

2. Emits:
   - Emits a "card-flipped" event when the card is flipped, along with the card data.

3. Flip Handler:
   - The `flipHandler` function handles the flipping of the card based on the `flipOnClick` prop.

4. Generalization:
   - This makes the `tarot-card.vue` more suitable for different contexts, such as "tarot-reading.vue" where the flip behavior or the emitted data needs customization.

5. Idle Animation:
   - Added an idle animation (`idolAnimation`) that applies a gentle floating effect using CSS keyframes when `flipOnClick` is enabled. This gives the card a "floating" appearance, enhancing the interaction and making it more visually appealing.
-->
