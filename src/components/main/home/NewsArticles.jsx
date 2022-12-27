import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const NewsArticles = () => {
  return (
    <div className="container news_article__section">
      <div className="row">
        <div className="col-md-4">
          <div className="card border-0 position-relative">
            <div className="img-wrapper">
              <img src={require('../../../assets/img/newsArticles.jpg')} className="img-fluid" alt="" />
            </div>
            <div className="card-body text-dark position-absolute bottom-0">
              <div className="post-meta d-flex justify-content-between align-items-center">
                <span className="author small text-muted">
                  <FontAwesomeIcon className='text-dark me-1' icon={solid('user')} />
                  Author
                </span>
                <span className='date small text-muted'>
                  <FontAwesomeIcon className='text-dark me-1' icon={solid('calendar-days')} />
                  Date
                </span>
              </div>
              <h6 className='card-title my-2'>How artificial intelligence is helping us explore the solar system</h6>
              <p className="card-text small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsArticles;
