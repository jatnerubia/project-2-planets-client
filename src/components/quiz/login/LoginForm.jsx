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
                <label for="email" class="form-label">
                    Email
                </label>
                <div class="input-group">
                    <input id="email" type="text" class="form-control" />
                </div>
            </div>
            <div className="mb-3">
                <label for="password" class="form-label">
                    Password
                </label>
                <div class="input-group">
                    <input id="password" type="password" class="form-control" />
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