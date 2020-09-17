import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../App.css'
import { Button } from '@material-ui/core';



function SignUp(){
  
    const styles = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        
    }
    return(
        <React.Fragment>
            <div className="App login">
                <form>
                <div  style={styles}>
                        <TextField id="standard-basic"  label='Full Name' style={{marginBottom:"5px",width:'20vw'}}></TextField>
                        <TextField id="standard-basic"  label='Email' style={{marginBottom:"5px",width:'20vw'}}></TextField>
                        <TextField id="standard-basic" label='password' style={{marginBottom:"5px", width:'20vw'}}></TextField>
                        <Button variant='contained' color="primary"  style={{marginBottom:"7px"}}>Login</Button>
                </div>
                    </form>
            </div>
        </React.Fragment>
    )
}

export default SignUp;