
import { useState } from "react"
import { Link } from "react-router-dom"
import * as RestApi from "../../../utils/rest_api_util"

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
            const result = await RestApi.forgotPassword(formData)
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
        <div className="forgot-pass right h-100 bg-light text-dark p-4 d-flex justify-content-center align-items-center">
          <div className="form-content">

            {/* Title */}
            <h3 className="text-center mb-5">
                Forgot Password
            </h3>

            <p className="mb-4 fs-6 text-dark">
                We'll send a recovery link to
            </p>

            {/* Email */}
            <div className="mb-4">
                <div className="input-group">
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

            {/* Success message */}
            {
                success !== undefined && (
                    <div className="mb-4 alert alert-success" role="alert">
                        {success.message}
                    </div>
                )
            }

            {/* Buttons */}
            <div className="text-center">

                {/* Send button */}
                <div className="mb-4">
                    {
                        loading
                            ? <button className="btn btn-lg btn-quiz fs-6 w-100" disabled>Loading...</button>
                            : <button className="btn btn-lg btn-quiz fs-6 w-100" onClick={sendRecoveryLink}>Send recovery link</button>
                    }
                </div>

                {/* Divider */}
                <hr className='mb-4' />

                {/* Login */}
                <div className="mb-4 text-muted fs-6 ">
                    Return to <strong><Link to="/quiz/login" className="text-dark">Login</Link></strong>
                </div>

                {/* Or */}
                <div className="mb-4">
                    <span className="fs-6 text-muted">OR</span>
                </div>

                {/* Register */}
                <div className="text-muted fs-6">
                    Don't have an account? <strong><Link to="/quiz/register" className="text-dark">Register</Link></strong>
                </div>

            </div>
          </div>
        </div>
    )
}

export default ForgotPasswordForm
