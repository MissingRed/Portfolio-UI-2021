import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Email from "./pages/Email";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About-me" component={About} />
          <Route exact path="/Email" component={Email} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact-me" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
