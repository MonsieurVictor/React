
import './App.css';
import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'



const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class App extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>
    )
  }
}

App.propTypes = propTypes

export default SpeechRecognition(App)

