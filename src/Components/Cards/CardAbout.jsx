import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  List,
  ListItem,
  Collapse,
  ListItemIcon
} from "@mui/material";

export default function CardAbout() {
  return (
    <Card elevation={24} sx={{ width: "28vh", marginRight: "60px" }}>
      <CardContent>
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
            <ListItem sx={{ padding: "5px" }}>Knowledgeable in Javascript, HTML, and CSS and C#.</ListItem>
            <ListItem sx={{ padding: "5px" }}>Interning at BTG Pactual, working with technologies such as</ListItem>
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
            <ListItem sx={{ padding: "5px" }}>Experience in developing, deploying, and managing complex systems and cloud infrastructure.</ListItem>
          </List>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
