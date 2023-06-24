<script setup>
import mainLayout from '../../layouts/mainLayout.vue';
</script>

<template>
  <mainLayout>
    <div>
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
</mainLayout></template>