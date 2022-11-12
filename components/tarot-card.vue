<template>
  <div class="card noSelect" :class="{'card--flipped': flipped }" @click="flipCard">
    <div class="card__loading absolute inset-0 flex items-center justify-center pb-[7%] pr-[4%]" v-if="!randomCard">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate-clockwise-2 animate-spin stroke-white w-20 h-20 z-10" width="32" height="32"
        viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
        <line x1="5.63" y1="7.16" x2="5.63" y2="7.17" />
        <line x1="4.06" y1="11" x2="4.06" y2="11.01" />
        <line x1="4.63" y1="15.1" x2="4.63" y2="15.11" />
        <line x1="7.16" y1="18.37" x2="7.16" y2="18.38" />
        <line x1="11" y1="19.94" x2="11" y2="19.95" />
      </svg>
    </div>
    <div class="card__face card__face--front">
      <img :src="randomCard.img" :alt="randomCard.name" v-if="randomCard" />
    </div>
    <div class="card__face card__face--back">
      <img src="/deck-mock/cover_card_md.png" alt="Back" />
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
    img: '/deck-mock/00_card_md.png',
  },
  {
    name: 'The Magician',
    img: '/deck-mock/01_card_md.png',
  },
  {
    name: 'The High Priestess',
    img: '/deck-mock/02_card_md.png',
  },
  {
    name: 'The Empress',
    img: '/deck-mock/03_card_md.png',
  },
  {
    name: 'The Emperor',
    img: '/deck-mock/04_card_md.png',
  },
  {
    name: 'The Hierophant',
    img: '/deck-mock/05_card_md.png',
  },
  {
    name: 'The Lovers',
    img: '/deck-mock/06_card_md.png',
  },
  {
    name: 'The Chariot',
    img: '/deck-mock/07_card_md.png',
  },
  {
    name: 'Strength',
    img: '/deck-mock/08_card_md.png',
  },
  {
    name: 'The Hermit',
    img: '/deck-mock/09_card_md.png',
  },
  {
    name: 'Wheel of Fortune',
    img: '/deck-mock/10_card_md.png',
  },
  {
    name: 'Justice',
    img: '/deck-mock/11_card_md.png',
  },
  {
    name: 'The Hanged Man',
    img: '/deck-mock/12_card_md.png',
  },
  {
    name: 'Death',
    img: '/deck-mock/13_card_md.png',
  },
  {
    name: 'Temperance',
    img: '/deck-mock/14_card_md.png',
  },
  {
    name: 'The Devil',
    img: '/deck-mock/15_card_md.png',
  },
  {
    name: 'The Tower',
    img: '/deck-mock/16_card_md.png',
  },
  {
    name: 'The Star',
    img: '/deck-mock/17_card_md.png',
  },
  {
    name: 'The Moon',
    img: '/deck-mock/18_card_md.png',
  },
  {
    name: 'The Sun',
    img: '/deck-mock/19_card_md.png',
  },
  {
    name: 'Judgement',
    img: '/deck-mock/20_card_md.png',
  },
  {
    name: 'The World',
    img: '/deck-mock/21_card_md.png',
  },
  {
    name: 'Ace of Wands',
    img: '/deck-mock/w01_card_md.png',
  },
  {
    name: 'Two of Wands',
    img: '/deck-mock/w02_card_md.png',
  },
  {
    name: 'Three of Wands',
    img: '/deck-mock/w03_card_md.png',
  },
  {
    name: 'Four of Wands',
    img: '/deck-mock/w04_card_md.png',
  },
  {
    name: 'Five of Wands',
    img: '/deck-mock/w05_card_md.png',
  },
  {
    name: 'Six of Wands',
    img: '/deck-mock/w06_card_md.png',
  },
  {
    name: 'Seven of Wands',
    img: '/deck-mock/w07_card_md.png',
  },
  {
    name: 'Eight of Wands',
    img: '/deck-mock/w08_card_md.png',
  },
  {
    name: 'Nine of Wands',
    img: '/deck-mock/w09_card_md.png',
  },
  {
    name: 'Ten of Wands',
    img: '/deck-mock/w10_card_md.png',
  },
  {
    name: 'Page of Wands',
    img: '/deck-mock/w11_card_md.png',
  },
  {
    name: 'Knight of Wands',
    img: '/deck-mock/w12_card_md.png',
  },
  {
    name: 'Queen of Wands',
    img: '/deck-mock/w13_card_md.png',
  },
  {
    name: 'King of Wands',
    img: '/deck-mock/w14_card_md.png',
  },
  {
    name: 'Ace of Cups',
    img: '/deck-mock/c01_card_md.png',
  },
  {
    name: 'Two of Cups',
    img: '/deck-mock/c02_card_md.png',
  },
  {
    name: 'Three of Cups',
    img: '/deck-mock/c03_card_md.png',
  },
  {
    name: 'Four of Cups',
    img: '/deck-mock/c04_card_md.png',
  },
  {
    name: 'Five of Cups',
    img: '/deck-mock/c05_card_md.png',
  },
  {
    name: 'Six of Cups',
    img: '/deck-mock/c06_card_md.png',
  },
  {
    name: 'Seven of Cups',
    img: '/deck-mock/c07_card_md.png',
  },
  {
    name: 'Eight of Cups',
    img: '/deck-mock/c08_card_md.png',
  },
  {
    name: 'Nine of Cups',
    img: '/deck-mock/c09_card_md.png',
  },
  {
    name: 'Ten of Cups',
    img: '/deck-mock/c10_card_md.png',
  },
  {
    name: 'Page of Cups',
    img: '/deck-mock/c11_card_md.png',
  },
  {
    name: 'Knight of Cups',
    img: '/deck-mock/c12_card_md.png',
  },
  {
    name: 'Queen of Cups',
    img: '/deck-mock/c13_card_md.png',
  },
  {
    name: 'King of Cups',
    img: '/deck-mock/c14_card_md.png',
  },
  {
    name: 'Ace of Swords',
    img: '/deck-mock/s01_card_md.png',
  },
  {
    name: 'Two of Swords',
    img: '/deck-mock/s02_card_md.png',
  },
  {
    name: 'Three of Swords',
    img: '/deck-mock/s03_card_md.png',
  },
  {
    name: 'Four of Swords',
    img: '/deck-mock/s04_card_md.png',
  },
  {
    name: 'Five of Swords',
    img: '/deck-mock/s05_card_md.png',
  },
  {
    name: 'Six of Swords',
    img: '/deck-mock/s06_card_md.png',
  },
  {
    name: 'Seven of Swords',
    img: '/deck-mock/s07_card_md.png',
  },
  {
    name: 'Eight of Swords',
    img: '/deck-mock/s08_card_md.png',
  },
  {
    name: 'Nine of Swords',
    img: '/deck-mock/s09_card_md.png',
  },
  {
    name: 'Ten of Swords',
    img: '/deck-mock/s10_card_md.png',
  },
  {
    name: 'Page of Swords',
    img: '/deck-mock/s11_card_md.png',
  },
  {
    name: 'Knight of Swords',
    img: '/deck-mock/s12_card_md.png',
  },
  {
    name: 'Queen of Swords',
    img: '/deck-mock/s13_card_md.png',
  },
  {
    name: 'King of Swords',
    img: '/deck-mock/s14_card_md.png',
  },
  {
    name: 'Ace of Pentacles',
    img: '/deck-mock/p01_card_md.png',
  },
  {
    name: 'Two of Pentacles',
    img: '/deck-mock/p02_card_md.png',
  },
  {
    name: 'Three of Pentacles',
    img: '/deck-mock/p03_card_md.png',
  },
  {
    name: 'Four of Pentacles',
    img: '/deck-mock/p04_card_md.png',
  },
  {
    name: 'Five of Pentacles',
    img: '/deck-mock/p05_card_md.png',
  },
  {
    name: 'Six of Pentacles',
    img: '/deck-mock/p06_card_md.png',
  },
  {
    name: 'Seven of Pentacles',
    img: '/deck-mock/p07_card_md.png',
  },
  {
    name: 'Eight of Pentacles',
    img: '/deck-mock/p08_card_md.png',
  },
  {
    name: 'Nine of Pentacles',
    img: '/deck-mock/p09_card_md.png',
  },
  {
    name: 'Ten of Pentacles',
    img: '/deck-mock/p10_card_md.png',
  },
  {
    name: 'Page of Pentacles',
    img: '/deck-mock/p11_card_md.png',
  },
  {
    name: 'Knight of Pentacles',
    img: '/deck-mock/p12_card_md.png',
  },
  {
    name: 'Queen of Pentacles',
    img: '/deck-mock/p13_card_md.png',
  },
  {
    name: 'King of Pentacles',
    img: '/deck-mock/p14_card_md.png',
  },
]
</script>