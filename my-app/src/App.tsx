import "./App.css";
// import Counter from "./components/Counter";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ROUTES } from "./shared/routesData/routes";
// import {About}  from "./pages/about";
// import {Home} from "./pages/home";
// import {Profile} from "./pages/profile";
// import  { lazy } from "react";
import { Header } from "./components/header";
import RoutesTemplate from "./shared/components/RoutesTemplate";

// const LazyAbout:any  = lazy(() => import("./pages/about/About"));

// const Error = () => <div>Error</div>;
function App() {

  return (
    <Router>
      <Header />
      <nav>
        <Link to={ROUTES.HOME.link}>Home</Link>
        <Link to={ROUTES.ABOUT.link}>about</Link>
        <Link to={ROUTES.PROFILE.link+ 'majde'}>profile</Link>
      </nav>

        <ul>
          <li>
            <Link to={ROUTES.HOME.link}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT.link}>about</Link>
          </li>
          <li>
            <Link to={ROUTES.PROFILE.link+ 'majde'}>profile</Link>
          </li>
        </ul>
        {/* <Counter /> */}
        <div className="container">

        <RoutesTemplate />
      </div>
    </Router>
  );
}

export default App;
