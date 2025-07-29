/** @format */

import { Link } from "react-router-dom";
import "./style.scss";

const NotFound = () => {
  return (
    <div className={"container"}>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/login">Go back to Login</Link>
    </div>
  );
};

export default NotFound;
