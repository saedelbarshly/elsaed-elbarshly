<template>
  <div>
    <div class="mb-5">
      <h3 class="text-lg font-medium mb-3 border-b w-fit">Technical Skills</h3>
      <p class="w-3/4 mb-6">
        As a seasoned Backend Developer, I've mastered a comprehensive set of
        technologies and tools that enable me to build robust, scalable, and
        secure backend systems and APIs.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Backend Development -->
      <div class="skill-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
        <h4 class="font-semibold mb-2">Backend Development</h4>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in backendSkills" :key="skill" class="skill-tag">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Database & Caching -->
      <div class="skill-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        </div>
        <h4 class="font-semibold mb-2">Database & Caching</h4>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in databaseSkills" :key="skill" class="skill-tag">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Security & Authentication -->
      <div class="skill-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h4 class="font-semibold mb-2">Security & Authentication</h4>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in securitySkills" :key="skill" class="skill-tag">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- DevOps & Cloud -->
      <div class="skill-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <h4 class="font-semibold mb-2">DevOps & Cloud</h4>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in devopsSkills" :key="skill" class="skill-tag">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile } from '~/data/profile'

// Group skills by category
const backendSkills = profile.skills.filter(skill =>
  ['Laravel', 'PHP', 'RESTful APIs'].includes(skill)
)

const databaseSkills = profile.skills.filter(skill =>
  ['MySQL', 'NOSQL', 'Database Design/Indexing', 'Redis Caching'].includes(skill)
)

const securitySkills = profile.skills.filter(skill =>
  ['JWT/OAuth', '3rd-party Integrations', 'Payment Gateways'].includes(skill)
)

const devopsSkills = profile.skills.filter(skill =>
  ['Performance Optimization', 'Cloud Deployments', 'Testing', 'CI/CD', 'Queues/Jobs'].includes(skill)
)
</script>

<style lang="scss" scoped>
.skill-card {
  @apply bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200;

  .icon-wrapper {
    @apply bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4;
  }
}

.skill-tag {
  @apply bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-primary transition-all duration-300 flex items-center;
}
</style>
