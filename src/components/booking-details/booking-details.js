import React from 'react';
import{Box, Button, Container, Grid, TextField} from '@material-ui/core'

export const BookingDetails = () =>{
    return (
        <Box border={1}>
            <Container>
                <Grid container spacing={3} style={{marginTop:5,marginBottom:5}}>
                <Grid item xs={6}>
                    <TextField fullWidth label='Car URL' />
                </Grid>
                <Grid item xs={3}>
                    <Button fullWidth
                    variant='contained'
                    color='primary'>
                        Share Car Link
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                    fullWidth
                    variant='contained'
                    color='primary'>
                        Initiate Booking
                    </Button>
                </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
