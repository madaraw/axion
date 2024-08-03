<template>
  <nav class="w-full flex justify-between lg:px-20 lg:py-14 sm:p-10 px-8 py-5 items-center">
    <div>
      <NuxtLink to="/">
        <p class="text-2xl font-semibold">Axion</p>
      </NuxtLink>
    </div>
    <div class="sm:hidden">
      <HomePageDropdown />
    </div>
    <div class="hidden w-full sm:flex items-center justify-end space-x-4 font-semibold text-lg">
      <ul class="flex items-center justify-end space-x-12">
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li>
          <button @click="navigateTo('/signup')" class="btn">Sign Up</button>
        </li>
      </ul>
    </div>
  </nav>
</template>