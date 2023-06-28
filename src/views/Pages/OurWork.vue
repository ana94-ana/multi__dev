<script setup>
import mainLayout from '@/layouts/mainLayout.vue';
import SectionOne from '@/components/ourWork/SectionOne.vue';
import CorewoodCards from '@/components/ourWork/corewoodCards.vue'
import ProductionsCard from '@/components/ourWork/ProductionsCard.vue'
import LivingCard from '@/components/ourWork/LivingCard.vue'
import StreetCard from '@/components/ourWork/StreetCard.vue'
import CloudvaraCard from '@/components/ourWork/CloudvaraCard.vue'
import InfowerksCard from '@/components/ourWork/InfowerksCard.vue'
import SectionEnd from '@/components/ourWork/SectionEnd.vue'
</script>

<template>
  <mainLayout>
    <div>
      <div class="flex flex-col text-[#FFFFFF] space-y-8">
        <SectionOne />
        <CorewoodCards />
        <ProductionsCard />
        <LivingCard />
        <StreetCard />
        <CloudvaraCard />
        <InfowerksCard />
        <SectionEnd />
      </div>
    </div>
  </mainLayout>
</template>