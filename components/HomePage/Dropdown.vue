<template>
    <div class="relative inline-block text-left text-gray-800">
        <button @click="isMenuOpen = !isMenuOpen" type="button"
            class="inline-flex items-center justify-between rounded-md">
            <span class="font-bold material-symbols-outlined text-4xl">Menu</span>
        </button>
        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <div v-if="isMenuOpen"
                class="origin-top-right absolute right-0 top-8 mt-2 w-56 rounded-md shadow-lg text-sm overflow-hidden border z-20">
                <div class="rounded-md bg-white shadow-xs">
                    <div class="border-t border-gray-100"></div>
                    <div class="py-1">
                        <nuxt-link :to="{ path: '/', hash: '#pricing' }" @click.native="isMenuOpen = false"
                            class="p-4 flex items-center space-x-2">
                            <img src="https://s.svgbox.net/hero-outline.svg?ic=currency-rupee" class="h-6 w-6" />
                            <span> Pricing </span>
                        </nuxt-link>
                        <nuxt-link :to="{ path: '/', hash: '#testimonials' }" @click.native="isMenuOpen = false"
                            class="p-4 flex items-center space-x-2">
                            <img src="https://s.svgbox.net/hero-outline.svg?ic=heart" class="h-6 w-6" />
                            <span> Testimonials </span>
                        </nuxt-link>
                    </div>
                    <div class="border-t border-gray-100"></div>
                    <div class="py-1">
                        <nuxt-link to="/login" @click.native="isMenuOpen = false"
                            class="p-4 flex items-center space-x-2">
                            <img src="https://s.svgbox.net/hero-outline.svg?ic=logout" class="h-6 w-6" />
                            <span> Login </span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
    const isMenuOpen = ref(false)
</script>