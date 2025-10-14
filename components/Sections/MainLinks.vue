<template>
  <div class="container md:px-16 mt-6">
    <div class="overflow-x-auto">
      <ul class="flex items-center gap-5 border-b-2 main-links min-w-max">
        <li v-for="link in links" :key="link.to" class="link">
          <nuxt-link :to="link.to">
            {{ link.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    label: "About",
    to: "/",
  },
  {
    label: "Education",
    to: "/education",
  },
  {
    label: "Experience",
    to: "/experience",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Additional Information",
    to: "/additional-information",
  },
];
</script>

<style lang="scss" scoped>
.main-links {
  .link {
    a {
      @apply text-sm text-gray-500 hover:text-black transition-all h-8 inline-block min-w-[80px] text-center -mb-[2px] whitespace-nowrap;
      &.router-link-active.router-link-exact-active {
        @apply text-black border-b-2 border-black;
      }
    }
  }
}
</style>
