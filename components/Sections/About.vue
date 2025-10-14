<template>
  <div>
    <div class="mb-5">
      <h3 class="text-lg font-medium mb-3 border-b w-fit">About Me</h3>

      <p class="w-3/4">
        {{ profile.about.blurb }}
      </p>
    </div>

    <div class="mb-5">
      <h3 class="text-lg font-medium mb-3 border-b w-fit">
        Companies I've Worked With
      </h3>

      <div class="flex flex-wrap gap-10">
        <a
          v-for="company in profile.about.companies"
          :key="company.name"
          :href="company.href"
          class="flex items-center gap-2 group hover:-translate-y-1 transition-all"
          target="_blank"
        >
          <img
            :src="company.image"
            :alt="company.name"
            class="w-10 h-10 object-cover rounded-full border border-gray-200"
            draggable="false"
          />
          <span
            class="text-lg font-medium group-hover:underline transition-all"
            style="color: rgb(0, 108, 219)"
          >
            {{ company.name }}
          </span>
        </a>
      </div>
    </div>

    <div class="mb-5">
      <h3 class="text-lg font-medium mb-3 border-b w-fit">What I'm Doing</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="service in profile.about.doing"
          :key="service.title"
          class="service-card"
        >
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>

          <h4 class="font-semibold mb-1">{{ service.title }}</h4>

          <p class="text-sm text-gray-600">
            {{ service.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <h3 class="text-lg font-medium mb-3 border-b w-fit">Responsibilities</h3>

      <div class="responsibilities-grid">
        <div
          v-for="responsibility in profile.about.responsibilities"
          :key="responsibility"
          class="responsibility-item"
        >
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <p>{{ responsibility }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile } from "~/data/profile";
</script>

<style lang="scss" scoped>
.service-card {
  @apply bg-white p-6 rounded-xl shadow-lg transition-all duration-300;
  border: 1px solid #e5e7eb;

  &:hover {
    @apply transform -translate-y-1;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  .icon-wrapper {
    @apply w-10 h-10 rounded-lg flex items-center justify-center mb-2;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
  }
}

.responsibilities-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.responsibility-item {
  @apply flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm transition-all duration-300;
  border: 1px solid #e5e7eb;

  &:hover {
    @apply transform -translate-y-1;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }

  .icon-wrapper {
    @apply w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
  }

  p {
    @apply text-sm text-gray-600;
  }
}
</style>
