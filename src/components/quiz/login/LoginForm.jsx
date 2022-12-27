import { useState } from "react"
import { Link } from "react-router-dom"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const login = async () => {

        setLoading(true)
        setError(undefined)

        try {
            const result = await fetch(
                `https://project-2-planets-server.onrender.com/quiz/auth/login`,
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

        setLoading(false)
    }

    const loginWithGoogle = async (credentialResponse) => {
        try {
            const result = await fetch(
                `https://project-2-planets-server.onrender.com/quiz/auth/google`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(credentialResponse)
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
    }

    return (
        <div className="login right h-100 bg-light text-dark p-3 px-md-5 d-flex justify-content-center align-items-center">
          <div className="form-content">
            <h3 className="text-center mb-5">Login</h3>
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
            <div className="input-group my-4 pt-2">
              <input
                id="password"
                type="password"
                className="form-control"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              {
                error !== undefined && error.type === 'password' && (
                  <span className="text-danger small">
                    {error.message}
                  </span>
                )
              }
            </div>
            <div className="mb-3">
                <Link to="/quiz/forgot-password" className="fs-6 text-dark">Forgot Password?</Link>
            </div>
            {
                error !== undefined && error.type === undefined && (
                    <div class="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                )
            }
            <div className="mb-3 pt-4 text-center">
                {
                    loading
                        ? <button className="btn btn-lg btn-quiz" disabled>Loading...</button>
                        : <button className="btn btn-lg btn-quiz" onClick={login}>Login</button>
                }
            </div>
            <div className="mb-3 text-center">
                <span className="fs-6 text-muted">OR</span>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <button className="btn-google mb-3">
                  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
                      <GoogleLogin onSuccess={loginWithGoogle} />
                  </GoogleOAuthProvider>
                </button>
            </div>
            <hr />
            <div className="text-center mt-4 text-muted fs-6">
                Don't have an account? <strong><Link to="/quiz/register" className="text-dark">Register</Link></strong>
            </div>
          </div>
        </div>
    )
}

export default LoginForm
