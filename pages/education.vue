<template>
  <div class="mb-5">
    <h3 class="text-lg font-medium mb-3 border-b w-fit">Education</h3>

    <div 
      v-for="education in profile.education"
      :key="education.degree"
      class="education-card"
    >
      <!-- Degree Header -->
      <div class="degree-header">
        <div class="degree-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>

        <div class="degree-info">
          <h4 class="text-xl font-semibold">
            {{ education.degree }}
          </h4>

          <p class="text-gray-600">
            {{ education.school }}
          </p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-date">{{ education.start }} – {{ education.end }}</span>
              <span class="timeline-location">Mansoura, Egypt</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificates Section -->
    <div class="mt-8">
      <h3 class="text-lg font-medium mb-3 border-b w-fit">Certificates</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="cert in profile.certificates"
          :key="cert.name"
          class="certificate-card"
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          
          <div>
            <h4 class="font-semibold text-lg mb-1">{{ cert.name }}</h4>
            <p class="text-gray-600 mb-1">{{ cert.institution }}</p>
            <p class="text-sm text-gray-500">{{ cert.date }}</p>
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
.education-card {
  @apply bg-white rounded-xl shadow-lg p-6;
  border: 1px solid #e5e7eb;
}

.degree-header {
  @apply flex items-start gap-4 mb-6;

  .degree-icon {
    @apply w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
  }

  .degree-info {
    h4 {
      @apply text-gray-900;
    }
  }
}

.timeline {
  @apply relative pl-8 mb-6;

  &::before {
    content: "";
    @apply absolute left-0 -top-1 -bottom-1 w-0.5;
    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
  }
}

.timeline-item {
  @apply relative;
}

.timeline-dot {
  // @apply absolute left-[-2rem] -translate-x-1/2 top-0 size-4 rounded-full;
  // background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
}

.timeline-header {
  @apply flex flex-wrap gap-4 mb-3;
}

.timeline-date {
  @apply text-sm font-medium text-gray-600;
}

.timeline-location {
  @apply text-sm text-gray-500;
}

.grades {
  @apply space-y-2;
}

.grade-item {
  @apply flex items-center gap-2;

  .grade-label {
    @apply text-sm text-gray-600;
  }

  .grade-value {
    @apply text-sm font-medium text-gray-900;
  }
}

.project-section {
  @apply mt-8;
}

.project-title {
  @apply text-lg font-medium mb-3 text-gray-900;
}

.project-card {
  @apply bg-gray-50 rounded-lg p-4;
  border: 1px solid #e5e7eb;
}

.project-details {
  @apply space-y-3;
}

.project-role {
  @apply flex items-center gap-2;

  .role-label {
    @apply text-sm text-gray-600;
  }

  .role-value {
    @apply text-sm font-medium text-gray-900;
  }
}

.project-description {
  @apply text-sm text-gray-600;
}

.certificate-card {
  @apply bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 flex items-start gap-3;

  .icon-wrapper {
    @apply w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
  }
}
</style>
