
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
                `https://project-2-planets-server.onrender.com/quiz/auth/forgot-password`,
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
        <div className="forgot-pass right h-100 bg-light text-dark p-5 d-flex justify-content-center align-items-center">
          <div className="form-content">
            <h3 className="text-center pb-5">Forgot Password</h3>
            <p className="fs-6 pb-3 text-dark">
                We'll send a recovery link to
            </p>
            <div className="mb-3">
              <div className="input-group mt-4 pt-2">
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>
                {
                    error !== undefined && error.type === 'email' && (
                        <span className="text-danger small">
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
                        ? <button className="btn btn-lg btn-quiz fs-6 my-4 w-100" disabled>Loading...</button>
                        : <button className="btn btn-lg btn-quiz fs-6 my-4 w-100" onClick={sendRecoveryLink}>Send recovery link</button>
                }
            </div>
            <hr />
            <div className="mb-3 text-center fs-6 text-muted">
                Return to <strong><Link to="/quiz/login" className="text-dark">Login</Link></strong>
            </div>
            <div className="mb-3 text-center">
                <span className="fs-6 text-muted">OR</span>
            </div>
            <div className="text-center fs-6 text-muted">
                Don't have an account? <strong><Link to="/quiz/register" className="text-dark">Register</Link></strong>
            </div>
          </div>
        </div>
    )
}

export default ForgotPasswordForm
