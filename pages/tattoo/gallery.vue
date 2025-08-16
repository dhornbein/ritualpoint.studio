<template>
  <div class="tattoo-gallery min-h-screen">
    <!-- Header -->
    <div class="container mx-auto px-4 py-8">
      <nuxt-link to="/tattoo" class=""><-- Back to Tattoo</nuxt-link>
      <h1 class="text-4xl font-bold text-center mb-8">Tattoo Gallery</h1>
      
      <!-- Full-screen overlay -->
      <div 
        v-if="selectedImage !== null" 
        class="fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col"
        @click="closeFullscreen"
        @keydown.esc="closeFullscreen"
        tabindex="0"
      >
        <!-- Close button -->
        <button 
          @click="closeFullscreen"
          class="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Close fullscreen view"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Main image display -->
        <div class="flex-1 flex items-center justify-center p-4 overflow-hidden">
          <div 
            class="relative w-full h-full flex items-center justify-center cursor-grab"
            :class="{ 'cursor-grabbing': isMouseDragging || isDragging }"
            @click.stop
            @wheel="handleZoom"
            @mousedown="handleMouseDown"
            @mousemove="handleMouseMove"
            @mouseup="handleMouseUp"
            @mouseleave="handleMouseUp"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <img 
              :src="currentImage?.src || ''" 
              :alt="currentImage?.alt || ''"
              class="max-w-full max-h-full object-contain transition-transform duration-200 select-none rounded-lg"
              :style="{ transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)` }"
              @dragstart.prevent
            />
          </div>
        </div>

        <!-- Navigation arrows - full height clickable areas -->
        <button 
          @click.stop="previousImage"
          class="absolute left-0 top-0 bottom-0 w-16 flex items-center justify-center text-white md:hover:bg-black md:hover:bg-opacity-20 transition-all group"
          aria-label="Previous image"
        >
          <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          @click.stop="nextImage"
          class="absolute right-0 top-0 bottom-0 w-16 flex items-center justify-center text-white md:hover:bg-black md:hover:bg-opacity-20 transition-all group"
          aria-label="Next image"
        >
          <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Alt text display -->
        

        <!-- Carousel at bottom -->
        <div class="bg-black bg-opacity-80 p-4">
          <div class="text-center text-white text-lg px-4">
            {{ currentImage?.alt || '' }}
          </div>
          <div class="flex justify-center">
            <div class="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide max-w-full">
              <button
                v-for="(image, index) in tattooImages"
                :key="index"
                @click.stop="selectImage(index)"
                class="flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all"
                :class="selectedImage === index ? 'border-white' : 'border-transparent opacity-60 hover:opacity-80'"
              >
                <img 
                  :src="image.src" 
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid layout when not in fullscreen -->
      <div 
        v-if="selectedImage === null"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <div 
          v-for="(image, index) in tattooImages" 
          :key="index" 
          class="tattoo-item cursor-pointer group"
          @click="selectImage(index)"
          @keydown.enter="selectImage(index)"
          @keydown.space.prevent="selectImage(index)"
          tabindex="0"
          role="button"
          :aria-label="`View ${image.alt} in fullscreen`"
        >
          <div class="aspect-square overflow-hidden rounded-lg shadow-md bg-gray-700">
            <img 
              :src="image.src" 
              :alt="image.alt" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Image data
const tattooImages = [
  { src: '/tattoo/art-ains.jpg', alt: 'Beet' },
  { src: '/tattoo/art-cindy.jpg', alt: 'A very special pinecone' },
  { src: '/tattoo/art-eli.jpg', alt: 'moons on forearm' },
  { src: '/tattoo/art-erin-eye.jpg', alt: 'Erin Eye' },
  { src: '/tattoo/art-erin.jpg', alt: 'moon, sword, and finger' },
  { src: '/tattoo/art-hannah.jpg', alt: 'Father in the manzanita' },
  { src: '/tattoo/art-karyn.jpg', alt: 'Chest flower bloom' },
  { src: '/tattoo/art-katie.jpg', alt: 'sun and moon' },
  { src: '/tattoo/art-moth.jpg', alt: 'Moth' },
  { src: '/tattoo/art-nav.jpg', alt: 'no!' },
  { src: '/tattoo/art-oscar-2.jpg', alt: 'dragonfly and cactus' },
  { src: '/tattoo/art-oscar.jpg', alt: 'Drum Cactus' },
  { src: '/tattoo/art-root-bone.jpg', alt: 'Root Bone' },
  { src: '/tattoo/art-spider.jpg', alt: 'Spider' },
]

// State for fullscreen view
const selectedImage = ref<number | null>(null)
const zoomLevel = ref(1)
const panX = ref(0)
const panY = ref(0)

// Computed property for current image
const currentImage = computed(() => {
  if (selectedImage.value === null) return null
  return tattooImages[selectedImage.value] || null
})

// Touch handling for mobile
let lastTouchDistance = 0
let initialTouchDistance = 0
let touchStartX = 0
let touchStartY = 0
let isDragging = false

// Mouse handling for desktop
let isMouseDown = false
let isMouseDragging = false
let mouseStartX = 0
let mouseStartY = 0

// Image selection and navigation
const selectImage = (index: number) => {
  selectedImage.value = index
  resetZoomAndPan()
  document.body.style.overflow = 'hidden' // Prevent background scrolling
}

const closeFullscreen = () => {
  selectedImage.value = null
  resetZoomAndPan()
  document.body.style.overflow = '' // Restore scrolling
}

const nextImage = () => {
  if (selectedImage.value !== null) {
    // Loop to first image if at the end
    if (selectedImage.value < tattooImages.length - 1) {
      selectedImage.value++
    } else {
      selectedImage.value = 0
    }
    resetZoomAndPan()
  }
}

const previousImage = () => {
  if (selectedImage.value !== null) {
    // Loop to last image if at the beginning
    if (selectedImage.value > 0) {
      selectedImage.value--
    } else {
      selectedImage.value = tattooImages.length - 1
    }
    resetZoomAndPan()
  }
}

const resetZoomAndPan = () => {
  zoomLevel.value = 1
  panX.value = 0
  panY.value = 0
}

// Zoom handling with mouse wheel
const handleZoom = (event: WheelEvent) => {
  event.preventDefault()
  const delta = event.deltaY > 0 ? -0.1 : 0.1
  const newZoom = Math.max(0.5, Math.min(3, zoomLevel.value + delta))
  zoomLevel.value = newZoom
  
  // Reset pan when zooming out completely
  if (zoomLevel.value === 1) {
    panX.value = 0
    panY.value = 0
  }
}

// Mouse handling for desktop drag
const handleMouseDown = (event: MouseEvent) => {
  isMouseDown = true
  isMouseDragging = false
  mouseStartX = event.clientX - panX.value
  mouseStartY = event.clientY - panY.value
  event.preventDefault()
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isMouseDown) return
  
  isMouseDragging = true
  panX.value = event.clientX - mouseStartX
  panY.value = event.clientY - mouseStartY
  event.preventDefault()
}

const handleMouseUp = () => {
  isMouseDown = false
  isMouseDragging = false
  // Small delay to prevent click events after dragging
  setTimeout(() => {
    isDragging = false
  }, 50)
}

// Touch handling for mobile zoom and pan
const getTouchDistance = (touches: TouchList) => {
  if (touches.length < 2) return 0
  const touch1 = touches[0]
  const touch2 = touches[1]
  if (!touch1 || !touch2) return 0
  return Math.sqrt(
    Math.pow(touch2.clientX - touch1.clientX, 2) + 
    Math.pow(touch2.clientY - touch1.clientY, 2)
  )
}

const handleTouchStart = (event: TouchEvent) => {
  if (event.touches.length === 1 && event.touches[0]) {
    // Single touch for panning
    touchStartX = event.touches[0].clientX - panX.value
    touchStartY = event.touches[0].clientY - panY.value
    isDragging = true
  } else if (event.touches.length === 2) {
    // Two finger pinch for zoom
    initialTouchDistance = getTouchDistance(event.touches)
    lastTouchDistance = initialTouchDistance
    isDragging = false
  }
}

const handleTouchMove = (event: TouchEvent) => {
  event.preventDefault()
  
  if (event.touches.length === 1 && isDragging && event.touches[0]) {
    // Pan with single touch
    panX.value = event.touches[0].clientX - touchStartX
    panY.value = event.touches[0].clientY - touchStartY
  } else if (event.touches.length === 2) {
    // Pinch to zoom
    const currentDistance = getTouchDistance(event.touches)
    if (lastTouchDistance > 0) {
      const deltaDistance = currentDistance - lastTouchDistance
      const delta = deltaDistance > 0 ? 0.02 : -0.02
      const newZoom = Math.max(0.5, Math.min(3, zoomLevel.value + delta))
      zoomLevel.value = newZoom
      
      if (zoomLevel.value === 1) {
        panX.value = 0
        panY.value = 0
      }
    }
    lastTouchDistance = currentDistance
  }
}

const handleTouchEnd = () => {
  isDragging = false
  lastTouchDistance = 0
  initialTouchDistance = 0
}

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (selectedImage.value === null) return
  
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault()
      previousImage()
      break
    case 'ArrowRight':
      event.preventDefault()
      nextImage()
      break
    case 'Escape':
      event.preventDefault()
      closeFullscreen()
      break
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = '' // Ensure scrolling is restored
})
</script>

<style scoped>
.tattoo-gallery {
  /* Base styles handled by Tailwind classes */
}

.tattoo-item {
  outline: none;
}

.tattoo-item:focus {
  @apply ring-2 ring-blue-500 ring-offset-2 rounded-lg;
}

/* Hide scrollbar for carousel */
.scrollbar-hide {
  /* Firefox */
  scrollbar-width: none;
  /* Safari and Chrome */
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Ensure fullscreen overlay is truly full screen */
.fixed.inset-0 {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
}

/* Smooth transitions for all interactive elements */
button {
  transition: all 0.2s ease;
}

/* Image loading states */
img {
  background-color: #f3f4f6;
}

/* Touch action optimization for mobile */
.touch-manipulation {
  touch-action: manipulation;
}

/* Cursor states for dragging */
.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}

/* Navigation arrow hover effects - only on desktop */
.absolute.left-0,
.absolute.right-0 {
  transition: background-color 0.2s ease;
}

/* Only apply hover effects on devices that support hover (desktop) */
@media (hover: hover) and (pointer: fine) {
  .absolute.left-0:hover,
  .absolute.right-0:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
