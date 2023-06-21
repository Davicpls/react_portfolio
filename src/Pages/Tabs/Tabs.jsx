import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        
      >
        <Tab sx={{width:'500px'}} value="1" label="Socials" />
        <Tab sx={{width:'500px'}} value="2" label="Skills" />
        <Tab sx={{width:'500px'}} value="3" label="About" />
      </Tabs>
    </Box>
  );
}