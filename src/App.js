import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'

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
      <SignUp /> 
    </ThemeProvider>
  );
}

export default App;
