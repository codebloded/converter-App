import React from 'react';
import './App.css';
import Main from './Components/MainComponent';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import {BrowserRouter , Route} from 'react-router-dom';
import ShowCards from './Components/ShowCards';
import ImageToPdf from './Components/ImageToPdf';
import TextToSpeech from './Components/TxtSpeech';
import PdfToWord from './Components/PdfToWord';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/cards' component={ShowCards}/>
        <Route exact path='/cards/imgconvtr' component={ImageToPdf}/>
        <Route exact path="/cards/texttospeech" component={TextToSpeech}/>
        <Route exact path="/cards/pdftoword" component={PdfToWord}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
