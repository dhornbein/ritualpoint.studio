<script setup>

// create a reactive object to hold form data: name, description of tattoo, inspiration images, email, phone number
const formInput = reactive({
  client: 'drew',
  email: 'drew@dddrew.com',
  phone: '1234567890',
  name: 'foo',
  notes: 'bar',
  inspiration: [],
})
let res = ref(false)
let imageUrls = ref([])
let dragging = ref(false)

// event handler that adds formData.inspiration to imageUrls with FileReader()
const addImage = (event) => {
  dragging.value = false
  const files = event.target.files || event.dataTransfer.files;
  const images = []
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (! file.type.startsWith('image/')) break;
    
    images.push(file)

    const reader = new FileReader()
    reader.onload = (event) => {
      imageUrls.value.push(event.target.result)
    }
    reader.readAsDataURL(file)
  }

  if (images.length > 0) {
    formInput.inspiration = [...formInput.inspiration, ...images];
  }
}

// function to submit form data to api/tattoo
const submit = async () => {

  const formData = new FormData()
  Object.entries(formInput).forEach(([key, value]) => {
    if (key === 'inspiration') {
      for (let i = 0; i < value.length; i++) {
        formData.append(key, value[i])
      }
    } else {
      formData.append(key, value)
    }
  })

  const response = await $fetch('/api/tattoo', {
    method: 'POST',
    body: formData,
  })
  console.log('response', response);
  if (response.status === 200) {
    navigateTo('/tattoo/' + response.data.id)
  }
}

</script>

<template>
  <main>
    <h1>So you want a Tattoo?</h1>
    <form @submit.prevent="submit" class="flex flex-col gap-4 my-4">
      <label>
        Your Name *
        <input type="text" v-model="formInput.client" required>
      </label>
      <label>
        Email *
        <input type="email" v-model="formInput.email" required>
      </label>
      <label>
        Phone
        <input type="tel" v-model="formInput.phone">
      </label>
      <hr>
      <label>
        Title *
        <p class="text-gray-300">what do we call the tattoo?</p>
        <input type="text" v-model="formInput.name" required>
      </label>
      <label>
        Description *
        <textarea v-model="formInput.notes" required class="max-h-[80vh] h-[400px]"></textarea>
      </label>
      <label>
        Inspiration
        <div class="dropzone" :class="{over: dragging }" @drop.prevent="addImage" @dragover.prevent="dragging = true" @dragleave="dragging = false">
          <span class="hidden sm:inline">Drop images here or</span>
          <input type="file" accept="image/*" multiple v-on:change="addImage" class="text-white">
        </div>
      </label>
      <p>Please upload reference photos and other material to use as inspiration</p>
      <div class="images flex flex-wrap">
        <img v-for="image in imageUrls" :src="image" class="object-contain h-48 rounded w-1/3 sm:w-1/6">
      </div>
      <BaseButton type="submit" class="btn">Submit</BaseButton>
    </form>
  </main>
</template>

<style lang="scss">
form {
  .dropzone {
    @apply flex flex-col gap-4 justify-center items-center sm:border border-orange-300 p-8 rounded border-dashed;
    &.over {
      @apply border-orange-500 border-solid;
    }
  }
  label {
    @apply flex flex-col gap-2;
  }
  input, textarea {
    @apply border border-gray-300 rounded p-2 text-black;
  }
}
</style>