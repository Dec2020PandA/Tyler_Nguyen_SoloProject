import "./App.css";

import { Router } from "@reach/router";
import Main from "./views/Main";
import DrinkSearch from "./views/DrinkSearch";
import Dashboard from "./views/Dashboard";
import DrinkPage from "./views/DrinkPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Main default />
        <Dashboard path="/user/:id/dashboard" />
        <DrinkSearch path="/user/:id/search" />
        <DrinkPage path="/:id/details" />
      </Router>
    </div>
  );
}

export default App;