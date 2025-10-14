<template>
  <div>
    <div class="bgG h-[160px] w-full" />

    <div class="container md:px-16">
      <div class="-mt-16 relative">
        <div class="primary-shadow" />

        <div class="flex flex-col md:flex-row items-center md:items-end gap-4">
          <div
            class="size-[180px] md:size-[232px] rounded-[36px] flex items-center justify-center bgGlass"
          >
            <img
              src="~/assets/images/avatar.jpeg"
              :alt="profile.hero.name"
              class="size-[160px] md:size-[200px] object-cover rounded-[20px]"
            />
          </div>

          <div
            class="pb-6 flex flex-col md:flex-row items-center md:items-end justify-between flex-1 gap-6 md:gap-4"
          >
            <div class="text-center md:text-left">
              <h2 class="text-2xl font-bold">{{ profile.hero.name }}</h2>

              <p
                class="text-sm text-gray-500 max-w-[260px] mx-auto md:mx-0 mb-3 hover:text-black transition-all"
              >
                {{ profile.hero.title }}
              </p>

              <div
                class="flex items-center gap-2 justify-center md:justify-start"
              >
                <a
                  v-for="cta in profile.hero.ctas"
                  :key="cta.label"
                  :href="cta.href"
                  :download="cta.label === 'Download CV'"
                  class="bg-primary px-4 py-2 rounded-2xl text-sm hover:bg-primary/80 transition-all"
                  :class="
                    cta.label === 'Get in touch'
                      ? 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white'
                      : 'text-white'
                  "
                >
                  {{ cta.label }}
                </a>
              </div>
            </div>

            <div class="flex items-center gap-6 md:gap-10">
              <div
                v-for="counter in profile.hero.counters"
                :key="counter.label"
                class="flex flex-col items-center md:items-start gap-1"
              >
                <span
                  class="text-sm text-gray-500 hover:text-black transition-all"
                >
                  {{ counter.label }}
                </span>

                <span class="text-2xl font-bold text-black">{{
                  counter.value
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile } from "~/data/profile";
</script>

<style lang="scss" scoped>
.bgG {
  background: linear-gradient(
    90deg,
    #ffffff 0%,
    #dfd4fe 50.96%,
    #fedeff 98.96%
  );
}

.bgGlass {
  background: linear-gradient(
    134.34deg,
    rgba(255, 255, 255, 0.6) 9.36%,
    rgba(255, 251, 251, 0.1) 93.82%
  );
  backdrop-filter: blur(30px);
  box-shadow: 0px 4px 25px 0px #fffbfb40;
}

.primary-shadow {
  width: 246.73160525106027px;
  height: 64.2130869311317px;
  background: #727af9;
  filter: blur(30px);
  position: absolute;
  top: 5px;
}
</style>
