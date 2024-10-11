import { Link } from "react-router-dom";
import { URL_ABOUT, URL_HOME, URL_LOGIN, URL_SIGN_UP } from "../../routes/RoutesConstants";

const AppBar = () => {
  return (
    <div className="flex items-center justify-between px-4 h-[50px] bg-[#006f00b3] text-white w-full">
      <Link to={URL_HOME} className="py-2">
        Logo
      </Link>
      <div className="flex items-center gap-3">
        <Link to={URL_HOME} className="py-2">
          Home
        </Link>
        <Link to={URL_ABOUT} className="py-2">
          About
        </Link>
        <Link to={URL_LOGIN} className="py-2">
          Login
        </Link>
        <Link to={URL_SIGN_UP} className="py-2">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
