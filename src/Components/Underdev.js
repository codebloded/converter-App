import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

function UnderDev(){

    useEffect(()=>{
        intro();
    },)
    function intro (){
        const speaks = new window.SpeechSynthesisUtterance();
        speaks.text = "Sorry this Component is under development, Adding new functionality soon! and in this app, there are lots of bugs and errors ,that have you noticed! , please report  them! If you want to give some suggestions and want to contribute you can contact me.";
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
            <h3>If you want to give some suggestions and want to contribute you can conatct me on my social handles below:)</h3>
            <div className='card-layout'>

            <IconButton variant="primary" color="inherit"  >
                <a href="https://www.instagram.com/_its_ronnny_____/" ><InstagramIcon  style={{ fontSize: 50}}/></a>
            </IconButton>
            <IconButton variant="primary" color="inherit"  >
                <a href="https://github.com/codebloded"><GitHubIcon style={{ fontSize: 50}}/></a>
              
            </IconButton>
            <IconButton variant="primary" color="inherit"  >
                <a href="https://twitter.com/rohanxRajput"><TwitterIcon style={{ fontSize: 50}}/></a>
            </IconButton>
            </div>
            
            <Link style={{textDecoration:'none', margin:"8px"}} to='/'><Button variant='contained' color='primary' style={{marginTop:"7px"}}>Home</Button></Link>
            <Link style={{textDecoration:'none'}} to='/cards'><Button variant='contained' color='primary' style={{marginTop:"7px"}}>Back</Button></Link>
        </div>
    )
}
export default UnderDev;