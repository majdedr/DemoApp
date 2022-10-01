import { ROUTES } from "../../shared/routesData/routes";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav className="header">
        <a href={ROUTES.HOME.link}>Home</a>
        <a href={ROUTES.POLL.link}>Poll page</a>
        <a href={ROUTES.ABOUT.link}>about</a>
        <a href={ROUTES.PROFILE.link + "majde"}> profile</a>
      </nav>
    </header>
  );
};

export default Header;
