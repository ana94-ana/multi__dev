<script setup>
import mainLayout from '../../layouts/mainLayout.vue';
</script>

<template>
    <mainLayout>
        <div class="flex items-center flex-col  bg-indigo-600/75">
            <div class="mt-20"><img src="../../assets/images/raiting.svg" /></div>
            <div class="flex flex-col w-1/2 mx-auto items-center">
                <h1 class="my-6 text-2xl  font-bold ">We Design & Develop Websites That Deliver Results</h1>
                <p class="break-all">Our goal is to develop simple and modern websites that are optimized for both search
                    engines and user
                    experience, ultimately driving more traffic and revenue to your business.</p>
            </div>
            <div class="flex flex-row my-6">
                <div class="flex my-4 bg-yellow-400 h-10  rounded-full mr-9 ">
                    <button class="flex items-center w-32 justify-center ">Let's Talk </button>
                    <div class="flex items-center w-8"> <img src="../../assets/images/isari.svg" /></div>
                </div>
                <div class="flex flex-row my-4 border border-zinc-300 text-white rounded-full mr-9 ">
                    <button class="flex items-center w-32 justify-center ">Let's Talk </button>
                    <div class="flex items-center w-8"> <img src="../../assets/images/isari.svg" /></div>
                </div>
            </div>
            <div class=" mt-10 space-y-12">
                <div class="flex flex-row ">
                    <img src="../../assets/images/pseudo.svg" />
                    <p>Trusted by Innovative Companies Worldwide</p>
                    <img src="../../assets/images/pseudo.svg" />
                </div>
                <div class="flex flex-row space-x-10">
                    <img src="../../assets/images/aegisliving.svg" />
                    <img src="../../assets/images/KOJIMA-PRODUCTIONS-png.png.svg" />
                    <img src="../../assets/images/doctor-butlers.svg.svg" />
                    <img src="../../assets/images/telepsychiatry-svg.svg.svg" />
                    <img src="../../assets/images/united-way.svg.svg" />
                </div>
            </div>
        </div>
        <div>
            <div class="flex flex-col mx-auto w-1/4 items-center  space-y-5">
                <h1 class="text-2xl font-bold">Your Dedicated Web Design & Development Team</h1>
                <p class="break-all">We are small team of experts that have been building on the internet for over a decade.
                    We are passionate about helping businesses thrive online and creating user-focused websites that drive
                    real results.</p>
            </div>
            <div class="flex flex-row w-3/5 bg-indigo-600/75 mx-auto items-center rounded-lg">
                <div class="flex items-center flex-col w-auto">
                    <div>
                        <img src="../../assets/images/custom.icon.svg" />
                    </div>
                    <h3> Custom Websites </h3>
                    <p>Whether you’re looking to build a custom
                        marketing website or the next Twitter we can
                        help you build it.</p>
                    <div class="flex flex-row my-4 border border-zinc-300 text-white rounded-full mr-9 ">
                        <button class="flex items-center w-32 justify-center ">Learn More </button>
                        <div class="flex items-center w-8"> <img src="../../assets/images/isari.svg" /></div>
                    </div>
                </div> 
                <hr class="w-1 h-36 mx-auto my-8 bg-gray-200  ">  
                <div class="flex items-center flex-col w-auto">
                    <div>
                        <img src="../../assets/images/search.icon.svg" />
                    </div>
                    <h3> Custom Websites </h3>
                    <p>Whether you’re looking to build a custom
                        marketing website or the next Twitter we can
                        help you build it.</p>
                    <div class="flex flex-row my-4 border border-zinc-300 text-white rounded-full mr-9 ">
                        <button class="flex items-center w-32 justify-center ">Learn More </button>
                        <div class="flex items-center w-8"> <img src="../../assets/images/isari.svg" /></div>
                    </div>
                </div>
            </div>
        </div>
    </mainLayout>
</template>
