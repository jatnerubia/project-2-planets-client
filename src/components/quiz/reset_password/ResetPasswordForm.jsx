import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import * as RestApi from "../../../utils/rest_api_util"

const ResetPasswordForm = () => {

    const location = useLocation()

    const [formData, setFormData] = useState({
        id: '',
        token: '',
        password: '',
        confirm_password: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [passwordShow, setPasswordShow] = useState(false)
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false)

    useEffect(() => {
        const applyToken = () => {
            const id = new URLSearchParams(location.search).get('id')
            const token = new URLSearchParams(location.search).get('token')
            setFormData((prevData) => {
                return {
                    ...prevData,
                    id,
                    token
                }
            })
        }
        applyToken()
    }, [location])

    const showHidePassword = () => {
      setPasswordShow(!passwordShow)
    }
    const showHideConfirmPassword = () => {
      setConfirmPasswordShow(!confirmPasswordShow)
    }

    const resetPassword = async () => {
        setLoading(true)
        setError(undefined)
        setSuccess(undefined)

        if (formData.password !== formData.confirm_password) {
            setError({
                message: 'Password does not match',
                type: 'confirm_password'
            })
            setLoading(false)
            return
        }

        try {
            const result = await RestApi.verifyPassword(formData)
            let response = await result.json();
            if (result.status === 400) {
                setError(response)
            }
            if (result.status === 200) {
                setFormData((prevData) => {
                    return {
                        ...prevData,
                        password: '',
                        confirm_password: ''
                    }
                })
                setSuccess(response)
            }
        } catch (error) {}

        setLoading(false)
    }

    return (
        <div className="reset-pass h-100 bg-light text-dark p-2 d-flex justify-content-center align-items-center">
          <div className="form-content">
            <h3 className="text-center mb-5">Reset Password</h3>
            <div className="mb-3">
              <div className="input-group mt-4 pt-2">
                <input
                    id="password"
                    type={passwordShow ? "text" : "password"}
                    className="form-control"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <span><FontAwesomeIcon onClick={showHidePassword} className='text-dark icon position-absolute end-0 fs-4' type='button' icon={passwordShow ? solid("eye-slash") : solid("eye")} /></span>
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
              <div className="input-group mt-4 pt-2 mb-5">
                <input
                    id="confirm_password"
                    type={confirmPasswordShow ? "text" : "password"}
                    className="form-control"
                    value={formData.confirm_password}
                    onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                />
                <span><FontAwesomeIcon onClick={showHideConfirmPassword} className='text-dark icon position-absolute end-0 fs-4' type='button' icon={confirmPasswordShow ? solid("eye-slash") : solid("eye")} /></span>
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
            {
                error !== undefined && error.type === undefined && (
                    <div className="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                )
            }
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
                        : <button className="btn btn-lg btn-quiz" onClick={resetPassword}>Reset Password</button>
                }
            </div>
          </div>
        </div>
    )
}

export default ResetPasswordForm
