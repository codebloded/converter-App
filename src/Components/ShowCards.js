import React from 'react';
import Cardx from '../Components/Cards/Cardx';
import Cardx1 from '../Components/Cards/Cardx1';
import Cardx2 from '../Components/Cards/Cardx2';
import Cardx3 from '../Components/Cards/Cardx3';
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
                <Grid item xs={12} lg={6}>
                    <Cardx1/>
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Cardx2/>
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Cardx3/>
                    
                </Grid>
                
            </Grid>
            </Container>
        </div>

         
        </React.Fragment>
    )
}
export default ShowCards;