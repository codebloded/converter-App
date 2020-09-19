import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Footer from "./Footer";
function Content (){
    const[sound, setSound]=useState(false);
    function welcome(){
        const speaks = new window.SpeechSynthesisUtterance();
        speaks.text ="Hello welcome here  to Converterx!, developed by code-blooded! Click here!, to get started";
        speaks.rate =0.95;
        speaks.volume = 1;
        speaks.pitch = 1;
        const voices = speechSynthesis.getVoices();
        speaks.voice = voices[4];
        speaks.lang = 'en-US';
        window.speechSynthesis.speak(speaks);
    }
    window.speechSynthesis.getVoices()
    useEffect(() => {

        welcome();
    },[setSound])
    return(
        <div className='App'>
            <h1>Converter.JS</h1>
            <p>Converterjs , This is a Web app develope in reactjs. It converts some Document formats and comprees the image</p>
            
            <Link style={{textDecoration:'none', margin:"8px"}} to='/cards'><Button variant='contained' color='primary' style={{marginBottom:"7px"}}><ArrowForwardIosIcon/>Get Started</Button></Link>
            <Footer/>
        </div>
    )
}
export default Content;