<template>
    <div class="card grid grid-cols-1 gap-5 p-7">
        <div class="space-y-0.5">
            <h2 class="font-semibold text-2xl text-center">{{ title }}</h2>
            <p class="text-xs text-gray-500">{{ description }}</p>
            <p class="">{{ price }}</p>
        </div>
        <button class="btn w-1/2 mx-auto">{{ callToAction }}</button>
        <div class="w-3/5 border-b-2 mx-auto"></div>
        <ul class="text-sm">
            <li class="flex justify-start items-center" v-for="feature in features" :key="feature"><span
                    class="material-symbols-outlined text-base">
                    done
                </span>{{ feature }}</li>
        </ul>
    </div>
</template>

<script setup>
    const { title, price, features, description, callToAction } = defineProps(['title', 'price', 'features', 'description', 'callToAction'])
</script>
