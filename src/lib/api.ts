import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const apiRequest = async <T>(
  endpoint: string,
  config?: any
): Promise<T> => {
  try {
    const res = await axios({
      url: `${API_URL}${endpoint}`,
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...config?.headers,
      },
      withCredentials: true,
    });

    return res.data as T;
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || err.message || "API Request Failed";
    throw new Error(errorMessage);
  }
};