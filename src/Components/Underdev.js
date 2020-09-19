import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
function UnderDev(){

    useEffect(()=>{
        intro();
    },)
    function intro (){
        const speaks = new window.SpeechSynthesisUtterance();
        speaks.text = "Sorry this Component is under development, Adding new functionality soon! and in this app, there are lots of bugs and errors ,that have you noticed! , please report  them! ";
        speaks.rate=0.95;
        speaks.pitch =1;
        speaks.volume=1;
        const voices = speechSynthesis.getVoices();
        speechSynthesis.getVoices();
        speaks.lang = 'en-US'
        speaks.voice = voices[4];
        window.speechSynthesis.speak(speaks)
    }
    window.speechSynthesis.getVoices()
    return(
        <div className="App">
            <h1>Under Development "-.-"</h1>
            
            <Link style={{textDecoration:'none', margin:"8px"}} to='/'><Button variant='contained' color='primary' style={{marginBottom:"7px"}}>Home</Button></Link>
            <Link style={{textDecoration:'none'}} to='/cards'><Button variant='contained' color='primary' style={{marginBottom:"7px"}}>Back</Button></Link>
        </div>
    )
}
export default UnderDev;