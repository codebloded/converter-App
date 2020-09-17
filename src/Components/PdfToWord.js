import React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
function PdftoWord (){
    return (
        <React.Fragment>
            <div className="App">
                <h1>PDF to Word </h1>
            </div>
            <Link style={{textDecoration:'none', margin:"8px"}} to='/'><Button variant='contained' color='primary' style={{marginBottom:"7px"}}>Home</Button></Link>
            <Link style={{textDecoration:'none'}} to='/cards'><Button variant='contained' color='primary' style={{marginBottom:"7px"}}>Back</Button></Link>
        </React.Fragment>
    )
}
export default PdftoWord;