import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const ResetPasswordForm = () => {

    const location = useLocation()

    const [formData, setFormData] = useState({
        id: '',
        token: '',
        password: '',
        confirm_password: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    useEffect(() => {
        const applyToken = () => {
            const id = new URLSearchParams(location.search).get('id')
            const token = new URLSearchParams(location.search).get('token')
            setFormData((prevData) => {
                return {
                    ...prevData,
                    id,
                    token
                }
            })
        }
        applyToken()
    }, [location])

    const resetPassword = async () => {
        setLoading(true)
        setError(undefined)
        setSuccess(undefined)

        if (formData.password !== formData.confirm_password) {
            setError({
                message: 'Password does not match',
                type: 'confirm_password'
            })
            setLoading(false)
            return
        }

        try {
            const result = await fetch(
                `https://project-2-planets-server.onrender.com/verify/password`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            )
            let response = await result.json();
            if (result.status === 400) {
                setError(response)
            }
            if (result.status === 200) {
                setFormData((prevData) => {
                    return {
                        ...prevData,
                        password: '',
                        confirm_password: ''
                    }
                })
                setSuccess(response)
            }
        } catch (error) {}

        setLoading(false)
    }

    return (
        <div className="bg-light text-dark p-5">
            <div>
                <h3 className="text-center">
                    Reset Password
                </h3>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {
                    error !== undefined && error.type === 'password' && (
                        <span className="text-danger">
                            {error.message}
                        </span>
                    )
                }
            </div>
            <div className="mb-3">
                <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                </label>
                <input
                    id="confirm_password"
                    type="password"
                    className="form-control"
                    value={formData.confirm_password}
                    onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                />
                {
                    error !== undefined && error.type === 'confirm_password' && (
                        <span className="text-danger">
                            {error.message}
                        </span>
                    )
                }
            </div>
            {
                error !== undefined && error.type === undefined && (
                    <div class="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                )
            }
            {
                success !== undefined && (
                    <div class="alert alert-success" role="alert">
                        {success.message}
                    </div>
                )
            }
            <div className="mb-3 text-center">
                {
                    loading
                        ? <button className="btn btn-primary" disabled>Loading...</button>
                        : <button className="btn btn-primary" onClick={resetPassword}>Reset Password</button>
                }
            </div>
        </div>
    )
}

export default ResetPasswordForm