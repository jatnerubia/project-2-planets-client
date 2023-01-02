import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuizCard = ({ title, text, icon, footerText = '' }) => {
  return (
    <div className="card text-center mx-sm-2">
      <div className="d-flex flex-column justify-content-center align-items-center card-body">
        <h5 className="card-title fw-bold fs-5 text-muted">
          <FontAwesomeIcon className='me-3' icon={icon} />
          {title}
        </h5>
        <p className="card-text fs-1 fw-bold mt-4">{text}</p>
        {
          footerText !== '' && (
          <span className="small mt-2">{footerText}</span>
          )
        }
      </div>
    </div>
  );
};

export default QuizCard;
