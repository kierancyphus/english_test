import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Audio from './Components/Audio.js'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/b1">
              <Audio src="https://raw.githubusercontent.com/kierancyphus/english_test/master/B1.mp4" test="b1"/>
            </Route>
            <Route exact path="/b2">
              <Audio src="https://raw.githubusercontent.com/kierancyphus/english_test/master/B2.mp4" test="b2" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
