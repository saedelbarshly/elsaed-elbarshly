<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Personal Information -->
    <div class="mb-8 sm:mb-12">
      <h3 class="text-lg sm:text-xl font-medium mb-3 border-b w-fit">
        Personal Information
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div class="info-card">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-lg sm:text-xl mb-2">
              {{ profile.hero.name }}
            </h4>
            <p class="text-sm sm:text-base text-gray-600 mb-1">{{ profile.hero.title }}</p>
            <p class="text-sm sm:text-base text-gray-600">Location: Egypt</p>
          </div>
        </div>

        <div class="info-card">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-base sm:text-lg mb-2">Contact Information</h4>
            <a
              :href="`mailto:${profile.contact.email}`"
              class="text-sm sm:text-base text-gray-600 mb-1 block hover:text-primary transition-colors"
            >
              Email: {{ profile.contact.email }}
            </a>
            <a 
              :href="`tel:${profile.contact.phone}`"
              class="text-sm sm:text-base text-gray-600 mb-1 block hover:text-primary transition-colors"
            >
              Phone: {{ profile.contact.phone }}
            </a>
            <p class="text-sm sm:text-base text-gray-600">Location: Egypt</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Professional Links -->
    <div class="mb-8 sm:mb-12">
      <h3 class="text-lg sm:text-xl font-medium mb-3 border-b w-fit">
        Professional Links
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div 
          v-for="link in profile.contact.links"
          :key="link.label"
          class="info-card"
        >
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-6 sm:w-6"
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
          </div>
          <div>
            <h4 class="font-semibold text-base sm:text-lg mb-2">{{ link.label }}</h4>
            <a
              :href="link.href"
              target="_blank"
              class="text-sm sm:text-base text-primary hover:underline"
            >
              {{ link.href }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificates -->
    <div class="mb-8 sm:mb-12">
      <h3 class="text-lg sm:text-xl font-medium mb-3 border-b w-fit">Certificates</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div 
          v-for="cert in profile.certificates"
          :key="cert.name"
          class="info-card"
        >
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-base sm:text-lg mb-2">{{ cert.name }}</h4>
            <p class="text-sm sm:text-base text-gray-600 mb-1">{{ cert.institution }}</p>
            <p class="text-sm text-gray-500">{{ cert.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Objective -->
    <div class="mb-8 sm:mb-12">
      <h3 class="text-lg sm:text-xl font-medium mb-3 border-b w-fit">Objective</h3>
      <div class="info-card">
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          {{ profile.about.blurb }}
        </p>
      </div>
    </div>

    <!-- Communication & Leadership -->
    <div class="mb-8 sm:mb-12">
      <h3 class="text-lg sm:text-xl font-medium mb-3 border-b w-fit">
        Communication & Leadership
      </h3>
      <div class="info-card">
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <ul class="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
          <li>
            Collaborated effectively with frontend developers, mobile teams, and
            product managers for cohesive project development.
          </li>
          <li>
            Led regular stand-up meetings and code reviews to maintain alignment
            and ensure code quality in backend systems.
          </li>
          <li>
            Mentored junior developers on backend best practices and Laravel framework.
          </li>
        </ul>
      </div>
    </div>

    <!-- Hobbies -->
    <div class="mb-8 sm:mb-12">
      <h3 class="text-lg sm:text-xl font-medium mb-3 border-b w-fit">Hobbies</h3>
      <div class="info-card">
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          Continuous learning, exploring new backend technologies, API design patterns,
          and contributing to open-source Laravel projects.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile } from '~/data/profile'
</script>

<style lang="scss" scoped>
.info-card {
  @apply bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200;

  .icon-wrapper {
    @apply bg-primary/10 text-primary p-2 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4;
  }
}
</style>
