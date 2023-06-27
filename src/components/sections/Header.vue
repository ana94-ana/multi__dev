<script setup>
import RouterLink from '../../views/router/Router-link.vue';
</script>
<template>
    <RouterLink/>
    <div class="flex flex-row justify-between md:flex-row bg-indigo-800/80 text-white h-20 w-auto">
        <div class="flex w-auto justify-start w-auto items-center ml-9">
            <img src="@/assets/images/Isolation_Mode.svg">
        </div>
        <div class="flex w-auto my-6 ">
            <div class="flex flex-row justify-center space-x-10  ">
                <button>Home</button>
                <button class="flex flex-row items-center">Servises <img src="@/assets/images/qvedaisari.svg"
                        class="mx-2.5" /></button>
                <button>Out Work</button>
                <button>Blog</button>
            </div>

        </div>
        <div class="flex flex-row my-4 bg-yellow-400 h-10  rounded-full mr-9 ">
            <button class="flex items-center w-32 justify-center ">Let's Talk </button>
            <div class="flex items-center w-8"> <img src="@/assets/images/isari.svg" /></div>
        </div>
    </div>

</template>