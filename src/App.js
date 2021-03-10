
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './Components/Team/Team.js';
import TeamExplore from './Components/TeamExplore/TeamExplore.js';
import Home from './Components/Home/Home.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/team">
              	<Team></Team>
          </Route>
          <Route path = "/teamExplore/:id">
              <TeamExplore></TeamExplore>
          </Route>
          <Route exact path = "/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
