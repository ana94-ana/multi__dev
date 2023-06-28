<script setup>
import mainLayout from '@/layouts/mainLayout.vue';
import SectionOneCard from '@/components/custom/SectionOneCard.vue';
import AparatsCard from '@/components/custom/AparatCards.vue'
import TechnologiesIcones from '@/components/icons/TechnologiesIcones.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import ProjectImages from '@/components/Home/ProjectImages.vue'
import inputs from '@/components/contact/inputs.vue';
</script>

<template>
  <mainLayout>
    <div>
      <SectionOneCard />
      <div>
        <AparatsCard />
        <TechnologiesIcones />
        <Carousel />
        <ProjectImages />
        <inputs />
      </div>
    </div>
  </mainLayout>
</template>