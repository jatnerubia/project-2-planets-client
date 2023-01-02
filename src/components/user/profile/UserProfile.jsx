import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from 'react'
import * as RestApi from '../../../utils/rest_api_util'


const UserProfile = () => {

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
            if (result === 400) {
                setError(response)
            }
            if (result.status === 200) {
                setSuccess(response)
            }


        } catch (error) {

        }
        setLoading(false)
    }

    return (
        <div className="container pt-5">
            <div className="card card-block ">
                <div className="card-body">
                    <div className="float-end">
                        {
                            isEditing === false && (
                                <FontAwesomeIcon type="button" className="m-1" icon={regular('pen-to-square')} onClick={() => setIsEditing(true)} />
                            )
                        }
                    </div>
                    <div className="text-center mb-3">
                        <img src={formData.avatar} className="rounded-circle" alt="User Avatar" width={150} height={150} />
                    </div>
                    <div className="row">
                        <div className="mb-4 col-md-6">
                            <label htmlFor="first_name" className="form-label fw-bold">First Name</label>
                            <input
                                id="first_name"
                                type="text"
                                className="form-control"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4 col-md-6">
                            <label htmlFor="last_name" className="form-label fw-bold">Last Name</label>
                            <input
                                id="last_name"
                                type="text"
                                className="form-control"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                disabled={!isEditing}
                            />
                        </div></div>
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
                            <div className="text-center">
                                <button className="btn btn-quiz btn-lg" onClick={saveProfile}>
                                    Save
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default UserProfile