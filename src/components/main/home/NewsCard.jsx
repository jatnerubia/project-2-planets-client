import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const NewsCard = ({ news }) => {
  return (
    <>
      <div className="col-lg-4 col-md-12">
        <a href={news.url} target="_blank" rel="noreferrer">
          <div className="card border-0 position-relative mb-5">
            <div className="img-wrapper">
              <img src={news.image} className="img-fluid w-100" alt="" />
            </div>
            <div className="card-body w-100 text-white position-absolute bottom-0">
              <h6 className='card-title my-2 fs-5'>{news.title}</h6>
              <p className="card-text">{news.body}</p>
              <div className="post-meta d-flex justify-content-between align-items-center">
                <span className="author small">
                  <FontAwesomeIcon className='text-white me-1' icon={solid('user')} />
                  {news.author}
                </span>
                <span className='date small'>
                  <FontAwesomeIcon className='text-white me-1' icon={solid('calendar-days')} />
                  Publish: {news.publish}
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default NewsCard;
