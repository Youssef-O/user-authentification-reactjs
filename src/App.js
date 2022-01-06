import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  var theme = createTheme({
    palatte: {
      primary: {
        main: '#365A0C'
      }
    },
  })

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact pach="/profile" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
