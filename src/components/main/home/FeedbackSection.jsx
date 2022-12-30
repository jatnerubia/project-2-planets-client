import SectionHeading from "../SectionHeading"

const FeedbackSection = () => {
  return (
    <div className="feedback_section py-5 my-5">
      <div>
        <div className="container">
          <SectionHeading name="SUGGESTION" />
        </div>
        <div className="feedback_wrapper p-4 py-5">
          <span className="overlay_bg w-100 h-100"></span>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="feedback_form">
                  <h4 className="fs-4 pb-5">Have any questions or suggestions about
                  the website? <br />
                  Feel free to contact us!</h4>
                    {/* FIRST AND LAST NAME */}
                    <div className="row pt-5">
                      <div className="pb-4 col-lg-6">
                        <div className="input-group">
                          <input
                              id="firt_name"
                              type="text"
                              className="form-control"
                              required
                          />
                          <label htmlFor="first_name" className="form-label">
                              First Name
                          </label>
                        </div>
                      </div>
                      <div className="pb-4 col-lg-6">
                        <div className="input-group">
                          <input
                              id="last_name"
                              type="text"
                              className="form-control"
                              required
                          />
                          <label htmlFor="last_name" className="form-label">
                              Last Name
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* EMAIL */}
                    <div className="pb-4">
                      <div className="input-group pt-3">
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                            required
                        />
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                      </div>
                    </div>
                    <div className="mb-4 pt-4">
                      <div className="input-group">
                        <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        required
                        className="w-100"></textarea>
                        {/* <textarea
                            id="message"
                            type="textarea"
                            className="form-control"
                            required
                        /> */}
                        <label htmlFor="email" className="form-label">
                            Message
                        </label>
                      </div>
                    </div>
                    <button className="btn btn-transparent text-white rounded-4 border border-2 border-white px-4 d-block m-auto">
                      SEND TO MOON🚀
                    </button>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img className="d-lg-block d-none img-fluid" src={require('../../../assets/img/astronaut.png')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FeedbackSection
