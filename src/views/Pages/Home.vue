<script setup>
import mainLayout from '@/layouts/mainLayout.vue'
import SectionHero from '@/components/Home/SectionHero.vue'
import SectionEnd from '@/components/Home/SectionEnd.vue'
</script>

<template>
    <mainLayout>
        <div class="space-y-10">
            <SectionHero />
            <div class="space-y-10">
               
                <SectionEnd />
            </div>
        </div>
    </mainLayout>
</template>
