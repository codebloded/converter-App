import React from 'react';

import {
    Container,
    Typography,
    Button,
    Grid
} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Cardx1() {

    return (
        <React.Fragment>
            <div className="App card">
                <Grid md={6} lg={12} sm={6} container spacing={2} >
                    <Grid item xs={12} md={6}>

                        <Container className='App'>

                            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center', margin: '12px' }}>
                                Text And Speech
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This app converts the audio from your microphone into the text ,You have to click on the mic icon there and mic is get starts then speak something ,it will automatically convert the voice into the text. 
                            </Typography>
                        </Container>
                        

                        <div className='buttons '>
                            <Link  to="/cards/texttospeech" style={{textDecoration:'none'}} ><Button variant='contained' color='primary'>try it</Button></Link>
                        </div>
                                   
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default Cardx1;