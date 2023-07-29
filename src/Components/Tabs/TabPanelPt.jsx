import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import CardSocialsPt from '../Cards/CardSocialsPt';
import CardAboutPt from '../Cards/CardAboutPt';
import CardSkillsPtFix from '../Cards/CardSkillsPtFix'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react'



function TabPanelPt(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanelPt.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabsPanelPt() {
  const theme = useTheme();
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (

    <Box sx={{width:'70%',  marginRight: '150px'}}>
    
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: "#912f40" } }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab sx={{width:'31%'}} label="Redes Sociais" {...a11yProps(0)} />
          <Tab sx={{width:'31%'}} label="Habilidades" {...a11yProps(1)} />
          <Tab sx={{width:'31%'}} label="Sobre" {...a11yProps(2)} />
        </Tabs>
        <TabPanelPt value={value} index={0} dir={theme.direction}>
        <Box display={'flex'} justifyContent={'start'}>
        <CardSocialsPt>

        </CardSocialsPt>
        </Box> 
        </TabPanelPt>
        <TabPanelPt value={value} index={1} dir={theme.direction}>
        <Box display={'flex'} justifyContent={'center'}>
          <CardSkillsPtFix>
          </CardSkillsPtFix>
        </Box> 
        </TabPanelPt>
        <TabPanelPt value={value} index={2} dir={theme.direction}>

        <Box display={'flex'} justifyContent={'end'}>
      
        <CardAboutPt>
        </CardAboutPt>
        </Box>
 
        </TabPanelPt>
 
    </Box>
    
  );
}