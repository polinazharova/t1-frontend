export const apiService = {
  BASE_URL: import.meta.env.VITE_API_URL,

  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  },

  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  },

  async put<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  },

  async patch<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error("Ошибка при частичном обновлении");
    return await response.json();
  },

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Ошибка при частичном обновлении");
    return true as T;
  },
};
