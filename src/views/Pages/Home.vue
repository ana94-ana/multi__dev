<script setup>
import mainLayout from '@/layouts/mainLayout.vue'
import SectionHero from '@/components/Home/SectionHero.vue'
import SectionCustom from '@/components/Home/SectionCustom.vue'
import TechnologiesIcones from '@/components/icons/TechnologiesIcones.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import ProjectImages from '@/components/Home/ProjectImages.vue'
import ReseptPost from '@/components/Home/ReseptPost.vue'
import SectionEnd from '@/components/Home/SectionEnd.vue'
</script>

<template>
    <mainLayout>
        <div class="space-y-10">
            <SectionHero />
            <div class="space-y-10">
                <SectionCustom />
                <TechnologiesIcones />
                <Carousel />
                <ProjectImages />
                <ReseptPost />
                <SectionEnd />
            </div>
        </div>
    </mainLayout>
</template>
