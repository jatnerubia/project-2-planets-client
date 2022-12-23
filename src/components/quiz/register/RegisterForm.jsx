
import { useState } from "react"
import { Link } from "react-router-dom"

const RegisterForm = () => {

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
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="form-control"
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
                />
            </div>
            <div className="mb-3">
                By signing up you confirm that you've read and accepted
                our <Link to="/terms">Terms of Service</Link> and
                <Link to="/policy">Privacy Policy</Link>
            </div>
            <div className="mb-3 text-center">
                <button className="btn btn-primary">Register</button>
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