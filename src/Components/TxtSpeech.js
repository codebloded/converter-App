import React ,{useEffect, useState} from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import { Container, IconButton, TextareaAutosize } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';

const SpeechRecognition =  window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();








function TxtSpeech() {
    const [listening , setListening] = useState(false);
    const [note , setNote] = useState(null);

    useEffect(()=>{
        handleListen()
    },[listening])

    useEffect(()=>{
        greet();
    },[listening])
    
    const handleListen = ()=>{
        
        
        if(listening){
            recognition.start();
            recognition.onend = ()=>{
                console.log("COntinue...");
                recognition.start()
            }

        }
        else{
            recognition.stop();
            recognition.onend = ()=>{
                console.log('Stopped mic')
            }
        }
        recognition.onstart = ()=>{
            console.log('mic is onn')
        }
        recognition.onresult = (event)=>{
      
            const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
            setNote(transcript);
            recognition.onerror = (event)=>{
                console.log(event.error);
            }
        }
    }
    function greet(){
        let message1 = "Hey whats app guys,welcome here, Tap the mic to speak, And tap again to stop";
        let message2 ="Mic is On";
        let message3 = 'mic is off'
        const speech =new window.SpeechSynthesisUtterance();
        
        if(listening === false){
            speech.text = message1;
        }
        else if(listening===true){
            speech.text = message2;
        }
        
        speech.volume = 1;
        speech.rate =1;
        speech.pitch = 1;
        const voices = speechSynthesis.getVoices();
        speech.voice = voices[4];
        speechSynthesis.getVoices();

        speech.lang = 'en-US'

        window.speechSynthesis.speak(speech);
    }
    window.speechSynthesis.getVoices();
   
    
    
    return (
        <React.Fragment>
            <div className="App card-layout">
                <Container maxWidth="sm" className='App card'>
                    <h1>Speech To Text</h1>
                    <div className="App">
                        <IconButton aria-label="mix" onClick={()=>{setListening(prevState=> !prevState)}} >
                            <MicIcon fontSize="large" color="secondary"  />
                            
                        </IconButton>
                        <h5>Tap mic then speak</h5>
                        <div className="textArea">{note}</div>
                    <Button variant='contained' color='primary' style={{ marginTop: "10px" }}>Save</Button>
                    </div>

                </Container>
            </div>
            <div className="card-layout">

                <Link style={{ textDecoration: 'none', margin: "8px" }} to='/'><Button variant='contained' color='primary' style={{ marginBottom: "7px" }}>Home</Button></Link>
                <Link style={{ textDecoration: 'none' }} to='/cards'><Button variant='contained' color='primary' style={{ marginBottom: "7px" }}>Back</Button></Link>
            </div>

        </React.Fragment>
    )
}
export default TxtSpeech;