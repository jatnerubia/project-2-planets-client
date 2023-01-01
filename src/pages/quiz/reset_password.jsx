import ResetPasswordForm from "../../components/quiz/reset_password/ResetPasswordForm"

const ResetPasswordPage = () => {
    return (
      <div className="quiz-wrapper d-flex justify-content-center align-items-center p-3 px-md-5">
        <div className="container position-relative">
          <div className="row form-wrapper h-100">
            <div className="col-lg-6 col-md-8 m-auto">
                <ResetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    )
}

export default ResetPasswordPage
