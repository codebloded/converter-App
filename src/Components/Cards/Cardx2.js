import React from 'react';

import {
    Container,
    Typography,
    Button,
    Grid
} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Cardx2() {

    return (
        <React.Fragment>
            <div className="App card">
                <Grid md={6} lg={12} sm={6} container spacing={2} >
                    <Grid item xs={12} md={6}>

                        <Container className='App'>

                            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center', margin: '12px' }}>
                                Image Compression
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               This inputs a image (png,jpg,jpeg) and then compress the size of the image ,you have to choose a image form the local storage and the hit Compress, it will take sometime to compress and then it will availabe you to download the compressed Image.
                            </Typography>
                        </Container>
                        <div className='buttons'>
                            <Link  to="/cards/pdftoword" style={{textDecoration:'none'}} ><Button variant='contained' color='primary'>try it</Button></Link>
                        </div>
                    
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default Cardx2;