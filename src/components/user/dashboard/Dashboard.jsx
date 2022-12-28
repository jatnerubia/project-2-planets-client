import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const DashboardComponent = () => {
  return (
      <div className="mt-4">
          <h1 className="fw-bold fs-2">DASHBOARD</h1>
          <div className="py-5 user_avatar d-flex justify-content-center flex-column align-items-center">
            <img src="https://images.pexels.com/photos/109851/pexels-photo-109851.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1" className="rounded-circle" alt="User Avatar" width={150} height={150} />
            <h4 className="mt-4 fw-bold">John Doe</h4>
          </div>

          <div className="card-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="mb-4 left col-lg-4 col-md-12">
                  <div class="card text-center">
                    <div class="d-flex flex-column justify-content-center align-items-center card-body">
                      <h5 class="card-title fw-bold fs-5">
                        <FontAwesomeIcon className='me-3' icon={solid('ranking-star')} />
                        RANK
                      </h5>
                      <p class="card-text fs-1 fw-bold mt-4">24</p>
                    </div>
                  </div>
                  </div>
                  <div className="mb-4 left col-lg-8 col-md-12">
                    <div class="card text-center">
                      <div class="d-flex flex-column justify-content-center align-items-center card-body">
                        <h5 class="card-title fw-bold fs-5">
                        <FontAwesomeIcon className='me-3' icon={solid('list-check')} />
                          CORRECT ANSWER
                        </h5>
                        <p class="card-text fs-1 fw-bold mt-4">90/100</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-4 left col-lg-4 col-md-12">
                    <div class="card text-center">
                      <div class="d-flex flex-column justify-content-center align-items-center card-body">
                        <h5 class="card-title fw-bold fs-5">
                        <FontAwesomeIcon className='me-3' icon={solid('bookmark')} />
                          SCORE
                        </h5>
                        <p class="card-text fs-1 fw-bold mt-4">90%</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 left col-lg-8 col-md-12">
                    <div class="card text-center">
                      <div class="d-flex flex-column justify-content-center align-items-center card-body">
                        <h5 class="card-title fw-bold fs-5">
                        <FontAwesomeIcon className='me-3' icon={solid('hourglass-half')} />
                          TIME SPENT
                        </h5>
                        <p class="card-text d-flex flex-column fs-1 fw-bold mt-4">
                          00:20:30
                          <span className="small mt-2">Hr:Mins:Sec</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 right mb-4">
                <div class="card text-center">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 class="card-title fw-bold fs-4">
                      <FontAwesomeIcon className='me-3' icon={solid('gift')} />
                      YOUR AWARD
                    </h5>
                    <p class="card-text fs-1 fw-bold mt-4">
                      <div className="hexagon">
                        {/* CHANGE THE MEDAL CLASS (gold, silver, bronze) IN FONT-ICON BASED ON AWARD */}
                        <FontAwesomeIcon className='me-3 fs-1 medal gold' icon={solid('medal')} />

                        {/* IF NO AWARD */}
                        {/* <h1>Better Luck Next Life</h1> */}
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default DashboardComponent
