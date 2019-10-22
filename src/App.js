import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import "animate.css"
import "./App.css";
import RootContainer from "./containers/RootContainer";
function App() {
  return (
    <div>  
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" component={RootContainer} />
      </BrowserRouter>

    </div>
  );
}

export default App;
