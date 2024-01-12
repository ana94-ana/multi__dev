<script setup>
import cards from '../composables/cards';

const { title, price, image, icone } = cards()
</script>

<template>
    <div class="lg:hidden" >
<div class="flex flex-row space-x-10 mx-10 flex-row "> 
        <button class="mb-40"><img src="@/assets/icone/isariMarcxniv.svg" alt=""></button>
        <div class="flex flex-col w-auto ">
            <div>
                <img :src="image.monaliza" alt="">
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
        <button class="mb-40"><img src="@/assets/icone/isariMarjvniv.svg" alt=""></button>
        
</div>
<div class="flex justify-center ">
    <div class="flex space-x-5">
        <button type="button" class="w-3 h-3 rounded-full bg-[#D9D9D9] hover:bg-[#555454]" ></button>
        <button type="button" class="w-3 h-3 rounded-full bg-[#D9D9D9] hover:bg-[#555454]" ></button>
        <button type="button" class="w-3 h-3 rounded-full bg-[#555454] hover:bg-[#D9D9D9]" ></button>
        <button type="button" class="w-3 h-3 rounded-full bg-[#D9D9D9] hover:bg-[#555454]" ></button>
        <button type="button" class="w-3 h-3 rounded-full bg-[#D9D9D9] hover:bg-[#555454]" ></button>
    </div>
</div>
<div class=" flex flex-row my-10 justify-center space-x-5">
        <hr class="w-12 h-1 mt-3 bg-[#000000]">
        <h3>ყველას ნახვა</h3>
        <hr class="w-12 h-1 mt-3  bg-[#000000]">
    </div>

</div>

</template>