<script setup>
import cards from '../composables/cards';

const {title, price, image, icone}=cards()

</script>
<template>
<h1 class="text-center font-semibold text-6xl">გალერეა</h1>
    <div class="flex flex-row space-x-10 mx-10"> 
        <div class="flex flex-col w-auto ">
            <div>
                <img :src="image.monaliza" alt="">
            </div>
            <div class="flex flex-row justify-between ">
                <div class="space-y-3 my-3 text-xl">
                    <h3 v-text="title"/>
                    <h3 v-text="price"/>
                    <button class="bg-[#1C5178] w-32 h-11">ყიდვა</button>
                </div>
                <div class="space-y-3 my-3">
                    <img :src="icone.love"/>
                    <img :src="icone.kalata"/>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-auto ">
            <div>
                <img :src="image.erminit" alt=""/>
            </div>
            <div class="flex flex-row justify-between ">
                <div class="space-y-3 my-3 text-xl">
                    <h3 v-text="title"/>
                    <h3 v-text="price"/>
                    <button class="bg-[#1C5178] w-32 h-11">ყიდვა</button>
                </div>
                <div class="space-y-3 my-3">
                    <img :src="icone.love"/>
                    <img :src="icone.kalata"/>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-auto ">
            <div>
                <img :src="image.salvator" alt=""/>
            </div>
            <div class="flex flex-row justify-between ">
                <div class="space-y-3 my-3 text-xl">
                    <h3 v-text="title"/>
                    <h3 v-text="price"/>
                    <button class="bg-[#1C5178] w-32 h-11">ყიდვა</button>
                </div>
                <div class="space-y-3 my-3">
                    <img :src="icone.love"/>
                    <img :src="icone.kalata"/>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-auto ">
            <div>
                <img :src="image.madona" alt="">
            </div>
            <div class="flex flex-row justify-between ">
                <div class="space-y-3 my-3 text-xl">
                    <h3 v-text="title"/>
                    <h3 v-text="price"/>
                    <button class="bg-[#1C5178] w-32 h-11">ყიდვა</button>
                </div>
                <div class="space-y-3 my-3">
                    <img :src="icone.love"/>
                    <img :src="icone.kalata"/>
                </div>
            </div>
        </div>
    </div>
</template>