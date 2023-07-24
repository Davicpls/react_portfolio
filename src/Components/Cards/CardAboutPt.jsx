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
          Sobre mim
        </Typography>
        <Typography
          fontFamily={"Montserrat"}
          variant="body2"
          color="text.secondary"
        >
          <List>
            <ListItem sx={{ padding: "5px" }}>Olá, meu nome é Davi Coelho e tenho 23 anos.</ListItem>
            <ListItem sx={{ padding: "5px" }}>Iniciei a programação com Python em 2022.</ListItem>
            <ListItem sx={{ padding: "5px" }}>Cursando a graduação de Sistemas de Informação na Universidade PUC-MG..</ListItem>
            <ListItem sx={{ padding: "5px" }}>Conhecimentos sólidos em Javascript, HTML e CSS e C#.</ListItem>
            <ListItem sx={{ padding: "5px" }}>Estagiando no BTG Pactual, trabalhando com tecnologias como</ListItem>
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
           - Serviços AWS (S3, CloudFormation, DynamoDB)
        </List>
      </Collapse>
            <ListItem sx={{ padding: "5px" }}>Experiência em desenvolvimento, implantação e gestão de sistemas complexos e infraestrutura na nuvem.</ListItem>
          </List>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
