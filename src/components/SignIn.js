import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function SignIn() {
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var history = useHistory();

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
        <Box 
            component="form"
        >
            <Button variant="text" sx={styles.signUpButton} onClick={() => history.push("/signup")}>Sign up</Button>
            <Paper elevation={2} sx={styles.container}>
                <Typography variant='h4' sx={styles.signInLabel}>Sign In</Typography>
                <TextField label="Email" variant="standard" color="primary" sx={styles.textField} onChange={(e) => setEmail(e.target.value)} value={email} />
                <TextField label="Password" variant="standard" color="primary" sx={styles.textField} onChange={(e) => setPassword(e.target.value)} value={password}/>
                <Button variant="contained" sx={styles.signInButton} onClick={() => history.push("/profile")}>Sign in</Button>
            </Paper>
        </Box>
    );
}

export default SignIn;