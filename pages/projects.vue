<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-xl">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in profile.projects"
        :key="project.name"
        class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform"
      >
        <!-- Card Content -->
        <div class="p-6">
          <div class="mb-4">
            <div class="flex items-center justify-between">
              <h3
                class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2"
              >
                {{ project.name }}
              </h3>

              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.name"
                class="size-10 rounded-full border border-border/50 object-contain"
              />
            </div>

            <div class="mb-3">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-sm font-medium text-gray-600">{{
                  project.role
                }}</span>
                <span class="text-sm text-gray-400">•</span>
                <span class="text-sm text-gray-500">{{ project.date }}</span>
              </div>

              <div class="flex flex-wrap gap-1 mb-3">
                <span
                  v-for="tech in project.stack"
                  :key="tech"
                  class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="space-y-2 mb-4">
              <p
                v-for="highlight in project.highlights"
                :key="highlight"
                class="text-gray-600 text-sm"
              >
                • {{ highlight }}
              </p>
            </div>

            <div class="flex space-x-2 justify-end">
              <a
                v-for="link in project.links"
                :key="link.label"
                :href="link.href"
                target="_blank"
                class="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {{ link.label }}
              </a>
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
// Custom styles for line clamping
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// Custom animation for the gradient overlay
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

// Add smooth scrolling to the page
html {
  scroll-behavior: smooth;
}
</style>
