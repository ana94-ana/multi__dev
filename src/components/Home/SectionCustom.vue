<script setup>
import homeCustom from '../composables/homeCustom.js'

const { customtitle, custom, search } = homeCustom()

</script>
<template>
    <div class="flex mx-5  text-center  flex-col space-y-5 md:mx-auto md:w-1/4 ">
        <h1 class="text-2xl font-bold">{{ customtitle.title }}</h1>
        <p class="break-all">{{ customtitle.description }}</p>
    </div>
    <div
        class="flex flex-col space-y-10 mx-4 items-center bg-indigo-600/75 rounded-lg md:space-y-0 md:mx-auto md:flex-row md:w-3/4  ">
        <div class="flex text-center p-3  items-center flex-col  w-auto space-y-5">
            <div>
                <img src="@/assets/images/custom.icon.svg" />
            </div>
            <h3> {{ custom.title }} </h3>
            <p>{{ custom.description }}</p>
            <div class="flex flex-row my-4 h-12 border border-zinc-300 text-white rounded-full mr-9 ">
                <button class="flex items-center w-32 justify-center ">Learn More </button>
                <div class="flex items-center w-8"> <img src="@/assets/images/isari.svg" /></div>
            </div>
        </div>
        <hr class="  mx-auto my-8 bg-gray-200 md:h-36 md:w-1 ">
        <div class="flex items-center p-3 items-center text-center flex-col w-auto space-y-5">
            <div>
                <img src="@/assets/images/search.icon.svg" />
            </div>
            <h3>{{ search.title }} </h3>
            <p>{{ search.description }}</p>
            <div class="flex flex-row my-4 border h-12 border-zinc-300 text-white rounded-full mr-9 ">
                <button class="flex items-center w-32 justify-center ">Learn More </button>
                <div class="flex items-center  w-8"> <img src="@/assets/images/isari.svg" /></div>
            </div>
        </div>
    </div>
</template>