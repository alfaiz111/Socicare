export async function apiFetch<T>(url: string): Promise<T> {
  // dummy response sementara
  return {
    data: {
      name: "Admin",
      email: "admin@gmail.com",
      role: "admin",
      avatar: "",
    },
  } as T;
}