import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';



  
class Dictaphone extends Component {

    deleteTranscript = async (e) => {
        this.props.finalTranscript = undefined
    }
    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition , interimTranscript, finalTranscript } = this.props

        if (!browserSupportsSpeechRecognition) {
        return null
        }

        return (
        <div>

            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" defaultValue={transcript} placeholder="Город"/>
                <button Clicker>Получить погоду</button>
                <button onClick={resetTranscript}>Reset</button>

                {interimTranscript === "OK Google" && document.getElementById('Clicker').click()}

            </form>            

            <span>{interimTranscript}</span>
            {interimTranscript === "hello" && resetTranscript()}
            <span>Скажите "Hello!" для очистки строки поиска</span>
            
            
            
        </div>
        )
    }
}
  
  
  export default SpeechRecognition(Dictaphone)