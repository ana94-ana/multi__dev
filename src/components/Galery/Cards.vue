<script setup>
import cards from '../composables/cards';
import CarouselCards from './CarouselCards.vue';

const {title, price, image, icone }= cards()

</script>
<template>
    <h1 class="text-center font-semibold text-6xl">გალერეა</h1>
    <CarouselCards/>
   <div class="hidden lg:flex flex-col ">
    <div class=" flex flex-row space-x-10 mx-10 flex-row "> 
        <div class="flex flex-col w-auto " v-for="images in image">
            <div >
                <img :src="images" alt="">
            </div>
            <div class="flex flex-row justify-between ">
                <div class="space-y-3 my-3 text-xl">
                    <h3 v-text="title" />
                    <h3 v-text="price" />
                    <button class="bg-[#1C5178] w-32 h-11 text-[#FFFFFF]">ყიდვა</button>
                </div>
                <div class="space-y-3 my-3">
                    <img :src="icone.love" />
                    <img :src="icone.kalata" />
                </div>
            </div>
        </div>
    </div>
    <div class=" flex flex-row my-10 justify-center space-x-5">
        <hr class="w-12 h-1 mt-3 bg-[#000000]">
        <h3>მეტის ნახვა</h3>
        <hr class="w-12 h-1 mt-3  bg-[#000000]">
    </div>
    </div>
</template>