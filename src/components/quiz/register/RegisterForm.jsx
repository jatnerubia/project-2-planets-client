import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
    const [passwordShow, setPasswordShow] = useState(false)
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false)

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

    const showHideConfirmPassword = () => {
      setConfirmPasswordShow(!confirmPasswordShow)
    }

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

            {/* Title */}
            <h3 className="text-center mb-5">
              Create an Account
            </h3>

            {/* First and Last name */}
            <div>
              <div className="row">
                <div className="mb-4 col-md-6">
                  <div className="input-group">
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
                  <span className="text-danger small">
                    some error
                  </span>
                  {
                    error !== undefined && error.type === 'first_name' && (
                      <span className="text-danger small">
                        {error.message}
                      </span>
                    )
                  }
                </div>
                <div className="mb-4 col-md-6">
                  <div className="input-group">
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
            </div>

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

            {/* Confirm password */}
            <div className="mb-4">
              <div className="input-group">
                <input
                  id="confirm_password"
                  type={confirmPasswordShow ? "text" : "password"}
                  className="form-control"
                  value={formData.confirm_password}
                  onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                />
                <span>
                  <FontAwesomeIcon
                    onClick={showHideConfirmPassword}
                    className='icon position-absolute end-0 fs-4'
                    type='button'
                    icon={confirmPasswordShow ? solid("eye-slash") : solid("eye")}
                  />
                </span>
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
 
            {/* Terms */}
            <div className="mb-4">
              <span className="small text-dark lh-sm">
                By signing up you confirm that you've read and accepted
                our <Link to="/terms">Terms of Service</Link> and
                <Link to="/policy"> Privacy Policy</Link>
              </span>
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

              {/* Register button */}
              <div className="mb-4">
                {
                  loading
                    ? <button className="btn btn-lg btn-quiz" disabled>Loading...</button>
                    : <button className="btn btn-lg btn-quiz" onClick={register}>Register</button>
                }
              </div>

              {/* Or */}
              <div className="mb-4">
                <span className="fs-6 text-muted">OR</span>
              </div>

              {/* Google button */}
              <div className="mb-4">
                <button className="btn-google mb-3">
                  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
                    <GoogleLogin onSuccess={loginWithGoogle} />
                  </GoogleOAuthProvider>
                </button>
              </div>

              {/* Divider */}
              <hr className='mb-4' />

              {/* Login */}
              <div className="text-muted fs-6">
                Already have an account? <strong><Link to="/quiz/login" className="text-dark">Login</Link></strong>
              </div>

            </div>
          </div>
        </div>
    )
}

export default RegisterForm
