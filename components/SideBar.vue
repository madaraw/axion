<template>
    <div v-if="sidebarOpen" @click="sidebarOpen = false"
        class="absolute w-screen h-screen bg-gray-900/30 z-[1] block sm:hidden"></div>
    <Transition>
        <div v-show="sidebarOpen"
            class="sm:w-[305px] sm:static h-screen max-h-[calc(100vh-2.75rem)] bg-[#fafafa] pt-8 w-2/3 absolute z-[2]">
            <div class="flex flex-col text-xl space-y-2">
                <NuxtLink class="py-2 px-3" to="/dash">
                    <p>Today</p>
                </NuxtLink>
                <NuxtLink class="py-2 px-3" to="/dash/upcoming">
                    <p>Upcoming</p>
                </NuxtLink>
            </div>
        </div>
    </Transition>
</template>

<script setup>
    const sidebarOpen = useSidebarOpen()
</script>

<style scoped>
.router-link-active {
    @apply font-semibold bg-gray-100 rounded-sm;
}

.v-enter-active,
.v-leave-active {
    @apply transition-all duration-500 ease-in-out;
}

.v-enter-from,
.v-leave-to {
    @apply -translate-x-full;
}
</style>