<template>
  <div class="relative">
    <div class="">
      <div v-if="!flipped" class="text-center">{{ randomCard.name }}</div>
      <div v-else class="text-center text-gray-300">------</div>
    </div>
    <div class="card noSelect" :class="{'card--flipped': flipped }" @click="flipCard">
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
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &--front {
      transform: rotateX(0deg);
    }
    &--back {
      transform: rotateX(180deg);
    }
  }
  &--flipped {
    .card__face--front {
      transform: rotateX(180deg);
    }
    .card__face--back {
      transform: rotateX(0deg);
    }
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

const flipped = ref(true)
const loadedCards = ref([])
const randomCard = ref(false)

onMounted(() => {
  preloadCards()
})


// preload promise
function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      resolve()
    }
    img.onerror = (err) => {
      reject(err)
    }
  })
}

// preload card
async function preloadCard() {
  const card = cards[Math.floor(Math.random() * cards.length)]
  if (!loadedCards.value.includes(card)) {
    await preloadImage(card.img)
    console.log('loaded', card);
    loadedCards.value.push(card)
  } else {
    preloadCard()
  }
}

// preload 4 random cards
async function preloadCards() {
  for (let i = 0; i < 4; i++) {
    await preloadCard()
    if (i === 0) randomCard.value = loadedCards.value.shift()
  }
}

function flipCard() {
  if (!randomCard.value) return

  if (flipped.value) {
    randomCard.value = loadedCards.value.shift()
  } else {
    preloadCard()
  }
  flipped.value = !flipped.value
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
  {
    name: 'The Hierophant',
    img: '/deck-mock/06_card.png',
  },
  {
    name: 'The Lovers',
    img: '/deck-mock/07_card.png',
  },
  {
    name: 'The Chariot',
    img: '/deck-mock/08_card.png',
  },
  {
    name: 'Strength',
    img: '/deck-mock/09_card.png',
  },
  {
    name: 'The Hermit',
    img: '/deck-mock/10_card.png',
  },
  {
    name: 'Wheel of Fortune',
    img: '/deck-mock/11_card.png',
  },
  {
    name: 'Justice',
    img: '/deck-mock/12_card.png',
  },
  {
    name: 'The Hanged Man',
    img: '/deck-mock/13_card.png',
  },
  {
    name: 'Death',
    img: '/deck-mock/14_card.png',
  },
  {
    name: 'Temperance',
    img: '/deck-mock/15_card.png',
  },
  {
    name: 'The Devil',
    img: '/deck-mock/16_card.png',
  },
  {
    name: 'The Tower',
    img: '/deck-mock/17_card.png',
  },
  {
    name: 'The Star',
    img: '/deck-mock/18_card.png',
  },
  {
    name: 'The Moon',
    img: '/deck-mock/19_card.png',
  },
  {
    name: 'The Sun',
    img: '/deck-mock/20_card.png',
  },
  {
    name: 'Judgement',
    img: '/deck-mock/21_card.png',
  },
  {
    name: 'The World',
    img: '/deck-mock/22_card.png',
  },
  {
    name: 'Ace of Wands',
    img: '/deck-mock/w01_card.png',
  },
  {
    name: 'Two of Wands',
    img: '/deck-mock/w02_card.png',
  },
  {
    name: 'Three of Wands',
    img: '/deck-mock/w03_card.png',
  },
  {
    name: 'Four of Wands',
    img: '/deck-mock/w04_card.png',
  },
  {
    name: 'Five of Wands',
    img: '/deck-mock/w05_card.png',
  },
  {
    name: 'Six of Wands',
    img: '/deck-mock/w06_card.png',
  },
  {
    name: 'Seven of Wands',
    img: '/deck-mock/w07_card.png',
  },
  {
    name: 'Eight of Wands',
    img: '/deck-mock/w08_card.png',
  },
  {
    name: 'Nine of Wands',
    img: '/deck-mock/w09_card.png',
  },
  {
    name: 'Ten of Wands',
    img: '/deck-mock/w10_card.png',
  },
  {
    name: 'Page of Wands',
    img: '/deck-mock/w11_card.png',
  },
  {
    name: 'Knight of Wands',
    img: '/deck-mock/w12_card.png',
  },
  {
    name: 'Queen of Wands',
    img: '/deck-mock/w13_card.png',
  },
  {
    name: 'King of Wands',
    img: '/deck-mock/w14_card.png',
  },
  {
    name: 'Ace of Cups',
    img: '/deck-mock/c01_card.png',
  },
  {
    name: 'Two of Cups',
    img: '/deck-mock/c02_card.png',
  },
  {
    name: 'Three of Cups',
    img: '/deck-mock/c03_card.png',
  },
  {
    name: 'Four of Cups',
    img: '/deck-mock/c04_card.png',
  },
  {
    name: 'Five of Cups',
    img: '/deck-mock/c05_card.png',
  },
  {
    name: 'Six of Cups',
    img: '/deck-mock/c06_card.png',
  },
  {
    name: 'Seven of Cups',
    img: '/deck-mock/c07_card.png',
  },
  {
    name: 'Eight of Cups',
    img: '/deck-mock/c08_card.png',
  },
  {
    name: 'Nine of Cups',
    img: '/deck-mock/c09_card.png',
  },
  {
    name: 'Ten of Cups',
    img: '/deck-mock/c10_card.png',
  },
  {
    name: 'Page of Cups',
    img: '/deck-mock/c11_card.png',
  },
  {
    name: 'Knight of Cups',
    img: '/deck-mock/c12_card.png',
  },
  {
    name: 'Queen of Cups',
    img: '/deck-mock/c13_card.png',
  },
  {
    name: 'King of Cups',
    img: '/deck-mock/c14_card.png',
  },
  {
    name: 'Ace of Swords',
    img: '/deck-mock/s01_card.png',
  },
  {
    name: 'Two of Swords',
    img: '/deck-mock/s02_card.png',
  },
  {
    name: 'Three of Swords',
    img: '/deck-mock/s03_card.png',
  },
  {
    name: 'Four of Swords',
    img: '/deck-mock/s04_card.png',
  },
  {
    name: 'Five of Swords',
    img: '/deck-mock/s05_card.png',
  },
  {
    name: 'Six of Swords',
    img: '/deck-mock/s06_card.png',
  },
  {
    name: 'Seven of Swords',
    img: '/deck-mock/s07_card.png',
  },
  {
    name: 'Eight of Swords',
    img: '/deck-mock/s08_card.png',
  },
  {
    name: 'Nine of Swords',
    img: '/deck-mock/s09_card.png',
  },
  {
    name: 'Ten of Swords',
    img: '/deck-mock/s10_card.png',
  },
  {
    name: 'Page of Swords',
    img: '/deck-mock/s11_card.png',
  },
  {
    name: 'Knight of Swords',
    img: '/deck-mock/s12_card.png',
  },
  {
    name: 'Queen of Swords',
    img: '/deck-mock/s13_card.png',
  },
  {
    name: 'King of Swords',
    img: '/deck-mock/s14_card.png',
  },
  {
    name: 'Ace of Pentacles',
    img: '/deck-mock/p01_card.png',
  },
  {
    name: 'Two of Pentacles',
    img: '/deck-mock/p02_card.png',
  },
  {
    name: 'Three of Pentacles',
    img: '/deck-mock/p03_card.png',
  },
  {
    name: 'Four of Pentacles',
    img: '/deck-mock/p04_card.png',
  },
  {
    name: 'Five of Pentacles',
    img: '/deck-mock/p05_card.png',
  },
  {
    name: 'Six of Pentacles',
    img: '/deck-mock/p06_card.png',
  },
  {
    name: 'Seven of Pentacles',
    img: '/deck-mock/p07_card.png',
  },
  {
    name: 'Eight of Pentacles',
    img: '/deck-mock/p08_card.png',
  },
  {
    name: 'Nine of Pentacles',
    img: '/deck-mock/p09_card.png',
  },
  {
    name: 'Ten of Pentacles',
    img: '/deck-mock/p10_card.png',
  },
  {
    name: 'Page of Pentacles',
    img: '/deck-mock/p11_card.png',
  },
  {
    name: 'Knight of Pentacles',
    img: '/deck-mock/p12_card.png',
  },
  {
    name: 'Queen of Pentacles',
    img: '/deck-mock/p13_card.png',
  },
  {
    name: 'King of Pentacles',
    img: '/deck-mock/p14_card.png',
  },
]
</script>