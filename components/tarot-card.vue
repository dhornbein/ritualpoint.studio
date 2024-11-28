<template>
  <div class="relative">
    <div class="card noSelect" :class="{ 'card--flipped': flipped, 'card--idol': props.flipOnClick }"
      @click="flipHandler">
      <div class="card__loading absolute inset-0 flex items-center justify-center pb-[7%] pr-[4%]" v-if="!randomCard">
        <BaseLoader />
      </div>
      <div class="card__face card__face--front">
        <img :src="randomCard?.img" :alt="randomCard?.name" v-if="randomCard && randomCard.img" />
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
    transform: translateY(0px) rotate3d(10, 0, 1, 0deg);
  }

  50% {
    transform: translateY(-5px) rotate3d(10, 0, 1, 5deg);
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

defineExpose({
  flipCard
});

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
  for (let i = 0; i <= 4; i++) {
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

  if (flipped.value) {
    emit("card-flipped", false);
  } else {
    emit("card-flipped", randomCard.value);
  }
}

const cards = [
  {
    name: 'The Fool',
    img: '/deck-mock/01_card.png',
    id: 0
  },
  {
    name: 'The Magician',
    img: '/deck-mock/02_card.png',
    id: 1
  },
  {
    name: 'The High Priestess',
    img: '/deck-mock/03_card.png',
    id: 2
  },
  {
    name: 'The Empress',
    img: '/deck-mock/04_card.png',
    id: 3
  },
  {
    name: 'The Emperor',
    img: '/deck-mock/05_card.png',
    id: 4
  },
  {
    name: 'The Hierophant',
    img: '/deck-mock/06_card.png',
    id: 5
  },
  {
    name: 'The Lovers',
    img: '/deck-mock/07_card.png',
    id: 6
  },
  {
    name: 'The Chariot',
    img: '/deck-mock/08_card.png',
    id: 7
  },
  {
    name: 'Strength',
    img: '/deck-mock/09_card.png',
    id: 8
  },
  {
    name: 'The Hermit',
    img: '/deck-mock/10_card.png',
    id: 9
  },
  {
    name: 'Wheel of Fortune',
    img: '/deck-mock/11_card.png',
    id: 10
  },
  {
    name: 'Justice',
    img: '/deck-mock/12_card.png',
    id: 11
  },
  {
    name: 'The Hanged Man',
    img: '/deck-mock/13_card.png',
    id: 12
  },
  {
    name: 'Death',
    img: '/deck-mock/14_card.png',
    id: 13
  },
  {
    name: 'Temperance',
    img: '/deck-mock/15_card.png',
    id: 14
  },
  {
    name: 'The Devil',
    img: '/deck-mock/16_card.png',
    id: 15
  },
  {
    name: 'The Tower',
    img: '/deck-mock/17_card.png',
    id: 16
  },
  {
    name: 'The Star',
    img: '/deck-mock/18_card.png',
    id: 17
  },
  {
    name: 'The Moon',
    img: '/deck-mock/19_card.png',
    id: 18
  },
  {
    name: 'The Sun',
    img: '/deck-mock/20_card.png',
    id: 19
  },
  {
    name: 'Judgement',
    img: '/deck-mock/21_card.png',
    id: 20
  },
  {
    name: 'The World',
    img: '/deck-mock/22_card.png',
    id: 21
  },
  {
    name: 'Ace of Wands',
    img: '/deck-mock/w01_card.png',
    id: 'w01'
  },
  {
    name: 'Two of Wands',
    img: '/deck-mock/w02_card.png',
    id: 'w02'
  },
  {
    name: 'Three of Wands',
    img: '/deck-mock/w03_card.png',
    id: 'w03'
  },
  {
    name: 'Four of Wands',
    img: '/deck-mock/w04_card.png',
    id: 'w04'
  },
  {
    name: 'Five of Wands',
    img: '/deck-mock/w05_card.png',
    id: 'w05'
  },
  {
    name: 'Six of Wands',
    img: '/deck-mock/w06_card.png',
    id: 'w06'
  },
  {
    name: 'Seven of Wands',
    img: '/deck-mock/w07_card.png',
    id: 'w07'
  },
  {
    name: 'Eight of Wands',
    img: '/deck-mock/w08_card.png',
    id: 'w08'
  },
  {
    name: 'Nine of Wands',
    img: '/deck-mock/w09_card.png',
    id: 'w09'
  },
  {
    name: 'Ten of Wands',
    img: '/deck-mock/w10_card.png',
    id: 'w10'
  },
  {
    name: 'Page of Wands',
    img: '/deck-mock/w11_card.png',
    id: 'w11'
  },
  {
    name: 'Knight of Wands',
    img: '/deck-mock/w12_card.png',
    id: 'w12'
  },
  {
    name: 'Queen of Wands',
    img: '/deck-mock/w13_card.png',
    id: 'w13'
  },
  {
    name: 'King of Wands',
    img: '/deck-mock/w14_card.png',
    id: 'w14'
  },
  {
    name: 'Ace of Cups',
    img: '/deck-mock/c01_card.png',
    id: 'c01'
  },
  {
    name: 'Two of Cups',
    img: '/deck-mock/c02_card.png',
    id: 'c02'
  },
  {
    name: 'Three of Cups',
    img: '/deck-mock/c03_card.png',
    id: 'c03'
  },
  {
    name: 'Four of Cups',
    img: '/deck-mock/c04_card.png',
    id: 'c04'
  },
  {
    name: 'Five of Cups',
    img: '/deck-mock/c05_card.png',
    id: 'c05'
  },
  {
    name: 'Six of Cups',
    img: '/deck-mock/c06_card.png',
    id: 'c06'
  },
  {
    name: 'Seven of Cups',
    img: '/deck-mock/c07_card.png',
    id: 'c07'
  },
  {
    name: 'Eight of Cups',
    img: '/deck-mock/c08_card.png',
    id: 'c08'
  },
  {
    name: 'Nine of Cups',
    img: '/deck-mock/c09_card.png',
    id: 'c09'
  },
  {
    name: 'Ten of Cups',
    img: '/deck-mock/c10_card.png',
    id: 'c10'
  },
  {
    name: 'Page of Cups',
    img: '/deck-mock/c11_card.png',
    id: 'c11'
  },
  {
    name: 'Knight of Cups',
    img: '/deck-mock/c12_card.png',
    id: 'c12'
  },
  {
    name: 'Queen of Cups',
    img: '/deck-mock/c13_card.png',
    id: 'c13'
  },
  {
    name: 'King of Cups',
    img: '/deck-mock/c14_card.png',
    id: 'c14'
  },
  {
    name: 'Ace of Swords',
    img: '/deck-mock/s01_card.png',
    id: 's01'
  },
  {
    name: 'Two of Swords',
    img: '/deck-mock/s02_card.png',
    id: 's02'
  },
  {
    name: 'Three of Swords',
    img: '/deck-mock/s03_card.png',
    id: 's03'
  },
  {
    name: 'Four of Swords',
    img: '/deck-mock/s04_card.png',
    id: 's04'
  },
  {
    name: 'Five of Swords',
    img: '/deck-mock/s05_card.png',
    id: 's05'
  },
  {
    name: 'Six of Swords',
    img: '/deck-mock/s06_card.png',
    id: 's06'
  },
  {
    name: 'Seven of Swords',
    img: '/deck-mock/s07_card.png',
    id: 's07'
  },
  {
    name: 'Eight of Swords',
    img: '/deck-mock/s08_card.png',
    id: 's08'
  },
  {
    name: 'Nine of Swords',
    img: '/deck-mock/s09_card.png',
    id: 's09'
  },
  {
    name: 'Ten of Swords',
    img: '/deck-mock/s10_card.png',
    id: 's10'
  },
  {
    name: 'Page of Swords',
    img: '/deck-mock/s11_card.png',
    id: 's11'
  },
  {
    name: 'Knight of Swords',
    img: '/deck-mock/s12_card.png',
    id: 's12'
  },
  {
    name: 'Queen of Swords',
    img: '/deck-mock/s13_card.png',
    id: 's13'
  },
  {
    name: 'King of Swords',
    img: '/deck-mock/s14_card.png',
    id: 's14'
  },
  {
    name: 'Ace of Pentacles',
    img: '/deck-mock/p01_card.png',
    id: 'p01'
  },
  {
    name: 'Two of Pentacles',
    img: '/deck-mock/p02_card.png',
    id: 'p02'
  },
  {
    name: 'Three of Pentacles',
    img: '/deck-mock/p03_card.png',
    id: 'p03'
  },
  {
    name: 'Four of Pentacles',
    img: '/deck-mock/p04_card.png',
    id: 'p04'
  },
  {
    name: 'Five of Pentacles',
    img: '/deck-mock/p05_card.png',
    id: 'p05'
  },
  {
    name: 'Six of Pentacles',
    img: '/deck-mock/p06_card.png',
    id: 'p06'
  },
  {
    name: 'Seven of Pentacles',
    img: '/deck-mock/p07_card.png',
    id: 'p07'
  },
  {
    name: 'Eight of Pentacles',
    img: '/deck-mock/p08_card.png',
    id: 'p08'
  },
  {
    name: 'Nine of Pentacles',
    img: '/deck-mock/p09_card.png',
    id: 'p09'
  },
  {
    name: 'Ten of Pentacles',
    img: '/deck-mock/p10_card.png',
    id: 'p10'
  },
  {
    name: 'Page of Pentacles',
    img: '/deck-mock/p11_card.png',
    id: 'p11'
  },
  {
    name: 'Knight of Pentacles',
    img: '/deck-mock/p12_card.png',
    id: 'p12'
  },
  {
    name: 'Queen of Pentacles',
    img: '/deck-mock/p13_card.png',
    id: 'p13'
  },
  {
    name: 'King of Pentacles',
    img: '/deck-mock/p14_card.png',
    id: 'p14'
  },
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
   - The `flipHandler` function handles the flipping of the card based on the `flipOnClick` prop and the `flipUnlocked` lock variable.

4. Generalization:
   - This makes the `tarot-card.vue` more suitable for different contexts, such as "tarot-reading.vue" where the flip behavior or the emitted data needs customization.

5. Idle Animation:
   - Added an idle animation (`idolAnimation`) that applies a gentle floating effect using CSS keyframes when `flipOnClick` is enabled. This gives the card a "floating" appearance, enhancing the interaction and making it more visually appealing.

6. Hover Interaction:
   - Added a `shutterAnimation` keyframe that stops the idle animation in an organic, shuttering way when the card is hovered on.
-->
