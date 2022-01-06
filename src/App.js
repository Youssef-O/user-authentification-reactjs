import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';

function App() {
  var theme = createTheme({
    palatte: {
      primary: {
        main: '#365A0C'
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {/* <SignIn />  */}
      {/* <SignUp />  */}
      <Home />
    </ThemeProvider>
  );
}

export default App;
