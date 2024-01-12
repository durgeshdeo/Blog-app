import { Link } from "react-router-dom";
import Button from "./Button";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>BLoG</h1>
        </Link>
        <div className="header-buttons">
          <Link to="/">
            <Button value="Home" />
          </Link>
          <Link to="/create">
            <Button value="Add Blog" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
