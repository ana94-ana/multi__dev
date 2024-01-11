<script setup>
import payment from '../composables/payment'

const { name, lastName, cardsNumber } = payment()
</script>
<template>
    <div class="space-y-10  ">
        <h1 class="text-3xl text-start mx-5 lg:text-5xl">გადახდის მეთოდები</h1>
        <div class="w-1/2 space-x-5 flex flex-row   mx-3 lg:w-auto space-x-10">
            <img  src="@/assets/icone/credit-card.svg" alt="">
            <h3 class="text-2xl lg:text-4xl" v-text="cardsNumber" />
            <div class="flex flex-row space-x-2">
                <h3 v-text="name" />
                <h3 v-text="lastName" />
            </div>
            <div><img class="mx-5 flex w-9 h-9 lg:mx-16" src="@/assets/icone/close.svg" alt=""></div>
            
        </div>
        <button class="w-42 h-10 bg-[#1C5178] text-[#FFFFFF] mx-5 lg:w-64 h-20 ">ბარათის დამატება</button>
    </div>
</template>