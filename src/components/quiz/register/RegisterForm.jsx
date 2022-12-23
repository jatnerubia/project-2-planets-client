
import { useState } from "react"
import { Link } from "react-router-dom"

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const register = async () => {
        
        setLoading(true)
        setError(undefined)

        if (formData.password !== formData.confirmPassword) {
            setError({ message: 'Password does not match' })
            setLoading(false)
            return
        }

        try {
            const result = await fetch(
                `https://project-2-planets-server.onrender.com/auth/register`,
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
                console.log(response)
            }
        } catch (error) {}

        setLoading(false)
    }

    return (
        <div className="bg-light text-dark p-5">
            <div>
                <h3 className="text-center">
                    Create an Account
                </h3>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="first_name" className="form-label">
                        First Name
                    </label>
                    <input
                        id="first_name"
                        type="text"
                        className="form-control"
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="last_name" className="form-label">
                        Last Name
                    </label>
                    <input
                        id="last_name"
                        type="text"
                        className="form-control"
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    id="email"
                    type="text"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                </label>
                <input
                    id="confirm_password"
                    type="password"
                    className="form-control"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
            </div>
            <div className="mb-3">
                By signing up you confirm that you've read and accepted
                our <Link to="/terms">Terms of Service</Link> and
                <Link to="/policy">Privacy Policy</Link>
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
                        : <button className="btn btn-primary" onClick={register}>Register</button>
                }
            </div>
            <div className="mb-3 text-center">
                OR
            </div>
            <div className="mb-3 d-flex justify-content-center">
                Sign in with google
            </div>
            <hr />
            <div className="text-center">
                Already have an account? <strong><Link to="/quiz/login">Login</Link></strong>
            </div>
        </div>
    )
}

export default RegisterForm