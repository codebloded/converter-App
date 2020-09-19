import React from 'react';

import {
    Container,
    Typography,
    Button,
    Grid
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Cardx3() {

    return (
        <React.Fragment>
            <div className="App card">
                <Grid md={6} lg={12} sm={6} container spacing={2} >
                    <Grid item xs={12} md={6}>

                        <Container className='App'>

                            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center', margin: '12px' }}>
                                Word To Pdf | PDF to word
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               This is under-development , i am working on this if you have any sugesstion and want to contribute  then you can contact me on my social media handles. 
                            </Typography>
                        </Container>
                        <div className='buttons'>
                            <Link  to="/cards/underdev" style={{textDecoration:'none'}} ><Button variant='contained' color='primary'>Try it</Button></Link>
                        </div>

                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default Cardx3;