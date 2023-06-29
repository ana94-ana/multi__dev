<script setup>
import mainLayout from '@/layouts/mainLayout.vue';
import SectionOne from '@/components/templated/SectionOne.vue';
import TimeAndMoney from '@/components/templated/TimeAndMoney.vue'
import SectionCards from '@/components/templated/sectionCards.vue'
import Afordable from '@/components/templated/Afordable.vue'
import ProjectImage from '@/components/templated/ProjectImage.vue'
import TemplatedEnd from '@/components/templated/templateEnd.vue'
</script>

<template>
  <mainLayout>
    <div>
      <SectionOne />
      <div class="space-y-10 my-24">
        <TimeAndMoney />
        <SectionCards />
      </div>
      <Afordable />
      <ProjectImage />
      <TemplatedEnd />
    </div>
  </mainLayout>
</template>