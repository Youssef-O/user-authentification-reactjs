import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  var theme = createTheme({
    palatte: {
      primary: {
        main: '#365A0C'
      }
    },
  })

  var styles = {
    signUpButton: {
      position: 'absolute', 
      top: 0, 
      right: 0, 
      margin: '12px 25px 0 0',
      color: '#365A0C'
    },
    
    container: {
      backgroundColor: '#FFFFFF',
      height: '50vh',
      width: '33vw',
      minWidth: '350px',
      margin: '12vh auto 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '25px 0'
    },

    signInLabel: {
      fontWeight: '600'
    },

    textField: {
      width: '70%',
    },

    signInButton: {
      width: '70%', 
      padding: '9px 0', 
      backgroundColor: '#365A0C', 
      '&:hover': {
        backgroundColor: '#538C12'
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Button variant="text" sx={styles.signUpButton}>Sign up</Button>
        <Paper elevation={2} sx={styles.container}>
          <Typography variant='h4' sx={styles.signInLabel}>Sign In</Typography>
          <TextField label="Email" variant="standard" color="primary" sx={styles.textField} />
          <TextField label="Password" variant="standard" color="primary" sx={styles.textField} />
          <Button variant="contained" sx={styles.signInButton}>Sign in</Button>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
