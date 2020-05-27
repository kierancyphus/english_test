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
        <img src="https://raw.githubusercontent.com/kierancyphus/english_test/master/tandem.png" Style="display: block; margin: 10px auto 0px auto; padding: 50px 0 10px 0"/>
        <h2 Style="text-align: center; padding-bottom: 20px">Audio Files for English {this.test.toUpperCase()}</h2>
        </div>
        <div className="content">

        <h3><u>Questions 29 to 35 (one audio)</u></h3>
        <p>Please answer the multiple choice comprehension questions based on this audio. You can listen to the audio twice.</p>
        <OnlyPlayPauseButton src={"https://raw.githubusercontent.com/kierancyphus/english_test/master/" + this.test + ".mp4"} test={this.test}/>
        <hr/>
          <div className="questions" Style="padding: 10px 0 10px 0">
          <h3><u>Questions 35 to 45</u></h3>
          <p>Please fill in the missing word on the exam. You can only listen to each audio once.</p>
          <hr/>
            {questions.map(question =>
              <div key={"div" + question + this.test}>
                <h4 key={"title" + question + this.test}>Question {6+question}</h4>
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
