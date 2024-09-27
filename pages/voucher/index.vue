<template>
  <main>

    <header class="p-6 flex flex-col gap-4">
      <h1 class="title text-6xl">Ritual Point Vouchers</h1>
      <p>I offer vouchers so you can buy now and redeem later. Great for gifts and as a way to support your local
        artists.</p>
      <div v-if="discountCode" class="p-2 border rounded border-pink-500">
        Code <code class="bg-pink-900 text-pink-300 px-2">{{ discountCode }}</code> has been applied for
        <code>{{ discount }}%</code> Off!
      </div>
    </header>

    <div class="flex justify-center gap-4 flex-wrap p-2 w-full">

      <div v-for="(voucher, index) in vouchersWithDiscount" :key="index"
        class="voucher border border-white rounded p-8 text-center flex flex-col gap-4 relative sm:text-left lg:max-w-md">
        <header class="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
          <h1 class="title sm:mr-40">{{ voucher.title }}</h1>
          <figure class="sm:absolute top-8 right-8"><img :src="voucher.image" :alt="voucher.imageAlt" class="max-h-40 max-w-40" /></figure>
        </header>
        <div class="price flex flex-col items-center sm:items-start">
          <div class="relative">
            <aside class="discount bg-pink-500 text-black px-2 absolute -top-1 -right-3 rounded rotate-12">&minus;{{
              discount }}%
            </aside>
            <p class="old-price text-4xl line-through text-slate-400" v-if="voucher.oldPrice">{{
              formatPrice(voucher.oldPrice) }}</p>
          </div>
          <p class="discount-price text-6xl text-pink-500">{{ formatPrice(voucher.discountPrice) }}</p>
        </div>
        <footer class="sm:flex sm:gap-4 items-center sm:mt-4 sm:flex-row-reverse lg:flex-col">
          <BaseButton class="shrink-0" :href="`${voucher.paymentLink}?prefilled_promo_code=${discountCode}`" target="_blank"
            rel="noopener noreferrer">
            Buy
          </BaseButton>
          <p class="text-left max-w-prose">{{ voucher.description }}</p>
        </footer>
      </div>

    </div>

  </main>
</template>

<script setup>
const discount = ref(10) // 10% discount
const discountCode = ref('RITUAL10X')

// Vouchers data
const vouchers = ref([
  {
    title: "Flash Tattoo Voucher",
    image: "/img/tattoo-heart.png",
    imageAlt: "cute little heart with an arrow ran through it and a banner waving over top reading 'they'",
    oldPrice: 111, // Price before discount
    paymentLink: "//buy.stripe.com/5kA28mcVt1vN83m8wB",
    description: "Experience a safe and comfortable stick and poke tattoo session. You choose a small pre-made \"flash\" design (no larger than 2 inches."
  },
  {
    title: "Large Flash/Custom Tattoo Voucher",
    image: "/img/tattoo-custom.png",
    imageAlt: "A hand drawn design that looks really cool, like just imagine the coolest looking little drawing",
    oldPrice: 333, // Price before discount
    paymentLink: "//buy.stripe.com/6oE7sGdZx6Q76Zi3ci",
    description: "Immerse yourself in a collaborative journey to create a custom tattoo or choose from a larger pre-made \"flash\" design. We'll work together in a sacred, comfortable environment to bring meaningful art to life on your body."
  },
  // {
  //   title: "Customizable Voucher",
  //   image: "/img/comission-triangle.png",
  //   imageAlt: "a white rectangle with a black triangle pointing up with a dark little circle under it",
  //   paymentLink: "//buy.stripe.com/6oE7sGdZx6Q76Zi3ci",
  //   description: "Choose your own voucher amount toward any Ritual Point service. We'll co-create a piece of art, design, tattoo, coaching session or other creative endeavor."
  // },
  {
    title: "Half-Day Session Voucher",
    image: "/img/half-day.png",
    imageAlt: "A circle half full of lines with a tattoo needle hanging above it",
    oldPrice: 444, // Price before discount
    paymentLink: "//buy.stripe.com/6oE4gu8Fd8YfbfybIP",
    description: "Engage in a half-day transformative experience, including a tarot reading and tattoo session. We'll work together in a sacred, comfortable environment to bring meaningful art to life on your body."
  },
  {
    title: "Full-Day Session Voucher",
    image: "/img/full-day.png",
    imageAlt: "a filled in white circle with a gleaming tattoo needle in the center",
    oldPrice: 888, // Price before discount
    paymentLink: "//buy.stripe.com/aEU00e1cL1vNbfy4go",
    description: "Embark on a full-day immersive journey with a tarot reading and extended tattoo session. We'll delve deep into co-creating meaningful art within a safe, ritualized container, offering a profound grounded mystic experience to celebrate transformation."
  },
])

// Compute vouchers with discount applied
const vouchersWithDiscount = computed(() =>
  vouchers.value.map(voucher => ({
    ...voucher,
    discountPrice: voucher.oldPrice - (voucher.oldPrice * discount.value) / 100
  }))
)

// Format price helper
const formatPrice = price => `$${price.toFixed(2)}`
</script>
