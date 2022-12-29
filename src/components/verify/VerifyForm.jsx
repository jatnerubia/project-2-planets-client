import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import * as RestApi from "../../utils/rest_api_util"

const VerifyForm = () => {

    const location = useLocation()
    const [message, setMessage] = useState()
    
    useEffect(() => {
        validateAccount()
        // eslint-disable-next-line
    }, [location]);

    const validateAccount = async () => {
        try {
            const id = new URLSearchParams(location.search).get('id')
            const token = new URLSearchParams(location.search).get('token')
            const result = await RestApi.verifyAccount({
                id: id,
                token: token
            })
            let response = await result.json();
            setTimeout(async () => {
                setMessage(response)
            }, 3000)
        } catch (error) {}
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            {
                message === undefined
                    ? 'Validating... Please wait.'
                    : message.message
            }
        </div>
    )
}

export default VerifyForm