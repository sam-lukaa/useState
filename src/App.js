import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Pages/Landing";
import Product from "./components/Pages/Landing";

export default function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  const themeStyles = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    height: "100vh",
    width: "100%",
  };

  const btnStyles = {
    background: dark ? "#fff" : "#333",
    color: dark ? "#333" : "#fff",
    height: "2rem",
  };

  return (
    <Router>
      <div style={themeStyles}>
        <button onClick={toggleTheme} style={btnStyles}>
          Toggle Theme
        </button>

        <Route exact path="/" component={Landing} />
        <Switch>
          <Route path="/products" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}
