import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Button, CardActionArea, CardActions, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1600,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


export default function CardSocialsPt() {

  const linkedinRedirect = () => {
    window.open('https://www.linkedin.com/in/davicpls/', '_blank')
  }

  const gitHubRedirect = () => {
    window.open('https://github.com/Davicpls', '_blank')
  }

  const instagramRedirect = () => {
    window.open('https://www.instagram.com/davicpls/', '_blank')
  }

  const copyEmailToClipBoard = async (e) => {
    try {
      await navigator.clipboard.writeText('davic2stl@outlook.com');
      
      Toast.fire({
        icon: 'success',
        title: 'Email copiado!'
      });
    } catch (err) {
      Toast.fire({
        icon: 'error',
        title: 'Falha ao copiar o link.'
      });
    }
  };



  return (
    <Card elevation={24} sx={{ width: '28vh', marginLeft: '60px' }}>

        <CardContent>
          <Typography fontFamily={'Montserrat'} gutterBottom variant="h5" component="div">
            Minhas redes
          </Typography>
          <Typography fontFamily={'Montserrat'} variant="body2" color="text.secondary">
          <List>
          <ListItem disablePadding>
            <ListItemButton onClick={linkedinRedirect}>
              <ListItemIcon>
                <LinkedInIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={gitHubRedirect}>
              <ListItemIcon>
                <GitHubIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={copyEmailToClipBoard}>
              <ListItemIcon>
              <EmailIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={instagramRedirect}>
              <ListItemIcon>
              <InstagramIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Instagram" />
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