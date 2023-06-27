<script setup>
import mainLayout from '../../layouts/mainLayout.vue';
</script>

<template>
  <mainLayout>
    <div>
      <div class="flex flex-row-reverse bg-[#6967CE]">
        <div class="flex justify-end mx-auto  h-auto md:w-1/3">
          <img class="w-0 md:w-full" src="@/assets/images/custom-websites.png.png" alt="">
        </div>
        <div class="flex flex-col items-center  mx-auto  ">
          <div class="text-center space-y-5 my-20 md:mx-52 md:text-left">
          <h1 class="text-center text-6xl  text-[#FFB902]  md:text-left">
            Cutom <span class="text-[#FFFFFF]">Websites</span></h1>
          <p class=" text-[#BDC8DB] text-xl">Whether you’re looking to build a custom marketing website or the next
            Twitter we can help you build anything
            you’re envisioning.</p>
          <button class="flex mx-auto w-44 text-[#FFFFFF] border rounded-full py-4 px-8 text-sm md:mx-0"> Get In
            Touch</button>
        </div>
      </div>
      </div>
      <div>
        <div class="flex flex-col-reverse md:flex-row-reverse">
          <div>
            <img src="@/assets/images/custom.image.leptop.png" alt="">
          </div>
          <div class="flex flex-col text-[#52627A] space-y-8 px-12 my-auto">
            <h1 class="text-4xl font-semibold text-[#25344F]">Custom Websites Set You Apart</h1>
            <p>In a world where attention spans are decreasing by the day you need to stand out from the crowd. One way to
              do that is by creating a custom website that is unique to you and your brand.</p>
            <p>Having a custom website means you’re getting a fully built website from scratch which includes a design and
              development process from the ground up.</p>
            <p> This comes with many benefits including: </p>
            <ul>
              <li>Unique Design</li>
              <li>Structured Around Your Content</li>
              <li>More Credibility</li>
              <li>Faster Page Speeds</li>
            </ul>
            <div class="flex  flex-row w-44 my-4 bg-yellow-400 h-14  rounded-full mr-9 ">
              <button class="flex items-center w-32 justify-center text-[#000000] ">Work With Us </button>
              <div class="flex items-center w-8"> <img src="@/assets/images/isari.svg" />
              </div>
            </div>
            </div>
          </div>
          <div class="my-10">
          <h1 class="flex w-auto justify-center text-4xl">Technologies We Use</h1>
                <div class="flex flex-row w-auto justify-evenly">
                    <img src="@/assets/logo/figma.svg.svg" />
                    <img src="@/assets/logo/wordpress.svg.svg" />
                    <img src="@/assets/logo/woo.svg.svg" />
                    <img src="@/assets/logo/Clippathgroup.svg" />
                    <img src="@/assets/logo/Cubs.svg" />
                </div>
              </div>
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
                <div class="bg-indigo-600/75 py-5 space-y-10">
                    <h1 class="flex justify-center mx-auto text-4xl font-medium">Recent Projects</h1>
                    <div class="justify-center  mx-4 space-y-7 md:mx-auto md:columns-2 md:w-3/4 ">
                        <div>
                            <img src="@/assets/images/stickerbros-2-1024x1024.png.png" alt="">
                        </div>
                        <div>
                            <img src="@/assets/images/lucidmedia-5-1024x1024.png.png" alt="">
                        </div>
                        <div>
                            <img src="@/assets/images/Freelanceleads-3-1024x1024.png.png" alt="">
                        </div>
                        <div>
                            <img src="@/assets/images/Cart-Rescue-1-1-1024x1024.png.png" alt="">
                        </div>
                    </div>
                    <div
                        class="flex justify-center mx-auto w-52 h-14 border border-zinc-300 text-white rounded-full  flex-row ">
                        <button class="flex items-center mx-auto w-32 justify-center ">Let's Talk </button>
                        <div class="flex items-center w-8"> <img src="@/assets/images/isari.svg" /></div>
                    </div>
                </div>
                <div class="flex items-center flex-col bg-[#6967CE]">
        <div class="text-center space-y-5 my-20 md:text-left">
          <h1 class="text-[#FFFFFF] text-6xl ">Contact Us</h1>
          <p class="px-3 text-[#BDC8DB] md:px-0 ">Whether you’re needing help with a new project or just want to pick our brain we’re
            here for you!</p>
        </div>
      </div>
      <div class="flex  items-center mx-auto px-5 flex-col py-12  bg-[#F4F8FB] ">
        <div class="text-center rounded-lg space-y-5  bg-[#FFFFFF] pt-20 md:text-left md:w-1/2">
          <div class="flex flex-col md:mx-20 ">
          <p class="text-[#6967CE] text-lg">READY TO GET STARTED?</p>
          <h1 class="text-4xl">Let’s Grow Together.</h1>
        </div>
        <div class="flex flex-col mx-5 w-auto space-y-4  md:mx-20 md:space-x-4 md:flex-row">
          <input class=" rounded w-full h-14 bg-[#F4F8FB] text-gray-700"  type="text" placeholder=" Name*">
          <input class=" rounded w-full h-14 text-gray-700 bg-[#F4F8FB] "  type="Email"
            placeholder=" Email*">
        </div>
        <div class="flex flex-col mx-5 space-y-4 w-auto md:mx-20 md:space-x-4  md:flex-row ">
          <input class=" rounded w-full h-14 text-gray-700 bg-[#F4F8FB]"  type="text" placeholder=" Company Name*">
          <input class="rounded w-full h-14 text-gray-700 bg-[#F4F8FB] "  type="" placeholder=" Website URL">
        </div>
        <div class="mx-5 md:mx-20 ">
          <textarea class=" w-full resize-none bg-[#F4F8FB] px-20 h-72 "></textarea>
          <button class="bg-[#FFB902] w-full mb-20 rounded-full mt-5 " type="button">Submit</button>
        </div>
      </div>
    </div>
        </div>
      </div>
  </mainLayout>
</template>