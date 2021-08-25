import React from 'react';
import{Box, Container, Grid, TableBody, TextField} from '@material-ui/core';
import { Table, TableContainer,TableCell, TableRow, TableHead} from '@material-ui/core';
import { Radio, RadioGroup, FormControl, FormLabel,FormControlLabel} from '@material-ui/core';

export const CustomerDetails = () =>{
    const [value, setValue] = React.useState('no');

    const handleChange = (e) => {
    setValue(e.target.value);
  };
    return (
        <Box border={1}>
            <Container>
                <Grid container spacing={3} style={{marginTop:5,marginBottom:5}}>
                    <Grid item xs={6}>
                        <TextField fullWidth label='Name' />
                    </Grid>
                    <Grid item  xs={6}>
                        <TextField fullWidth label='Phone Number' />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label='Email' /> 
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel >WhatsApp Opt-In</FormLabel>
                            <RadioGroup aria-label="gender" name="" value={value} onChange={handleChange}>
                                <FormControlLabel value='yes' control={<Radio />} label="Yes" />
                                <FormControlLabel value='no' control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell>Interaction Order</TableCell>
                                <TableCell>Interaction Time</TableCell>
                                <TableCell>Disposition</TableCell>
                                <TableCell>Sub-Disposition</TableCell>
                                <TableCell>Agent Remark</TableCell>
                                <TableCell>Booking Completion Link sent for Booking ID</TableCell>
                                <TableCell>Car Link shared</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Container>
        </Box>
    )
}
