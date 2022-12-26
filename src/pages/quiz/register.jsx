import RegisterForm from "../../components/quiz/register/RegisterForm"

const RegisterPage = () => {
    return (
        // <div className="container">
            <div className="row form-wrapper h-100">
                <div className="col-md-6 p-0">
                    <RegisterForm />
                </div>
                <div className="col-md-6 p-0">
                  <div className="img-wrapper h-100 position-relative">
                    <img src={require("../../assets/img/register.jpg")} className="h-100 position-absolute w-100" alt="" />
                  </div>
                </div>
            </div>
        // </div>
    )
}

export default RegisterPage
