import React,{useEffect} from 'react';
import './App.css';
import Main from './Components/MainComponent';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import {BrowserRouter , Route} from 'react-router-dom';
import ShowCards from './Components/ShowCards';
import ImageToPdf from './Components/ImageToPdf';
import TextToSpeech from './Components/TxtSpeech';
import ImageCompression from './Components/ImageCompression';
import Content from './Components/Content';
import UnderDev from './Components/Underdev';




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Main}/>
        <Route exact path="/" component={Content}/>
       
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/cards' component={ShowCards}/>
        <Route exact path='/cards/imgconvtr' component={ImageToPdf}/>
        <Route exact path="/cards/texttospeech" component={TextToSpeech}/>
        <Route exact path="/cards/pdftoword" component={ImageCompression}/>
        <Route exact path="/cards/underdev" component={UnderDev}/>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
