import React from 'react';
import OnlyPlayButton from './OnlyPlayButton.js';
import OnlyPlayPauseButton from './OnlyPlayPauseButton.js';

/*
  var cookie = {
    viewed: [
      1,2,3,4,5...
  ],
  views: {
    1: #,
    2: #,
    ...
}
  }
*/


class Audio extends React.Component {
  constructor(props){
    super(props);

    this.src = props.src
    this.test = props.test
  }

  render(){
    const questions = [1,2,3,4,5,6];
    return(
      <div className="container">
        <div className="header">
          <img src="https://raw.githubusercontent.com/kierancyphus/english_test/master/tandem.png" />
        </div>
        <div className="content">
          <h3>Main Audio: You can listen to this two times etc</h3>
          <OnlyPlayPauseButton src="https://raw.githubusercontent.com/kierancyphus/english_test/master/B1.mp4" test={this.test} />
          <div className="questions">
            {questions.map(question =>
              <div key={"div" + question + this.test}>
                <h3 key={"title" + question + this.test}>Question {21 + question}: </h3>
                <OnlyPlayButton src={"https://raw.githubusercontent.com/kierancyphus/english_test/master/" + this.test + "-audio-" + question.toString() + ".m4a"}
                                key={"button" + question + this.test}
                                question={question}
                                test={this.test}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Audio;
