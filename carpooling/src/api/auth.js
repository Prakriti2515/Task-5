import apiClient from "./apiClient";


export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post("https://task-4-2.onrender.com/schema/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const signupUser = async (email, password, name) => {
  try {
    const response = await apiClient.post("https://task-4-2.onrender.com/schema/signup", { email, password, name });
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    throw error;
  }
};
export default auth;