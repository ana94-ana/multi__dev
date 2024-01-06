<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex flex-row justify-between md:flex-row bg-[#5A58AB] text-[#FFFFFF] h-20 w-auto">
        <div class="flex w-auto justify-start w-auto items-center ml-9">
           <RouterLink to="/">საიტის ლოგო</RouterLink>
        </div>
        <div class="flex w-auto my-6 ">
            <div class="flex flex-row justify-center mx-auto space-x-10  ">
                <RouterLink to="/"> <button>მთავარი</button></RouterLink>
                <RouterLink to="/ourwork"> <button>გალერეა</button></RouterLink>
                <RouterLink to="/blog"> <button>მხატვრის შესახებ</button></RouterLink>
                <RouterLink to="/blog"> <button>კონტაქტი</button></RouterLink>
                <RouterLink to="/blog"> <button>შესვლა</button></RouterLink>
            </div>
        </div>
    </div>
</template>