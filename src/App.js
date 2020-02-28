import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import ToolBar from './components/ToolBar.js';
import MediaCard from './components/MediaCard.js'
import MediaControlCard from './components/MediaControlCard.js'






function App() {
  return (
    
    <div className="App" >
 
       
      <Grid container spacing={3} >
        <Grid item xs={12}> 

        <div >
        

        <ToolBar/>
        </div>
        </Grid>

        <Grid item xs={4}> <div> 
      <MediaCard/>
      
      
        </div>
        </Grid>
        <Grid item xs={8}> 
        <div>
           <MediaControlCard/>
        </div>
        </Grid>
        </Grid>
    
    </div>
  );
}


export default App;
