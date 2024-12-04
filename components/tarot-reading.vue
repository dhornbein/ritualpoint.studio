<template>
  <div class="tarot-reading">
    <label for="query" class="max-w-prose mx-auto block">Pull one of my <nuxt-link to="dmt" class="text-pink-400">Dark Moon Tarot</nuxt-link> cards.
        <span class="reading__announcement" ref="readingAnnouncement">Start with a question, a query, a
          wondering.</span> It doesn't have to be perfect or even good. Just ask
        something.</label>
    <div class="flex md:gap-8 flex-wrap md:flex-nowrap justify-center">
      <tarot-card :flipOnClick=false @click="handleCardClick" @card-flipped="handleCardFlipped"
        ref="tarotCardRef"></tarot-card>
      <form id="tarotForm" @submit.prevent="handleFormSubmit" class="w-full max-w-prose flex flex-col gap-2 pt-4">
    
        <div class="relative">
          <input type="hidden" name="subject" value="Reading for the {{ cardName }}" />
          <input type="hidden" name="cardName" :value="card.name" />
          <input type="hidden" name="cardImg" :value="`https://ritualpoint.studio${card.img}`" />
          
          <textarea v-model="question" name="query" id="query" placeholder="enter your questions here..." :readonly="card"
            ref="tarotQuestionFieldRef" @input="autoResize"
            class="max-w-prose w-full  whitespace-pre-wrap break-words resize-none overflow-hidden bg-slate-700 rounded sm:p-4 p-2 pb-1 block transition-all focus-visible:outline-pink-400 focus-visible:outline-1 focus-visible:outline read-only:focus-visible:outline-none read-only:bg-transparent"></textarea>
          
          <div class="hidden sm:flex justify-around items-center h-32">
            <button class="" @click.prevent="handleFlipSubmit" :disabled="!question && !message">
              <template v-if="!card">Reveal Card</template>
              <template v-else>Flip Again</template>
            </button>
            <p class="reading__reset cursor-pointer text-slate-200 hover:text-white"
              :class="{invisible: !card && !question}" @click="handleReset">&olarr; Reset</p>
          </div>
        </div>
        <transition name="fade-slide" mode="out-in">
          <div class="return sm:px-8 max-w-prose md:text-lg" v-if="message" :key="message?.name">
            <span class="exclamation">{{ message?.exclamation }}</span> <span class="opening">{{ message?.opening }}</span>
            <strong class="name block">{{ message?.name }}</strong> <span class="description">{{ message?.description }}</span>
            <span class="question">{{ message?.question }}</span>
            <hr class="my-4 border-slate-500">
            <p v-if="formMessage" class="text-green-200">{{ formMessage }}</p>
            <p class="text-red-200" v-else-if="formError">{{ formError }} try emailing me <a href="mailto:drew@ritualpoint.studio">Drew@RitualPoint.Studio</a></p>
            <p v-else>
              <label for="reader__email">For a more in-depth free reading email me</label>
              <input id="reader__email" type="email" name="email" placeholder="enter your email here..." v-model="email" required 
                class="bg-slate-700 focus-visible:outline-pink-400 focus-visible:outline-1 focus-visible:outline p-2 w-full">
              <button type="submit">Email Me </button>
            </p>
          </div>
          <div class="message__default" v-else>
            <p v-if="!question">Enter your question, then flip (press) a card to find out...</p>
            <p v-else>Flip a card to find out...</p>
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<style lang="scss">

  .tarot-reading {
    .card {
      @apply max-h-[60vh] md:max-h-[90vh]
    }
  }

  .reading__announcement {
    transition: all 2s ease-out;
    &.reading__announcement--active {
      @apply bg-pink-600 shadow-pink-600;
      box-shadow: 0 0 0 3px var(--tw-shadow-color);
      transition-duration: 500ms;
    }
  }

  /* Fade and slide transition for the container */
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }

  .fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  /* Float-in animation for spans */
  @keyframes floatIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Base styling for spans */
  .return span,
  .return p>strong,
  .return p>span {
    display: inline-block;
    /* Allows independent animation */
    
  }

  /* Staggered delays */

  .return * {
    animation: floatIn 0.6s ease-out forwards;
    opacity: 0;
    animation-delay: 1.4s;
  }

  .return .exclamation {
    animation-delay: 0.2s;
  }

  .return .opening {
    animation-delay: 0.4s;
  }

  .return .name {
    animation-delay: 0.6s;
  }

  .return .description {
    animation-delay: 0.8s;
  }

  .return .question {
    animation-delay: 1s;
  }
</style>

<script setup>
const question = ref('')
const message = ref(false)
const card = ref(false)
const flipUnlocked = ref(false)
const tarotCardRef = ref(null)
const tarotQuestionFieldRef = ref(null)
const readingAnnouncement = ref(null)
const tarotCardFlipped = ref(false)
const formspreeEndpoint = ref('https://formspree.io/f/xrbgobzo')
const formMessage = ref(null)
const formError = ref(null)
const email = ref('')

function handleCardFlipped(IncomingCard) {
  console.log('handling flipped card', IncomingCard);
  formMessage.value = null
  formError.value = null
  
  if (IncomingCard) {
    console.log('id:',IncomingCard.id);
    
    card.value = IncomingCard; // Capture the card name from the emitted event
    message.value = generateMessage(IncomingCard.id)
  } else {
    message.value = false
    card.value = false
  }
}

function handleFlipSubmit() {
  console.log('flipping card');
  tarotCardRef.value.flipCard()
  tarotCardFlipped.value = true
}

function handleCardClick() {
  if (question.value) {
    tarotCardRef.value.flipCard()
    return
  }

  tarotQuestionFieldRef.value.focus()
  announce()

}

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const successMessage = "I got your submission, expect a reply in a few days ✨"

  if (!question.value) {
    tarotQuestionFieldRef.value?.focus();
    console.log("Please fill out the question before submitting.");
    return;
  }

  if (!card.value) {
    console.log("No card");
    return;
  }

  // Get the form data
  const formData = new FormData(event.target);
  console.log("Form submission data:", Object.fromEntries(formData.entries()));
  

  try {
    // Send form data to Formspree endpoint
    const response = await fetch(formspreeEndpoint.value, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      console.log('form submission success!');
      
      formMessage.value = successMessage
    } else {
      console.error("Form submission failed:", await response.json());
      formError.value = "The submission failed..."
    }
  } catch (error) {
    console.error("An error occurred while submitting the form:", error);
    formError.value = "Something went wrong..."
  }
};

function handleReset() {
  question.value = ''
  tarotQuestionFieldRef.value.focus()
  
  if(card.value) {
    tarotCardRef.value.flipCard()
  }
}

const autoResize = (event) => {
  const el = event.target;
  el.style.height = "auto"; // Reset height to recalculate
  el.style.height = `${el.scrollHeight}px`; // Set new height based on content
};

function announce() {
  const element = readingAnnouncement.value

  element.classList.add('reading__announcement--active')
  setTimeout(() => {
    element.classList.remove("reading__announcement--active");
  }, 3000); // Adjust duration as needed
}

function generateMessage(cardNotation) {
  // Randomly pick parts of the message
  const exclamation = messageSegments.exclamations[Math.floor(Math.random() * messageSegments.exclamations.length)];
  const opening = messageSegments.openingLines[Math.floor(Math.random() * messageSegments.openingLines.length)];
  const question = messageSegments.evocativeQuestions[Math.floor(Math.random() * messageSegments.evocativeQuestions.length)];

  // Check for Major Arcana
  if (majorArcana[cardNotation]) {
    const { name, description } = majorArcana[cardNotation];
    return { exclamation, opening, name, description, question };
  }

  // Parse Minor Arcana (suits and numbers)
  const [suitInitial, rankOrNumber] = [cardNotation[0], cardNotation.slice(1)];
  const suits = { w: "Wands", c: "Cups", s: "Swords", p: "Pentacles" };
  const suit = suits[suitInitial];

  if (!suit) {
    return 'Sorry, something went wrong...'
  }

  // Court Cards
  if (rankOrNumber > 10) {
    const courtRanks = { 11: "Page", 12: "Knight", 13: "Queen", 14: "King" };
    const rank = courtRanks[rankOrNumber];
    const description = `${courtCards[rank.toLowerCase()]} ${minorArcana.suits[suit.toLowerCase()]}`;
    return {
      exclamation,
      opening,
      name: `The ${rank} of ${suit}`,
      description,
      question
    };
  }

  // Numbered Minor Arcana
  const description = `The number ${rankOrNumber} often represents ${minorArcana.numbers[parseInt(rankOrNumber)]} ${minorArcana.suits[suit.toLowerCase()]}`;
  return {
    exclamation,
    opening,
    name: `The ${rankOrNumber} of ${suit}`,
    description,
    question
  };
}


const messageSegments = {
  exclamations: [
    "Oh!",
    "Hmmm...",
    "Ah!",
    "Wow!",
    "Hmm, intriguing...",
    "Well now!",
    "Interesting!",
    "Behold!",
    "Look at that!",
    "Fascinating!"
  ],
  openingLines: [
    "The cards have spoken.",
    "A powerful card appears.",
    "The tarot reveals its wisdom.",
    "This card carries deep meaning.",
    "The pull feels significant.",
    "The energy of this card is striking.",
    "The archetypes are at play.",
    "The universe has something to say.",
    "A tale unfolds from the cards.",
    "Your intuition knows this card well."
  ],
  evocativeQuestions: [
    "How do you think this relates to your question?",
    "What deeper truths does this reveal for you?",
    "What does this card spark in your mind?",
    "How does this energy align with your journey?",
    "What transformation is this card inviting?",
    "Where does this lead you?",
    "What are you ready to uncover?",
    "What do you feel this card is asking of you?",
    "What wisdom will you take from this card?",
    "How will you act on this insight?"
  ]
};

const majorArcana = [
  {
    name: "The Fool",
    description: "A card of new beginnings, trust, and the unknown. It invites you to leap forward with open arms and faith in the journey ahead."
  },
  {
    name: "The Magician",
    description: "A card of manifestation and resourcefulness. It reminds you that you have everything you need to create your desires."
  },
  {
    name: "The High Priestess",
    description: "A card of intuition, mystery, and inner wisdom. It calls you to trust your instincts and explore your unconscious."
  },
  {
    name: "The Empress",
    description: "A card of abundance, creation, and nurturing. It speaks to growth and the power of feminine energy."
  },
  {
    name: "The Emperor",
    description: "A card of structure, authority, and stability. It asks you to consider boundaries and order in your life."
  },
  {
    name: "The Hierophant",
    description: "A card of tradition, spiritual wisdom, and mentorship. It encourages you to seek guidance or explore rituals that ground you."
  },
  {
    name: "The Lovers",
    description: "A card of union, choice, and harmony. It speaks to relationships, balance, and aligning your values with your actions."
  },
  {
    name: "The Chariot",
    description: "A card of determination, willpower, and victory. It challenges you to take control and steer toward your goals."
  },
  {
    name: "Strength",
    description: "A card of courage, patience, and inner power. It reminds you that true strength comes from within, not force."
  },
  {
    name: "The Hermit",
    description: "A card of introspection, solitude, and seeking truth. It invites you to step back and reflect on your path."
  },
  {
    name: "The Wheel of Fortune",
    description: "A card of cycles, destiny, and change. It signals that the wheel is turning—what will you make of it?"
  },
  {
    name: "Justice",
    description: "A card of fairness, truth, and accountability. It calls you to consider the consequences of your actions."
  },
  {
    name: "The Hanged One",
    description: "A card of surrender, perspective, and letting go. It invites you to see things from a different angle."
  },
  {
    name: "Death",
    description: "A card of transformation, endings, and rebirth. It reminds you that every ending brings a new beginning."
  },
  {
    name: "Temperance",
    description: "A card of balance, harmony, and moderation. It speaks to the alchemy of life and finding your flow."
  },
  {
    name: "The Devil",
    description: "A card of bondage, materialism, and shadow work. It challenges you to face your fears and break free from what holds you back."
  },
  {
    name: "The Tower",
    description: "A card of upheaval, revelation, and awakening. It signals a sudden change that clears the way for growth."
  },
  {
    name: "The Star",
    description: "A card of hope, inspiration, and renewal. It reminds you to trust in the universe and your place within it."
  },
  {
    name: "The Moon",
    description: "A card of intuition, illusion, and the subconscious. It invites you to explore your dreams and hidden truths."
  },
  {
    name: "The Sun",
    description: "A card of joy, success, and clarity. It brings light to your path and encourages you to shine brightly."
  },
  {
    name: "Judgment",
    description: "A card of reflection, rebirth, and calling. It asks you to rise to your higher purpose and let go of the past."
  },
  {
    name: "The World",
    description: "A card of completion, wholeness, and fulfillment. It celebrates the end of a journey and the start of a new one."
  }
];


const minorArcana = {
  suits: {
    wands: "Wands represent 🔥 Fire, representing passion, creativity, and action.",
    cups: "Cups represent 💦 Water, the element of emotion, intuition, and relationships.",
    swords: "Swords represent 💨 Air, ruling intellect, conflict, and communication.",
    pentacles: "Coins represent 💎 Earth, the realm of materiality, stability, and resources."
  },
  numbers: {
    1: "new beginnings, potential, and raw energy.",
    2: "balance, duality, and choices.",
    3: "growth, collaboration, and creation.",
    4: "stability, foundations, and structure.",
    5: "change, conflict, and challenges.",
    6: "harmony, resolution, and cooperation.",
    7: "spirituality, introspection, and persistence.",
    8: "power, mastery, and progress.",
    9: "fulfillment, nearing completion, and reflection.",
    10: "completion, endings, and renewal."
  }
};

const courtCards = {
  page: "The Page represents curiosity, learning, and new ventures.",
  knight: "The Knight embodies action, pursuit, and ambition.",
  queen: "The Queen symbolizes mastery, nurturing, and introspection.",
  king: "The King stands for authority, leadership, and control."
};




</script>