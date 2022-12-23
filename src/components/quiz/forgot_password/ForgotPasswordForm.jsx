
import { Link } from "react-router-dom"

const ForgotPasswordForm = () => {
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
                />
            </div>
            <div className="mb-3 text-center">
                <button className="btn btn-primary">Send recovery link</button>
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