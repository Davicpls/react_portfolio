import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  List,
  ListItem,
  Collapse,
  ListItemIcon,
  IconButton
} from "@mui/material";
import { useState } from 'react'

export default function CardAbout() {

  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <Card elevation={24} sx={{ width: "28vh", marginRight: "60px" }}>
      <CardContent sx={{paddingBottom: '0px'}}>
        <Typography fontFamily={"Montserrat"} variant="h5" component="div">
          About me
        </Typography>
        <Typography
          fontFamily={"Montserrat"}
          variant="body2"
          color="text.secondary"
        >
          <List>
            <ListItem sx={{ padding: "5px" }}>My name is Davi Coelho and i have 23 years old.</ListItem>
            <ListItem sx={{ padding: "5px" }}>Started programming with Python in 2022.</ListItem>
            <ListItem sx={{ padding: "5px" }}>Pursuing Computer Science degree at PUC-MG University.</ListItem>
            <ListItem sx={{ padding: "5px" }}>Knowledgeable in Javascript, HTML, CSS and C#.</ListItem>
            <ListItem sx={{ padding: "5px" }}>Interning at BTG Pactual, working with technologies such as</ListItem>
            <Collapse in={showMore}>
            <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - Javascript, React.js
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - Python, FastAPI
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - PostgreSQL, Docker,
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - Devops, Kubernetes,
        </List>
      </Collapse>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemIcon>
            </ListItemIcon>
           - AWS services (S3, CloudFormation, DynamoDB)
        </List>
      </Collapse>
            <ListItem sx={{ padding: "5px", pb: '0px' }}>Experience in developing, deploying, and managing complex systems and cloud infrastructure.</ListItem>
            </Collapse>
          </List>
        </Typography>
      </CardContent>
      <IconButton sx={{fontFamily: 'Montserrat', fontSize: '12px'}} onClick={handleShowMore}>
            {!showMore ? <KeyboardArrowDownIcon color='primary'/>: <KeyboardArrowUpIcon color="primary"/>}
            {!showMore ? 'Show more' : 'Show less'}
            </IconButton>
    </Card>
  );
}
