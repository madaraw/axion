<template>
    <nav class="h-11 bg-[#db4c3f] box-border flex items-center justify-between px-6">
        <div class="flex justify-between items-center text-white">
            <button @click="sidebarOpen = !sidebarOpen">
                <span class="flex justify-between items-center material-symbols-outlined">
                    menu
                </span>
            </button>
            <NuxtLink to="/dash">
                <span class="flex justify-between items-center material-symbols-outlined">
                    home
                </span>
            </NuxtLink>
            <button @click="addTaskModal = !addTaskModal">
                <span class="flex justify-between items-center material-symbols-outlined">add</span>
            </button>
        </div>
        <div class="flex justify-between items-center text-white space-x-2">
            <button @click="handleLogout">
                <span class="material-symbols-outlined flex justify-between items-center ">
                    logout
                </span>
            </button>
        </div>
    </nav>
    <CreationModal />
</template>

<script setup>
    import { storeToRefs } from "pinia"

    const sidebarOpen = useSidebarOpen()
    const taskStore = useTasksStore()
    const userStore = useUserStore()
    const { addTaskModal } = storeToRefs(taskStore)
    const handleLogout = async () => {
        const res = await userStore.logout()
        if (res != 1) {
            console.log(res)
            return
        }
        useCookie("userInfo").value = {}
        navigateTo("/")
    }
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 300,
        'GRAD' 0,
        'opsz' 48
}
</style>