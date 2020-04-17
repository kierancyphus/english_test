import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Audio from './Components/Audio.js'

function App() {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/b1" component={() => <Audio src="https://raw.githubusercontent.com/kierancyphus/english_test/master/B1.mp4" test="b1"/>} />
            <Route exact path="/b2" component={() => <Audio src="https://raw.githubusercontent.com/kierancyphus/english_test/master/B2.mp4" test="b2" />} />
            <Route component={() => <h1>hi is this working</h1>} />
          </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
