export default defineEventHandler(async (event) => {

    const { action } = getQuery(event)
    const { BACK4APP_REST_KEY, BACK4APP_ID } = useRuntimeConfig()
    let data;

    if (action === 'add') {
        const { taskTitle, taskDescription, taskDueDate, taskHolderId } = await readBody(event)
        data = await $fetch('https://parseapi.back4app.com/classes/tasks', {
            method: 'POST',
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
    else if (action === 'get') {
        try {
            data = await $fetch('https://parseapi.back4app.com/classes/tasks', {
                headers: {
                    'X-Parse-Application-Id': BACK4APP_ID,
                    'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
        } catch (error) {
            data = error
            console.log("error", error.message)
        }
    }

    return data
})