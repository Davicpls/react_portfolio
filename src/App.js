import React, { useEffect } from "react";
import "./App.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Button, List, ListItem, ListItemText, IconButton, Paper } from "@mui/material/";
import TabsPanel from "./Components/Tabs/TabPanel";
import TabsPanelPt from "./Components/Tabs/TabPanelPt";
import { useState } from "react";
import bandeirabr from "./Components/Images/bandeirabr.jpeg";
import bandeirauk from "./Components/Images/bandeirauk.jpg";
import octokit from "./Hooks/useOctokit";
import { parseISO, format } from "date-fns";

function App() {

  const [gitBox, setGitBox] = useState(null)

    useEffect(()=> {
      async function getUserData(){
        const response = await octokit.request("GET /repos/Davicpls/react_portfolio/commits");
        setGitBox(response)
        return response

    }
    getUserData()
  }, [])


  const [changeLanguage, setChangeLanguage] = useState("ptbr");

  const handleChangeLanguage = (newValue) => {
    setChangeLanguage(newValue);
  };

  if (!gitBox){
    return <div>Loading...</div>
  }
  const data = gitBox['data'].map((rows) => {
    return rows['commit']['author']['date']
  })
  return (
    <Box sx={{ width: "1920px" }}>
      <div className="NavBar">
        <Box
          sx={{ width: "39%" }}
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
          {changeLanguage === "ptbr" ? <>Idioma:</> : <>Language:</>}
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
      </div>
      <div className="Middle">
        <Box sx={{ width: "100%" }} display={"flex"} justifyContent={"center"}>
          {changeLanguage === "ptbr" ? (
            <TabsPanelPt></TabsPanelPt>
          ) : (
            <TabsPanel></TabsPanel>
          )}
        </Box>
        <Box sx={{ width: "100%", fontSize: '12px', marginLeft: '50px'}} display={"flex"} alignItems={'start'} justifyContent={"start"}>
          <Paper elevation={24} sx={{padding: '8px', fontFamily: 'Montserrat'}}>Last 10 GitHub Commits
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
      </div>
    </Box>
  );
}

export default App;
