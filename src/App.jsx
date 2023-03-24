import { useState } from "react";
import "./App.css";
import BasicButtons from "./components/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#EB5757",
      },
      secondary: {
        main: "#000",
      },
    },
  });

  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <ThemeProvider theme={theme}>
        <BasicButtons variant={"text"} color="primary" />
        <BasicButtons variant={"contained"} color="primary" />
        <BasicButtons variant={"contained"} color="secondary" />
        <BasicButtons variant={"text"} color="secondary" />
      </ThemeProvider>
    </div>
  );
}

export default App;
