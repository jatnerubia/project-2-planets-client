import { useState } from "react"
import * as RestApi from "../../../utils/rest_api_util"

const ChangePasswordForm = () => {

    const [formData, setFormData] = useState({
        old_password: '',
        new_password: '',
        confirm_new_password: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const updatePassword = async () => {

        setLoading(true)
        setError(undefined)
        setSuccess(undefined)

        if (formData.new_password !== formData.confirm_new_password) {
            setError({
                message: 'Confirm new password does not match',
                type: 'confirm_new_password'
            })
            setLoading(false)
            return
        }

        try {
            const result = await RestApi.updatePassword(formData)
            let response = await result.json()

            if (result.status === 400) {
                setError(response)
            }
            if (result.status === 200) {
                setFormData({
                    old_password: '',
                    new_password: '',
                    confirm_new_password: '',
                })
                setSuccess(response)
            }
        } catch (error) {}

        setLoading(false)
    }

    return (
        <div className="mt-4 pt-5">
            <div className="change-pass_wrapper mt-4">
              <div className="card p-4 ">
                <div className="card-wrapper d-flex align-items-center justify-content-center flex-column">
                  <div className="mb-3">
                    <label htmlFor="old_password" className="form-label fw-bold">
                        Old Password
                    </label>
                    <input
                        id="old_password"
                        type="password"
                        className="form-control"
                        value={formData.old_password}
                        onChange={(e) => setFormData({ ...formData, old_password: e.target.value })}
                    />
                    {
                        error !== undefined && error.type === 'old_password' && (
                          <span className="text-danger small">
                            {error.message}
                          </span>
                        )
                    }
                  </div>
                  <div className="mb-3">
                      <label htmlFor="new_password" className="form-label fw-bold">
                          New Password
                      </label>
                      <input
                          id="new_password"
                          type="password"
                          className="form-control"
                          value={formData.new_password}
                          onChange={(e) => setFormData({ ...formData, new_password: e.target.value })}
                      />
                      {
                          error !== undefined && error.type === 'new_password' && (
                            <span className="text-danger small">
                              {error.message}
                            </span>
                          )
                      }
                  </div>
                  <div className="mb-3">
                      <label htmlFor="confirm_new_password" className="form-label fw-bold">
                          Confirm New Password
                      </label>
                      <input
                          id="confirm_new_password"
                          type="password"
                          className="form-control"
                          value={formData.confirm_new_password}
                          onChange={(e) => setFormData({ ...formData, confirm_new_password: e.target.value })}
                      />
                      {
                          error !== undefined && error.type === 'confirm_new_password' && (
                            <span className="text-danger small">
                              {error.message}
                            </span>
                          )
                      }
                  </div>
                  {
                      success !== undefined && (
                          <div className="alert alert-success py-4" role="alert">
                              {success.message}
                          </div>
                      )
                  }
                  <div className="mb-3 text-center">
                      {
                          loading
                              ? <button className="btn btn-lg btn-quiz px-5" disabled>Loading...</button>
                              : <button className="btn btn-lg btn-quiz px-5" onClick={updatePassword}>SAVE</button>
                      }
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ChangePasswordForm
