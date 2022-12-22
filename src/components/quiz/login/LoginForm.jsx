import { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const login = async () => {

        // set loading true
        setLoading(true)

        // clear error
        setError(undefined)

        try {
            const result = await fetch(
                `https://project-2-planets-server.onrender.com/auth/login`,
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
                /* TODO: Save token and redirect to user page */
                console.log(response)
            }
        } catch (error) {}

        // set loading false
        setLoading(false)
    }

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
                    <input
                        id="email"
                        type="text"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                {
                    error !== undefined && error.type === 'email' && (
                        <span className="text-danger">
                            {error.message}
                        </span>
                    )
                }
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <div className="input-group">
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                {
                    error !== undefined && error.type === 'password' && (
                        <span className="text-danger">
                            {error.message}
                        </span>
                    )
                }
            </div>
            <div className="mb-3">
                <Link to="/quiz/forgot-password">Forgot Password?</Link>
            </div>
            {
                error !== undefined && error.type === undefined && (
                    <div class="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                )
            }
            <div className="mb-3 text-center">
                {
                    loading
                        ? <button className="btn btn-primary" disabled>Loading...</button>
                        : <button className="btn btn-primary" onClick={login}>Login</button>
                }
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