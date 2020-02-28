import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';




import { blue } from '@material-ui/core/colors';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';




const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
  
  }));

  function HomeIcon(props) {
    return (
      <MovieCreationIcon {...props}>
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />  
        
          </MovieCreationIcon>
    );
  }
  
 


  export default function ToolBar() {

    const classes = useStyles();
    return(
        <div className={classes.root}>
          
   
        
      <AppBar position="static">
        <Toolbar>

        <HomeIcon style={{  color: blue[500], fontSize: 40  }}  />
          <Button color="inherit">HOME </Button><p>/</p>
          <Button color="inherit">ABOUT </Button><p>/</p>
          <Button color="inherit">PRICING </Button><p>/</p>
          <Button color="inherit">BLOG </Button>
        </Toolbar>
      </AppBar>
    </div>

    )
}

