import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const TeamCard = ({ firstName, lastName, image }) => {
    return (
        <div className="col-md-6 pb-5">
            <div className="card position-relative">
                <img src={image} className="shadow bg-white position-absolute img-fluid top-0 start-50 translate-middle mb-5  d-block" alt="person"/>
                <div className="card-body mt-5 pt-5   text-center ">
                    <h4 className="fw-bold text-black">
                        {firstName} {lastName}
                    </h4>
                    <p className="text-black">Web Developer</p>
                    <li className="text-black list-unstyled">
                        <FontAwesomeIcon className="m-1 fs-3 text-primary" icon={brands('facebook')} />
                        <FontAwesomeIcon className="m-1 fs-3 text-primary" icon={brands('linkedin')} />
                        <FontAwesomeIcon className="m-1 fs-3 text-primary" icon={brands('twitter')} />
                    </li>
                    <div className="button-group pt-5 d-flex justify-content-evenly">
                      <button className="bg-black text-white btn rounded-pill px-4">FOLLOW</button>
                      <button className="border-dark text-black btn rounded-pill px-4">HIRE ME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TeamCard
