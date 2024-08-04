<template>
    <div class="flex items-center justify-center bg-white px-4">
        <div class="max-w-xs w-full">
            <div>
                <h2 class="mb-1 text-lg font-medium">Create an account</h2>
                <p class="mb-4 text-sm text-gray-500">Enter your email to sign up for this app</p>
                <form @submit.prevent="handleSubmit">
                    <input type="text" class="block border border-grey-light w-full p-2 px-4 rounded-xl mb-4" name="name"
                        placeholder="Username" v-model="accountInfo.username" required />

                    <input type="text" class="block border border-grey-light w-full p-2 px-4 rounded-xl mb-4" name="email"
                        placeholder="Email" v-model="accountInfo.email" required />

                    <input type="password" class="block border border-grey-light w-full p-2 px-4 rounded-xl mb-4"
                        name="password" placeholder="Password" v-model="accountInfo.password" required />
                    <input type="password" class="block border border-grey-light w-full p-2 px-4 rounded-xl mb-4"
                        name="confirm_password" placeholder="Confirm Password" v-model="accountInfo.confirm_password"
                        required />
                    <p v-if="error" class="mb-3 text-red-500 text-sm">{{ error }}</p>
                    <button class="w-full text-center py-3 rounded-md bg-black text-white text-sm font-medium">Create
                        Account</button>
                </form>
                <div class="text-center text-xs text-gray-400 mt-2">
                    By signing up, you agree to the
                    <a class="text-black" href="#">
                        Terms of Service
                    </a> and
                    <a class="text-black" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div class="text-gray-500 text-sm mt-8 text-center">
                Already have an account?
                <NuxtLink to="/login" class="text-black">
                    Log in
                </NuxtLink>
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
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        error.value = "";
        if (accountInfo.value.password !== accountInfo.value.confirm_password) {
            error.value = "Passwords do not match";
            return;
        }
        const res = await useRegister(accountInfo.value.username, accountInfo.value.email, accountInfo.value.password)
        if (res.error.value) {
            error.value = res.error.value.data.data.error;
            console.log("res", res.error.value.data.data);
            return
        }
        // Add Session token and object id to local storage
        const userInfo = useCookie("userInfo")
        userInfo.value = { sessionToken: res.data.value.sessionToken, objectId: res.data.value.objectId }
        const userStore = useUserStore()
        userStore.login(accountInfo.value.username, userInfo.value.sessionToken, userInfo.value.objectId)
        await navigateTo("/dash")
    };
</script>
