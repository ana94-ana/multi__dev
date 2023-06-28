<template>
    <div id="carouselExampleCaptions" class="relative bg-[#EEF2F6]" data-te-carousel-slide>
        <div class="flex flex-col text-center text-3xl ">
            <h1>Hear It From Our Clients</h1>
        </div>
        <div class="flex w-auto overflow-hidden  justify-center">
            <div class="flex  w-full flex-row">
                <div class="flex flex-col justify-center m-5 rounded-lg bg-[#FFFFFF]">
                    <img class="mx-auto w-32" src="@/assets/images/womenAvatar.svg" alt="" />
                    <div class="py-5 text-center">
                        <h5 class="text-xl">First slide label</h5>
                        <p> Some representative placeholder content for the first slide. </p>
                    </div>
                </div>
                <div class="flex flex-col justify-center w-full m-5 rounded-lg bg-[#FFFFFF]">
                    <img class="mx-auto w-32" src="@/assets/images/womenAvatar.svg" alt="" />
                    <div class="py-5 text-center">
                        <h5 class="text-xl">First slide label</h5>
                        <p>
                            Some representative placeholder content for the first slide.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col justify-center w-full m-5 rounded-lg bg-[#FFFFFF]">
                    <img class="mx-auto w-32" src="@/assets/images/womenAvatar.svg" alt="" />
                    <div class="py-5 text-center">
                        <h5 class="text-xl">First slide label</h5>
                        <p>
                            Some representative placeholder content for the first slide.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center m-5 w-full rounded-lg flex-col w-auto bg-[#FFFFFF] ">
                    <img class="mx-auto w-32 " src="@/assets/images/menAvatar.svg" alt="" />
                    <div class="py-5 text-center">
                        <h5 class="text-xl">First slide label</h5>
                        <p>
                            Some representative placeholder content for the first slide.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col w-auto m-5 justify-center rounded-lg bg-[#FFFFFF]">
                    <img class="mx-auto w-32" src="@/assets/images/girlavatar.svg" alt="" />
                    <div class="py-5 text-center">
                        <h5 class="text-xl">First slide label</h5>
                        <p>
                            Some representative placeholder content for the first slide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <button
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>
        <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
    </div>
</template>