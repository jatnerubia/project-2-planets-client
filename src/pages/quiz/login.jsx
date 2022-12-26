import LoginForm from "../../components/quiz/login/LoginForm"

const LoginPage = () => {
    return (
        // <div className="container">
            <div className="row form-wrapper h-100">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="img-wrapper h-100 position-relative">
                    <img src={require("../../assets/img/login.jpg")} className="h-100 position-absolute w-100" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 d-lg-block d-md-none p-0">
                    <LoginForm />
                </div>
            </div>
        // </div>
    )
}

export default LoginPage
