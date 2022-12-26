
import ForgotPasswordForm from "../../components/quiz/forgot_password/ForgotPasswordForm"

const ForgotPasswordPage = () => {
    return (
        // <div className="container">
            <div className="row form-wrapper h-100">
                <div className="col-md-6 p-0">
                  <div className="img-wrapper h-100 position-relative">
                    <img src={require("../../assets/img/forgot-pass.jpg")} className="forgot-img h-100 position-absolute w-100" alt="" />
                  </div>
                </div>
                <div className="col-md-6 p-0">
                    <ForgotPasswordForm />
                </div>
            </div>
        // </div>
    )
}

export default ForgotPasswordPage
