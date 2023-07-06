import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, List, ListItem, ListItemButton, ListItemIcon, ListItemText  } from '@mui/material';
import crycat from '../Images/crycat.jpeg'


export default function CardSocials() {

  const linkedinRedirect = () => {
    window.location.href = 'https://www.linkedin.com/in/davicpls/'
  }

  return (
    <Card sx={{ maxWidth: '38vh' }}>

        <CardContent>
          <Typography fontFamily={'Montserrat'} gutterBottom variant="h5" component="div">
            My Socials
          </Typography>
          <Typography fontFamily={'Montserrat'} variant="body2" color="text.secondary">
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
 
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
          </Typography>
        </CardContent>

      <CardActions>
      </CardActions>
    </Card>
  );
}