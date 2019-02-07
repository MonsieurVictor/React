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
            <br></br>
            <form onSubmit={this.props.weatherMethod} className = "dictaphone">

                <input type="text" name="city" defaultValue={finalTranscript} placeholder="Город"/>
                <button id = "Clicker"></button>   

                {interimTranscript === "okay" && document.getElementById('Clicker').click()}
            </form>          
            {interimTranscript === "hello" && resetTranscript()}
            <br></br>
            <p className = "hello">Произнесите название города, затем скажите "ОК"</p>     
            <p className = "hello">Скажите "Hello!" для очистки строки поиска</p>        
            
        </div>
        )
    }
}
  
  
  export default SpeechRecognition(Dictaphone)