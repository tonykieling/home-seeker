import Logo from "../graphics/logo192.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header-1">
        <a href = "https://tkwebdev.ca" target = "_blank" rel = "noreferrer"
          className = "logo"
        >
          <img
            src   = { Logo }
            alt   = "temps"
            title = "Homes"
            width = "100%"
          />
        </a>

        <Link 
          className = "item"
          to        = "aptosList" 
        >
          Check Apartments
        </Link>
      </div>
      <div className = "header-2">
        <Link 
          className = "item"
          to        = "about"
        >
          About
        </Link>
      </div>

    </div>
  );
};

export default Header;