<script setup>
import Footer from '../components/sections/Footer.vue'
import Header from '../components/sections/Header.vue';
</script>
<template>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</template>