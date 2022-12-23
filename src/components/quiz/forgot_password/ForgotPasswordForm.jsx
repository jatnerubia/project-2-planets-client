
import { useState } from "react"
import { Link } from "react-router-dom"

const ForgotPasswordForm = () => {

    const [formData, setFormData] = useState({
        email: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const sendRecoveryLink = async () => {
        setLoading(true)
        setError(undefined)
        setSuccess(undefined)

        try {
            const result = await fetch(
                `https://project-2-planets-server.onrender.com/auth/forgot-password`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            )
            let response = await result.json()
            if (result.status === 400) {
                setError(response)
            }
            if (result.status === 200) {
                setFormData({
                    email: ''
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
                    Forgot Password
                </h3>
            </div>
            <div>
                We'll send a recovery link to
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    id="email"
                    type="text"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {
                    error !== undefined && error.type === 'email' && (
                        <span className="text-danger">
                            {error.message}
                        </span>
                    )
                }
            </div>
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
                        : <button className="btn btn-primary" onClick={sendRecoveryLink}>Send recovery link</button>
                }
            </div>
            <hr />
            <div className="mb-3 text-center">
                Return to <strong><Link to="/quiz/login">Login</Link></strong>
            </div>
            <div className="mb-3 text-center">
                OR
            </div>
            <div className="text-center">
                Don't have an account? <strong><Link to="/quiz/register">Register</Link></strong>
            </div>
        </div>
    )
}

export default ForgotPasswordForm