<script setup>
import cards from '../composables/cards';

const {image}=cards()
</script>
<template>
    <div class="flex flex-row mx-16 ">
        <div class="flex w-1/2  mx-auto h-5/6" >
            <img :src="image.leonardo" alt="">
        </div>
        
        <div class="space-y-20 text-center mt-40 ">
        <h1 class="text-6xl">ლეონარდოს ფუნჯი</h1>
        <h3>ხელოვნება არასოდეს მთავრდება</h3>
    </div>
    </div>
</template>