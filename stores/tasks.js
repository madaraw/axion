export const useTasksStore = defineStore('tasks', {
    state: () => {
        return {
            tasks: [],
            editTaskModal: false,
            addTaskModal: false,
            chosenTask: null
        }
    },
    getters: {
        passedTasks() {
            return this.tasks.filter(task => {
                const today = new Date().setUTCHours(0, 0, 0, 0)
                const x = new Date(task.taskDueDate.iso.split('T')[0]).setUTCHours(0, 0, 0, 0)
                return today > x
            })
        },
        todayTasks() {
            return this.tasks.filter(task => {
                const today = new Date().setUTCHours(0, 0, 0, 0)
                const x = new Date(task.taskDueDate.iso.split('T')[0]).setUTCHours(0, 0, 0, 0)
                return today == x
            })
        },
        upcomingTasks() {
            return this.tasks.filter(task => {
                const today = new Date().setUTCHours(0, 0, 0, 0)
                const x = new Date(task.taskDueDate.iso.split('T')[0]).setUTCHours(0, 0, 0, 0)
                return today < x
            })
        }
    },
    actions: {
        async getTasks() {
            this.tasks = await useGetMyTasks()
        },
        editTask(taskId) {
            this.chosenTask = null
            this.chosenTask = { ...this.tasks.find(task => task.objectId === taskId) }
            this.chosenTask.taskDueDate.iso = this.chosenTask.taskDueDate.iso.split('T')[0]
            this.editTaskModal = true
        },
        async submitEditTask() {
            const taskOptions = { ...this.chosenTask }
            const res = await useUpdateTask(taskOptions)
            if (res.error.value)
                return res.error
            const index = this.tasks.findIndex(task => task.objectId === this.chosenTask.objectId)
            this.tasks[index] = this.chosenTask
            this.editTaskModal = false
            return 1
        },
        async deleteTask(taskId) {
            const res = await useDeleteTask(taskId)
            if (res.error.value)
                return res.error
            await this.getTasks()
            return 1
        },
        async addTask(taskOptions) {
            const res = await useAddTask(taskOptions)
            if (res.error.value)
                return res.error
            const newTask = {
                taskTitle: taskOptions.title,
                taskDescription: taskOptions.description,
                taskDueDate: {
                    iso: taskOptions.dueDate
                },
                taskHolderId: taskOptions.taskHolderId,
                ...res.data.value
            }
            this.tasks.push(newTask)
            this.addTaskModal = false
            return 1
        }
    },
})