export const useUserStore = defineStore('users', {
    state: () => {
        return {
            username: '',
            sessionToken: '',
            userId: '',
        }
    },
    actions: {
        login(username, sessionToken, userId) {
            this.username = username
            this.sessionToken = sessionToken
            this.userId = userId
        },
        async logout() {
            const res = await useLogout(this.sessionToken, this.userId)
            if (res.error.value)
                return res.error
            this.username = ''
            this.sessionToken = ''
            this.userId = ''
            return 1
        }
    }
})