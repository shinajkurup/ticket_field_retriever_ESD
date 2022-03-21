import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import classes from './Microphone.module.css';
import microphone from '../assests/microphone.png';


function Microphone({onClick, onListening}){

    const commands = [
        { command: "*",
          callback: () => {
            onClick(transcript);
            }
        }]
    const { transcript, resetTranscript} = useSpeechRecognition({ commands });


    function onMicClick(){
        onListening(true);
        SpeechRecognition.startListening({
            continuous: true,
          });
          setTimeout(()=>{
            SpeechRecognition.stopListening()
            resetTranscript()
            onListening(false);
            }, 5000)   
    }

    return(
        <img alt="Mic" src={microphone} className = {classes.micicon} onClick= {onMicClick} />
        // <>
        //     <div className={classes.tooltip}>
                
        //         <div className={classes.tooltiptext}><span >Search by Voice</span></div>
        //     </div>
        // </>
    );

}


export default Microphone;