import React, { Component } from 'react';
import Quiz from './Quiz';
import Facit from './Facit';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Tips() {
  return (
    <Router>
      <div>
      <h1>TIPS KOMPONENT</h1>
        <nav>
          <ul>
            <li>
              <Link to="/quiz">Vill du göra quizet igen?</Link>
            </li>
            <li>
              <Link to="/facit">eller vill du läsa om de rätta svaren?</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/facit">
            <Facit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
