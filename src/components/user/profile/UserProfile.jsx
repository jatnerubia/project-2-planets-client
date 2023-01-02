const UserProfile = () => {
    return (
        <div className="container">
            <div className="card card-block">
                <div className="card-body">
                    <div className="row justify-content-center">
                        <img src="https://i.ibb.co/2c362Xy/Untitled-design-4.png" className="w-50 img-responsive mb-2" alt="userImage"></img>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-block">
                            <label for="firstName">Firstname</label>
                            <input type="text" id="firstName"></input>
                            </div>
                         <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-block">
                            <label for="lastName">Lastname</label>
                            <input type="text" id="lastName"></input>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
       

    )
}
export default UserProfile