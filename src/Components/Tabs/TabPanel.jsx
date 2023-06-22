import * as React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import CardSocials from '../Cards/CardSocials';
import CardAbout from '../Cards/CardAbout';
import CardSkills from '../Cards/CardSkills';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
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

TabPanel.propTypes = {
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

export default function TabsPanel() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper'}}>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab sx={{width:'400px'}} label="Socials" {...a11yProps(0)} />
          <Tab sx={{width:'400px'}} label="Skills" {...a11yProps(1)} />
          <Tab sx={{width:'400px'}} label="About" {...a11yProps(2)} />
        </Tabs>
        
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Box display={'flex'} justifyContent={'start'}>
        <CardSocials>

        </CardSocials>
        </Box> 
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Box display={'flex'} justifyContent={'center'}>
        <CardSkills>

        </CardSkills>
        </Box> 
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Box display={'flex'} justifyContent={'end'}>
        <CardAbout>

        </CardAbout>
        </Box> 
        </TabPanel>
 
    </Box>
  );
}