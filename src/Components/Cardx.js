import React from 'react';
import '../App.css'
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions, Grid
} from '@material-ui/core';


function Cardx() {
    return (
        <React.Fragment>
            <div className="App">
                <Grid md={12} container spacing={2} >
                    <Grid item xs={12}  md={4}>
                        <Card >

                            <CardActionArea>
                                <CardMedia  style={{maxWidth:'245px'}} />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='h2'>
                                        Card-1
                            </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Hey this is card 1 and thhis is gonna be more interactive furthur
                                        Hey this is card 1 and thhis is gonna be more interactive furthur
                                        Hey this is card 1 and thhis is gonna be more interactive furthur
                                        Hey this is card 1 and thhis is gonna be more interactive furthur
                                        Hey this is card 1 and thhis is gonna be more interactive furthur
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant='contained' color='secondary'>Card1</Button>
                                <Button variant='contained' color='secondary'>Card2</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default Cardx;