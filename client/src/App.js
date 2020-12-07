import "./App.css";

import { Router } from "@reach/router";
import Main from "./views/Main";
import SearchDrinkForm from "./views/SearchDrinkView";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Main default />
        <SearchDrinkForm path="/search" />
        <Dashboard path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
