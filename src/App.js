import React, { useEffect } from "react";
import "./App.css";
import logo from './logo.svg'
import mui from '../src/Components/Icons/mui.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, List, ListItem, IconButton, Paper } from "@mui/material/";
import TabsPanel from "./Components/Tabs/TabPanel";
import TabsPanelPt from "./Components/Tabs/TabPanelPt";
import { useState } from "react";
import bandeirabr from "./Components/Images/bandeirabr.jpeg";
import bandeirauk from "./Components/Images/bandeirauk.jpg";
import octokit from "./Hooks/useOctokit";
import { parseISO, format } from "date-fns";

function App() {

  const reactDocs = () => {
    window.open('https://react.dev/learn', '_blank')
  }

  const muiDocs = () => {
    window.open('https://mui.com/material-ui/getting-started/', '_blank')
  }

  const yearData = new Date();
  const actualYear = yearData.getFullYear();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gitBox, setGitBox] = useState(null)

    useEffect(()=> {
      async function getUserData(){
        setIsLoading(true)
        try {
        const response = await octokit.request("GET /repos/Davicpls/react_portfolio/commits");
        setGitBox(response)
        return response
        }
        catch (error) {
          if (error.status === 401) {
            setError('Bad credentials');
          }
          else {
            setError(error.message);
          }
        }
        finally {
          setIsLoading(false)
        }

    }
    getUserData()
  }, [])


  const [changeLanguage, setChangeLanguage] = useState("ptbr");

  const handleChangeLanguage = (newValue) => {
    setChangeLanguage(newValue);
  };
  
  if (isLoading) {
    return <div className="initialLoad">Loading...</div> 
  }
  if (error) {
    return <div className="errorAtLoad">{error}</div>
  }
  if (!gitBox){
    return <div>Loading...</div>
  }
  const data = gitBox['data'].map((rows) => {
    return rows['commit']['author']['date']
  })
  return (
    <Box sx={{ width: "1920px" }}>
      <Paper sx={{mb: '10px'}} elevation={5}>
      <Box className="NavBar">
        <Box
          sx={{ width: "39%", marginRight: '30px' }}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          Portfolio
        </Box>

        <Box
          sx={{ width: "30%", fontSize: "18px" }}
          justifyContent={"end"}
          display={"flex"}
          alignItems={"center"}
        >
          {changeLanguage === "ptbr" ? <>Language:</> : <>Idioma:</>}
          <Box
            sx={{ paddingLeft: "1vh" }}
            display={"flex"}
            alignItems={"center"}
          >
            <IconButton onClick={() => handleChangeLanguage("ptbr")}>
              <img
                width={"80%"}
                height={"25px"}
                src={bandeirabr}
                alt="br_flag"
                className="flagImgs"
              ></img>
            </IconButton>
            <IconButton onClick={() => handleChangeLanguage("en")}>
              <img
                width={"80%"}
                height={"25px"}
                src={bandeirauk}
                alt="uk_flag"
                className="flagImgs"
              ></img>
            </IconButton>
          </Box>
        </Box>
      </Box>
      </Paper>
      <div className="Middle">
        
        <Box sx={{ width: "100%" }} display={"flex"} justifyContent={"center"} gap={'50px'}>
        <Box sx={{fontSize: '12px', marginLeft: '50px', marginTop: '50px'}} display={"flex"} alignItems={'start'} justifyContent={"start"}>
        <Paper elevation={24} sx={{padding: '8px', fontFamily: 'Montserrat'}}> {changeLanguage === 'ptbr' ? <>Últimos 10 commits</> : <>10 Last GitHub Commits</>}
        <List >
      {data.slice(0, 10).map((date, index) => {
        const parsedDate = parseISO(date);
        const formattedDate = format(parsedDate, 'PPpp');

        return (
          <ListItem sx={{padding: '5px'}} key={index}>
            <CircleIcon sx={{color: 'green', fontSize: '7px', marginRight: '10px'}}/>{formattedDate}
          </ListItem>
        );
      })}
      
    </List>
    <GitHubIcon/>
    </Paper>
        </Box>
        <Box sx={{maxHeight: '300px', width: '2px', backgroundColor: '#1A4055', margin: '82px 15px' }}></Box>
          {changeLanguage === "ptbr" ? (
            <TabsPanelPt></TabsPanelPt>
          ) : (
            <TabsPanel></TabsPanel>
          )}
        </Box>
      </div>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '6vh',
        minHeight: '6vh',
        background: '#050C1B linear-gradient(270deg, #050C1B, #1A4055 15%, #1A4055 35%, #050C1B 50%)',
        fontSize: '12px',
        fontFamily: 'Montserrat',
        color: 'white',
        gap: '30px',
        overflow: 'hidden'
                }}>
      {changeLanguage === "ptbr" ?           
      <Box display={'flex'} gap={'8px'} alignItems={'center'}>
        <Box>
        © 
        </Box>
        <Box>
        {actualYear} 
        </Box>
        <Box>
        Davi Coelho — Todos os direitos reservados. 
        </Box>
        <Box>
        |
        </Box>
        <Box>
        Feito com React
        </Box> 
        <IconButton sx={{padding: 0}} onClick={reactDocs}>
        <img src={logo} className="App-logo" alt="logo" />
        </IconButton> 
        <Box>
        & MUI
      </Box>
            <IconButton sx={{padding: 0}} onClick={muiDocs}>
        <img src={mui} alt="mui" />
        </IconButton>
              <Box>
        libs
      </Box>
      </Box>
      : 
      <Box display={'flex'} gap={'8px'} alignItems={'center'}>
        <Box>
        © 
        </Box>
        <Box>
        {actualYear} 
        </Box>
        <Box>
        Davi Coelho — All rights reserved. 
        </Box>
        <Box>
        |
        </Box>
        <Box>
        Made with React
        </Box> 
        <IconButton sx={{padding: 0}} onClick={reactDocs}>
        <img src={logo} className="App-logo" alt="logo-react" />
        </IconButton> 
        <Box>
        & MUI
      </Box>
      <IconButton sx={{padding: 0}} onClick={muiDocs}>
        <img src={mui} alt="mui" />
        </IconButton>
      <Box>
        libs
      </Box>
      </Box>}
      </Box>
    </Box>
  );
}

export default App;
