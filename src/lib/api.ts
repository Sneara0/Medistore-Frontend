import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiRequest = async <T>(
  endpoint: string,
  config?: any
): Promise<T> => {
  try {
    const res = await axios({
      url: `${API_URL}${endpoint}`,
      withCredentials: true,
      ...config,
    });

    return res.data as T;
  } catch (err: any) {
    console.error("API Error:", err.response?.data || err.message);
    throw err;
  }
};
