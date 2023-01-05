import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from 'react'
import * as RestApi from '../../../utils/rest_api_util'
import { useOutletContext } from 'react-router-dom'
import FileBase from 'react-file-base64';

const UserProfile = () => {

    const [userData, setUserData] = useOutletContext()

    const [isEditing, setIsEditing] = useState(false)

    const [formData, setFormData] = useState({
        avatar: "",
        email: "",
        firstName: "",
        lastName: ""
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            const result = await RestApi.getProfile()
            let response = await result.json()
            setFormData(response)
        } catch (error) {
        }
    }

    const saveProfile = async () => {

        setLoading(true)
        setError(undefined)
        setSuccess(undefined)

        try {
            const result = await RestApi.saveProfile(formData)
            let response = await result.json()
            if (result.status === 400) {
                setError(response)
            }
            if (result.status === 200) {
                localStorage.setItem('avatar', formData.avatar)
                localStorage.setItem('firstName', formData.firstName)
                localStorage.setItem('lastName', formData.lastName)
                setUserData(formData)
                setIsEditing(false)
                setSuccess(response)
            }
        } catch (error) {}

        setLoading(false)
    }

    return (
        <div className="container pt-5">
            <div className="card card-block ">
                <div className="card-body">

                    <div className="d-flex justify-content-end">
                        {
                            isEditing === false && (
                                <FontAwesomeIcon type="button" className="m-1" icon={regular('pen-to-square')} onClick={() => setIsEditing(true)} />
                            )
                        }
                    </div>

                    <div className="text-center mb-3">
                        <img src={formData.avatar} className="rounded-circle" alt="User Avatar" width={150} height={150} />
                    </div>

                    {
                        isEditing && (
                            <div className="text-center">
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) => setFormData({ ...formData, avatar: base64 })}
                                />
                            </div>
                        )
                    }

                    {/* First and Last name */}
                    <div className="row">
                        <div className="mb-4 col-md-6">
                            <label htmlFor="firstName" className="form-label fw-bold">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                className="form-control"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                disabled={!isEditing}
                            />
                            {
                                error !== undefined && error.type === 'firstName' && (
                                    <span className="text-danger small">
                                        {error.message}
                                    </span>
                                )
                            }
                        </div>
                        <div className="mb-4 col-md-6">
                            <label htmlFor="lastName" className="form-label fw-bold">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                className="form-control"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                disabled={!isEditing}
                            />
                            {
                                error !== undefined && error.type === 'lastName' && (
                                    <span className="text-danger small">
                                        {error.message}
                                    </span>
                                )
                            }
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                            value={formData.email}
                            disabled
                        />
                    </div>

                    {
                        success !== undefined && (
                            <div className="mb-4 alert alert-success my-4" role="alert">
                                {success.message}
                            </div>
                        )
                    }

                    {
                        isEditing && (
                            <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
                                {
                                    loading
                                        ? (
                                            <button className="btn btn-lg btn-quiz px-5" disabled>
                                                Loading...
                                            </button>
                                        )
                                        : (
                                            <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
                                                <button className="btn btn-lg btn-quiz px-5" onClick={saveProfile}>
                                                    SAVE
                                                </button>
                                                <button className="btn btn-lg btn-outline-dark px-5" onClick={() => setIsEditing(false)}>
                                                    CANCEL
                                                </button>
                                            </div>
                                        )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default UserProfile