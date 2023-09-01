<template>
    <EditModal />
    <div v-if="passedTasks.length || todayTasks.length || upcomingTasks.length"
        class="container px-2 py-5 sm:mx-auto space-y-6">
        <div v-if="passedTasks.length">
            <h2 class="text-3xl font-semibold mb-3">Passed tasks</h2>
            <TasksCkuster :tasks="passedTasks" />
        </div>
        <div v-if="todayTasks.length">
            <h2 class="text-3xl font-semibold mb-3">Today's tasks</h2>
            <TasksCkuster :tasks="todayTasks" />
        </div>
        <div v-if="upcomingTasks.length">
            <NuxtLink to="dash/upcoming">
                <h2 class="text-3xl font-semibold mb-3">upcoming tasks</h2>
                <ul class="opacity-50 cursor-pointer space-y-2">
                    <SingleTaskMock v-for="task in upcomingTasks" :task="task" />
                </ul>
            </NuxtLink>
        </div>

    </div>
    <div v-else class="container px-2 py-5 sm:mx-auto">
        <p>There are no tasks for today.</p>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia'

    definePageMeta({
        middleware: "unauth"
    })
    const taskStore = useTasksStore()
    await taskStore.getTasks()
    const { todayTasks, passedTasks, upcomingTasks } = storeToRefs(taskStore)
</script>

<style scoped></style>