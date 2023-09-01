export default defineNuxtRouteMiddleware(async (to, from) => {
    const userInfo = useCookie('userInfo')
    const token = userInfo.value ? userInfo.value.sessionToken : null
    const res = await useGetMe(token)
    if (res.data.value) {
        return navigateTo('/dash')
    }
})