<template>
  <nav class="absolute top-0 left-0 right-0 z-50">
    <div class="container h-16 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <SvgIcon name="logo" />

          <h2 class="font-bold">Portfolio</h2>
        </div>

        <!-- Mobile Menu Button -->
        <!-- <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden">
          <SvgIcon :name="isMenuOpen ? 'close' : 'menu'" class="size-6" />
        </button> -->

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-10 header-links">
          <!-- <ul class="flex items-center gap-10">
            <li v-for="link in links" :key="link.to" class="link">
              <nuxt-link :to="link.to" class="inline-block size-full">
                {{ link.label }}
              </nuxt-link>
            </li>
          </ul> -->

          <div class="flex items-center gap-4">
            <a target="_blank" href="mailto:eelbarshly@gmail.com">
              <SvgIcon name="sms" />
            </a>

            <a target="_blank" href="https://saedelbarshly.github.io">
              <SvgIcon name="github" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/elsaid-elbarshly"
            >
              <SvgIcon name="linkedin" class="text-[#0a66c2]" />
            </a>

            <a
              class="bg-primary text-white px-4 py-2 rounded-2xl text-sm hover:bg-primary/80 transition-all"
              href="/Elsaed-Elbarhsly-cv.pdf"
              download
            >
              Download CV
            </a>

            <img
              src="~/assets/images/avatar.jpeg"
              alt="Elsaed Elbarhsly"
              class="size-8 object-cover rounded-full drop-shadow-lg"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen"
        class="lg:hidden fixed inset-0 bg-white z-50 pt-20 px-4"
      >
        <div class="flex flex-col gap-6">
          <ul class="flex flex-col gap-4">
            <li v-for="link in links" :key="link.to" class="link">
              <nuxt-link
                :to="link.to"
                class="inline-block size-full text-lg"
                @click="isMenuOpen = false"
              >
                {{ link.label }}
              </nuxt-link>
            </li>
          </ul>

          <div class="flex items-center gap-4">
            <nuxt-link target="_blank" to="mailto:eelbarshly@gmail.com">
              <SvgIcon name="sms" class="size-6" />
            </nuxt-link>

            <nuxt-link target="_blank" to="https://saedelbarshly.github.io">
              <SvgIcon name="github" class="size-6" />
            </nuxt-link>

            <nuxt-link
              target="_blank"
              to="https://www.linkedin.com/in/elsaid-elbarshly"
            >
              <SvgIcon name="linkedin" class="text-[#0a66c2] size-6" />
            </nuxt-link>
          </div>

          <a
            class="bg-primary text-white px-4 py-2 rounded-2xl text-sm hover:bg-primary/80 transition-all text-center"
            href="/Elsaed-Elbarhsly-cv.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false);

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
.header-links {
  .link {
    a {
      @apply text-sm hover:text-black hover:font-semibold transition-all text-gray-500 font-medium;
      &.router-link-active.router-link-exact-active {
        @apply text-black font-semibold;
      }
    }
  }
}
</style>
