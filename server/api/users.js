export default defineEventHandler(async (event) => {

    const { action } = getQuery(event)
    const { BACK4APP_REST_KEY, BACK4APP_ID } = useRuntimeConfig()
    let data;

    if (action === 'signup') {
        const { password, username, email } = await readBody(event)
        data = await $fetch('https://parseapi.back4app.com/users', {
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': BACK4APP_ID,
                'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
                'X-Parse-Revocable-Session': '1',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'password': password,
                'username': username,
                'email': email
            })
        });
    }
    else if (action === 'login') {
        const { password, username } = await readBody(event)
        data = await $fetch(`https://parseapi.back4app.com/login?username=${username}&password=${password}`, {
            headers: {
                'X-Parse-Application-Id': BACK4APP_ID,
                'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
                'X-Parse-Revocable-Session': '1',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
    else if (action === 'logout') {
        const { token, userId } = await readBody(event)
        data = await $fetch(`https://parseapi.back4app.com/logout?USER_OBJECT_ID=${userId}`, {
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': BACK4APP_ID,
                'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
                'X-Parse-Session-Token': token
            }
        });
    }
    else {
        const { token } = await readBody(event)
        data = await $fetch('https://parseapi.back4app.com/users/me', {
            method: 'GET',
            headers: {
                'X-Parse-Application-Id': BACK4APP_ID,
                'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
                'X-Parse-Session-Token': token
            }
        })
    }

    return data
})