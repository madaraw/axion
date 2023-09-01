export default defineNuxtRouteMiddleware(async (to, from) => {
    const userInfo = useCookie('userInfo')
    const token = userInfo.value ? userInfo.value.sessionToken : null
    if (!token) return navigateTo('/login')
    const res = await useGetMe(token)
    if (res.error.value && res.error.value.data.data.code === 209) {
        return navigateTo('/login')
    }
    const userStore = useUserStore()
    userStore.login(res.data.value.username, res.data.value.sessionToken, res.data.value.objectId)
})