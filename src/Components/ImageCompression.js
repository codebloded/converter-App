import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import { CardMedia, Container, Grid } from '@material-ui/core';
import GetApp from '@material-ui/icons/GetApp';
import WhatshotIcon from '@material-ui/icons/Whatshot';
function ImageCompression() {
    const [originalLink, setOriginalLink] = useState('https://testersdock.com/wp-content/uploads/2017/09/file-upload-1280x640.png');
    const [compressedLink, setCompressedLink] = useState('https://testersdock.com/wp-content/uploads/2017/09/file-upload-1280x640.png');
    const [orginalImage, setOriginalImage] = useState('');
    const [outputImage, setOutputImage] = useState();
    const [upload, setUpload] = useState(false);
    const [click, setClick] = useState(false);

    const handleChange = (event) => {
        const imageFile = event.target.files[0];
        console.log(imageFile);
        setOriginalLink(
            URL.createObjectURL(imageFile)
        );
        setOriginalImage(imageFile)
        setOutputImage(imageFile.name);
        setUpload(true);
    }
    const clickHandler = () => {
        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 800,
            useWebWorker: true
        }
        if (options.maxSizeMB > orginalImage.size / 1024) {
            alert('Bring a bigger Image');
        }
        let output;

        imageCompression(orginalImage, options)
            .then(imageResponse => {
                output = imageResponse;
                const downloadLink = URL.createObjectURL(output);
                setCompressedLink(downloadLink);
                setClick(true);
                return 1;
            })
        }
    return (
        <React.Fragment>
            <div className="App">
                <h1>Image Compression</h1>
            </div>
            <Grid item container xs={12}>
                <Grid item xs={12} lg={6}>

                    <Container maxWidth='sm' className='App card'>
                        <CardMedia image={originalLink} style={{ height: "250px", width: "auto", border: '2px solid black' }}>
                        </CardMedia>
                        <div className="card-layout" >
                            <input type="file" placeholder="choose" onChange={handleChange} />
                            <Button variant='contained' color='primary' onClick={clickHandler} style={{ marginBottom: "5px" }}><WhatshotIcon/>Compress</Button>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} lg={6} >

                    <Container maxWidth='sm' className='App card'>
                        <CardMedia image={compressedLink} style={{ height: "250px", width: "auto", border: '2px solid black' }}>
                        </CardMedia>
                        <div className="card-layout">
                            <a style={{textDecoration:"none"}} href={compressedLink} download={outputImage}><Button variant='contained' color='primary' style={{ marginBottom: "5px" }}><GetApp/>Download</Button></a>
                        </div>
                    </Container>
                </Grid>

            </Grid>
            <div className="card-layout" >

                <Link style={{ textDecoration: 'none', margin: "8px" }} to='/'><Button variant='contained' color='primary' style={{ marginBottom: "7px" }}>Home</Button></Link>
                <Link style={{ textDecoration: 'none' }} to='/cards'><Button variant='contained' color='primary' style={{ marginBottom: "7px" }}>Back</Button></Link>
            </div>
        </React.Fragment>
    )
}
export default ImageCompression;