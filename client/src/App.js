import "./App.css";

import { Router } from "@reach/router";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/search" />
        
      </Router>
    </div>
  );
}

export default App;
