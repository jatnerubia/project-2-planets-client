
import ForgotPasswordForm from "../../components/quiz/forgot_password/ForgotPasswordForm"

const ForgotPasswordPage = () => {
    return (
        // <div className="container">
            <div className="row form-wrapper h-100">
                <div className="col-lg-6 col-md-12 d-lg-block d-none p-0">
                  <div className="img-wrapper h-100 position-relative">
                    <img src={require("../../assets/img/forgot-pass.jpg")} className="left forgot-img h-100 position-absolute w-100" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                    <ForgotPasswordForm />
                </div>
            </div>
        // </div>
    )
}

export default ForgotPasswordPage
