import React from 'react';
import './App.css';
import { Box, Button, Divider } from '@mui/material/';
import TabsPanel from './Components/Tabs/TabPanel';
import TabsPanelPt from './Components/Tabs/TabPanelPt';
import { useState } from 'react'
import bandeirabr from './Components/Images/bandeirabr.jpeg'
import bandeirauk from './Components/Images/bandeirauk.jpg'




function App() {


const [changeLanguage, setChangeLanguage] = useState('ptbr')


const handleChangeLanguage = (newValue) => {
    setChangeLanguage(newValue)

}



  return (
    <div className='App-header'>
      <div className='NavBar'>
        <Box sx={{width:'60%'}} display={'flex'} justifyContent={'end'} alignItems={'center'}>
          Portfolio
        </Box>
        
          <Box sx={{width:'50%', fontSize:'18px'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          
          {changeLanguage === 'ptbr' ? <>Idioma:</> : <>Language:</>}
            <Box  display={'flex'} alignItems={'center'}>
            <Button onClick={() => handleChangeLanguage('ptbr')} sx={{padding:'1px'}} >
            <img width={'80%'} height={'25px'} src={bandeirabr} alt="br_flag" className='flagImgs'></img>
            </Button>
            <Button onClick={() => handleChangeLanguage('en')} sx={{padding:'1px'}}>
            <img width={'80%'} height={'25px'} src={bandeirauk} alt="uk_flag" className='flagImgs'></img>
            </Button>
            </Box>
          </Box>
      </div>

      <Box width={'100%'}><Divider 
      sx={{color:'white'}}>
      </Divider>

      </Box>
        <Box>
        {changeLanguage === 'ptbr' ?
        <TabsPanelPt>
        </TabsPanelPt>
          :
          <TabsPanel>
          </TabsPanel>
          }
        </Box>
    </div>
  );
}

export default App;
