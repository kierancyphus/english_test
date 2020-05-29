import React from 'react';
import ReactHowler from 'react-howler';
import { Button, Progress } from 'reactstrap';
import Cookies from 'universal-cookie';

/*
  var cookie = {
    viewed: [
      1,2,3,4,5...
  ],
  Main: #
  }
*/

class OnlyPlayButton extends React.Component {
  constructor(props){
    super(props);

    // initialize state variables
    this.state = {
      playing: false,
      progress: 0,
      disabled: false,
      played: 0
    }

    // pass down props
    this.src = props.src;
    this.question = props.question;
    this.test = props.test;

    // get ready to connect to the howler element
    this.ref = React.createRef();


    // Get cookies for if they are reloading the page
    const cookies = new Cookies();
    this.cookie = cookies.get(this.test);

    // make cookie if it's undefined
    if (this.cookie === undefined){
      cookies.set(this.test, {viewed: [], main: 0}, { path: "/" });
      this.cookie = {viewed: [], main: 0};
    }

    // get the data and store it in state if it already existed
    else {
      if (this.cookie["viewed"].includes(this.question)){
        this.state.played = 0
      }
    }
  }

  // check the progress bar ten times a second
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
    // fill progress bar if they listened to it on this visit

    // Already played max times
    if (this.state.played === 2){
      this.setState({ progress: 100 });
      return;
    }

    // get progress
    else if (this.ref !== undefined && this.state.duration !== undefined){
      this.setState({
        progress: this.ref.seek() / this.state.duration * 100
      });
    } return;
  }

  getDuration = () => {
    // returns length of audio clip in seconds
    this.setState({
      duration: this.ref.duration()
    });
  }

  handleClick = () => {
    // Set the button as disabled so that they can't pause
    // the cookies are set after the promise to avoid async with the bar loading
    this.setState((state, props) => {
      if(state.played > 1){
        return {
          disabled: true
        }
      }
      else {
        return {
          playing: !state.playing,
          played: state.played + 1
      }

      }

    }, () => {
      const cookies = new Cookies();
      const updated_viewed = cookies.get(this.test)["viewed"];
      cookies.set(this.test, {...this.cookie, viewed: [...updated_viewed, this.question]}, { path : "/" });
    });
  }

  handleEnd = () => {
    this.setState((state, props) => {
      if(state.played > 1){
        return {
          disabled: true,
          playing: false
        }
      }
      return {
        playing: false,
      };
    });
  }

  render() {
    return(
      <div>
        <Button onClick={this.handleClick} disabled={this.state.disabled}>Play</Button>
        <ReactHowler
          src={[this.src]}
          playing={this.state.playing}
          ref={ref => this.ref = ref}
          onLoad={this.getDuration}
          onEnd={this.handleEnd}
        />
        <Progress value={this.state.progress} />
      </div>
    );
  }
}

export default OnlyPlayButton;
