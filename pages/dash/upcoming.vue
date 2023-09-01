<template>
    <div v-if="upcomingTasks.length" class="container px-2 py-5 sm:mx-auto">
        <h2 class="text-3xl font-semibold mb-5">Upcoming tasks</h2>
        <TasksCkuster :tasks="upcomingTasks" />
        <EditModal />
    </div>
    <div v-else class="container px-2 py-5 sm:mx-auto">
        <p>There are no upcoming tasks <NuxtLink class="text-blue-600 underline" to="/dash/">Go back</NuxtLink>.
        </p>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia'

    definePageMeta({
        middleware: "unauth"
    })
    const taskStore = useTasksStore()
    await taskStore.getTasks()
    const { upcomingTasks, tasks } = storeToRefs(taskStore)

</script>

<style scoped></style>