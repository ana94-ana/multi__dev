<script setup>
import mainLayout from '@/layouts/mainLayout.vue';
import BlogCards from '@/components/blog/BlogCards.vue';
import BlogTitle from '@/components/blog/BlogTitle.vue'
import SectionEndEnd from '@/components/blog/SectionEnd.vue'
</script>

<template>
  <mainLayout>
    <div class="space-y-10">
      <BlogTitle />
      <BlogCards />
      <SectionEndEnd />
    </div>
  </mainLayout>
</template>