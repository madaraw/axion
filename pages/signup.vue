<template>
    <div class="flex items-center justify-center h-screen">

        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center font-semibold">Sign up</h1>
                <form @submit.prevent="handleSubmit">
                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="name"
                        placeholder="Username" v-model="accountInfo.username" required />

                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="email"
                        placeholder="Email" v-model="accountInfo.email" required />

                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password"
                        placeholder="Password" v-model="accountInfo.password" required />
                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password" placeholder="Confirm Password" v-model="accountInfo.confirm_password"
                        required />
                    <p v-if="error" class="my-1 text-red-500 text-center">{{ error }}</p>
                    <button class="w-full text-center py-3 rounded btn hover:bg-green-dark focus:outline-none my-1">Create
                        Account</button>
                </form>
                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div class="text-grey-dark mt-6">
                Already have an account?
                <NuxtLink to="/login">
                    Log in
                </NuxtLink>.
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
