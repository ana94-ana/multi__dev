<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex flex-row justify-between md:flex-row bg-indigo-800/80 text-white h-20 w-auto">
        <div class="flex w-auto justify-start w-auto items-center ml-9">
            <img src="@/assets/images/Isolation_Mode.svg">
        </div>
        <div class="flex w-auto my-6 ">
            <div class="flex flex-row justify-center mx-auto space-x-10  ">
                <RouterLink to="/"> <button>Home</button></RouterLink>
                <button class="flex flex-row ">Servises<img src="@/assets/images/qvedaisari.svg"
                        class=" mx-2.5 mt-2.5" />
                </button>
                <RouterLink to="/ourwork"> <button>Out Work</button></RouterLink>
                <RouterLink to="/blog"> <button>Blog</button></RouterLink>
            </div>

        </div>
        <RouterLink to="/contact">
            <div class="flex flex-row my-4 bg-yellow-400 h-10  rounded-full mr-9 ">
                <button class="flex items-center w-32 justify-center ">Let's Talk </button>
                <div class="flex items-center w-8"> <img src="@/assets/images/isari.svg" /></div>
            </div>
        </RouterLink>
    </div>
</template>