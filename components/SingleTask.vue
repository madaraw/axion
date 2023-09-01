<template>
    <li v-if="task" @mouseover="hovered = true" @mouseleave="hovered = false"
        class="bg-[#D0E1CE] hover:bg-[#b3d4af] rounded-md cursor-pointer mx-auto w-full gap-2">
        <div @click="taskStore.editTask(task.objectId)"
            class="flex justify-start items-center sm:px-6 px-4 py-2 gap-3 sm:gap-4 md:gap-6 w-full">
            <div class="my-auto flex justify-center items-center">
                <input @click.stop="handleDelete" v-model="checked" type="radio"
                    class="form-checkbox h-5 w-5 text-[#e15a4d]" />
            </div>
            <div :class="checked ? 'line-through' : ''" class="flex justify-between items-center w-full">
                <div class="my-auto">
                    <h3 class="sm:text-lg font-semibold">{{ task.taskTitle }}</h3>
                    <p class="text-sm">{{ dueDate }}</p>
                </div>
                <div class="my-auto">
                    <p>{{ taskCreator }}</p>
                </div>
            </div>
        </div>

        <Transition>
            <div v-if="task.taskDescription && hovered" class=" sm:px-16 px-4 py-2 gap-3 sm:gap-4 md:gap-6 w-full">
                <p class="text-lg"><strong>Description:</strong> {{ task.taskDescription }}</p>
            </div>
        </Transition>
    </li>
</template>

<script setup>
    const { task } = defineProps({
        task: {
            type: Object,
            required: true
        }
    })
    const hovered = ref(false)
    const dueDate = computed(() => {
        const date = new Date(task.taskDueDate.iso)
        return date.toDateString()
    })
    const checked = ref(false)
    const taskStore = useTasksStore()
    const userStore = useUserStore()
    const error = ref("")
    const handleDelete = async () => {
        const deleteTaskRes = await taskStore.deleteTask(task.objectId)

        checked.value = false
        if (deleteTaskRes != 1) {
            checked.value = false

            error.value = "error " + deleteTaskRes.value.data.statusCode + " please contact us."
            console.log(deleteTaskRes.value.data)
        }
    }
    const taskCreator = computed(() => {
        if (task.taskHolderId == userStore.userId)
            return "Creator: " + userStore.username + " (you)"
        return "Creator's id: " + task.taskHolderId
    })
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    @apply transition-all duration-150 ease-in-out;
}

.v-enter-from,
.v-leave-to {
    @apply opacity-0;
}
</style>