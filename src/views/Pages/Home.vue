<script setup>
import mainLayout from '@/layouts/mainLayout.vue'
import Cards from '@/components/Home/Cards.vue';
import Payment from '@/components/Home/Payment.vue';
import Test from '@/components/Home/Test.vue';
</script>

<template>
    <mainLayout>
        <div class="space-y-10">
            <Test/>
            <Cards/>
            <Payment/>
            </div>
    
    </mainLayout>
</template>
