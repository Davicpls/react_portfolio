import React from "react";
import "./App.css";
import { Box, Button, Divider } from "@mui/material/";
import TabsPanel from "./Components/Tabs/TabPanel";
import TabsPanelPt from "./Components/Tabs/TabPanelPt";
import { useState } from "react";
import bandeirabr from "./Components/Images/bandeirabr.jpeg";
import bandeirauk from "./Components/Images/bandeirauk.jpg";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: process.env.REACT_APP_GIT_TOKEN
})




function App() {
  

  octokit.request('GET /repos/Davicpls/react_portfolio/actions/secrets/API_SECRETS', {
    owner: 'Davicpls',
    repo: 'react_portfolio',
    secret_name: 'API_SECRETS',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then(response => {
      console.log(response)
    })



  const [changeLanguage, setChangeLanguage] = useState("ptbr");

  const handleChangeLanguage = (newValue) => {
    setChangeLanguage(newValue);
  };

  return (
    <>
      <Box
        sx={{
          height: '937px',
          width: "1920px",
          maxWidth: "1920px",
          marginLeft: "auto",
          marginRight: "auto",
          '@media (max-width:930px)': {
            width: '1500px',
            height: '850px'
          },
          '@media (max-width:490px)': {
            width: '750px',
            height: '1920px'
          },
        }}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        
      >
        <div className="NavBar">
          <Box display={"flex"} sx={{width:'52%'}} justifyContent={'end'}>Portfolio</Box>
          <Box sx={{ fontSize: "18px", width:'33%' }} display={"flex"} alignItems={"center"} justifyContent={'end'}>
            {changeLanguage === "ptbr" ? <>Idioma:</> : <>Language:</>}
            <Box>
              <Button
                onClick={() => handleChangeLanguage("ptbr")}
                
              >
                <img
                  width={"80%"}
                  height={"25px"}
                  src={bandeirabr}
                  alt="br_flag"
                  className="flagImgs"
                ></img>
              </Button>
              <Button
                onClick={() => handleChangeLanguage("en")}
                
              >
                <img
                  width={"80%"}
                  height={"25px"}
                  src={bandeirauk}
                  alt="uk_flag"
                  className="flagImgs"
                ></img>
              </Button>
            </Box>
          </Box>
          <Divider sx={{ color: "black" }}></Divider>
        </div>
        <div className="Body">
          <Box sx={{width: '100%'}}
               display={'flex'}
               justifyContent={'center'}>
            {changeLanguage === "ptbr" ? (
              <TabsPanelPt></TabsPanelPt>
            ) : (
              <TabsPanel></TabsPanel>
            )}
          </Box>
        </div>
      </Box>
    </>
  );
}

export default App;
