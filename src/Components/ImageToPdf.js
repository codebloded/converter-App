import React,{useState} from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import html2Canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ImageToPdf (){
    
    const generatePdf =()=>{
        let canvasx = document.getElementById('canv')
        html2Canvas(canvasx)
        .then((canvas)=>{
            const imgFile= canvas.toDataURL('image/jpeg');
            
            const doc = new jsPDF('landscape');
            doc.addImage(imgFile,'PNG',0,20, 150,0);
            
            doc.save('smaple.pdf');
           
        })
    }
    const actionPDF = (e)=>{
        let canvas = document.getElementById('canv')
        const ctx = canvas.getContext('2d');
        console.log(e)
        const reader = new FileReader();
        reader.onload = (e)=>{
            let image = new Image();
            image.onload = ()=>{
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image , 0 , 0);
            }
            image.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])

    }
    return (
        <React.Fragment>
            <div  className="App card-layout">
                <Container maxWidth="md" className="App card">
                <h1>Image to Pdf</h1>
                <input type='file'id="imgxx" onChange={actionPDF} placeholder="choose"/>
                <div className='card-layout'>
                <Button variant='contained' color='primary'onClick={generatePdf} style={{marginBottom:"7px"}}>Generate</Button>
                </div>
                </Container>
            </div>
            <canvas id="canv" style={{height:"300px" ,width:"300px"}}></canvas>

            <div className="card-layout">

            <Link style={{textDecoration:'none', margin:"8px"}} to='/'><Button variant='contained' color='primary' style={{marginBottom:"7px"}}>Home</Button></Link>
            <Link style={{textDecoration:'none'}} to='/cards'><Button variant='contained' color='primary' style={{marginBottom:"7px"}}>Back</Button></Link>
            </div>
        </React.Fragment>
    )
}
export default ImageToPdf;