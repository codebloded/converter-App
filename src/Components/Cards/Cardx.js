import React from 'react';

import {
    Container,
    Typography,
    Button,
    Grid
} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Cardx() {

    return (
        <React.Fragment>
            <div className="App card">
                <Grid items md={6} lg={12} sm={6} container spacing={2} >
                    <Grid item xs={12} md={6}>

                        <Container className='App'>

                            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center', margin: '12px' }}>
                                Image To PDF
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               This converts the .JPG and .PNG images into the pdf fromat . You have to choose the file from the local storage and then hit the generate button below ,then automatically the PDF is download on your system.
                            </Typography>
                        </Container>
                        <div className='buttons'>
                            <Link  to="/cards/imgconvtr" style={{textDecoration:'none'}} ><Button variant='contained' color='primary'>try it</Button></Link>
                        </div>
                    
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default Cardx;