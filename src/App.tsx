import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { theme } from "./themes/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
