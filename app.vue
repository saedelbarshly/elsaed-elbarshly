<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Global SEO configuration
useHead({
  title: 'Elsaed Elbarhsly — Backend (PHP/Laravel) Engineer',
  meta: [
    { name: 'description', content: 'Backend developer specialized in Laravel APIs and scalable systems. I design resilient data models, optimize databases and caching, implement secure auth, and integrate third-party services to ship business-critical features reliably.' },
    { name: 'keywords', content: 'Backend Developer, PHP, Laravel, API Development, Database Design, MySQL, Redis, JWT, OAuth, Payment Gateways, Cloud Deployments, CI/CD, Egypt' },
    { name: 'author', content: 'Elsaed Elbarhsly' },
    { property: 'og:title', content: 'Elsaed Elbarhsly — Backend (PHP/Laravel) Engineer' },
    { property: 'og:description', content: 'Backend developer specialized in Laravel APIs and scalable systems. I design resilient data models, optimize databases and caching, implement secure auth, and integrate third-party services to ship business-critical features reliably.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://saedelbarshly.github.io/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Elsaed Elbarhsly — Backend (PHP/Laravel) Engineer' },
    { name: 'twitter:description', content: 'Backend developer specialized in Laravel APIs and scalable systems. I design resilient data models, optimize databases and caching, implement secure auth, and integrate third-party services to ship business-critical features reliably.' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://saedelbarshly.github.io/' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
