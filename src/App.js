import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './userContext';
import { useState } from 'react';

function App() {
  var theme = createTheme({
    palatte: {
      primary: {
        main: '#365A0C'
      }
    },
  })

  const [userName, setUserName] = useState("");
  const [authorized, setAuthorized] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{userName, setUserName, authorized, setAuthorized}}>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact pach="/profile" component={Home} />
          </Switch>
        </UserContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
