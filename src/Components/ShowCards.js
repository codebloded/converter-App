import React from 'react';
import Cardx from './Cardx';
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core';


function ShowCards(){
  
    return(
        <React.Fragment>
        <div  className="card-layout" >
            <Container maxWidth='lg'>


            <Grid item container lg={12} spacing={4}>
                <Grid item xs={12} lg={6}>
                    <Cardx/>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <Cardx/>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <Cardx/>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <Cardx/>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <Cardx/>
                </Grid>
                
            </Grid>
            </Container>
        </div>

         
        </React.Fragment>
    )
}
export default ShowCards;