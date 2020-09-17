import React from 'react';
import './App.css';
import Main from './Components/MainComponent';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import {BrowserRouter , Route} from 'react-router-dom';
import ShowCards from './Components/ShowCards';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
        
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/cards' component={ShowCards}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
