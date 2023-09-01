<template>
    <div v-show="taskStore.editTaskModal && taskStore.chosenTask"
        class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900/30 flex justify-center items-center">
        <Transition>
            <div v-if="taskStore.editTaskModal" class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow-md">
                    <div class="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Edit a task
                        </h3>
                        <button @click="taskStore.editTaskModal = false"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-6">
                        <form class="space-y-6" @submit.prevent="handleEdit">
                            <div>
                                <label for="taskTitle" class="block mb-2 text-sm font-medium text-gray-900">Your task's
                                    name</label>
                                <input type="text" id="taskTitle" v-model="taskStore.chosenTask.taskTitle"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="New task" required>
                            </div>
                            <div>
                                <label for="taskDescription" class="block mb-2 text-sm font-medium text-gray-900">Your
                                    task's description</label>
                                <textarea id="taskDescription" placeholder="Description..."
                                    v-model="taskStore.chosenTask.taskDescription"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
                            </div>
                            <div>
                                <label for="duedate" class="block mb-2 text-sm font-medium">Select your due date</label>
                                <input type="date" id="duedate" required v-model="taskStore.chosenTask.taskDueDate.iso"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            </div>
                            <div v-if="error" class="text-red-500">
                                <p>{{ error }}</p>
                            </div>
                        </form>
                    </div>
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button @click="handleEdit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I
                            accept</button>
                        <button @click="taskStore.editTaskModal = false"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Decline</button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
    const taskStore = useTasksStore()
    const error = ref("")
    const handleEdit = async () => {
        error.value = ""
        const editRes = await taskStore.submitEditTask()
        if (editRes != 1) {
            error.value = "error " + editRes.value.data.statusCode + " please contact us."
            console.log(editRes.value.data)
            return
        }
    }
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    @apply transition-all duration-500 ease-in-out;
}

.v-enter-from,
.v-leave-to {
    @apply mt-[-1000px];
}
</style>