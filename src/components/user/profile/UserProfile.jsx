const UserProfile = () => {
    return (
        <div className="container">
            <div className="card card-block">
                <div className="card-body">
                    <div className="text-center mb-3">
                        <img src="https://images.pexels.com/photos/109851/pexels-photo-109851.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1" className="rounded-circle" alt="User Avatar" width={150} height={150} />
                    </div>
                    <div className="row">
                        <div className="mb-4 col-md-6">
                            <label htmlFor="first_name" className="form-label fw-bold">Firstname</label>
                            <input
                                id="first_name"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-4 col-md-6">
                            <label htmlFor="last_name" className="form-label fw-bold">Lastname</label>
                            <input
                                id="last_name"
                                type="text"
                                className="form-control"
                            />
                        </div></div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile