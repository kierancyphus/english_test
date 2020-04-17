import React from 'react';
import ReactHowler from 'react-howler';
import { Button, Progress } from 'reactstrap';
import Cookies from 'universal-cookie';

/*
  var cookie = {
    viewed: [
      1,2,3,4,5...
  ],
  main: #
}
  }
*/

class OnlyPlayPauseButton extends React.Component {
  // Play Pause and restart should all be one button

  constructor (props) {
    super(props);

    // initialize state variables
    this.state = {
      playing: false,
      progress: 0,
      plays: 0,
      disabled: false
    }

    // pass down props
    this.src = props.src;
    this.question = props.question;
    this.test = props.test;

    // Create reference to the audio compornent
    this.ref = React.createRef();

    // Get cookies for if they are reloading the page
    const cookies = new Cookies();
    this.cookie = cookies.get(this.test);

    // make cookie if it's undefined
    if (this.cookie === undefined){
      cookies.set(this.test, {viewed: [], main: 0}, { path: "/" });
      this.cookie = {viewed: [], main: 0};
    }

    // Check cookies to see if they've already accessed and disable if necessary
    else {
      this.state.plays = parseInt(this.cookie["main"])
    }

    // disable button if max amount of plays have been reached
    if (this.state.plays >= 2){
      this.state.disabled = true;
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
    // return full bar if they previously used up all their listens
    // returns a percentage if they haven't

    // used up their listens on previous visit
    if (this.state.plays >= 2 && this.getTime() == 0){
      this.setState({
        progress: 100
      }); return;
    }

    // still have listens and will return percentage
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
    console.log(cookies.getAll());
  }

  removeCookie = () => {
    const cookies = new Cookies();
    cookies.remove(this.test, { path: '/' });
    console.log("removed cookies");
    console.log("remaining: ", cookies.getAll())
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

  jump = () => {
    this.ref.seek(this.state.duration - 1);
  }

  handlePlay = () => {
    // starts and stops the player
    // if the player is starting from the beginning, logs a new start
    // stores it all in cookies

    var rval = {playing: !this.state.playing};
    if (this.getTime() === 0){
      rval = {...rval, plays: this.state.plays + 1};
      const cookies = new Cookies();
      cookies.set(this.test, {...this.cookie, main: this.state.plays + 1}, { path: "/" });
    }

    this.setState(rval);
  }


  handleEnd = () => {
    // Stops the player from playing and if it was the last run,
    // disables the button

    var rval = {playing: false};

    if (this.state.plays >= 2){
      rval = {...rval, disabled: true}
    }
    this.setState(rval);
  }

  render() {
    return (
      <div>
        <ReactHowler
          src={[this.src]}
          playing={this.state.playing}
          onLoad={this.getDuration}
          onEnd={this.handleEnd}
          ref={ref => this.ref = ref}
        />
        <Button onClick={this.handlePlay} disabled={this.state.disabled}>{ this.state.playing ? "Pause" : "Play" }</Button>
        {/*
        <Button onClick={this.jump}>JUMP</Button>
        <Button onClick={this.handleReplay}>Replay</Button>
        <Button onClick={this.getTime}>Time</Button>
        <Button onClick={this.addCookie}>Add Cookie</Button>
        <Button onClick={this.checkCookie}>Check Cookie</Button>
        <Button onClick={this.removeCookie}>Remove Cookies</Button>
        <Button onClick={this.getDuration}>Get Duration</Button>
        */}
        <Progress value={this.state.progress} />
      </div>
    )
  }
}

export default OnlyPlayPauseButton;
