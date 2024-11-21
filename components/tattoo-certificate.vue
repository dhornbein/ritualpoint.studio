<template>
  <div class="p-4 border rounded border-gray-700 text-left">
    <img src="/tattoo/tattoo-certificate.jpg" :alt="`Image of a ${certificateName} certificate made out to your's truly Drew Hornbein. It looks very official.`">
    <p class="text-sm mt-4">{{ certificateName }} completed on {{ certificateDate }} <br>ID <code class="font-sans px-2 pb-1 rounded border border-pink-300">{{ certificateNumber }}</code> <a :href="verificationURL" target="_blank" class="link-wavy text-pink-300">click here to verify</a></p>
  </div>
</template>

<script setup>
const certificateNumber = '8460 7 11 12 2023'
const certificateDate = 'Nov 12th 2023'
const certificateName = 'Bloodborne Pathogens Training and Infection Control for Body Art Professionals'
const verificationURL = 'https://www.bodyarttraininggroup.com/custom/check.aspx'
</script>

<style lang="scss">

</style>