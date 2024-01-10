<script setup>
import payment from '../composables/payment'

const { name, lastName, cardsNumber } = payment()
</script>
<template>
    <div class="space-y-10  ">
        <h1 class="text-5xl text-start mx-5">გადახდის მეთოდები</h1>
        <div class="flex flex-row space-x-10  mx-3 ">
            <img src="@/assets/icone/credit-card.svg" alt="">
            <h3 class="text-4xl" v-text="cardsNumber" />
            <div class="flex flex-row space-x-2">
                <h3 v-text="name" />
                <h3 v-text="lastName" />
            </div>
            <div><img class="flex w-9 h-9 mx-16" src="@/assets/icone/close.svg" alt=""></div>
            
        </div>
        <button class="bg-[#1C5178] text-[#FFFFFF] w-64 h-20 mx-5">ბარათის დამატება</button>
    </div>
</template>