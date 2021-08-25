import React from 'react';
import { AppBar,Grid,Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import{AccountCircle} from '@material-ui/icons';

export const Header = () => {
    return(
        <AppBar position='static'>
          <Toolbar>
            <Grid item>
                <HomeIcon />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <AccountCircle />
            </Grid>
          </Toolbar>
        </AppBar>
    )
}