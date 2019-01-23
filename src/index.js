import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import "./styles.css";

const Home = React.lazy(() => import("./Home"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Home exact path="/" component={Home} />
        </Suspense>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
