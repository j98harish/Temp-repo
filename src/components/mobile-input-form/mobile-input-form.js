import React from 'react';
import { Box,Grid,TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const MobileInputForm = () =>{
    const useStyles = makeStyles((theme) =>({
        textField:{
          width: '300px',
        },
        button:{
            textDecoration:'none',
            color:'#fff',
          marginLeft: '25px',
          height: '50px',
          width:'200px',
        }
      }))
    const classes = useStyles();
    return(
        <Box m={4} >
          <Grid>
            <TextField className={classes.textField} label='Phone Number' variant='outlined' type='number' maxRows='10'></TextField>
            <Button className={classes.button} variant='contained' color='primary' size='large'>Submit</Button>
          </Grid>
        </Box>
    )
}
