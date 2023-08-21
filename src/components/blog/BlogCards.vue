<script setup>
import blogCard from '../composables/blogCard';

const {image, title, description, dataTime} = blogCard()

</script>
<template>
    <div class=" grid-cols-2  justify-center mx-5 md:mx-auto md:w-3/4 md:grid">
        <div class="container mx-auto my-5 space-y-6" v-for="images in image">
          <img :src="images" alt="">
          <h1 class="text-[#6967CE] text-3xl" v-text="title"/>
          <p class=" text-sm text-[#407BEC]" v-text="dataTime"/>
          <p class="text-lg text-[#556D9A]" v-text="description"/>
          <button class="bg-[#FFB902] rounded-full px-8 py-4">Read Post</button>
        </div> 
    </div>
</template>