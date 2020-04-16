import React from 'react';
import './App.css';
import ReactHowler from 'react-howler';
import { Button, Progress } from 'reactstrap'
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Move this to another file and then use react router to have two pages
// automatically returns to zero seconds after the play is over, so just let it hit zero twice and then stop it from playing
// Could use a reactstrap progress bar to track progress

class Audio extends React.Component {
  constructor(props){
    super(props);

    this.src = props.src
    this.test = props.test
  }

  render(){
    const questions = [1,2,3,4,5,6]


    return(
      <div className="container">
        <div className="header">
          <h1>Temporary Header</h1>
          <img src="https://raw.githubusercontent.com/kierancyphus/english_test/master/tandem.png" />
        </div>
        <div className="content">
          <h3>Main Audio: You can listen to this two times etc</h3>
          <OnlyPlayPauseButton src="https://raw.githubusercontent.com/kierancyphus/english_test/master/B1.mp4" />
          <div className="questions">
            {questions.map(question =>
              <div key={"div" + question + this.test}>
                <h3 key={"title" + question + this.test}>Question {21 + question}: </h3>
                <OnlyPlayButton src={"https://raw.githubusercontent.com/kierancyphus/english_test/master/" + this.test + "-audio-" + question.toString() + ".m4a"}
                                key={"button" + question + this.test}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class OnlyPlayButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playing: false,
      progress: 0
    }

    this.src = props.src;
    this.ref = React.createRef();
  }

  handleClick = () => {
    this.setState((state, props) => {
      return {playing: !state.playing}
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.getProgress(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  getProgress = () => {
    if (this.ref !== undefined && this.state.duration !== undefined){
      this.setState({
        progress: this.ref.seek() / this.state.duration * 100
      });
    } else {
      this.setState({
        progress: 0
      });
    }
  }

  getDuration = () => {
    this.setState({
      duration: this.ref.duration()
    });
  }

  render() {
    return(
      <div>
        <Button onClick={this.handleClick}>Play</Button>
        <ReactHowler
          src={[this.src]}
          playing={this.state.playing}
          ref={ref => this.ref = ref}
          onLoad={this.getDuration}
        />
        <Progress value={this.state.progress} />
      </div>
    );
  }
}

class OnlyPlayPauseButton extends React.Component {
  // Play Pause and restart should all be one button

  constructor (props) {
    super(props);

    this.state = {
      playing: false,
      progress: 0
    }

    this.src = props.src

    // Create reference to the audio compornent
    this.ref = React.createRef();

    // Set the cookies for the first time if they're undefined
    const cookies = new Cookies();
    if (cookies.get('view count') === undefined){
      cookies.set('view count', '0', { path: '/' });
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.getProgress(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  getProgress = () => {
    if (this.ref !== undefined && this.state.duration !== undefined){
      this.setState({
        progress: this.ref.seek() / this.state.duration * 100
      });
    } else {
      this.setState({
        progress: 0
      });
    }
  }

  getDuration = () => {
    this.setState({
      duration: this.ref.duration()
    });
  }

  handlePlay = () => {
    this.setState({
      playing: true
    });
  }

  handlePause = () => {
    this.setState({
      playing: false
    })
  }

  addCookie = () => {
    const cookies = new Cookies();

    const current_cookie = cookies.get("view count")

    if (cookies.get("view count") !== undefined){
      // There is already a cookie so increment
      const count = parseInt(current_cookie) + 1;
      // I feel like there should be an update cookie thing but this is easier
      cookies.remove('view count', { path: '/' });
      cookies.set('view count', count.toString(), { path: '/' });
    } else {
      // There is currently no cookie so add one
      cookies.set('view count','0', { path: '/' });
    console.log("added cookie");
    }
  }

  checkCookie = () => {
    const cookies = new Cookies();
    console.log(cookies.get('view count'));
  }

  removeCookie = () => {
    const cookies = new Cookies();
    cookies.remove('view count', { path: '/' });
    console.log("removed cookies");
  }

  handleReplay = () => {
    this.ref.seek(0);
  }

  getTime = () => {
    if (this.ref !== undefined){
      return this.ref.seek();
    } else {
      return 0;
    }
  }

  render() {
    return (
      <div>
        <ReactHowler
          src={[this.src]}
          playing={this.state.playing}
          onLoad={this.getDuration}
          ref={ref => this.ref = ref}
        />
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
        <Button onClick={this.handleReplay}>Replay</Button>
        <Button onClick={this.getTime}>Time</Button>
        <Button onClick={this.addCookie}>Add Cookie</Button>
        <Button onClick={this.checkCookie}>Check Cookie</Button>
        <Button onClick={this.removeCookie}>Remove Cookies</Button>
        <Button onClick={this.getDuration}>Get Duration</Button>
        <Progress value={this.state.progress} />
      </div>
    )
  }
}


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/B1">
              <Audio src="https://raw.githubusercontent.com/kierancyphus/english_test/master/B1.mp4" test="b1"/>
            </Route>

            <Route exact path="/B2">
              <Audio src="https://raw.githubusercontent.com/kierancyphus/english_test/master/B2.mp4" test="b2" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
