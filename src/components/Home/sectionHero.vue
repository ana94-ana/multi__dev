<script setup>
import homeOne  from '../composables/homeOne.js'

const {homeOneSection} = homeOne()

</script>
<template>
    <div class="flex items-center flex-col  bg-indigo-600/75">
        <div class="mt-20"><img src="@/assets/images/raiting.svg" /></div>
        <div class="flex flex-col mx-auto items-center">
            <h1 class=" mx-auto text-6xl text-center font-bold my-6 md:w-2/3">{{ homeOneSection.title }}
            </h1>
            <p class=" mx-auto text-2xl text-center md:w-1/2 ">{{ homeOneSection.description }}</p>
        </div>
        <div class="flex mx-auto my-6 flex-row ">
            <div class="flex my-4 bg-yellow-400 h-10  rounded-full mr-9 ">
                <button class="flex items-center w-32 justify-center ">{{ homeOneSection.button }}</button>
                <div class="flex items-center w-8"> <img src="@/assets/images/isari.svg" /></div>
            </div>
            <div class="flex flex-row my-4 border border-zinc-300 text-white rounded-full mr-9 ">
                <button class="flex items-center w-32 justify-center ">{{ homeOneSection.button }}</button>
                <div class="flex items-center w-8"> <img src="@/assets/images/isari.svg" /></div>
            </div>
        </div>
        <div class=" mt-10 space-y-12">
            <div class="flex flex-row ">
                <hr class="w-none md:w-64 mx-auto my-4 bg-gray-200  ">
                <p>Trusted by Innovative Companies Worldwide</p>
                <hr class=" md:w-64 mx-auto my-4 bg-gray-200  ">
            </div>
            <div class="flex mx-auto flex-row space-x-10 ">
                <img src="@/assets/images/aegisliving.svg" />
                <img src="@/assets/images/KOJIMA-PRODUCTIONS-png.png.svg" />
                <img src="@/assets/images/doctor-butlers.svg.svg" />
                <img src="@/assets/images/telepsychiatry-svg.svg.svg" />
                <img src="@/assets/images/united-way.svg.svg" />
            </div>
        </div>
    </div>
</template>