export default defineEventHandler(async (event) => {

    const { action } = getQuery(event)
    const { id } = event.context.params
    const { BACK4APP_REST_KEY, BACK4APP_ID } = useRuntimeConfig()
    let data;

    if (action === "delete") {
        data = await $fetch('https://parseapi.back4app.com/classes/tasks/' + id, {
            method: 'DELETE',
            headers: {
                'X-Parse-Application-Id': BACK4APP_ID,
                'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
            }
        });
    }
    if (action === "update") {
        const { taskTitle, taskDescription, taskDueDate, taskHolderId } = await readBody(event)
        try {
            data = await $fetch('https://parseapi.back4app.com/classes/tasks/' + id, {
                method: 'PUT',
                headers: {
                    'X-Parse-Application-Id': BACK4APP_ID,
                    'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'taskTitle': taskTitle,
                    'taskDescription': taskDescription,
                    'taskDueDate': {
                        '__type': 'Date',
                        'iso': taskDueDate
                    },
                    'taskHolderId': taskHolderId
                })
            });
        }
        catch (error) {
            return sendError(event, createError({
                ...error,
                statusMessage: error.message,
            }))
        }
    }
    else {
        data = $fetch(`https://parseapi.back4app.com/classes/tasks?where={"taskHolderId":"${id}"}`, {
            headers: {
                'X-Parse-Application-Id': BACK4APP_ID,
                'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
    }

    return data
})