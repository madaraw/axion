export async function useGetTasks() {
  let data: any = await useFetch("/api/tasks?action=get");
  return data.data.value.results;
}

export async function useGetMyTasks() {
  const userStore = useUserStore();
  let data: any = await useFetch(`/api/tasks/${userStore.userId}`);
  return data.data.value.results;
}

export async function useAddTask(taskOptions: any) {
  let res: any = await useFetch("/api/tasks?action=add", {
    method: "POST",
    body: {
      taskTitle: taskOptions.title,
      taskDescription: taskOptions.description,
      taskDueDate: taskOptions.dueDate,
      taskHolderId: taskOptions.taskHolderId,
    },
  });
  return res;
}

export async function useDeleteTask(taskId: string) {
  const res: any = await useFetch(`/api/tasks/${taskId}?action=delete`);
  return res;
}

export async function useUpdateTask(taskOptions: any) {
  let res: any = await useFetch(
    `/api/tasks/${taskOptions.objectId}?action=update`,
    {
      method: "POST",
      body: {
        taskTitle: taskOptions.taskTitle,
        taskDescription: taskOptions.taskDescription,
        taskDueDate: taskOptions.taskDueDate.iso,
        taskHolderId: taskOptions.taskHolderId,
      },
    }
  );
  return res;
}
