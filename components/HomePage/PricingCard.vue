<template>
    <div class="sm:p-4 p-8 lg:p-12 rounded-md shadow-xl grid grid-cols-1 gap-5">
        <div class="text-center space-y-0.5">
            <h2 class="font-semibold text-2xl">{{ title }}</h2>
            <p class="text-[#828282]">{{ description }}</p>
            <p class="font-semibold text-xl">{{ price }}</p>
        </div>
        <button @click="navigateTo('/signup')"
            class="bg-black px-6 sm:px-3 lg:px-6 py-3 sm:py-2 lg:py-3 text-white rounded-lg w-1/2 lg:w-1/2 sm:w-2/3 mx-auto">{{
                callToAction }}</button>
        <div class="w-3/5 border-b-2 mx-auto"></div>
        <ul class="text-sm">
            <li class="flex justify-start items-center lg:text-lg sm:text-base text-lg" v-for="feature in features"
                :key="feature">
                <span class="font-bold material-symbols-outlined text-base mr-1">
                    done
                </span>{{ feature }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    const { title, price, features, description, callToAction } = defineProps(['title', 'price', 'features', 'description', 'callToAction'])
</script>
