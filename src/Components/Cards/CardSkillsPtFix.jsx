import * as React from 'react';
import { useState } from 'react'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, Collapse, ListItemIcon, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import python_icon from '../Icons/python_icon.png';
import javaScript from '../Icons/javaScript.png';
import CSharp from '../Icons/CSharp.png';
import docker from '../Icons/docker.png';
import SQL from '../Icons/SQL.png';
import kubernetes from '../Icons/kubernetes.png';
import AWS from '../Icons/AWS.png';
import Azure from '../Icons/Azure.png';
import gitflow from '../Icons/gitflow.png';


export default function CardSkillsPt() {

  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <Card elevation={24} sx={{ width: '28vh'}}>
        <CardContent sx={{paddingBottom: '0px'}}>
        <Typography fontFamily={'Montserrat'} gutterBottom variant="h5" component="div">
            Habilidades
        </Typography>
        <Typography fontFamily={'Montserrat'} variant="body2" color="text.secondary">
        <List >
          <ListItem  sx={{padding: '3px'}}>      
          <Box sx={{mr: '3px'}}>  
        <img alt='python' src={python_icon} />
        </Box>  Python
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - FastAPI
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - Pandas
        </List>
      </Collapse>
      <ListItem  sx={{padding: '3px'}}>      
      <Box sx={{mr: '3px'}}>  
        <img alt='js' src={javaScript} />
        </Box>  JavaScript
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - React.js
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - Node.js
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - Express.js
        </List>
      </Collapse>
      <ListItem  sx={{padding: '3px'}}>      
      <Box sx={{mr: '3px'}}>  
        <img alt='c#' src={CSharp} />
        </Box>  C#
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - .Net
        </List>
        <ListItem  sx={{padding: '3px'}}> 
        <Box sx={{mr: '3px', my: '3%'}}>  
        <img alt='gitflow' src={gitflow} />
        </Box> Git / GitFlow
      </ListItem>
      </Collapse>
      <Collapse in={showMore}>
      <ListItem  sx={{padding: '3px'}}> 
        <Box sx={{mr: '3px'}}>  
        <img alt='sql' src={SQL} />
        </Box> SQL
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - PostgreSQL
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - SQL Server
        </List>
      </Collapse>
      <ListItem  sx={{padding: '3px'}}> 
        <Box sx={{mr: '3px'}}>  
        <img alt='docker' src={docker} />
        </Box> Docker
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - WSL
        </List>
      </Collapse>
      <ListItem  sx={{padding: '3px'}}> 
        <Box sx={{mr: '3px'}}>  
        <img alt='kubernetes' src={kubernetes} />
        </Box> Kubernetes
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - Rancher
        </List>
      </Collapse>
      <ListItem  sx={{padding: '3px'}}> 
        <Box sx={{mr: '3px'}}>  
        <img alt='aws' src={AWS} />
        </Box> AWS
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - DynamoDB
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - S3 (Bucket)
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - CloudFormation
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - CloudWatch
        </List>
      </Collapse>
      <ListItem  sx={{padding: '3px'}}> 
        <Box sx={{mr: '3px'}}>  
        <img alt='azure' src={Azure} />
        </Box> Azure
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - DevOps
        </List>
      </Collapse>
      
      </Collapse>
      </List>
      </Typography>
        </CardContent>
        <IconButton sx={{fontFamily: 'Montserrat', fontSize: '12px'}} onClick={handleShowMore}>
        {!showMore ? <KeyboardArrowDownIcon color='primary'/> : <KeyboardArrowUpIcon color='primary'/>}
          {!showMore ? 'mostrar mais' : 'mostrar menos'}
        </IconButton>
    </Card>
  );
}