import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header";
import RoutesTemplate from "./shared/components/RoutesTemplate";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <RoutesTemplate />
      </div>
    </Router>
  );
}

export default App;
