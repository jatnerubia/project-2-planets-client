
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import * as RestApi from "../../../utils/rest_api_util"
import { useEffect } from "react"

const RegisterForm = () => {

  const navigate = useNavigate()

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
        navigate('/user/dashboard')
      }
    }, [])

    const register = async () => {

        setLoading(true)
        setError(undefined)
        setSuccess(undefined)

        if (formData.password !== formData.confirm_password) {
            setError({
                message: 'Confirm password does not match',
                type: 'confirm_password'
            })
            setLoading(false)
            return
        }

        try {
            const result = await RestApi.register(formData)
            let response = await result.json()
            if (result.status === 400) {
                setError(response)
            }
            if (result.status === 200) {
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                })
                setSuccess(response)
            }
        } catch (error) {}

        setLoading(false)
    }

    const loginWithGoogle = async (credentialResponse) => {
        try {
            const result = await RestApi.loginWithGoogle(credentialResponse)
            let response = await result.json()
            if (result.status === 400) {
                setError(response)
            }
            if (result.status === 200) {
              localStorage.setItem('token', response.token)
              navigate('/user/dashboard')
            }
        } catch (error) {}
    }

    return (
        <div className="registration left h-100 bg-light text-dark p-4 px-md-5 d-flex justify-content-center align-items-center">
          <div className="form-content">
            <h3 className="text-center mb-4">Create an Account</h3>
            <div className="row mb-3">
                <div className="col-md-6">
                  <div className="input-group mt-4 pt-2">
                    <input
                      id="first_name"
                      type="text"
                      className="form-control"
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    />
                    <label htmlFor="first_name" className="form-label">
                      First Name
                    </label>
                  </div>
                  {
                    error !== undefined && error.type === 'first_name' && (
                      <span className="text-danger small">
                        {error.message}
                      </span>
                    )
                  }
                </div>
                <div className="col-md-6">
                  <div className="input-group mt-4 pt-2">
                    <input
                      id="last_name"
                      type="text"
                      className="form-control"
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    />
                    <label htmlFor="last_name" className="form-label">
                      Last Name
                    </label>
                  </div>
                    {
                        error !== undefined && error.type === 'last_name' && (
                            <span className="text-danger small">
                                {error.message}
                            </span>
                        )
                    }
                </div>
            </div>
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
            <div className="mb-3">
              <div className="input-group mt-4 pt-2">
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
              </div>
                {
                    error !== undefined && error.type === 'password' && (
                        <span className="text-danger small">
                            {error.message}
                        </span>
                    )
                }
            </div>
            <div className="mb-3">
              <div className="input-group mt-4 pt-2">
                <input
                  id="confirm_password"
                  type="password"
                  className="form-control"
                  value={formData.confirm_password}
                  onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                />
                <label htmlFor="confirm_password" className="form-label">
                  Confirm Password
                </label>
              </div>
                {
                    error !== undefined && error.type === 'confirm_password' && (
                        <span className="text-danger small">
                            {error.message}
                        </span>
                    )
                }
            </div>
            <div className="mb-4">
              <span className="small text-dark lh-sm">
                By signing up you confirm that you've read and accepted
                our <Link to="/terms">Terms of Service</Link> and
                <Link to="/policy"> Privacy Policy</Link>
              </span>
            </div>
            {
                success !== undefined && (
                    <div className="alert alert-success" role="alert">
                        {success.message}
                    </div>
                )
            }
            <div className="mb-3 text-center">
                {
                    loading
                        ? <button className="btn btn-lg btn-quiz" disabled>Loading...</button>
                        : <button className="btn btn-lg btn-quiz" onClick={register}>Register</button>
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
                Already have an account? <strong><Link to="/quiz/login" className="text-dark">Login</Link></strong>
            </div>
          </div>
        </div>
    )
}

export default RegisterForm
