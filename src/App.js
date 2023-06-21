import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ColorTabs from './Pages/Tabs/Tabs';
import ResponsiveAppBar from './Components/AppBar/NavBar';
import { Divider } from '@mui/material';




function App() {


  return (
    <div className='App-header'>
    <div className='NavBar'>
      Portfolio
    </div>
    <Box>
    <ColorTabs>
      </ColorTabs>
    </Box>
    </div>
  );
}

export default App;
