<script setup>
import reseptPost from '@/composables/reseptPost';
import Buttons from '@/button/Buttons.vue'
const {image, descriptions}= reseptPost()
</script>

<template>
    <div class="flex flex-col w-3/4 mx-auto items-center">
        <h1 class="text-center">recent posts</h1>

        <div class="flex justify-center w-auto flex-col h-auto  m-7 md:flex-row ">

            <div class="flex flex-col mx-auto w-full h-full">
                <div class="w-auto h-auto" v-for="images in image">
                    <img class="flex flex-row mx-auto" :src="images" alt="">
                    <div>
                <h3 class="w-auto h-auto" v-text="descriptions"/>
            </div>
            <Buttons />
            </div>
            </div>
        </div>
    </div>
</template>