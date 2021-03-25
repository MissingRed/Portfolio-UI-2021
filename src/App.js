import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Email from "./pages/Email";
import Home from "./pages/Home";
import Particles from "react-particles-js";

const App = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        style={{
          position: "absolute",
        }}
      />
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
