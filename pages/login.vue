<template>
    <div class="flex items-center justify-center h-screen">

        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center font-semibold">Login</h1>
                <form @submit.prevent="handleSubmit">
                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="name"
                        placeholder="Username" v-model="accountInfo.username" required />
                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password"
                        placeholder="Password" v-model="accountInfo.password" required />
                    <p v-if="error" class="my-1 text-red-500 text-center">{{ error }}</p>
                    <button
                        class="w-full text-center py-3 rounded btn hover:bg-green-dark focus:outline-none my-1">Login</button>
                </form>
            </div>

            <div class="text-grey-dark mt-6">
                You don't have an account?
                <NuxtLink to="/signup">Sign Up</NuxtLink>.
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
