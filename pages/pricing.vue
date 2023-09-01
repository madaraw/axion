<template>
    <div class="bg-gradient-to-b from-white to-[#FFEBDC] w-full min-h-screen">
        <div class="container space-y-10">
            <section class="mt-16 flex justify-center items-center">
                <h1 class="text-4xl font-bold">“Axion is the number one<br> to-do list app”- PC Mag</h1>
            </section>
            <section class="p-10 mt-10 grid grid-cols-3 gap-20 px-40">
                <HomePagePricingCard v-for="pricing in pricingCards" :title="pricing.title"
                    :description="pricing.description" :price="pricing.price" :callToAction="pricing.callToAction"
                    :features="pricing.features" />
            </section>
        </div>
    </div>
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
            callToAction: "Try for free",
            features: [
                "All free features.",
                "Priority support.",
                "Advanced search.",
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
