import React from 'react';
import OnlyPlayButton from './OnlyPlayButton.js';
import OnlyPlayPauseButton from './OnlyPlayPauseButton.js';

class Audio extends React.Component {
  constructor(props){
    super(props);

    this.src = props.src
    this.test = props.test
  }

  render(){
    const questions = [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
    return(
      <div className="container">
        <div className="header" Style="">
        <img src="https://raw.githubusercontent.com/kierancyphus/english_test/master/tandem.png" Style="display: block; margin: 20px auto 0px auto; padding: 50px 0"/>
        <h1 Style="text-align: center; padding-bottom: 20px">Audio Files for English {this.test.toUpperCase()}</h1>
        </div>
        <div className="content">
          // Main Audio
          <h3>Main Audio:</h3>
          <h5>Use this audio to answer the fill in the blank questions 29 to 39. You will only be able to listen to the audio TWICE. You can play and pause the audio throughout the clip. </h5>
          <OnlyPlayPauseButton src={"https://raw.githubusercontent.com/kierancyphus/english_test/master/" + this.test + ".mp4"} test={this.test}/>
          <hr/>

          // Individual Audios
          // ISSUES
          //// The audio starts at 40 instead of 29
          //// It currently supports the wrong audio files (need to delete them)
          //// It currently only supports 6 audio files (need 11)
          <div className="questions" Style="padding: 20px 0 20px 0">
            {questions.map(question =>
              <div key={"div" + question + this.test}>
                <h3 key={"title" + question + this.test}>Question {question}</h3>
                <p>You can only listen to this audio clip once</p>
                <OnlyPlayButton src={"https://raw.githubusercontent.com/kierancyphus/english_test/master/" + this.test + "-audio-" + question.toString() + ".m4a"}
                                key={"button" + question + this.test}
                                question={question}
                                test={this.test}
                />
                <hr/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Audio;
