import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";

import Home from "./components/Home.js";
import AboutUs from "./components/AboutUs.js";
import NotFound from "./components/NotFound.js";
import ProjectList from "./components/ProjectList.js";
import ProjectDetails from "./components/ProjectDetails.js"

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Project App</h1>
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>

            <NavLink  to="/about">
              About
            </NavLink>

            <NavLink to="/projects"> Projects</NavLink>

          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/projects/:projectId" component={ProjectDetails} />
          <Route path="/projects" component={ProjectList} />

          {/*404 route ALWAYS LAST*/}
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
