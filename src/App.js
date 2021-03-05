import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Email from "./pages/Email";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About-me" component={About} />
          <Route exact path="/Email" component={Email} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
