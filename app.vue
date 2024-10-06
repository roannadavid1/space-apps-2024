<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Exoplanet Match',
  meta: [
    { name: 'description', content: 'An exoplanet flip and match game. Learn about exoplanets one match at a time.' },
    { hid: 'og:image', property: 'og:image', content: '/banner.jpg' }
  ],
})
</script>