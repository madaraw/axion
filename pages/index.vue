<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-[#FFEBDC]">
    <section class="text-center mt-36 flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold">Organize your<br>
        work and life, finally.</h1>
      <h2 class="w-1/3 text-l mt-1">Become focused, organized, and calm with Todoist. The world's #1 task manager and
        to-do list app.</h2>
      <button @click="navigateTo('/pricing')" class="btn mt-2">Start for free</button>
    </section>
    <section class="container mx-auto my-10 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-full flex justify-center mb-2">
            <span class="material-symbols-outlined text-7xl text-[#DE483A]">add_circle</span>
          </div>
          <h2 class="text-lg font-semibold mb-2 text-center text-[#DE483A]">Intuitive Task Creation
          </h2>
          <p class="text-gray-600">Effortlessly create tasks with just a few clicks. Our user-friendly interface
            ensures that adding tasks is quick and simple.</p>
        </div>

        <div class="bg-white p-6 rounded-lg  shadow-md">
          <div class="w-full flex justify-center mb-2">
            <span class="material-symbols-outlined text-7xl text-[#DE483A]">edit</span>
          </div>
          <h2 class="text-lg font-semibold mb-2 text-[#DE483A] text-center">Seamless Task Editing
          </h2>
          <p class="text-gray-600">Easily edit task details, deadlines, and priorities. Adapt to changes without
            missing a beat.</p>
        </div>

        <div class="bg-white p-6 rounded-lg  shadow-md">
          <div class="w-full flex justify-center mb-2">
            <span class="material-symbols-outlined text-7xl text-[#DE483A]">delete</span>
          </div>
          <h2 class="text-lg font-semibold mb-2 text-[#DE483A] text-center">Efficient Deletion</h2>
          <p class="text-gray-600">Completed a task or need to remove one? Axion lets you delete tasks with ease.
            Keep your task list clutter-free.</p>
        </div>

        <div class="bg-white p-6 rounded-lg  shadow-md">
          <div class="w-full flex justify-center mb-2">
            <span class="material-symbols-outlined text-7xl text-[#DE483A]">account_circle</span>
          </div>
          <h2 class="text-lg font-semibold mb-2 text-[#DE483A] text-center">Account Creation</h2>
          <p class="text-gray-600">Start your journey by creating a personalized account. Your account is your
            gateway to a more organized and productive life. Sign up today and unlock a world of possibilities.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg  shadow-md">
          <div class="w-full flex justify-center mb-2">
            <span class="material-symbols-outlined text-7xl text-[#DE483A]">security</span>
          </div>
          <h2 class="text-lg font-semibold mb-2 text-[#DE483A] text-center">Secure and Private</h2>
          <p class="text-gray-600">We understand the importance of data security. Your tasks and information are
            safe with us. Axion employs robust security measures to ensure your privacy is never compromised.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg  shadow-md">
          <div class="w-full flex justify-center mb-2">
            <span class="material-symbols-outlined text-7xl text-[#DE483A]">face</span>
          </div>
          <h2 class="text-lg font-semibold mb-2 text-[#DE483A] text-center"> User-Centric Experience</h2>
          <p class="text-gray-600">Axion is built for you. We've designed every feature with your needs in mind,
            ensuring a smooth and intuitive experience. Stay in control of your tasks and conquer your goals.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "home-page",
  });


</script>