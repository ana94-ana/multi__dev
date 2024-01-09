<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex  my-10  ">
       <div class="flex mx-auto justify-start w-auto ml-9">
           <RouterLink to="/">საიტის ლოგო</RouterLink>
           </div>
            <div class="flex flex-row justify-end  mx-auto  space-x-10 mx-9  ">
                <RouterLink to="/"> <button>მთავარი</button></RouterLink>
                <RouterLink to="/ourwork"> <button>გალერეა</button></RouterLink>
                <RouterLink to="/blog"> <button>მხატვრის შესახებ</button></RouterLink>
                <RouterLink to="/blog"> <button>კონტაქტი</button></RouterLink>
                <RouterLink to="/blog"> <button class="text-[#1C5178]" >შესვლა</button></RouterLink>
            </div>
            
    </div>
    
</template>