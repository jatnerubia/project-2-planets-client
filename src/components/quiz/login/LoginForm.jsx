import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import * as RestApi from "../../../utils/rest_api_util"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"


const LoginForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [passwordShow, setPasswordShow] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/user/dashboard')
        }
        // eslint-disable-next-line
    }, [])

    const showHidePassword = () => {
      setPasswordShow(!passwordShow)
    }

    const login = async () => {

        setLoading(true)
        setError(undefined)

        try {
            const result = await RestApi.login(formData)
            let response = await result.json()
            if (result.status === 400) {
                setError(response)
            }
            if (result.status === 200) {
                localStorage.setItem('token', response.token)
                navigate('/user/dashboard')
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
        <div className="login right h-100 bg-light text-dark p-4 px-md-5 d-flex justify-content-center align-items-center">
            <div className="form-content">
              <NavLink className="navbar-brand" to="/quiz">
                <img src={require('../../../assets/img/logo.png')} className="d-block m-auto align-text-top" alt="Logo" />
              </NavLink>
                {/* Title */}
                <h3 className="text-center mb-5">
                    Login
                </h3>

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

                {/* Password */}
                <div className="mb-4">
                    <div className="input-group">
                        <input
                            id="password"
                            type={passwordShow ? "text" : "password"}
                            className="form-control"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <span>
                            <FontAwesomeIcon
                                onClick={showHidePassword}
                                className='icon position-absolute end-0 fs-4'
                                type='button'
                                icon={passwordShow ? solid("eye-slash") : solid("eye")}
                            />
                        </span>
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

                {/* Forgot password */}
                <div className="mb-4">
                    <Link to="/quiz/forgot-password" className="fs-6 text-dark">Forgot Password?</Link>
                </div>

                {/* Error message */}
                {
                    error !== undefined && error.type === undefined && (
                        <div className="mb-4 alert alert-danger" role="alert">
                            {error.message}
                        </div>
                    )
                }

                {/* Buttons */}
                <div className="text-center">
                    {/* Login button */}
                    <div className="mb-4">
                        {
                            loading
                                ? <button className="btn btn-lg btn-quiz" disabled>Loading...</button>
                                : <button className="btn btn-lg btn-quiz" onClick={login}>Login</button>
                        }
                    </div>

                    {/* Or */}
                    <div className="mb-4">
                        <span className="fs-6 text-muted">OR</span>
                    </div>

                    {/* Google button */}
                    <div className="mb-4">
                        <button className="btn-google">
                            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
                                <GoogleLogin onSuccess={loginWithGoogle} />
                            </GoogleOAuthProvider>
                        </button>
                    </div>

                    {/* Divider */}
                    <hr className='mb-4' />

                    {/* Register */}
                    <div className="text-muted fs-6">
                        Don't have an account? <strong><Link to="/quiz/register" className="text-dark">Register</Link></strong>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginForm
