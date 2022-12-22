import { Link } from "react-router-dom";

const RedirectButton = ({ name, to }) => {
  return (
    <Link to={to}>
      <button className="btn btn-transparent text-white rounded-4 border border-2 border-white px-4 my-3">{name}</button>
    </Link>
  );
};

export default RedirectButton;
