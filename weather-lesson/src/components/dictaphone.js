import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';
  
class Dictaphone extends Component {

    constructor(props) {
        super(props)
        this.input = React.createRef()
      }

    deleteTranscript = async (e) => {
        this.props.finalTranscript = undefined
    }

    componentDidMount() {
        // ставим фокус в input
        this.input.current.focus()
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

                <input type="text" name="city" defaultValue={finalTranscript} placeholder="Город" ref={this.input}/>
                <button id = "Clicker"></button>   

                {interimTranscript === "ok" && document.getElementById('Clicker').click()}
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