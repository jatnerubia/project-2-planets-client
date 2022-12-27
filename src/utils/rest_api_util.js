
const baseUrl = process.env.REACT_APP_BASE_URL

const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const token = localStorage.getItem('token')
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }
    return headers
}

/* Main */
export const getPlanets = async () => await fetch(baseUrl + "/planets", { method: "GET", headers: getHeaders() })

/* Verify */
export const verifyAccount = async (data) => await fetch(baseUrl + "/verify/account", { method: "POST", headers: getHeaders(), body: JSON.stringify(data) })
export const verifyPassword = async (data) => await fetch(baseUrl + "/verify/password", { method: "POST", headers: getHeaders(), body: JSON.stringify(data) })

/* Quiz */
export const register = async (data) => await fetch(baseUrl + "/quiz/auth/register", { method: "POST", headers: getHeaders(), body: JSON.stringify(data) })
export const login = async (data) => await fetch(baseUrl + "/quiz/auth/login", { method: "POST", headers: getHeaders(), body: JSON.stringify(data) })
export const loginWithGoogle = async (data) => await fetch(baseUrl + "/quiz/auth/google", { method: "POST", headers: getHeaders(), body: JSON.stringify(data) })
export const forgotPassword = async (data) => await fetch(baseUrl + "/quiz/auth/forgot-password", { method: "POST", headers: getHeaders(), body: JSON.stringify(data) })

/* User */