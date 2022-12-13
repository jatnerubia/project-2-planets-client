
import { Link } from "react-router-dom";

const RedirectButton = ({ name, to }) => {
    return (
        <Link to={to}>
            <button className="btn btn-light">
                {name}
            </button>
        </Link>
    )
}

export default RedirectButton