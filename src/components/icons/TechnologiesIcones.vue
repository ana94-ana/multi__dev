<script setup>
import technologies from '../composables/technologies'

const {icone}= technologies()


</script>
<template>
    <h1 class="flex w-auto justify-center text-4xl">Technologies We Use</h1>
    <div class="flex flex-row w-auto justify-evenly" v-for="icons in icone" >
        <img class="flex flex-row" :src="icons"/>
    </div>
</template>