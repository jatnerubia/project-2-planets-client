import SectionHeading from "../SectionHeading"
import { useState } from "react";
import * as RestApi from "../../../utils/rest_api_util"

const FeedbackSection = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [success, setSuccess] = useState()

  const sendFeedback = async () => {

    setLoading(true)
    setError(undefined)
    setSuccess(undefined)

    try {
        const result = await RestApi.sendFeedback(formData)
        let response = await result.json()
        if (result.status === 400) {
          setError(response)
        }
        if (result.status === 200) {
          setFormData({
              firstName: '',
              lastName: '',
              email: '',
              message: ''
          })
          setSuccess(response)
        }
    } catch (error) {}

    setLoading(false)
  }

  return (
    <div className="feedback_section pt-5">
      <div>
        <div className="container">
          <SectionHeading classname="suggestion" name="SUGGESTION" />
        </div>
        <div className="feedback_wrapper p-4 py-5">
          <span className="overlay_bg w-100 h-100"></span>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="feedback_form">
                  <h4 data-aos="zoom-in-down" className="fs-4 pb-5">
                    Have any questions or suggestions about the website?<br/><br/>
                    Feel free to contact us!
                  </h4>
                  {/* First and Last name */}
                  <div className="row pt-5">
                    <div className="pb-4 col-lg-6">
                      <div className="input-group">
                        <input
                          id="firt_name"
                          type="text"
                          className="form-control"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                      </div>
                      {
                        error !== undefined && error.type === 'firstName' && (
                          <span className="text-danger small">
                            {error.message}
                          </span>
                        )
                      }
                    </div>
                    <div className="pb-4 col-lg-6">
                      <div className="input-group">
                        <input
                          id="lastName"
                          type="text"
                          className="form-control"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                      </div>
                      {
                        error !== undefined && error.type === 'lastName' && (
                          <span className="text-danger small">
                            {error.message}
                          </span>
                        )
                      }
                    </div>
                  </div>
                  {/* Email */}
                  <div className="pb-4">
                    <div className="input-group pt-3">
                      <input
                        id="email"
                        type="text"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                    </div>
                    {
                      error !== undefined && error.type === 'email' && (
                        <span className="text-danger small">
                          {error.message}
                        </span>
                      )
                    }
                  </div>
                  {/* Message */}
                  <div className="mb-4 pt-4">
                    <div className="input-group">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-100">
                      </textarea>
                      <label htmlFor="email" className="form-label">
                        Message
                      </label>
                    </div>
                    {
                      error !== undefined && error.type === 'message' && (
                        <span className="text-danger small">
                            {error.message}
                        </span>
                      )
                    }
                  </div>
                  {/* Success message */}
                  {
                    success !== undefined && (
                      <div className="mb-4 alert alert-success" role="alert">
                        {success.message}
                      </div>
                    )
                  }
                  <div>
                    {
                      loading
                        ? <button className="btn btn-transparent text-white rounded-4 border border-2 border-white px-4 d-block m-auto"
                          disabled>Loading...</button>
                        : <button className="btn btn-main px-4 d-block m-auto"
                          onClick={sendFeedback}>SEND TO MOON🚀</button>
                    }
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="1500" className="col-lg-6 d-flex justify-content-center align-items-center">
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
