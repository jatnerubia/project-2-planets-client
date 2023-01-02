const UserProfile = () => {
    return (
        <div className="container">
            <div className="card card-block">
                <div className="card-body">
                    <div className="text-center">
                        <img src="https://images.pexels.com/photos/109851/pexels-photo-109851.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1" className="rounded-circle" alt="User Avatar" width={150} height={150} />
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