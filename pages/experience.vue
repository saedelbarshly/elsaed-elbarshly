<template>
  <div class="mb-5">
    <h3 class="text-lg font-medium mb-3 border-b w-fit">
      Professional Experience
    </h3>

    <div class="experience-timeline">
      <div 
        v-for="(exp, index) in profile.experience"
        :key="exp.company"
        class="timeline-item"
      >
        <div class="timeline-marker" :class="{ '!bottom-0': index === profile.experience.length - 1 }">
          <div class="timeline-dot"></div>
          <div class="timeline-line"></div>
        </div>

        <div class="timeline-content">
          <div class="company-header">
            <div class="company-info">
              <h4 class="text-xl font-semibold">{{ exp.role }}</h4>
              <div class="company-details">
                <!-- <svg-icon name="alalmiya" /> -->
                 <img :src="exp.image" :alt="exp.company" class="w-10 h-10 object-cover rounded-full border border-gray-200" draggable="false"/>
                <span class="company-name">{{ exp.company }}</span>
                <span class="timeline-date">{{ exp.start }} – {{ exp.end }}</span>
              </div>
              <div class="location">
                <span class="text-sm text-gray-500">{{ exp.location }}</span>
              </div>
            </div>
          </div>

          <div class="achievements" :class="{ 'border-b pb-4': index < profile.experience.length - 1 }">
            <div 
              v-for="bullet in exp.bullets"
              :key="bullet"
              class="achievement-item"
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

              <p>{{ bullet }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile } from '~/data/profile'
</script>

<style lang="scss" scoped>
.experience-timeline {
  @apply relative;
}

.timeline-item {
  @apply relative pl-8 mb-12;

  &:last-child {
    @apply mb-0;
  }
}

.timeline-marker {
  @apply absolute left-0 top-0 bottom-[-50px]  flex flex-col items-center;
}

.timeline-dot {
  @apply w-4 h-4 rounded-full;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
}

.timeline-line {
  @apply w-0.5 flex-grow;
  background: linear-gradient(to bottom, #6366f1, #8b5cf6);
}

.timeline-content {
  @apply bg-white rounded-xl shadow-lg p-6;
  border: 1px solid #e5e7eb;
}

.company-header {
  @apply mb-6;
}

.company-info {
  h4 {
    @apply text-gray-900 mb-1;
  }
}

.company-details {
  @apply flex flex-wrap gap-4 items-center;

  .company-name {
    @apply text-lg font-medium text-gray-700;
  }

  .timeline-date {
    @apply text-sm text-gray-500;
  }
}

.achievements {
  @apply space-y-3 mb-4;
}

.achievement-item {
  @apply flex items-center gap-3;

  .icon-wrapper {
    @apply w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
  }

  p {
    @apply text-sm text-gray-600;
  }
}

.projects-section {
  @apply mt-4;
}

.projects-title {
  @apply text-lg font-medium mb-4 text-gray-900;
}

.projects-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
}

.project-card {
  @apply bg-gray-50 rounded-lg p-4 transition-all duration-300;
  border: 1px solid #e5e7eb;

  &:hover {
    @apply transform -translate-y-1;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }

  h6 {
    @apply font-semibold text-gray-900 mb-1;
  }

  p {
    @apply text-sm text-gray-600;
  }
}

.responsibilities {
  @apply space-y-3 mb-6;
}

.responsibility-item {
  @apply flex items-center gap-3;

  .icon-wrapper {
    @apply w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
  }

  p {
    @apply text-sm text-gray-600;
  }
}

.achievements-section {
  @apply mt-6;
}

.achievements-title {
  @apply text-lg font-medium mb-4 text-gray-900;
}

.achievements-list {
  @apply space-y-3;
}
</style>
