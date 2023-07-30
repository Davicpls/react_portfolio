import React, { useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";
import mui from "../src/Components/Icons/mui.png";
/* import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode"; */
import GitHubIcon from "@mui/icons-material/GitHub";
import CircleIcon from "@mui/icons-material/Circle";
import { List, ListItem, IconButton, Paper } from "@mui/material/";
import TabsPanel from "./Components/Tabs/TabPanel";
import TabsPanelPt from "./Components/Tabs/TabPanelPt";
import { useState } from "react";
import bandeirabr from "./Components/Images/bandeirabr.jpeg";
import bandeirauk from "./Components/Images/bandeirauk.jpg";
import octokit from "./Hooks/useOctokit";
import { parseISO, format } from "date-fns";
import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";

function App() {
  const reactDocs = () => {
    window.open("https://react.dev/learn", "_blank");
  };

  const muiDocs = () => {
    window.open("https://mui.com/material-ui/getting-started/", "_blank");
  };

  const yearData = new Date();
  const actualYear = yearData.getFullYear();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gitBox, setGitBox] = useState(null);

  useEffect(() => {
    async function getUserData() {
      setIsLoading(true);
      try {
        const response = await octokit.request(
          "GET /repos/Davicpls/react_portfolio/commits"
        );
        setGitBox(response);
        return response;
      } catch (error) {
        if (error.status === 401) {
          setError("Bad credentials");
        } else {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getUserData();
  }, []);

  const [changeLanguage, setChangeLanguage] = useState("ptbr");

  const handleChangeLanguage = (newValue) => {
    setChangeLanguage(newValue);
  };

  if (isLoading) {
    return <div className="initialLoad">Loading...</div>;
  }
  if (error) {
    return <div className="errorAtLoad">{error}</div>;
  }
  if (!gitBox) {
    return <div>Loading...</div>;
  }
  const data = gitBox["data"].map((rows) => {
    return rows["commit"]["author"]["date"];
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Cabeçalho</Typography>
        </Toolbar>
      </AppBar>

      <Container
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Typography>
          <Box
            sx={{ width: "100%" }}
            display={"flex"}
            justifyContent={"center"}
            gap={"3%"}
          >
            <Box
              sx={{ fontSize: "12px", marginLeft: "50px", marginTop: "50px" }}
              display={"flex"}
              alignItems={"start"}
              justifyContent={"start"}
            >
              <Paper
                elevation={24}
                sx={{ padding: "8px", fontFamily: "Montserrat" }}
              >
                {" "}
                {changeLanguage === "ptbr" ? (
                  <>Últimos 10 commits</>
                ) : (
                  <>10 Last GitHub Commits</>
                )}
                <List>
                  {data.slice(0, 10).map((date, index) => {
                    const parsedDate = parseISO(date);
                    const formattedDate = format(parsedDate, "PPpp");

                    return (
                      <ListItem sx={{ padding: "5px" }} key={index}>
                        <CircleIcon
                          sx={{
                            color: "green",
                            fontSize: "7px",
                            marginRight: "10px",
                          }}
                        />
                        {formattedDate}
                      </ListItem>
                    );
                  })}
                </List>
                <GitHubIcon />
              </Paper>
            </Box>
            <Box
              sx={{
                maxHeight: "300px",
                width: "1px",
                backgroundColor: "black",
                margin: "82px 15px",
                opacity: "30%",
              }}
            ></Box>
            {changeLanguage === "ptbr" ? (
              <TabsPanelPt></TabsPanelPt>
            ) : (
              <TabsPanel></TabsPanel>
            )}
            <Box
              sx={{
                mt: "30px",
                display: "flex",
                flexDirection: "column",
                justifyItems: "start",
                alignItems: "start",
                width: "10%",
                gap: "30px",
              }}
            ></Box>
          </Box>
        </Typography>
      </Container>

      {/* Footer */}

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 3,
          mt: "auto",
          backgroundColor: "black",
        }}
      >
        <Typography
          sx={{ fontFamily: "Montserrat", fontSize: "12px", color: "white" }}
        >
          {changeLanguage === "ptbr" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1%",
              }}
            >
              <Box>©</Box>
              <Box>{actualYear}</Box>
              <Box>Davi Coelho — Todos os direitos reservados.</Box>
              <Box>|</Box>
              <Box>Feito com React</Box>
              <IconButton sx={{ padding: 0 }} onClick={reactDocs}>
                <img src={logo} className="App-logo" alt="logo" />
              </IconButton>
              <Box>& MUI</Box>
              <IconButton sx={{ pl: "5px", pr: "5px" }} onClick={muiDocs}>
                <img src={mui} alt="mui" />
              </IconButton>
              <Box>libs</Box>
              <Box>|</Box>
              <Box>v1</Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>©</Box>
              <Box>{actualYear}</Box>
              <Box>Davi Coelho — All rights reserved.</Box>
              <Box>|</Box>
              <Box>Made with React</Box>
              <IconButton sx={{ padding: 0 }} onClick={reactDocs}>
                <img src={logo} className="App-logo" alt="logo-react" />
              </IconButton>
              <Box>& MUI</Box>
              <IconButton sx={{ pl: "5px", pr: "5px" }} onClick={muiDocs}>
                <img src={mui} alt="mui" />
              </IconButton>
              <Box>libs</Box>
              <Box>|</Box>
              <Box>v1</Box>
            </Box>
          )}
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
