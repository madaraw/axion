<template>
    <div v-if="tasks.length">
        <ul class="space-y-3 my-3">
            <SingleTask v-for="task in tasks" :task="task" :key="task.objectId" />
        </ul>
    </div>
</template>

<script setup>
    const { tasks } = defineProps({ tasks: Array })
</script>

<style scoped></style>