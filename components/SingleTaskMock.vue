<template>
    <li v-if="task" class="mx-auto w-full flex justify-start gap-2">
        <div
            class="bg-[#D0E1CE] sm:px-6 px-4 py-2 rounded-md flex justify-start items-center gap-3 sm:gap-4 md:gap-6 w-full cursor-pointer">
            <div class="my-auto flex justify-center items-center">
                <input @click.prevent="" type="radio" class="form-checkbox h-5 w-5 text-[#e15a4d] cursor-pointer" />
            </div>
            <div class="flex justify-between items-center w-full">
                <div class="my-auto">
                    <h3 class="sm:text-lg font-semibold">{{ task.taskTitle }}</h3>
                    <p class="text-sm">{{ dueDate }}</p>
                </div>
                <div class="my-auto">
                    <p>{{ taskCreator }}</p>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup>
    const { task } = defineProps({
        task: {
            type: Object,
            required: true
        }
    })
    const dueDate = computed(() => {
        const date = new Date(task.taskDueDate.iso)
        return date.toDateString()
    })
    const userStore = useUserStore()
    const taskCreator = computed(() => {
        if (task.taskHolderId == userStore.userId)
            return "Creator: " + userStore.username + " (you)"
        return "Creator's id: " + task.taskHolderId
    })
</script>

<style scoped></style>