<template>
  <main class="min-h-screen lg:mx-20 sm:mx-14 mx-8">
    <!-- Hero -->
    <section class="sm:mt-20 mt-16 flex flex-col sm:flex-row justify-between items-center" id="Hero">
      <div class="space-y-4 sm:space-y-6 text-center">
        <h1 class="lg:text-6xl text-5xl font-bold">Organize your life</h1>
        <h2 class="text-[#828282] lg:text-2xl text-xl">The world's #1 task
          manager and
          to-do list app.</h2>
        <button @click="navigateTo('/pricing')" class="btn mt-2">Start for free</button>
      </div>
      <img src="../assets/sapiens.svg" class="w-8/12">
    </section>
    <!-- pricing -->
    <section id="pricing">
      <h2 class="lg:text-4xl text-3xl font-semibold">Pricing</h2>
      <h3 class="text-[#828282] lg:text-xl text-lg">Features from free to affordable</h3>
      <div class="lg:p-10 sm:p-0 p-5 grid sm:grid-cols-3 gap-x-4 lg:gap-x-28 gap-y-4">
        <HomePagePricingCard v-for="pricing in pricingCards" :title="pricing.title" :description="pricing.description"
          :price="pricing.price" :callToAction="pricing.callToAction" :features="pricing.features" />
      </div>
    </section>
    <!-- Testimonials -->
    <section class="my-32" id="testimonials">
      <h2 class="lg:text-4xl text-3xl font-semibold">Testimonials</h2>
      <h3 class="text-[#828282] lg:text-xl text-lg">Hear it from our clients</h3>
      <div class="w-full grid grid-cols-3 gap-x-8 sm:gap-x-1 lg:gap-x-16">
        <div class="card space-y-12">
          <p class="lg:text-lg font-semibold">"The best developer ever, should be hired by Google & Netflix at the same
            time."</p>
          <div class="flex justify-start items-center space-x-2">
            <img src="https://source.boringavatars.com/bauhaus/120/Stefan?colors=264653,2a9d8f,e9c46a" alt="avatar"
              class="w-12 rounded-full">
            <div>
              <p>M. Zucjerberg</p>
              <p class="text-[#828282]">Stole code</p>
            </div>
          </div>
        </div>
        <div class="card space-y-12">
          <p class="lg:text-lg font-semibold">"The best developer ever, should be hired by Google & Netflix at the same
            time."</p>
          <div class="flex justify-start items-center space-x-2">
            <img src="https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51" alt="avatar"
              class="w-12 rounded-full">
            <div>
              <p>B. Goats</p>
              <p class="text-[#828282]">Creates vaccines</p>
            </div>
          </div>
        </div>
        <div class="card space-y-12">
          <p class="lg:text-lg font-semibold">"The best developer ever, should be hired by Google & Netflix at the same
            time."</p>
          <div class="flex justify-start items-center space-x-2">
            <img src="https://source.boringavatars.com/pixel/120/Stefan?colors=26a653,2a1d8f,79646a" alt="avatar"
              class="w-12 rounded-full">
            <div>
              <p>E. Mousk</p>
              <p class="text-[#828282]">Fires developers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  definePageMeta({
    layout: "home-page",
  });

  const pricingCards = [
    {
      title: "Free",
      description: "Basic features",
      price: "$0",
      callToAction: "Upgrade",
      features: [
        "Create unlimited tasks.",
        "Set due dates and reminders.",
        "Add notes and attachments.",
        "Organize tasks into lists.",
        "Basic search."
      ]
    },
    {
      title: "Pro",
      description: "Advanced features",
      price: "$4",
      callToAction: "launch now",
      features: [
        "All free features.",
        "Priority support for the pro features.",
        "Advanced search: look for anything even your non-existing relationship.",
        "Recurring tasks.",
        "Collaboration."
      ]
    },
    {
      title: "Business",
      description: "For teams and organizations",
      price: "$6",
      callToAction: "Get started",
      features: [
        "All pro features.",
        "Team management.",
        "User roles and permissions.",
        "Analytics and reporting.",
        "API access."
      ]
    }
  ];

</script>