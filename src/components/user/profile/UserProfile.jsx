const UserProfile = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="row justify-content-center">
                    <img src="https://i.ibb.co/2c362Xy/Untitled-design-4.png" className="w-50 img-fluid " alt="userImage"></img>
                <div className="card-body justify-content-center">
                    <div className="row align-items-center">
                        <div className="col-6 ">
                        <label for="firstName">Firstname</label>
                        <input type="text" id="firstName"></input>
                        </div>
                        <div className="col-6">
                        <label for="lastName">Lastname</label>
                        <input type="text" id="lastName"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile