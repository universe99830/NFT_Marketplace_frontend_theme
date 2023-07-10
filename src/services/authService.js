import axios from "axios"
const API_URL = "http://localhost:443/api/user/"

export  const login = (data) => {
    return axios
      .post(API_URL + "login", data)
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
  }
export  const logout = () => {
    localStorage.removeItem("user")
  }
export const register = (data) => {
    return axios.post(API_URL+"register", data)
  }
export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user')
    if (userStr) return JSON.parse(userStr)
    return null
  }
