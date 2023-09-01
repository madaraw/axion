export async function useGetMe(token: string) {
  const res: any = await useFetch("/api/users", {
    method: "POST",
    body: {
      token,
    },
  });
  return res;
}

export async function useLogin(username: string, password: string) {
  const res: any = await useFetch("/api/users?action=login", {
    method: "POST",
    body: {
      username: username,
      password: password,
    },
  });
  return res;
}

export async function useRegister(
  username: string,
  password: string,
  email: string
) {
  const res: any = await useFetch("/api/users?action=signup", {
    method: "POST",
    body: {
      password: password,
      username: username,
      email: email,
    },
  });
  return res;
}

export async function useLogout(token: string, userId: string) {
  const res: any = await useFetch("/api/users?action=logout", {
    method: "POST",
    body: {
      token,
      userId,
    },
  });
  return res;
}
