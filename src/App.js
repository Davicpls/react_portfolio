import React from "react";
import "./App.css";
import { Box, Button } from "@mui/material/";
import TabsPanel from "./Components/Tabs/TabPanel";
import TabsPanelPt from "./Components/Tabs/TabPanelPt";
import { useState } from "react";
import bandeirabr from "./Components/Images/bandeirabr.jpeg";
import bandeirauk from "./Components/Images/bandeirauk.jpg";
import octokit from "./Hooks/useOctokit";
import { parseISO } from "date-fns";

function App() {
  async function getUserData() {
    const response = await octokit.request(
      "GET /repos/Davicpls/react_portfolio/commits"
    );
    let multiDateTime = []
      response.data.map(e => {
      multiDateTime.push(e["commit"]["author"]["date"])
      return multiDateTime
    })
    multiDateTime.forEach((date, index, array) => {
        array[index] = parseISO(date)
    })

    return multiDateTime;
  }


  getUserData()
    .then((res) => {
      console.log(res)
    })

    .catch((err) => {
      console.log(err);
    });

  const [changeLanguage, setChangeLanguage] = useState("ptbr");
  const handleChangeLanguage = (newValue) => {
    setChangeLanguage(newValue);
  };

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
            <Button onClick={() => handleChangeLanguage("ptbr")}>
              <img
                width={"80%"}
                height={"25px"}
                src={bandeirabr}
                alt="br_flag"
                className="flagImgs"
              ></img>
            </Button>
            <Button onClick={() => handleChangeLanguage("en")}>
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
      </div>
      <div className="Middle">
        <Box sx={{ width: "100%" }} display={"flex"} justifyContent={"center"}>
          {changeLanguage === "ptbr" ? (
            <TabsPanelPt></TabsPanelPt>
          ) : (
            <TabsPanel></TabsPanel>
          )}
        </Box>
      </div>
    </Box>
  );
}

export default App;
