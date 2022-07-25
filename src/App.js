import './App.css';
import Navigation from "./Components/Navigation";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

//Declare theme across the application. This is the highest level file in the application
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#002B5C",
        },
        secondary: {
            main: "#E31837"
        },
    },
});


function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <Navigation theme={theme}/>
      </MuiThemeProvider>
  );
}

export default App;
