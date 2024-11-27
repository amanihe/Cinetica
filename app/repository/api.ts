export async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const res = await fetch(endpoint, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      credentials: "include", 
    });
  
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || "Failed to fetch data");
    }
  
    return res.json();
  }
  