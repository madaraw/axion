<template>
    <div class="flex items-center justify-center">

        <div class="max-w-sm mx-8 lg:mx-auto flex-1 flex flex-col items-center justify-center">
            <div>
                <h1 class="text-lg font-semibold mb-1">Login to your account</h1>
                <p class="mb-4 text-sm text-gray-500">Enter your email and password to sign in for this app</p>
                <form @submit.prevent="handleSubmit">
                    <input type="text" class="block border border-grey-light w-full p-2 px-4 rounded-xl mb-4" name="name"
                        placeholder="Username" v-model="accountInfo.username" required />
                    <input type="password" class="block border border-grey-light w-full p-2 px-4 rounded-xl mb-4"
                        name="password" placeholder="Password" v-model="accountInfo.password" required />
                    <p v-if="error" class="my-1 text-red-500 text-center">{{ error }}</p>
                    <button
                        class="w-full text-center py-2 rounded btn hover:bg-green-dark focus:outline-none my-1">Login</button>
                </form>
            </div>

            <div class="text-gray-500 text-sm mt-6 text-center">
                You don't have an account?
                <NuxtLink to="/signup" class="text-black">Sign Up</NuxtLink>.
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ["auth"],
        layout: "account",
    });
    const error = ref("");
    const accountInfo = ref({
        username: "",
        password: "",
    });
    const handleSubmit = async () => {
        error.value = "";
        const res = await useLogin(accountInfo.value.username, accountInfo.value.password)
        if (res.error.value) {
            error.value = res.error.value.data.data.error;
            console.log("res", res.error.value.data.data);
            return
        }
        const userInfo = useCookie("userInfo")
        userInfo.value = { sessionToken: res.data.value.sessionToken, objectId: res.data.value.objectId }
        const userStore = useUserStore()
        userStore.login(accountInfo.value.username, userInfo.value.sessionToken, userInfo.value.objectId)
        await navigateTo("/dash")
    }
</script>
