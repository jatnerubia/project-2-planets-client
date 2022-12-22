import { Link } from "react-router-dom"

const LoginForm = () => {

    return (
        <div className="bg-light text-dark p-5">
            <div>
                <h3 className="text-center">
                    Login
                </h3>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <div className="input-group">
                    <input id="email" type="text" className="form-control" />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <div className="input-group">
                    <input id="password" type="password" className="form-control" />
                </div>
            </div>
            <div className="mb-3">
                <Link to="/quiz/forgot-password">Forgot Password?</Link>
            </div>
            <div className="mb-3 text-center">
                <button className="btn btn-primary">Login</button>
            </div>
            <div className="mb-3 text-center">
                OR
            </div>
            <div className="mb-3 text-center">
                Login with google btn
            </div>
            <hr />
            <div className="text-center">
                Don't have an account? <strong><Link to="/quiz/register">Register</Link></strong>
            </div>
        </div>
    )
}

export default LoginForm