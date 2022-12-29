import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const QuizCard = ({ title, text, icon, footerText = '' }) => {
  return (
    <div class="card text-center">
      <div class="d-flex flex-column justify-content-center align-items-center card-body">
        <h5 class="card-title fw-bold fs-5 text-muted">
          <FontAwesomeIcon className='me-3' icon={icon} />
          {title}
        </h5>
        <p class="card-text fs-1 fw-bold mt-4">{text}</p>
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
